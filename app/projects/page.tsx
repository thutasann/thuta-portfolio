import { AnimatedText } from '@/components/animated-text'
import BlurImage from '@/components/blur-image'
import { GithubIcon } from '@/components/icons'
import Layout from '@/components/layout'
import ProjectLink from '@/components/project-link'
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
            <div className='col-span-6'>
              <Project
                category={projects[1].category}
                title={projects[1].title}
                link={projects[1].link}
                imgUrl={projects[1].imgUrl}
                github={projects[1].github}
              />
            </div>
            <div className='col-span-6'>
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
            <div className='col-span-6'>
              <Project
                category={projects[3].category}
                title={projects[3].title}
                link={projects[3].link}
                imgUrl={projects[3].imgUrl}
                github={projects[3].github}
              />
            </div>
            <div className='col-span-6'>
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

const FeaturedProject = ({ summary, category, imgUrl, link, title, github }: IProject): JSX.Element => {
  return (
    <article className='w-full flex items-center justify-center rounded-[2rem] border border-solid border-dark bg-light shadow-2xl relative p-6'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl  rounded-[2rem] bg-dark' />

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
          <a href={github} target='_blank' rel='noopener' aria-label={'thutadev projects ' + title} className='w-10'>
            <GithubIcon className='hover:opacity-80' />
          </a>

          <ProjectLink link={link} title={title} />
        </div>
      </div>
    </article>
  )
}

const Project = ({ category, imgUrl, title, link, github }: IProject) => {
  return (
    <article className='relative w-full flex flex-col items-center justify-center rounded-[2rem] border border-solid border-dark bg-light p-6'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark' />

      <a
        href={link}
        target='_blank'
        rel='noopener'
        aria-label={'thutadev projects' + title}
        className='w-full cursor-pointer overflow-hidden relative rounded-lg  h-[300px]'
      >
        <BlurImage src={imgUrl} alt={title} width={2844} height={1578} className='hover:scale-110' />
      </a>

      <div className='w-full mt-4 flex flex-col items-start justify-between'>
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

        <div className=' w-full flex items-center justify-between mt-4 gap-4'>
          <ProjectLink link={link} title={title} />

          {github ? (
            <a href={github} target='_blank' rel='noopener' aria-label={'thutadev projects ' + title} className='w-10'>
              <GithubIcon className='hover:opacity-80' />
            </a>
          ) : (
            <span className='w-10 cursor-not-allowed'>
              <GithubIcon className={`${github ? 'hover:opacity-80' : 'opacity-50'}`} />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default Projects
