import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from '../icons'
import { motion } from 'framer-motion'
import userData from '@/constants/data'
import UseThemeSwitcher from '@/hooks/useThemeSwitcher'

const CustomLinks = ({ href, title, className = '' }: ICustomLink) => {
  const path = usePathname()

  return (
    <Link href={href} className={`${className} relative group uppercase text-[15px] font-[600] text-dark/90 dark:text-light`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export const DesktopSocials = () => {
  const [mode, setMode] = UseThemeSwitcher()

  return (
    <nav className='flex items-center justify-center flex-wrap gap-[10px]'>
      <motion.a
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.9,
        }}
        href={userData.socialLinks.github}
        target='_blank'
        rel='noopener'
        aria-label='ThutaDev GitHub'
        className='w-6 mr-3'
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.9,
        }}
        href={userData.socialLinks.linkedin}
        target='_blank'
        rel='noopener'
        aria-label='ThutaDev LinkedIn'
        className='w-6 mx-3'
      >
        <LinkedInIcon />
      </motion.a>
      <motion.a
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.9,
        }}
        href={userData.socialLinks.twitter}
        target='_blank'
        aria-label='ThutaDev Twitter'
        rel='noopener'
      >
        <TwitterIcon className='w-6 ml-3' />
      </motion.a>

      <button
        aria-label='dark light theme switcher'
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light')
        }}
        className={`cursor-pointer ml-8 flex items-center justify-center rounded-full p-1 ${
          mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
        }`}
      >
        {mode === 'dark' ? <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />}
      </button>
    </nav>
  )
}

export default CustomLinks