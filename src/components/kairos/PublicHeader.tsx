'use client'

import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { cn } from '@/utils'
import { navItems, VISIT_ANCHOR } from '@/content/navigation'
import BrandMark from './BrandMark'

/**
 * Sticky public header.
 *
 * Sticky is justified here: the landing page is a single long scroll, so the
 * navigation is the only way back to another section without scrolling by hand.
 *
 * Over the hero photograph it carries no background at all and switches to the
 * light-on-dark palette; once the page moves it settles onto solid cream and
 * returns to navy type. It also carries a thin rule showing how far down the
 * page the visitor has read.
 */
const PublicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [readProgress, setReadProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(navItems[0].id)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Solidify the header once the hero starts to leave, and track reading
  // progress. Both read the same scroll position, so they share one listener,
  // and the work is deferred to an animation frame so a fast scroll cannot
  // queue a render per event.
  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      setIsScrolled(window.scrollY > 24)

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      setReadProgress(
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0
      )
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

  // Highlight the section currently in view. IntersectionObserver keeps this
  // off the scroll thread.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0]

        if (visible) setActiveSection(visible.target.id)
      },
      // Bias the band towards the upper third so a heading counts as "active"
      // as soon as it settles under the header.
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    triggerRef.current?.focus()
  }, [])

  // Escape closes the menu, and focus is kept inside it while it is open.
  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a[href], button')?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen, closeMenu])

  const navLinkClass = (id: string) =>
    cn(
      'relative inline-flex items-center rounded-sm px-1 py-2 text-[0.95rem] font-medium transition-colors duration-base',
      isScrolled
        ? 'text-navy/80 hover:text-primary'
        : 'text-cream-100/90 hover:text-on-dark',
      activeSection === id &&
        'font-semibold after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent',
      activeSection === id && (isScrolled ? 'text-primary' : 'text-on-dark')
    )

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[70] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-dark"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[60] border-b transition-colors duration-base',
          isScrolled
            ? 'border-line/70 bg-cream-50/95 shadow-sm backdrop-blur'
            : // Nothing behind it over the hero, so focus rings need the warm
              // accent that `on-dark` supplies.
              'on-dark border-transparent bg-transparent'
        )}
      >
        <div className="container">
          <div className="flex h-[72px] items-center justify-between gap-4">
            <Link
              href="#home"
              aria-label="Kairos for Christ Christian Fellowship, back to top"
              className="rounded-sm"
            >
              <BrandMark tone={isScrolled ? 'light' : 'dark'} priority />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-7">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={
                        activeSection === item.id ? 'true' : undefined
                      }
                      className={navLinkClass(item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={VISIT_ANCHOR}
                className="hidden min-h-[44px] items-center whitespace-nowrap rounded-pill bg-accent px-5 text-sm font-semibold text-navy shadow-sm transition-colors duration-base hover:bg-accent-600 sm:inline-flex"
              >
                Plan Your Visit
              </a>

              <button
                ref={triggerRef}
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className={cn(
                  'inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-base lg:hidden',
                  isScrolled
                    ? 'text-navy hover:bg-cream-200'
                    : 'text-on-dark hover:bg-white/15'
                )}
              >
                <LuMenu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reading progress. Decorative — the same information is in the
            scrollbar — so it is hidden from assistive technology. */}
        <div
          aria-hidden="true"
          className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 bg-accent"
          style={{ '--scroll-progress': readProgress } as CSSProperties}
        />
      </header>

      {/* Mobile navigation */}
      <div
        className={cn(
          // `overflow-hidden` clips the panel while it sits parked off the
          // right edge. Without it the closed drawer widens the page and the
          // whole site can be scrolled sideways on a phone.
          'fixed inset-0 z-[65] overflow-hidden lg:hidden',
          isMenuOpen ? 'visible' : 'invisible'
        )}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-navy/50 transition-opacity duration-base',
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={closeMenu}
        />

        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            'absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col bg-cream-50 shadow-lifted transition-transform duration-base',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
            <BrandMark />
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy transition-colors duration-base hover:bg-cream-200"
            >
              <LuX className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={
                      activeSection === item.id ? 'true' : undefined
                    }
                    className={cn(
                      'flex min-h-[48px] items-center rounded-md px-3 text-base font-medium text-navy transition-colors duration-base hover:bg-cream-200',
                      activeSection === item.id &&
                        'bg-cream-200 font-semibold text-primary'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-line p-5">
            <a
              href={VISIT_ANCHOR}
              onClick={closeMenu}
              className="flex min-h-[48px] w-full items-center justify-center whitespace-nowrap rounded-pill bg-accent px-5 text-base font-semibold text-navy transition-colors duration-base hover:bg-accent-600"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PublicHeader
