'use client'

import userData from '@/constants/data'
import { navbarLinks } from '@/constants/navbar'
import React, { useState } from 'react'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from '../icons'
import Logo from '../logo'
import { motion } from 'framer-motion'
import Hamburger from './hamburger'
import CustomLinks, { DesktopSocials } from './custom-links'
import CustomMobileLinks, { MobileSocials } from './custom-mobile-links'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Desktop Navs */}
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

      {/* Mobile Nav */}
      {isOpen ? (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: 1,
            opacity: 1,
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
      ) : null}
    </>
  )
}
