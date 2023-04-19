'use client'

import { navbarLinks, SocialLinks } from '@/constants/navbar'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Logo from '../logo'

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
      <nav>
        {SocialLinks.map((link, idx) => (
          <Link href={link.link} key={idx} target='_blank' rel='noopener'>
            {link.text}
          </Link>
        ))}
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
