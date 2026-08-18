import { LuMapPin, LuMoveRight } from 'react-icons/lu'
import { church, featuredEvent, fullAddress } from '@/content/church'
import ChurchImage from './ChurchImage'
import Reveal from './Reveal'
import { VISIT_ANCHOR } from '@/content/navigation'

/**
 * Featured event — Divine Encounter with God.
 *
 * The church has not published a date or time for this gathering, so none is
 * shown. Add `date`/`time` to the event in src/content/church.ts and surface
 * them here once they are confirmed. There is no registration system in this
 * application, so the only action offered is planning a visit.
 */
const FeaturedEventSection = () => {
  if (!featuredEvent) return null

  return (
    <section id="events" className="bg-cream-100 py-section lg:py-section-lg">
      <div className="container">
        <Reveal
          variant="zoom"
          className="overflow-hidden rounded-card bg-white shadow-card"
        >
          <div className="grid lg:grid-cols-2">
            <ChurchImage
              slot="featuredEvent"
              ratio="16/9"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-none lg:aspect-auto lg:h-full"
            />

            <div className="p-8 sm:p-10 lg:p-12">
              <Reveal
                as="p"
                delay={120}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-600"
              >
                Featured Gathering
              </Reveal>

              <Reveal
                as="h2"
                delay={200}
                className="mt-3 font-display text-3xl font-bold lowercase leading-tight tracking-tight text-navy sm:text-4xl"
              >
                {featuredEvent.name}
              </Reveal>

              {featuredEvent.description && (
                <Reveal
                  as="p"
                  delay={280}
                  className="mt-5 max-w-measure text-base leading-relaxed text-ink/80"
                >
                  {featuredEvent.description}
                </Reveal>
              )}

              <dl className="mt-8 space-y-4 border-t border-line pt-6">
                <div className="flex gap-3">
                  <LuMapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Venue
                    </dt>
                    <dd className="mt-1 text-sm text-ink">{fullAddress}</dd>
                  </div>
                </div>
              </dl>

              <p className="mt-6 text-sm text-muted">
                Dates are announced ahead of each gathering. Get in touch and we
                will let you know when the next one is.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={VISIT_ANCHOR}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-primary px-7 text-base font-semibold text-on-dark transition-colors duration-base hover:bg-primary-800"
                >
                  Plan Your Visit
                </a>
                <a
                  href={church.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-pill border border-line-strong px-7 text-base font-semibold text-navy transition-colors duration-base hover:bg-cream-100"
                >
                  Follow on Facebook
                  <LuMoveRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FeaturedEventSection
