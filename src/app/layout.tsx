import type { Metadata } from 'next'
import { Caveat, REM } from 'next/font/google'
import { type ReactNode } from 'react'
import NextTopLoader from 'nextjs-toploader'
import dynamic from 'next/dynamic'
import { Toaster } from 'sonner'

import '@/assets/css/style.css'
import { church } from '@/content/church'

const AppProvidersWrapper = dynamic(
  () => import('@/components/AppsProviderWrapper'),
  { ssr: false }
)
const rem = REM({
  weight: ['300', '400', '500', '600', '700'],
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

/**
 * Set NEXT_PUBLIC_SITE_URL to the live domain in the deployment environment so
 * canonical and Open Graph URLs resolve absolutely. Falls back to localhost for
 * local development rather than guessing at a production hostname.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

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
      <body className={rem.className}>
        <NextTopLoader color="#f29a22" showSpinner={false} />
        <AppProvidersWrapper>
          {children}
          <Toaster richColors />
        </AppProvidersWrapper>
      </body>
    </html>
  )
}
