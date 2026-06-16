import { useState } from 'react'
import { Bookmark } from 'lucide-react'
import { Story } from '../types'
import { allTags } from '../data/stories'

interface Props {
  stories: Story[]
  savedIds: Set<string>
  onSelectStory: (storyId: string) => void
}

export function ExploreView({ stories, savedIds, onSelectStory }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? stories.filter(s => s.tags.includes(activeTag))
    : stories

  return (
    <div className="explore">
      <div className="explore-header">
        <h2 className="explore-title">Explore</h2>
        <p className="explore-sub">{stories.length} stories</p>
      </div>

      {/* Tag filter */}
      <div className="explore-tags">
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

      {/* Story grid */}
      <div className="explore-grid">
        {filtered.map(story => (
          <button
            key={story.id}
            className="story-card"
            onClick={() => onSelectStory(story.id)}
          >
            <div className="story-card-bar" style={{ background: story.color }} />
            <div className="story-card-body">
              <div className="story-card-top">
                <span
                  className="story-card-company"
                  style={{ color: story.color }}
                >
                  {story.company}
                </span>
                {savedIds.has(story.id) && (
                  <Bookmark size={11} style={{ color: story.color, flexShrink: 0 }} />
                )}
              </div>
              <p className="story-card-title">{story.title}</p>
              <div className="story-card-tags">
                {story.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="story-card-tag">{tag}</span>
                ))}
              </div>
              <div className="story-card-meta">{story.slides.length} slides</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
