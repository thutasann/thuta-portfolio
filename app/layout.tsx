import userData from '@/constants/data'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thuta Sann | Frontend Dev',
  description: userData.about.title,
  keywords: userData.about.keywords,
  openGraph: {
    images: '/thutasann.jpeg',
  },
  icons: {
    icon: '/thutasann.jpeg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
