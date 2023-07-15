/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import userData from '@/constants/data'
import { Metadata } from 'next'
import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'
import { NavBar } from '@/components/navbar'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import RecoilWrapper from '@/components/recoil-wrapper'
import PageProgress from '@/components/progress-bar'
import ScrollToTop from '@/components/progress-bar/scroll-to-top'
import CookieBanner from '@/components/layout/cookie'

export const metadata: Metadata = {
  title: userData.about.metaTitle,
  description: userData.about.title,
  keywords: userData.about.keywords,
  manifest: '/manifest.json',
  openGraph: {
    images: '/thutadev.jpeg',
    type: 'website',
    url: 'https://thutadev.vercel.app/',
    locale: 'en',
    title: userData.about.metaTitle,
    description: userData.about.title,
    siteName: userData.about.metaTitle,
    countryName: 'Myanmar',
    alternateLocale: 'eng',
  },
  twitter: {
    title: userData.about.metaTitle,
    description: userData.about.title,
    card: 'summary_large_image',
    site: '@thutasann3',
    images: '/thutasann-og.webp',
  },
  icons: {
    icon: '/thutadev.jpeg',
  },
}

const poppin = IBM_Plex_Sans({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Analytics />
      <RecoilWrapper>
        <body className='bg-light dark:bg-dark relative'>
          <PageProgress />
          <ScrollToTop />
          <main className={`${poppin.className} relative font-poppins bg-light dark:bg-transparent w-full min-h-screen`}>
            <NavBar />
            {children}
            <Footer />
          </main>
          <Script id='theme-switcher' strategy='beforeInteractive'>
            {`
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
          </Script>
          <CookieBanner />
        </body>
      </RecoilWrapper>
    </html>
  )
}
