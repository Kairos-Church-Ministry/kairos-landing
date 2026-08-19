import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import AppsProviderWrapper from '@/components/AppsProviderWrapper'
import AdminShell from './AdminShell'

// The admin area is private: it must never appear in search results, and
// robots.txt additionally disallows it for well-behaved crawlers.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AppsProviderWrapper>
      <AdminShell>{children}</AdminShell>
    </AppsProviderWrapper>
  )
}
