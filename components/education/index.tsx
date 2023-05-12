'use client'

import { educations } from '@/constants/data'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Icon } from '../experience/icon'
import { IEducation } from '@/types/typings'

const Education = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <>
      <h2 className='section-title dark:text-light'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto mt-16 relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className='absolute left-9 top-0 w-[4px] xs:h-full h-[100vh] bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          {educations.map(({ type, time, place, info, link }, idx) => (
            <EducationCard key={idx} type={type} time={time} place={place} info={info} link={link} />
          ))}
        </ul>
      </div>
    </>
  )
}

const EducationCard: React.FC<IEducation> = ({ type, time, place, info, link }): JSX.Element => {
  const ref = useRef<any>(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
      <Icon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
        }}
      >
        <h3 className='capitalize font-[700] text-2xl dark:text-light sm:text-xl xs:text-lg'>
          {type}&nbsp;
          <a
            href={link}
            target='_blank'
            rel='noopener'
            aria-label={type}
            className='text-primary capitalize hover:text-primaryDark duration-300 transition-all ease-in-out'
          >
            @{place}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='w-full font-medium dark:text-light md:text-sm'>{info}</p>
      </motion.div>
    </li>
  )
}

export default Education
