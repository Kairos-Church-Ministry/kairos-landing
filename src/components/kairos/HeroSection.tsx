import { LuClock, LuMapPin } from 'react-icons/lu'
import { church, fullAddress, serviceTimes } from '@/content/church'
import ChurchImage from './ChurchImage'
import Reveal from './Reveal'
import { VISIT_ANCHOR } from '@/content/navigation'

/**
 * Hero. Deep royal blue field, warm white type, one photograph — the front
 * panel of the church's brochure translated to the screen.
 *
 * The hero is on screen at load, so its reveals fire straight away and read as
 * an opening rather than a scroll effect. The delays run top to bottom so the
 * eye is led down the column.
 */
const HeroSection = () => {
  return (
    <section
      id="home"
      className="on-dark relative overflow-hidden bg-primary-700 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      {/* A single soft light source, echoing the brochure's radiant dove panel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full opacity-25"
        style={{
          background:
            'radial-gradient(circle, rgba(242,154,34,0.55) 0%, rgba(242,154,34,0) 65%)',
        }}
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <Reveal
              as="p"
              className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
            >
              Welcome — we&rsquo;re glad you are here
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="mt-5 font-display text-4xl font-bold lowercase leading-[1.05] tracking-tight text-on-dark sm:text-5xl lg:text-6xl"
            >
              <span className="sr-only">{church.name} — </span>
              Passion for God,
              <br />
              compassion for people
            </Reveal>

            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-measure text-base leading-relaxed text-cream-200 sm:text-lg"
            >
              {church.welcomeNote}
            </Reveal>

            <Reveal
              delay={240}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={VISIT_ANCHOR}
                className="inline-flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-pill bg-accent px-7 text-base font-semibold text-navy transition-colors duration-base hover:bg-accent-600"
              >
                Plan Your Visit
              </a>
              <a
                href="#about"
                className="inline-flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-pill border border-cream-200/40 px-7 text-base font-semibold text-on-dark transition-colors duration-base hover:border-cream-200 hover:bg-white/10"
              >
                Learn More
              </a>
            </Reveal>

            {/* Service times and location, straight from the church's own listing. */}
            <Reveal
              delay={320}
              className="mt-10 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-2"
            >
              <div className="flex gap-3">
                <LuClock
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream-300">
                    Service Times
                  </h2>
                  <ul className="mt-2 space-y-1 text-sm text-cream-200">
                    {serviceTimes.map((service) => (
                      <li key={`${service.day}-${service.name}`}>
                        <span className="font-semibold text-on-dark">
                          {service.day}
                        </span>{' '}
                        {service.name} · {service.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <LuMapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream-300">
                    Where We Meet
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-cream-200">
                    {fullAddress}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={160} className="relative">
            <ChurchImage
              slot="hero"
              ratio="4/3"
              lgRatio="4/5"
              priority
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 60vw, 100vw"
              className="shadow-lifted"
            />
            {/* Handwritten invitation, as on the brochure's back panel. */}
            <p className="mt-5 text-center font-script text-2xl text-accent sm:text-3xl lg:absolute lg:-bottom-8 lg:-left-10 lg:mt-0 lg:rotate-[-4deg] lg:text-left">
              {church.handwrittenAccent}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
