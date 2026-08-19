'use client'

import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'
import { cn } from '@/utils'

/**
 * Floating "back to top" button for the landing page's long single scroll.
 *
 * It stays hidden until the visitor is a full viewport down — before that the
 * hero is still on screen and the button would only be clutter. The show/hide
 * is a small fade-and-rise on transform and opacity, matching the drawer's
 * compositor-only animation budget, and while hidden the button is taken out
 * of pointer and tab order rather than unmounted, so its appearance never
 * causes layout work.
 */
const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Same rAF-throttled listener pattern as the header: one measurement per
  // frame at most, however fast the scroll events arrive.
  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      setIsVisible(window.scrollY > window.innerHeight)
    }

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToTop = () => {
    // The CSS reduced-motion override does not reach an explicit JS `smooth`,
    // so the preference has to be honoured here as well.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        // Below the header (60) and the mobile drawer (65), so neither is
        // ever obscured. The bottom offset respects the home-indicator safe
        // area on installed/notched phones.
        'fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-[55] inline-flex h-11 w-11 items-center justify-center rounded-pill bg-accent text-navy shadow-lifted transition-[opacity,transform] duration-base hover:bg-accent-600',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      )}
    >
      <LuArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

export default ScrollTopButton
