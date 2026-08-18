import { cn } from '@/utils'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  /** Small terracotta label above the title, as on the church's brochure. */
  eyebrow?: string
  title: ReactNode
  /** One short supporting sentence. Keep it to a single line of thought. */
  description?: ReactNode
  /** `dark` is for headings placed on the royal blue bands. */
  tone?: 'light' | 'dark'
  align?: 'start' | 'center'
  /** Heading level, so each section slots into the page outline correctly. */
  as?: 'h2' | 'h3'
  id?: string
  className?: string
}

/**
 * Section heading in the brochure's voice: a terracotta eyebrow over a heavy,
 * lowercase display title. Lowercase is a brand trait, applied through CSS so
 * screen readers and the document outline still receive the real casing.
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'start',
  as: Tag = 'h2',
  id,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'max-w-measure',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.2em]',
            tone === 'dark' ? 'text-accent' : 'text-secondary-600'
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          'font-display text-3xl font-bold lowercase leading-[1.1] tracking-tight sm:text-4xl',
          tone === 'dark' ? 'text-on-dark' : 'text-navy'
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            tone === 'dark' ? 'text-cream-200' : 'text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
