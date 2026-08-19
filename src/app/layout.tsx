import type { Metadata, Viewport } from 'next'
import { Caveat, REM } from 'next/font/google'
import { type ReactNode } from 'react'

import '@/assets/css/style.css'
import { church } from '@/content/church'
import { siteUrl } from '@/content/site'

/*
 * This layout is deliberately a pure server component. The public landing page
 * is the only thing most visitors ever load, and it must arrive as fully
 * rendered HTML: session, layout-theme and toast providers are client-side
 * concerns of the admin and auth areas, so those areas mount them in their own
 * layouts (see src/app/admin/layout.tsx and src/app/auth/layout.tsx) rather
 * than forcing every visitor through a client-only wrapper that suppresses
 * server rendering of the whole site.
 */

const rem = REM({
  // 300 is loaded nowhere on the site, so only the weights actually set in
  // markup are shipped.
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
  subsets: ['latin'],
  variable: '--font-body',
})

/** Used only for the handwritten invitations the church prints on its brochure. */
const caveat = Caveat({
  weight: ['600'],
  display: 'swap',
  adjustFontFallback: false,
  subsets: ['latin'],
  variable: '--font-script',
})

export const viewport: Viewport = {
  // The royal blue the header and hero open on, so the browser chrome matches.
  themeColor: '#101d83',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${church.name} — ${church.tagline}`,
    template: `%s | ${church.shortName}`,
  },
  description: `${church.shortName} is a Christian Fellowship in ${church.location.city}, ${church.location.region}. Sunday worship at 9:30 AM, Kids Sunday School at 10:30 AM, and Thursday Prayer Night & Worship at 7:00 PM. Everyone's welcome — come as you are.`,
  applicationName: church.name,
  keywords: [
    church.name,
    church.shortName,
    `church in ${church.location.city}`,
    `Christian fellowship ${church.location.region}`,
    'Sunday worship Consolacion Cebu',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${rem.variable} ${caveat.variable}`}>
      <body className={rem.className}>{children}</body>
    </html>
  )
}
