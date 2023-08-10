import React from 'react'
import BlurImage from '../blur-image'
import { GithubIcon } from '../icons'
import ProjectLink from '../project-link'
import { IProject } from '@/types/typings'

const Project = ({ category, imgUrl, title, link, github }: IProject) => {
  return (
    <article className='relative w-full flex flex-col items-center justify-center rounded-[2rem] border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[100%] xs:h-[102%] xs:rounded-[1.5rem]' />

      <a
        href={link}
        target='_blank'
        rel='noopener'
        aria-label={'thutadev projects' + title}
        className='w-full cursor-pointer overflow-hidden relative rounded-lg'
      >
        <BlurImage
          src={imgUrl}
          alt={title}
          width={2844}
          height={1578}
          className='hover:scale-110 transition-all duration-500 ease-in-out'
        />
      </a>

      <div className='w-full mt-4 flex flex-col items-start justify-between '>
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

export default Project
