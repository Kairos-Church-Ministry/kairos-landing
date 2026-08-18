import { lifeGroups, ministries } from '@/content/church'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Ministries and life groups.
 *
 * Ministry names are set in terracotta, as the church prints them. There are no
 * ministry detail routes in this application, so the cards are not links —
 * adding a route later is the point at which they should become one.
 */
const MinistriesSection = () => {
  return (
    <section
      id="ministries"
      className="bg-cream-50 py-section lg:py-section-lg"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Our Ministries"
            title="Serving God together"
            description="Every ministry here exists to help people meet Jesus and grow in Him."
          />
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon
            return (
              <Reveal
                as="li"
                key={ministry.slug}
                delay={(index % 3) * 90}
                className="rounded-card border border-line bg-white p-6 shadow-sm transition-shadow duration-base hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-secondary/10">
                  <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-secondary-700">
                  {ministry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {ministry.description}
                </p>
              </Reveal>
            )
          })}
        </ul>

        <div className="mt-16">
          <Reveal>
            <SectionHeading
              eyebrow="Life Groups"
              title="Find your people"
              description="Smaller circles where faith is worked out in real friendship."
              as="h2"
            />
          </Reveal>

          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {lifeGroups.map((group, index) => (
              <Reveal
                as="li"
                key={group.slug}
                delay={(index % 2) * 90}
                className="border-t border-line-strong pt-5"
              >
                <h3 className="font-display text-lg font-bold text-secondary-700">
                  {group.name}
                </h3>
                <p className="mt-2 max-w-measure text-sm leading-relaxed text-ink/75">
                  {group.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MinistriesSection
