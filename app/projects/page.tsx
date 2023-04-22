import { AnimatedText } from '@/components/animated-text'
import BlurImage from '@/components/blur-image'
import { GithubIcon } from '@/components/icons'
import Layout from '@/components/layout'
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

const Projects = () => {
  return (
    <>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Projects' />
          <div className='grid grid-cols-12 gap-24 mt-16'>
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
            <div className='col-span-6'>Project 1</div>
            <div className='col-spannn-6'>Project 2</div>

            <div className='col-span-12'>
              <FeaturedProject
                id={projects[12].id}
                category={projects[12].category}
                title={projects[12].title}
                link={projects[12].link}
                imgUrl={projects[12].imgUrl}
                summary={projects[12].summary}
                github={projects[12].github}
              />
            </div>
            <div className='col-span-6'>Project 3</div>
            <div className='col-spannn-6'>Project 4</div>
          </div>
        </Layout>
      </main>
    </>
  )
}

const FeaturedProject = ({ summary, category, imgUrl, link, title, github }: IProject): JSX.Element => {
  return (
    <article className='w-full flex items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl relative p-6'>
      <a
        href={link}
        target='_blank'
        rel='noopener'
        aria-label={'thutadev projects' + title}
        className='w-1/2 cursor-pointer overflow-hidden relative rounded-lg  h-[300px]'
      >
        <BlurImage src={imgUrl} alt={title} width={2844} height={1578} className='hover:scale-110' />
      </a>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='bg-dark text-light px-3 py-1 font-bold rounded-md text-lg'>{category}</span>
        <a
          href={link}
          target='_blank'
          rel='noopener'
          aria-label={'thutadev projects' + title}
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-[800]'>{title}</h2>
        </a>
        <p className='my-2 font-medium text-dark'>{summary}</p>

        <div className='mt-2 flex items-center justify-center gap-4'>
          <a href={github} target='_blank' rel='noopener' aria-label={'thutadev projects' + title} className='w-10'>
            <GithubIcon className='hover:opacity-80' />
          </a>

          <a
            href={link}
            target='_blank'
            rel='noopener'
            aria-label={'thutadev projects' + title}
            className='focus:outline-none cursor-pointer relative inline-block text-lg group'
          >
            <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-dark rounded-lg group-hover:text-white'>
              <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-dark group-hover:-rotate-180 ease'></span>
              <span className='relative'>View Project</span>
            </span>
            <span
              className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-dark rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'
            ></span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Projects
