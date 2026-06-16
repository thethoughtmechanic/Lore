import { useState, useRef, useCallback, useEffect } from 'react'
import { stories } from './data/stories'
import { SlideCard } from './components/SlideCard'
import { BottomNav, View } from './components/BottomNav'
import { ExploreView } from './components/ExploreView'
import { FlatSlide } from './types'

function buildFlatSlides(filteredStories: typeof stories): FlatSlide[] {
  let globalIndex = 0
  return filteredStories.flatMap((story, storyIndex) =>
    story.slides.map((slide, slideIndex) => ({
      story,
      slide,
      slideIndex,
      totalSlides: story.slides.length,
      isFirstSlide: slideIndex === 0,
      globalIndex: globalIndex++,
      storyNumber: storyIndex + 1,
    }))
  )
}

function loadSaved(): Set<string> {
  try {
    const raw = localStorage.getItem('lore-saved')
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
  } catch {
    return new Set()
  }
}

export default function App() {
  const [view, setView] = useState<View>('feed')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [savedIds, setSavedIds] = useState<Set<string>>(loadSaved)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = activeTag
    ? stories.filter(s => s.tags.includes(activeTag))
    : stories

  const flatSlides = buildFlatSlides(filtered)

  const storyStartIndices = flatSlides
    .filter(fs => fs.isFirstSlide)
    .map(fs => fs.globalIndex)

  const scrollToStory = useCallback((storyId: string) => {
    const idx = flatSlides.findIndex(fs => fs.story.id === storyId && fs.isFirstSlide)
    if (idx === -1) return
    const container = containerRef.current
    if (!container) return
    const el = container.children[idx] as HTMLElement
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [flatSlides])

  const shuffle = useCallback(() => {
    if (storyStartIndices.length === 0) return
    const pick = storyStartIndices[Math.floor(Math.random() * storyStartIndices.length)]
    const container = containerRef.current
    if (!container) return
    const el = container.children[pick] as HTMLElement
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [storyStartIndices])

  const handleNavigate = useCallback((v: View) => {
    setView(v)
  }, [])

  const handleSelectStory = useCallback((storyId: string) => {
    setActiveTag(null)
    setView('feed')
    // defer scroll until feed mounts
    setTimeout(() => scrollToStory(storyId), 80)
  }, [scrollToStory])

  const toggleSave = useCallback((storyId: string) => {
    setSavedIds(prev => {
      const next = new Set(prev)
      if (next.has(storyId)) next.delete(storyId)
      else next.add(storyId)
      try { localStorage.setItem('lore-saved', JSON.stringify([...next])) } catch { /* noop */ }
      return next
    })
  }, [])

  // Reset scroll when tag changes
  useEffect(() => {
    const c = containerRef.current
    if (c) c.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [activeTag])

  return (
    <div className="app-root">
      {/* ── Header (Feed view only) ── */}
      {view === 'feed' && (
        <header className="header">
          <div className="header-row">
            <span className="app-title">Lore</span>
            <span className="app-sub">Product Strategy</span>
          </div>
          <div className="tag-scroll">
            <button
              className={`tag-chip ${activeTag === null ? 'tag-chip--active' : ''}`}
              onClick={() => setActiveTag(null)}
            >
              All
            </button>
            {Array.from(new Set(stories.flatMap(s => s.tags))).sort().map(tag => (
              <button
                key={tag}
                className={`tag-chip ${activeTag === tag ? 'tag-chip--active' : ''}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </header>
      )}

      {/* ── Main content ── */}
      <main className="main-content">
        {view === 'feed' ? (
          <div className="slide-container" ref={containerRef}>
            {flatSlides.length === 0 ? (
              <div className="empty-state">
                <p>No stories match this filter.</p>
              </div>
            ) : (
              flatSlides.map((fs, i) => (
                <div
                  key={`${fs.story.id}-${fs.slideIndex}`}
                  className={`slide-wrapper ${fs.isFirstSlide && i > 0 ? 'slide-wrapper--story-start' : ''}`}
                >
                  <SlideCard
                    flatSlide={fs}
                    totalStories={storyStartIndices.length}
                    isSaved={savedIds.has(fs.story.id)}
                    onSave={() => toggleSave(fs.story.id)}
                  />
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="explore-container">
            <ExploreView
              stories={stories}
              savedIds={savedIds}
              onSelectStory={handleSelectStory}
            />
          </div>
        )}
      </main>

      {/* ── Bottom Nav ── */}
      <BottomNav view={view} onNavigate={handleNavigate} onShuffle={shuffle} />
    </div>
  )
}
