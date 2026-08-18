'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/utils'

/** Direction the element travels in from. `fade` holds still and only fades. */
type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'

type RevealProps = {
  children: ReactNode
  /**
   * Element to render. Pass `li` inside lists and `figure`/`article` where the
   * markup calls for it — the wrapper must never break the document outline.
   */
  as?:
    | 'div'
    | 'li'
    | 'ul'
    | 'ol'
    | 'article'
    | 'figure'
    | 'section'
    | 'p'
    | 'span'
    | 'h1'
    | 'h2'
    | 'h3'
  variant?: RevealVariant
  /** Milliseconds to hold the transition back, used to stagger grids. */
  delay?: number
  /**
   * Replay the reveal each time the element re-enters the viewport. Off by
   * default: a section that re-animates on every pass reads as restless.
   */
  repeat?: boolean
  className?: string
}

/**
 * Reveals its children as they scroll into view.
 *
 * IntersectionObserver does the watching, so nothing runs on the scroll thread,
 * and the animation itself is pure CSS (see _animations.css). Elements already
 * on screen at load animate immediately — the observer reports them on its
 * first pass — which is what gives the hero its opening.
 *
 * Visitors who prefer reduced motion, and browsers without IntersectionObserver,
 * are shown the finished state straight away rather than a fade they did not ask
 * for or a section that never appears.
 */
const Reveal = ({
  children,
  as = 'div',
  variant = 'up',
  delay = 0,
  repeat = false,
  className,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!repeat) observer.disconnect()
        } else if (repeat) {
          setIsVisible(false)
        }
      },
      // Threshold 0 with the bottom edge pulled in: the reveal starts once the
      // element's top crosses the lower tenth of the viewport, which works the
      // same for a small card and for a section taller than the screen.
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [repeat])

  // Cast so the ref and props typecheck against one concrete element; every tag
  // allowed above takes the same HTML attributes we pass.
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={cn(
        'reveal',
        `reveal-${variant}`,
        isVisible && 'is-visible',
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export default Reveal
