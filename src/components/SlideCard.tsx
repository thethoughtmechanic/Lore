import { FlatSlide } from '../types'

const TYPE_LABELS: Record<string, string> = {
  hook: 'HOOK',
  context: 'CONTEXT',
  move: 'THE MOVE',
  outcome: 'OUTCOME',
  insight: 'INSIGHT',
}

interface Props {
  flatSlide: FlatSlide
  totalStories: number
}

export function SlideCard({ flatSlide, totalStories }: Props) {
  const { story, slide, slideIndex, totalSlides, isFirstSlide, storyNumber } = flatSlide
  const color = story.color

  return (
    <div
      className="slide flex flex-col h-full px-5 pt-4 pb-6 select-none"
      style={{ '--accent': color } as React.CSSProperties}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <span
            className="text-[11px] font-bold tracking-widest px-2 py-0.5 rounded"
            style={{ color, border: `1px solid ${color}33`, background: `${color}15` }}
          >
            {story.company.toUpperCase()}
          </span>
          {isFirstSlide && (
            <span className="text-[11px] text-white/30 font-medium">
              {storyNumber} / {totalStories}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === slideIndex ? '20px' : '6px',
                background: i === slideIndex ? color : 'rgba(255,255,255,0.18)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Type label */}
      <div
        className="text-[10px] font-bold tracking-[0.2em] mb-3 flex-shrink-0"
        style={{ color: `${color}cc` }}
      >
        {TYPE_LABELS[slide.type]}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center min-h-0">
        {/* Headline */}
        <h2 className="text-[1.45rem] font-bold leading-[1.25] text-white mb-5">
          {slide.headline}
        </h2>

        {/* Stat callout */}
        {slide.stat && (
          <div
            className="mb-5 pl-4 border-l-2"
            style={{ borderColor: color }}
          >
            <div
              className="text-3xl font-black leading-none mb-1"
              style={{ color }}
            >
              {slide.stat}
            </div>
            {slide.statLabel && (
              <div className="text-[12px] text-white/50 leading-snug">
                {slide.statLabel}
              </div>
            )}
          </div>
        )}

        {/* Body text */}
        <p className="text-[0.95rem] leading-[1.65] text-white/75">
          {slide.body}
        </p>
      </div>

      {/* Tags on first slide */}
      {isFirstSlide && (
        <div className="flex flex-wrap gap-1.5 mt-5 flex-shrink-0">
          {story.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full text-white/40"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Insight special treatment */}
      {slide.type === 'insight' && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />
      )}
    </div>
  )
}
