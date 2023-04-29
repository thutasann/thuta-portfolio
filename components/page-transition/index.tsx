'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PageTransition = (): JSX.Element => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-full h-full  bg-primary z-[4000]'
        initial={{
          x: '100%',
          y: '100%',
        }}
        animate={{
          x: '0%',
          width: '0%',
        }}
        exit={{
          x: ['0%', '100%'],
          width: ['0%', '100%'],
        }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-full h-full  bg-light z-[4000]'
        initial={{
          x: '100%',
          y: '100%',
        }}
        animate={{
          x: '0%',
          width: '0%',
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-full h-full  bg-dark z-[4000]'
        initial={{
          x: '100%',
          y: '100%',
        }}
        animate={{
          x: '0%',
          width: '0%',
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: 'easeInOut',
        }}
      />
    </>
  )
}

export default PageTransition
