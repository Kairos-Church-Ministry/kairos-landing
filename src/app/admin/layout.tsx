'use client'
import { type ReactNode, Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
const Footer = dynamic(() => import('@/components/adminComponents/Footer'))
const TopBar = dynamic(() => import('@/components/adminComponents/TopBar'))
const BackToTop = dynamic(() => import('@/components/BackToTop'))

const loading = () => <div />

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    document.body.classList.add('bg-default-50')
    return () => {
      document.body.classList.remove('bg-default-50')
    }
  }, [])

  if (status == 'unauthenticated') {
    router.replace('/auth/sign-in')
    return null
  }

  if (status == 'loading') {
    return <NextTopLoader color="#f29a22" showSpinner={false} />
  }

  return (
    <>
      <Suspense fallback={loading()}>
        <TopBar />
      </Suspense>

      <Suspense fallback={loading()}>{children}</Suspense>

      <Suspense fallback={loading()}>
        <Footer />
      </Suspense>

      <BackToTop />
    </>
  )
}

export default Layout
