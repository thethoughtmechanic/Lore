export type SlideType = 'hook' | 'context' | 'move' | 'outcome' | 'insight'

export interface Slide {
  type: SlideType
  headline: string
  body: string
  stat?: string
  statLabel?: string
}

export interface Story {
  id: string
  title: string
  company: string
  color: string
  tags: string[]
  slides: Slide[]
  addedDate: string
}

export interface FlatSlide {
  story: Story
  slide: Slide
  slideIndex: number
  totalSlides: number
  isFirstSlide: boolean
  globalIndex: number
  storyNumber: number
}
