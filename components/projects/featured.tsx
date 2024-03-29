import React from 'react'
import BlurImage from '../blur-image'
import { GithubIcon } from '../icons'
import ProjectLink from '../project-link'
import { IProject } from '@/types/typings'

const FeaturedProject = ({ summary, category, imgUrl, link, title, github }: IProject): JSX.Element => {
  return (
    <article
      className='w-full flex items-center justify-center rounded-[2rem] border border-solid border-dark bg-light shadow-2xl relative p-6 dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      '
    >
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl  rounded-[2rem] bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:w-rounded-[1.5rem]' />

      <a
        href={link}
        target='_blank'
        rel='noopener'
        aria-label={'thutadev projects' + title}
        className='w-1/2 cursor-pointer overflow-hidden relative rounded-lg lg:w-full'
      >
        <BlurImage
          src={imgUrl}
          alt={title}
          width={2844}
          height={1578}
          className='hover:scale-110 transition-all duration-500 ease-in-out'
        />
      </a>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='bg-dark dark:bg-light text-light dark:text-dark px-3 py-1 font-bold rounded-md text-lg xs:text-base'>
          {category}
        </span>
        <a
          href={link}
          target='_blank'
          rel='noopener'
          aria-label={'thutadev projects' + title}
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 sm:my-0 w-full text-left text-4xl font-[800] dark:text-light sm:text-[19px]'>{title}</h2>
        </a>
        <p className='my-2 sm:my-0 sm:mb-3 font-medium text-dark dark:text-light'>{summary}</p>

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

export default FeaturedProject
