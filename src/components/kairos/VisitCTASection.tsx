import Image from 'next/image'
import { LuClock, LuFacebook, LuMapPin, LuPhone } from 'react-icons/lu'
import {
  church,
  fullAddress,
  serviceTimes,
  visitorNotes,
} from '@/content/church'
import visitBackground from '@/assets/images/footer-bg.jpg'
import ChurchImage from './ChurchImage'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * First-time visitor section.
 *
 * A photograph of people arriving at the church sits behind the copy, under a
 * royal blue scrim. The photograph is black and white, so the scrim does the
 * colouring: it carries the band back to the brand blue the rest of the page
 * uses, and it keeps the cream type well clear of the picture's bright
 * highlights — the signage and the pale wall behind the doorway.
 *
 * Everything here is confirmed church information: the service times, the
 * address, and the phone number the church publishes. There is no contact form
 * in this application, so the actions are the real channels — phone and Facebook.
 */
const VisitCTASection = () => {
  return (
    <section
      id="contact"
      className="on-dark relative isolate overflow-hidden bg-primary-700 py-section lg:py-section-lg"
    >
      {/*
        Decorative: the heading, the address and the service times beside it
        already say what the picture shows, so it carries no alt text.
      */}
      <Image
        src={visitBackground}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        loading="lazy"
        placeholder="blur"
        className="-z-10 object-cover object-center"
      />

      <div
        aria-hidden="true"
        // Bracket form: these opacities are off Tailwind's 5-step scale, and
        // the plain slash form would silently generate no CSS at all.
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-950/[.92] via-primary-800/[.88] to-primary-950/[.94]"
      />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Planning your first visit?"
                title="Everyone's welcome. Come as you are."
                tone="dark"
                description="Here is what to expect when you join us, so nothing feels unfamiliar when you arrive."
              />
            </Reveal>

            <ul className="mt-10 space-y-7">
              {visitorNotes.map((note, index) => {
                const Icon = note.icon
                return (
                  <Reveal
                    as="li"
                    key={note.title}
                    delay={index * 90}
                    className="flex gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-white/10">
                      <Icon
                        className="h-5 w-5 text-accent"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-on-dark">
                        {note.title}
                      </h3>
                      <p className="mt-1.5 max-w-measure text-sm leading-relaxed text-cream-200">
                        {note.body}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </ul>

            <Reveal
              as="p"
              delay={120}
              className="mt-10 font-script text-2xl text-accent sm:text-3xl"
            >
              {church.handwrittenAccent} {church.invitation}
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal variant="right">
              <ChurchImage
                slot="visit"
                ratio="3/2"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>

            <Reveal
              variant="right"
              delay={120}
              className="rounded-card bg-cream-50 p-7 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold lowercase tracking-tight text-navy">
                Visit us
              </h3>

              <dl className="mt-6 space-y-6">
                <div className="flex gap-3">
                  <LuClock
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Service times
                    </dt>
                    <dd className="mt-2">
                      <ul className="space-y-1 text-sm text-ink">
                        {serviceTimes.map((service) => (
                          <li key={`${service.day}-${service.name}`}>
                            <span className="font-semibold text-navy">
                              {service.day}
                            </span>{' '}
                            {service.name} · {service.time}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <LuMapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Address
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink">
                      {fullAddress}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <LuPhone
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Phone
                    </dt>
                    <dd className="mt-2 text-sm text-ink">
                      <a
                        href={`tel:${church.contact.phoneHref}`}
                        className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-base hover:text-primary-600"
                      >
                        {church.contact.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <a
                href={church.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-accent px-6 text-base font-semibold text-navy transition-colors duration-base hover:bg-accent-600"
              >
                <LuFacebook className="h-5 w-5" aria-hidden="true" />
                Message us on Facebook
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitCTASection
