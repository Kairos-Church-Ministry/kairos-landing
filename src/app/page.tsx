import type { Metadata } from 'next'
import {
  AnnouncementsSection,
  FeaturedEventSection,
  HeroSection,
  MinistriesSection,
  PublicFooter,
  PublicHeader,
  UpcomingEventsSection,
  VisionMissionSection,
  VisitCTASection,
  WelcomeSection,
} from '@/components/kairos'
import { church, serviceTimes } from '@/content/church'

export const metadata: Metadata = {
  // Absolute, so the root layout's "%s | Kairos for Christ" template does not
  // append the short name to a title that already contains it.
  title: {
    absolute: `${church.name} — ${church.tagline}`,
  },
  description: `A Christian Fellowship in ${church.location.city}, ${church.location.region}. Sunday worship at 9:30 AM and Thursday prayer night at 7:00 PM. Everyone's welcome — come as you are.`,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: church.name,
    title: `${church.name} — ${church.tagline}`,
    description: `Join us for worship in ${church.location.city}, ${church.location.region}. Sunday 9:30 AM, Thursday Prayer Night 7:00 PM. There's a place for you here.`,
    locale: 'en_PH',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${church.name} — ${church.tagline}`,
    description: `Join us for worship in ${church.location.city}, ${church.location.region}. Everyone's welcome — come as you are.`,
  },
}

/**
 * Church structured data. Only facts the church publishes are included:
 * no geo coordinates, ratings, or founding date, none of which are confirmed.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: church.name,
  alternateName: church.shortName,
  slogan: church.tagline,
  description: church.vision,
  telephone: church.contact.phone,
  sameAs: [church.social.facebook],
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${church.location.venue}, ${church.location.street}`,
    addressLocality: church.location.city,
    addressRegion: church.location.region,
    addressCountry: 'PH',
  },
  openingHoursSpecification: serviceTimes.map((service) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${service.day}`,
    opens: service.time24,
    name: service.name,
  })),
}

export default function Home() {
  return (
    <div className="kairos-page bg-cream-50 font-body text-ink">
      {/* Scroll reveals are driven by JavaScript, so without it every revealed
          element would stay invisible. Show the finished state instead. */}
      <noscript>
        <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>

      {/* JSON-LD is generated from the typed content module above, not from
          user input, so there is no untrusted HTML to sanitise here. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // `<` is escaped so a future content edit can never break out of the
          // script element.
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <PublicHeader />

      <main id="main-content">
        <HeroSection />
        <WelcomeSection />
        <VisionMissionSection />
        <FeaturedEventSection />
        <UpcomingEventsSection />
        <MinistriesSection />
        <AnnouncementsSection />
        <VisitCTASection />
      </main>

      <PublicFooter />
    </div>
  )
}
