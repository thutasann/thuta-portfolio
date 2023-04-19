'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { quote, quoteSingleWord } from '@/animations'

export const AnimatedText: React.FC<IAnimatedtext> = ({ text, className }): JSX.Element => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1
        variants={quote}
        initial='initial'
        animate='animate'
        className={`inline-block w-full text-dark font-[800] capitalize text-8xl ${className} `}
      >
        {text.split(' ').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block' variants={quoteSingleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
