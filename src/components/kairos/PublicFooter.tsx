import { LuFacebook, LuSmartphone } from 'react-icons/lu'
import { church, fullAddress, serviceTimes } from '@/content/church'
import { navItems } from '@/content/navigation'
import BrandMark from './BrandMark'
import Reveal from './Reveal'

/**
 * Public footer. Midnight navy, so it reads as the base of the page rather
 * than a repeat of the royal blue bands above it.
 *
 * Only channels the church actually publishes appear here. There is no privacy
 * policy page in this application, so none is linked — add the route first.
 */
const PublicFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark bg-navy-700 text-cream-200">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <Reveal className="lg:col-span-2 lg:max-w-sm">
            <BrandMark tone="dark" />
            <p className="mt-5 text-sm leading-relaxed">
              {church.tagline}. A Christian Fellowship in {church.location.city}
              , {church.location.region}, gathering to worship Jesus and to grow
              together in Him.
            </p>

            <a
              href={church.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2.5 rounded-pill border border-white/20 px-5 text-sm font-semibold text-on-dark transition-colors duration-base hover:border-accent hover:text-accent"
            >
              <LuFacebook className="h-4 w-4" aria-hidden="true" />
              Facebook
              <span className="sr-only">
                : {church.shortName} Consolacion (opens in a new tab)
              </span>
            </a>

            {/* Kairos Connect lives on its own origin, which owns its own
                installation and offline behaviour; from here it is simply a
                link. Members open it, and its origin decides what to offer. */}
            {church.memberApp && (
              <a
                href={church.memberApp.url}
                className="ml-3 mt-6 inline-flex min-h-[44px] items-center gap-2.5 rounded-pill border border-white/20 px-5 text-sm font-semibold text-on-dark transition-colors duration-base hover:border-accent hover:text-accent"
              >
                <LuSmartphone className="h-4 w-4" aria-hidden="true" />
                Open {church.memberApp.name}
                <span className="sr-only">, the members&rsquo; app</span>
              </a>
            )}
          </Reveal>

          <Reveal delay={90}>
            <nav aria-label="Footer">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Explore
              </h2>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex min-h-[32px] items-center text-sm transition-colors duration-base hover:text-on-dark"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal delay={180}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Visit &amp; Contact
            </h2>

            <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed">
              <p>{fullAddress}</p>
              <p>
                <a
                  href={`tel:${church.contact.phoneHref}`}
                  className="inline-flex min-h-[32px] items-center transition-colors duration-base hover:text-on-dark"
                >
                  {church.contact.phone}
                </a>
              </p>
            </address>

            <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Service times
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceTimes.map((service) => (
                <li key={`${service.day}-${service.name}`}>
                  <span className="font-semibold text-on-dark">
                    {service.day}
                  </span>{' '}
                  {service.name} · {service.time}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {church.name}. All rights reserved.
          </p>
          <p className="font-script text-lg text-accent">{church.invitation}</p>
        </div>
      </div>
    </footer>
  )
}

export default PublicFooter
