'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mr-2 mt-1'>
      <MotionLink
        href='/'
        className='w-16 h-16 bg-dark text-light flex items-center justify-center font-[900] rounded-full text-3xl border-solid border-transparent  hover:shadow-md dark:border-light border'
        whileHover={{
          backgroundColor: ['#121212', '#00DCDC', '#189AB4', '#0074B7', '#0C1446', '#121212'],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      >
        T
      </MotionLink>
    </div>
  )
}

export default Logo
