import Image from 'next/image'
import { cn } from '@/utils'
import { photos, type PhotoSlot } from '@/assets/images/kairos/photos'
import BrandMark from './BrandMark'

const ratioClass = {
  '4/5': 'aspect-[4/5]',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '16/9': 'aspect-video',
} as const

/** Same ratios, applied from the `lg` breakpoint up. */
const lgRatioClass = {
  '4/5': 'lg:aspect-[4/5]',
  '4/3': 'lg:aspect-[4/3]',
  '3/2': 'lg:aspect-[3/2]',
  '16/9': 'lg:aspect-video',
} as const

type ChurchImageProps = {
  slot: PhotoSlot
  /** Fixed aspect ratio keeps the grid stable and prevents layout shift. */
  ratio: keyof typeof ratioClass
  /**
   * Ratio from `lg` up. Use when a portrait crop that suits a two-column
   * desktop layout would be far too tall once the columns stack.
   */
  lgRatio?: keyof typeof ratioClass
  /** Only the hero image should be priority-loaded; everything else is lazy. */
  priority?: boolean
  /** Responsive `sizes` hint for the browser. */
  sizes?: string
  className?: string
}

/**
 * Renders a church photograph, or a branded placeholder when that slot has no
 * file yet. The placeholder occupies the same box as the eventual photo, so
 * dropping a real image in never shifts the layout.
 */
const ChurchImage = ({
  slot,
  ratio,
  lgRatio,
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className,
}: ChurchImageProps) => {
  const photo = photos[slot]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-card',
        ratioClass[ratio],
        className
      )}
    >
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={photo.alt}
          className="flex h-full w-full flex-col items-center justify-center gap-4 bg-navy-800 p-6 text-center ring-1 ring-inset ring-white/15"
        >
          {/* Quiet cross motif so the tile reads as intentional, not broken. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 30%, #f29a22 0, transparent 60%)',
            }}
          />
          <BrandMark tone="dark" emblemOnly className="relative" />
          <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-cream-300">
            {photo.placeholderLabel}
          </span>
          <span className="relative text-xs text-cream-300/70">
            Photograph coming soon
          </span>
        </div>
      )}
    </div>
  )
}

export default ChurchImage
