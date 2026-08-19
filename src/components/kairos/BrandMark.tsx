import Image from 'next/image'
import { cn } from '@/utils'
import { church } from '@/content/church'
import kairosLogo from '@/assets/images/kairos-logo.jpg'

type BrandMarkProps = {
  /** `light` renders for placement on cream, `dark` for the royal blue bands. */
  tone?: 'light' | 'dark'
  /** Hides the wordmark, leaving only the emblem. */
  emblemOnly?: boolean
  /** The header lockup is above the fold, so it should not lazy-load. */
  priority?: boolean
  className?: string
}

/**
 * The church's logo: dove, cross and open book over the royal blue field, with
 * the name set beneath it.
 *
 * Because the artwork already carries the wordmark, `emblemOnly` defaults to
 * true and the typographic lockup below is the exception rather than the rule —
 * it is there for any placement where the logo alone is too small to read. The
 * square blue field is part of the artwork, so it is left as supplied rather
 * than keyed out, and it reads on cream, on the blue bands and over the hero
 * photograph alike.
 */
const BrandMark = ({
  tone = 'light',
  emblemOnly = true,
  priority = false,
  className,
}: BrandMarkProps) => {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      {/* Decorative: the wordmark beside it already names the church, and in
          `emblemOnly` mode the name is carried by the screen-reader span. */}
      <Image
        src={kairosLogo}
        alt=""
        aria-hidden="true"
        priority={priority}
        // The artwork is a 2048px square, but it never renders larger than
        // 55px. Declaring 110 (2x the display size) lets the optimizer serve
        // a file measured in single-digit kilobytes instead of the original.
        width={110}
        height={110}
        // 55px: 1.25x the 44px the mark stood at before.
        className="h-[55px] w-auto shrink-0"
      />
      {emblemOnly ? (
        <span className="sr-only">{church.name}</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'text-[0.95rem] font-bold uppercase tracking-[0.14em] sm:text-base',
              tone === 'dark' ? 'text-on-dark' : 'text-primary'
            )}
          >
            Kairos for Christ
          </span>
          <span
            className={cn(
              'mt-1 text-[0.65rem] font-medium uppercase tracking-[0.22em]',
              tone === 'dark' ? 'text-cream-300' : 'text-secondary-600'
            )}
          >
            Christian Fellowship
          </span>
        </span>
      )}
    </span>
  )
}

export default BrandMark
