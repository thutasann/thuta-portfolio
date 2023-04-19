import userData from '@/constants/data'
import { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: userData.about.metaTitle,
  description: userData.about.title,
  keywords: userData.about.keywords,
  openGraph: {
    images: '/thutasann.jpeg',
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
    icon: '/thutasann.jpeg',
  },
}

const poppin = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={poppin.className}>
      <body>{children}</body>
    </html>
  )
}
