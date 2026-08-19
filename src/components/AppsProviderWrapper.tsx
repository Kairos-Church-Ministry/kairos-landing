'use client'
import { LayoutProvider } from '@/context'
import { SessionProvider } from 'next-auth/react'
import NextTopLoader from 'nextjs-toploader'
import { usePathname } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'
import { Toaster } from 'sonner'

/**
 * Client-side providers for the authenticated areas (admin and auth routes).
 * The public landing page renders without any of this — sessions, the layout
 * theme, toasts and the route-transition loader are only meaningful once a
 * visitor moves between authenticated pages.
 */
const AppsProviderWrapper = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname()

  useEffect(() => {
    // Preline powers the dropdowns and accordions in the admin area.
    import('preline/preline')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods) window.HSStaticMethods.autoInit()
    }, 400)
  }, [pathname])

  return (
    <SessionProvider>
      <LayoutProvider>
        <NextTopLoader color="#f29a22" showSpinner={false} />
        {children}
        <Toaster richColors />
      </LayoutProvider>
    </SessionProvider>
  )
}

export default AppsProviderWrapper
