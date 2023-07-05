'use client'

import userData from '@/constants/data'
import { navbarLinks } from '@/constants/navbar'
import React, { useState } from 'react'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from '../icons'
import Logo from '../logo'
import { delay, motion } from 'framer-motion'
import Hamburger from './hamburger'
import CustomLinks, { DesktopSocials } from './custom-links'
import CustomMobileLinks, { MobileSocials } from './custom-mobile-links'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { easings } from '@/animations'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useOutsideClick(() => setIsOpen(false))

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <header className='nav'>
        <Hamburger onClick={handleClick} isOpen={isOpen} />
        <div className='w-full flex justify-between items-center lg:hidden '>
          <nav>
            {navbarLinks.map((link, idx) => (
              <CustomLinks href={link.link} title={link.text} className='mx-4' key={idx} />
            ))}
          </nav>
          <DesktopSocials />
        </div>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
      </header>

      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isOpen ? 1 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          ease: easings,
        }}
        className='mobile-nav'
      >
        <nav className='flex items-center flex-col justify-center'>
          {navbarLinks.map((link, idx) => (
            <CustomMobileLinks href={link.link} title={link.text} className='' key={idx} toggle={handleClick} />
          ))}
        </nav>
        <MobileSocials />
      </motion.div>
    </>
  )
}
