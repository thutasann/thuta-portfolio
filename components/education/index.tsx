'use client'

import { educations } from '@/constants/data'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Icon } from '../experience/icon'

const Education = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <>
      <h2 className='section-title'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto mt-16 relative'>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className='absolute left-9 top-0 w-[4px] h-[100vh] bg-dark origin-top'
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
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
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
        <h3 className='capitalize font-[700] text-2xl'>
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
        <span className='capitalize font-medium text-dark/75'>
          {time} | {place}
        </span>
        <p className='w-full font-medium'>{info}</p>
      </motion.div>
    </li>
  )
}

export default Education
