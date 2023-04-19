'use client'

import userData from '@/constants/data'
import { navbarLinks } from '@/constants/navbar'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../icons'
import Logo from '../logo'
import { motion } from 'framer-motion'

const CustomLinks = ({ href, title, className = '' }: ICustomLink) => {
  const path = usePathname()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        {navbarLinks.map((link, idx) => (
          <CustomLinks href={link.link} title={link.text} className='mx-4' key={idx} />
        ))}
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
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
          rel='noopener'
        >
          <TwitterIcon className='w-6 ml-3' />
        </motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
