'use client'
import { LayoutProvider } from '@/context'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'

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
      <LayoutProvider>{children}</LayoutProvider>
    </SessionProvider>
  )
}

export default AppsProviderWrapper
