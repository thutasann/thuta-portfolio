'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SkillsData } from '@/constants/data'

const Skills = (): JSX.Element => {
  return (
    <>
      <h2
        className='
      section-title'
      >
        Skills
      </h2>
      <div className='mt-3 w-[90%]  mx-auto h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        {SkillsData.map(({ name, x, y, isWeb }, idx) => (
          <Skill key={idx} name={name} x={x} y={y} isWeb={isWeb} />
        ))}
      </div>
    </>
  )
}

const Skill = ({ name, x, y, isWeb }: ISkill): JSX.Element => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{ x: x, y: y }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.5,
      }}
      className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark text-lg cursor-pointer hover:shadow-none  hover:bg-dark/95 ${
        !isWeb ? 'absolute' : ''
      }`}
    >
      {name}
    </motion.div>
  )
}

export default Skills
