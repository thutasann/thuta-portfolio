'use client'

import { techStacks } from '@/constants/data'
import React from 'react'
import Marquee from 'react-fast-marquee'
import BlurImage from '../blur-image'

const Skills = (): JSX.Element => {
  return (
    <>
      <h2 className='section-title'>Tech Stacks</h2>
      <div className='mt-16'>
        <Marquee speed={60}>
          <div className='flex items-center xs:gap-[50px] gap-[80px] xs:mr-[50px]  mr-[80px] w-auto'>
            {techStacks.map((tech, idx) => (
              <BlurImage
                key={idx}
                src={'/skills/' + tech.src}
                width={90}
                height={90}
                alt='thutadev techstacks'
                className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center'
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default Skills
