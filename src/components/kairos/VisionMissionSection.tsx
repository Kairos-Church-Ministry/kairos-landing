import { church, missionPillars } from '@/content/church'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Vision and mission.
 *
 * Deliberately editorial rather than a row of identical cards: the vision is
 * set as a single large passage, and the three-fold mission runs beneath it as
 * a numbered list where the verb carries the emphasis — the way the church
 * prints it.
 */
const VisionMissionSection = () => {
  return (
    <section className="on-dark bg-primary-700 py-section lg:py-section-lg">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Vision"
              title="Why we exist"
              tone="dark"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-prose text-lg leading-relaxed text-cream-100 sm:text-xl sm:leading-relaxed">
              {church.vision}
            </p>
          </Reveal>
        </div>

        <hr className="my-14 border-white/15" />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Three-fold Mission"
              title="How we live it out"
              tone="dark"
            />
          </Reveal>

          <ol className="grid gap-8 sm:grid-cols-3">
            {missionPillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.verb} delay={index * 110}>
                <span className="block text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-on-dark sm:text-2xl">
                  <span className="uppercase tracking-wide text-accent">
                    {pillar.verb}
                  </span>{' '}
                  {pillar.object}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200">
                  {pillar.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
