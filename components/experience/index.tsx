'use client'

import { experiences } from '@/constants/data'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Icon } from './icon'
import { IExperience } from '@/types/typings'

const Experience = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <>
      <h2 className='section-title'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto mt-16 relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              position={exp.position}
              company={exp.company}
              companyLink={exp.companyLink}
              time={exp.time}
              address={exp.address}
              work={exp.work}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

const ExperienceCard: React.FC<IExperience> = ({ position, company, companyLink, time, address, work }): JSX.Element => {
  const ref = useRef<any>(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
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
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            rel='noopener'
            aria-label={company}
            className='text-primary capitalize hover:text-primaryDark duration-300 transition-all ease-in-out'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='w-full font-medium dark:text-light md:text-sm'>{work}</p>
      </motion.div>
    </li>
  )
}

export default Experience
