import userData from '@/constants/data'
import { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { NavBar } from '@/components/navbar'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: userData.about.metaTitle,
  description: userData.about.title,
  keywords: userData.about.keywords,
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

const poppin = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Analytics />
      <body className='bg-light dark:bg-dark'>
        <main className={`${poppin.className} font-poppins bg-light dark:bg-transparent w-full min-h-screen`}>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
