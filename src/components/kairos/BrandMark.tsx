import { cn } from '@/utils'
import { church } from '@/content/church'

type BrandMarkProps = {
  /** `light` renders for placement on cream, `dark` for the royal blue bands. */
  tone?: 'light' | 'dark'
  /** Hides the wordmark, leaving only the emblem. */
  emblemOnly?: boolean
  className?: string
}

/**
 * Typographic lockup for Kairos for Christ.
 *
 * The church's printed logo is not in the repository, so this is an original
 * mark in the brand palette rather than a reproduction. Replace `Emblem` with
 * the official artwork when the church supplies an SVG or PNG.
 */
const Emblem = ({ tone }: { tone: 'light' | 'dark' }) => {
  const field = tone === 'dark' ? '#fff9f0' : '#101d83'
  const glow = tone === 'dark' ? '#f29a22' : '#f29a22'

  return (
    <svg
      viewBox="0 0 40 40"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className="h-10 w-10 shrink-0"
    >
      {/* Rays of light behind the cross */}
      <g stroke={glow} strokeWidth="1.6" strokeLinecap="round" opacity="0.9">
        <path d="M20 3.5v3.2" />
        <path d="M9.9 7.6l2 2.4" />
        <path d="M30.1 7.6l-2 2.4" />
      </g>
      {/* Cross */}
      <path
        d="M18.4 9.2h3.2v5.2h4.6v3.2h-4.6v9.6h-3.2v-9.6h-4.6v-3.2h4.6z"
        fill={field}
      />
      {/* Open book */}
      <path
        d="M4.5 28.4c4.6-2.1 9.6-2.1 14.2 0l1.3.6 1.3-.6c4.6-2.1 9.6-2.1 14.2 0v5.9c-4.6-2.1-9.6-2.1-14.2 0l-1.3.6-1.3-.6c-4.6-2.1-9.6-2.1-14.2 0z"
        fill={field}
        opacity="0.92"
      />
      <path
        d="M20 29v5.9"
        stroke={tone === 'dark' ? '#101d83' : '#f3e8da'}
        strokeWidth="1.4"
      />
    </svg>
  )
}

const BrandMark = ({
  tone = 'light',
  emblemOnly = false,
  className,
}: BrandMarkProps) => {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Emblem tone={tone} />
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
