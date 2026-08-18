import Image from 'next/image'
import { LuClock, LuMapPin } from 'react-icons/lu'
import { church, fullAddress, serviceTimes } from '@/content/church'
import heroBackground from '@/assets/images/hero-bg.png'
import Reveal from './Reveal'
import { VISIT_ANCHOR } from '@/content/navigation'

/**
 * Hero. A full-height, full-bleed photograph tinted with the brand's royal blue
 * so the warm white type keeps its contrast — the front panel of the church's
 * brochure translated to the screen.
 *
 * Height is `100svh`, the *small* viewport height, so the section still fits on
 * a phone with the browser's chrome showing rather than being cropped by it.
 * The vertical padding is kept as a floor: on a short landscape screen the
 * content grows past the viewport instead of being squeezed.
 *
 * The hero is on screen at load, so its reveals fire straight away and read as
 * an opening rather than a scroll effect. The delays run top to bottom so the
 * eye is led down the column.
 */
const HeroSection = () => {
  return (
    <section
      id="home"
      className="on-dark relative flex min-h-[100svh] items-center overflow-hidden bg-primary-950 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      {/*
        Decorative, so the alt text is empty: everything the photograph says is
        already carried by the heading and the service details over it. It is
        the one image on the page worth loading eagerly.
      */}
      <Image
        src={heroBackground}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center"
      />

      {/*
        Royal blue scrim. Without it the cream type would sit on the
        photograph's own warm highlights and drop below the contrast the rest of
        the page holds to. It runs top-to-bottom on a phone, where the copy
        spans the full width, and leans to the left from `sm` up so the
        photograph keeps its warmth on the right.
      */}
      <div
        aria-hidden="true"
        className="from-primary-950/86 via-primary-950/78 to-primary-950/88 sm:from-primary-950/88 sm:via-primary-950/72 pointer-events-none absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r sm:to-primary-950/50"
      />

      <div className="container relative w-full">
        <div className="max-w">
          <Reveal
            as="p"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
          >
            Welcome — we&rsquo;re glad you are here
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-on-dark sm:text-5xl lg:text-6xl"
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

          {/* Handwritten invitation, as on the brochure's back panel. */}
          <Reveal
            as="p"
            delay={400}
            className="mt-8 font-script text-2xl text-accent sm:text-3xl lg:rotate-[-4deg]"
          >
            {church.handwrittenAccent}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
