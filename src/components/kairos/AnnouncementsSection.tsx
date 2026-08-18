import { LuMegaphone } from 'react-icons/lu'
import { announcements, church } from '@/content/church'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Announcements.
 *
 * The list in src/content/church.ts is empty until the church supplies real
 * notices, so this renders its empty state rather than placeholder copy.
 * Adding entries there publishes them here automatically.
 */
const AnnouncementsSection = () => {
  return (
    <section
      id="announcements"
      className="bg-cream-50 py-section lg:py-section-lg"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Announcements"
            title="News from the fellowship"
            description="Notices for our church family — updates, invitations, and what is coming next."
          />
        </Reveal>

        {announcements.length === 0 ? (
          <Reveal
            delay={120}
            className="mt-10 flex flex-col items-start gap-5 rounded-card border border-line bg-cream-100 p-8 sm:flex-row sm:items-center sm:p-10"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-primary/10">
              <LuMegaphone
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
            </span>
            <div>
              <p className="text-base font-semibold text-navy">
                There are no announcements posted right now.
              </p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                Our Sunday and Thursday gatherings continue as scheduled. For
                day-to-day news, follow{' '}
                <a
                  href={church.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-base hover:text-primary-600"
                >
                  {church.shortName} on Facebook
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                .
              </p>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((announcement, index) => (
              <Reveal
                as="li"
                key={announcement.slug}
                delay={(index % 3) * 90}
                className="flex flex-col rounded-card border border-line bg-white p-6 shadow-sm"
              >
                <p className="inline-flex w-fit rounded-pill bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-700">
                  {announcement.category}
                </p>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy">
                  {announcement.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                  {announcement.body}
                </p>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default AnnouncementsSection
