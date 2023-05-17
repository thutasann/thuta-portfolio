import { IRepos } from '@/types/typings'
import React from 'react'
import { GithubIcon } from '../icons'

interface ReposProps {
  repos: IRepos[]
}

const Repos = ({ repos }: ReposProps) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-1 gap-4 mt-9'>
      {repos?.map(repo => (
        <a
          href={repo.clone_url}
          target='_blank'
          rel='noopener'
          aria-label={`thutasann github repo ${repo.name}`}
          className='border border-dark/60 dark:border-primaryDark px-4 py-5 flex items-center gap-4 rounded-md hover:bg-opacity-20 hover:bg-primaryGray dark:hover:bg-primary dark:hover:bg-opacity-20 cursor-pointer transition-all duration-600 ease-in-out'
          key={repo.name}
        >
          <div className='w-9'>
            <GithubIcon />
          </div>
          <div>
            <h2 className='text-xl md:text-md text-dark dark:text-light font-[800]'>{repo.name}</h2>
            <p className='text-base md:text-sm text-dark/60 dark:text-light/60  font-[500]'>{repo.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Repos
