import { church } from '@/content/church'
import ChurchImage from './ChurchImage'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Welcome / About. A short introduction paired with one photograph, closing
 * with the bishop's greeting so the section carries a human voice.
 */
const WelcomeSection = () => {
  return (
    <section id="about" className="bg-cream-50 py-section lg:py-section-lg">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <ChurchImage
              slot="welcome"
              ratio="4/3"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="shadow-card"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Welcome"
                title="A church where you can belong"
                description={`${church.shortName} is a Christian Fellowship in ${church.location.city}, Cebu. We gather to worship Jesus, to grow in His Word, and to care for the people around us.`}
              />
            </Reveal>

            <Reveal
              as="p"
              delay={100}
              className="mt-6 max-w-measure text-base leading-relaxed text-ink/80"
            >
              {church.invitation} Whether you have followed Jesus for years or
              are simply curious, you will find people here who are glad you
              came.
            </Reveal>

            <Reveal
              as="figure"
              delay={180}
              className="mt-8 border-l-2 border-accent pl-6"
            >
              <blockquote className="text-base italic leading-relaxed text-navy">
                &ldquo;{church.welcomeNote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-secondary-600">
                  {church.welcomeSignatory.name}
                </span>
                <span className="text-muted">
                  {' '}
                  · {church.welcomeSignatory.role}
                </span>
              </figcaption>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
