import { AnimatedText } from '@/components/animated-text'
import BlurImage from '@/components/blur-image'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Layout from '@/components/layout'
import Skills from '@/components/skills'
import Statistics from '@/components/statistics'
import userData from '@/constants/data'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About | Thuta Sann',
  description: userData.about.title,
  keywords: userData.about.keywords,
  openGraph: {
    images: '/thutadev.jpeg',
    type: 'website',
    url: 'https://thutadev.vercel.app/about',
    locale: 'en',
    title: 'About | Thuta Sann',
    description: userData.about.title,
    siteName: userData.about.metaTitle,
    countryName: 'Myanmar',
    alternateLocale: 'eng',
  },
  twitter: {
    title: 'About | Thuta Sann',
    description: userData.about.title,
    card: 'summary_large_image',
    site: '@thutasann3',
    images: '/thutasann-og.webp',
  },
  icons: {
    icon: '/thutadev.jpeg',
  },
}

const AboutPage = () => {
  return (
    <>
      <main className='flex w-full max-w-[1400px] mx-auto flex-col items-center justify-center '>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose! ' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />

          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              {userData.about.description.map((desc, idx) => (
                <p key={idx} className='dark:text-light my-2 text-[16px] font-[500]'>
                  {desc}
                </p>
              ))}
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <BlurImage src='/thutadev.jpeg' alt='thutadev' className='rounded-2xl' width={2448} height={3264} />
            </div>

            <Statistics />
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default AboutPage
