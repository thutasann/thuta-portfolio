import { AnimatedText } from '@/components/animated-text'
import Layout from '@/components/layout'
import FeaturedProject from '@/components/projects/featured'
import Project from '@/components/projects/project'
import userData, { projects } from '@/constants/data'
import { Metadata } from 'next'
import React from 'react'

export const revalidate = 30

export const metadata: Metadata = {
  title: 'Projects | Thuta Sann',
  description: userData.about.title,
  keywords: userData.about.keywords,
  openGraph: {
    images: '/thutadev.jpeg',
    type: 'website',
    url: 'https://thutadev.vercel.app/about',
    locale: 'en',
    title: 'Projects | Thuta Sann',
    description: userData.about.title,
    siteName: userData.about.metaTitle,
    countryName: 'Myanmar',
    alternateLocale: 'eng',
  },
  twitter: {
    title: 'Projects | Thuta Sann',
    description: userData.about.title,
    card: 'summary_large_image',
    site: '@thutasann3',
    images: '/thutasann-og.webp',
  },
  icons: {
    icon: '/thutadev.jpeg',
  },
}

const Projects = () => {
  return (
    <>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Projects' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='max-w-[1400px] mx-auto grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
            <div className='col-span-12'>
              <FeaturedProject
                id={projects[0].id}
                category={projects[0].category}
                title={projects[0].title}
                link={projects[0].link}
                imgUrl={projects[0].imgUrl}
                summary={projects[0].summary}
                github={projects[0].github}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                category={projects[1].category}
                title={projects[1].title}
                link={projects[1].link}
                imgUrl={projects[1].imgUrl}
                github={projects[1].github}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project category={projects[8].category} title={projects[8].title} link={projects[8].link} imgUrl={projects[8].imgUrl} />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                id={projects[13].id}
                category={projects[13].category}
                title={projects[13].title}
                link={projects[13].link}
                imgUrl={projects[13].imgUrl}
                summary={projects[13].summary}
                github={projects[13].github}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                category={projects[3].category}
                title={projects[3].title}
                link={projects[3].link}
                imgUrl={projects[3].imgUrl}
                github={projects[3].github}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                category={projects[4].category}
                title={projects[4].title}
                link={projects[4].link}
                imgUrl={projects[4].imgUrl}
                github={projects[4].github}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
