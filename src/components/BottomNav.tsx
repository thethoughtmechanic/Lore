import { LayoutGrid, Shuffle, BookOpen } from 'lucide-react'

export type View = 'feed' | 'explore'

interface Props {
  view: View
  onNavigate: (v: View) => void
  onShuffle: () => void
}

export function BottomNav({ view, onNavigate, onShuffle }: Props) {
  return (
    <nav className="bnav">
      <button
        className={`bnav-item ${view === 'feed' ? 'bnav-item--active' : ''}`}
        onClick={() => onNavigate('feed')}
      >
        <BookOpen size={20} strokeWidth={view === 'feed' ? 2.5 : 1.8} />
        <span>Feed</span>
      </button>

      <button className="bnav-shuffle" onClick={onShuffle}>
        <Shuffle size={18} strokeWidth={2} />
      </button>

      <button
        className={`bnav-item ${view === 'explore' ? 'bnav-item--active' : ''}`}
        onClick={() => onNavigate('explore')}
      >
        <LayoutGrid size={20} strokeWidth={view === 'explore' ? 2.5 : 1.8} />
        <span>Explore</span>
      </button>
    </nav>
  )
}
