import { Bookmark, BookmarkCheck } from 'lucide-react'
import { FlatSlide } from '../types'

const TYPE_META: Record<string, { label: string; prefix?: string }> = {
  hook:    { label: 'HOOK' },
  context: { label: 'CONTEXT' },
  move:    { label: 'THE MOVE', prefix: '▶' },
  outcome: { label: 'OUTCOME' },
  insight: { label: 'KEY INSIGHT', prefix: '✦' },
}

interface Props {
  flatSlide: FlatSlide
  totalStories: number
  isSaved: boolean
  onSave: () => void
}

export function SlideCard({ flatSlide, totalStories, isSaved, onSave }: Props) {
  const { story, slide, slideIndex, totalSlides, isFirstSlide, storyNumber } = flatSlide
  const { color } = story
  const meta = TYPE_META[slide.type]
  const isHook = slide.type === 'hook'
  const isInsight = slide.type === 'insight'
  const isMove = slide.type === 'move'
  const isOutcome = slide.type === 'outcome'

  const colorBg = `${color}18`
  const colorBorder = `${color}35`
  const colorDim = `${color}99`

  return (
    <div
      className="sc-root"
      style={{ '--c': color, '--cb': colorBg, '--cd': colorDim } as React.CSSProperties}
    >
      {/* Subtle hook gradient wash */}
      {isHook && (
        <div
          className="sc-hook-wash"
          style={{ background: `linear-gradient(160deg, ${colorBg} 0%, transparent 50%)` }}
        />
      )}

      {/* ── Top bar ── */}
      <div className="sc-top">
        <span className="sc-badge" style={{ color, background: colorBg, borderColor: colorBorder }}>
          {story.company.toUpperCase()}
        </span>
        <span className="sc-story-num">{storyNumber} / {totalStories}</span>
      </div>

      {/* ── Type label ── */}
      <div className="sc-type" style={{ color: colorDim }}>
        {meta.prefix && <span className="sc-type-prefix">{meta.prefix}</span>}
        {meta.label}
        {isMove && <div className="sc-move-rule" style={{ background: colorBorder }} />}
      </div>

      {/* ── Main content ── */}
      <div className={`sc-content ${isHook ? 'sc-content--hook' : ''}`}>

        {/* Context: decorative slide number */}
        {slide.type === 'context' && (
          <div className="sc-bg-num" style={{ color: `${color}08` }}>
            {String(slideIndex + 1).padStart(2, '0')}
          </div>
        )}

        {/* Headline */}
        {isInsight ? (
          <div
            className="sc-insight-box"
            style={{ background: colorBg, borderColor: colorBorder, borderLeftColor: color }}
          >
            <h2 className="sc-headline sc-headline--insight">{slide.headline}</h2>
          </div>
        ) : (
          <h2 className={`sc-headline ${isHook ? 'sc-headline--hook' : ''} ${isOutcome ? 'sc-headline--outcome' : ''}`}>
            {slide.headline}
          </h2>
        )}

        {/* Outcome: big stat comes right after headline */}
        {isOutcome && slide.stat && (
          <div className="sc-stat sc-stat--hero" style={{ color }}>
            <div className="sc-stat-value sc-stat-value--hero">{slide.stat}</div>
            {slide.statLabel && <div className="sc-stat-label">{slide.statLabel}</div>}
          </div>
        )}

        {/* Hook / Move: stat with left border */}
        {!isOutcome && slide.stat && (
          <div className="sc-stat" style={{ borderLeftColor: color }}>
            <div className="sc-stat-value" style={{ color }}>{slide.stat}</div>
            {slide.statLabel && <div className="sc-stat-label">{slide.statLabel}</div>}
          </div>
        )}

        {/* Body text */}
        <p className="sc-body">{slide.body}</p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="sc-bottom">
        <div className="sc-dots">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className="sc-dot"
              style={{
                background: i === slideIndex ? color : 'rgba(255,255,255,0.12)',
                width: i === slideIndex ? '18px' : '5px',
              }}
            />
          ))}
        </div>

        <div className="sc-bottom-right">
          {isFirstSlide && story.tags.slice(0, 3).map(tag => (
            <span key={tag} className="sc-tag">{tag}</span>
          ))}
          {isInsight && (
            <button
              className="sc-save"
              style={{ color: isSaved ? color : 'rgba(255,255,255,0.35)', borderColor: isSaved ? colorBorder : 'rgba(255,255,255,0.1)' }}
              onClick={onSave}
            >
              {isSaved
                ? <><BookmarkCheck size={13} /> Saved</>
                : <><Bookmark size={13} /> Save</>
              }
            </button>
          )}
        </div>
      </div>

      {/* Insight: story-end accent line */}
      {isInsight && (
        <div className="sc-end-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      )}
    </div>
  )
}
