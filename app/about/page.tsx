import { AnimatedText } from '@/components/animated-text'
import Layout from '@/components/layout'
import Statistics from '@/components/statistics'
import userData from '@/constants/data'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/thutadev.jpeg'

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
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose! ' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-2 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              {userData.about.description.map((desc, idx) => (
                <p key={idx} className='my-2 text-[16px] font-[500]'>
                  {desc}
                </p>
              ))}
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image
                src={profilePic}
                alt='Thuta Sann'
                className='rounded-2xl'
                width={2448}
                height={3264}
                loading='lazy'
                placeholder='blur'
                blurDataURL='/thutadev.jpeg'
              />
            </div>

            <Statistics />
          </div>
        </Layout>
      </main>
    </>
  )
}

export default AboutPage
