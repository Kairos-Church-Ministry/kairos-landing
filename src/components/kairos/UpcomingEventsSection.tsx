import { LuCalendarDays } from 'react-icons/lu'
import { church, upcomingEvents } from '@/content/church'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Activities and events.
 *
 * Content is static (this project has no CMS or events API), so there is no
 * loading or error state to render — only the empty state below, which appears
 * if every event is removed from src/content/church.ts.
 *
 * Events the church describes in detail get a card; the regular gatherings that
 * run through the year are listed compactly beneath them. No dates are shown,
 * because the church publishes them per occasion rather than on a fixed calendar.
 */
const UpcomingEventsSection = () => {
  const detailed = upcomingEvents.filter((event) => event.description)
  const regular = upcomingEvents.filter((event) => !event.description)

  return (
    <section className="bg-cream-100 pb-section lg:pb-section-lg">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Activities & Events"
            title="Life together through the year"
            description="Ways our church family serves, gathers, and grows — from outreach in the community to retreats and fellowship."
          />
        </Reveal>

        {upcomingEvents.length === 0 ? (
          <Reveal className="mt-10 rounded-card border border-dashed border-line-strong bg-cream-50 p-10 text-center">
            <LuCalendarDays
              className="mx-auto h-8 w-8 text-secondary"
              aria-hidden="true"
            />
            <p className="mt-4 text-base font-medium text-navy">
              No events are listed at the moment.
            </p>
            <p className="mx-auto mt-2 max-w-measure text-sm text-muted">
              Our Sunday and Thursday gatherings continue as usual. Follow us on
              Facebook for the latest announcements.
            </p>
          </Reveal>
        ) : (
          <>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {detailed.map((event, index) => (
                <Reveal
                  as="li"
                  key={event.slug}
                  delay={index * 90}
                  className="flex flex-col rounded-card border border-line bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-lg font-bold leading-snug text-navy">
                    {event.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                    {event.description}
                  </p>

                  {event.locations && (
                    <div className="mt-4 border-t border-line pt-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-600">
                        Where we go
                      </h4>
                      <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted">
                        {event.locations.map((location) => (
                          <li key={location}>{location}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Reveal>
              ))}
            </ul>

            {regular.length > 0 && (
              <Reveal className="mt-8 rounded-card bg-sand/50 p-6 sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700">
                  Regular gatherings
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {regular.map((event) => (
                    <li
                      key={event.slug}
                      className="rounded-pill border border-line-strong bg-cream-50 px-4 py-2 text-sm font-medium text-navy"
                    >
                      {event.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </>
        )}

        <Reveal as="p" delay={120} className="mt-8 text-sm text-muted">
          Dates for each gathering are announced on our{' '}
          <a
            href={church.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-base hover:text-primary-600"
          >
            Facebook page
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </Reveal>
      </div>
    </section>
  )
}

export default UpcomingEventsSection
