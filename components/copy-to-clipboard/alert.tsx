/* eslint-disable no-unused-vars */
'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeVariants } from '../../animations'
import { FaCopy } from 'react-icons/fa'

type Props = {
  alert: boolean
  setAlert: any
}

function Alert({ alert, setAlert }: Props) {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      initial='initialState'
      animate='animateState'
      exit='exitState'
      transition={{
        duration: 0.75,
        ease: 'easeOut',
      }}
      variants={fadeVariants}
      role='alert'
      className='-ml-2 md:ml-4 p-[10px] border border-primary  rounded-xl'
    >
      <div className='flex items-start gap-4'>
        <span className='text-primaryDark'>
          <FaCopy className='mt-[3px]' />
        </span>

        <div className='flex-1 block md:hidden'>
          <p className='block text-[12px] text-dark dark:text-light  font-[600]'> Copied To Clipboard </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Alert
