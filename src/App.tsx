import { useState, useRef, useCallback, useEffect } from 'react'
import { Shuffle } from 'lucide-react'
import { stories, allTags } from './data/stories'
import { SlideCard } from './components/SlideCard'
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

export default function App() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = activeTag
    ? stories.filter(s => s.tags.includes(activeTag))
    : stories

  const flatSlides = buildFlatSlides(filtered)

  const storyStartIndices = flatSlides
    .filter(fs => fs.isFirstSlide)
    .map(fs => fs.globalIndex)

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current
    if (!container) return
    const slide = container.children[index] as HTMLElement
    if (slide) slide.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const shuffle = useCallback(() => {
    if (storyStartIndices.length === 0) return
    const randomStory = Math.floor(Math.random() * storyStartIndices.length)
    scrollToIndex(storyStartIndices[randomStory])
  }, [storyStartIndices, scrollToIndex])

  // When tag changes, scroll back to top
  useEffect(() => {
    const container = containerRef.current
    if (container) container.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [activeTag])

  return (
    <div className="app-root">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="app-title">Lore</div>
          <button className="shuffle-btn" onClick={shuffle} title="Shuffle">
            <Shuffle size={16} />
          </button>
        </div>

        {/* Tag filter */}
        <div className="tag-scroll">
          <button
            className={`tag-chip ${activeTag === null ? 'tag-chip--active' : ''}`}
            onClick={() => setActiveTag(null)}
          >
            All
          </button>
          {allTags.map(tag => (
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

      {/* Slide feed */}
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
              />
            </div>
          ))
)}
      </div>
    </div>
  )
}
