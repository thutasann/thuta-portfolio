import { techStacks } from '@/constants/data'
import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import getBase64 from '@/utils/getBase64'

async function Skills() {
  return (
    <>
      <h2 className='section-title'>Tech Stacks</h2>
      <div className='mt-16'>
        <Marquee speed={60}>
          <div className='flex items-center xs:gap-[50px] gap-[80px] xs:mr-[50px]  mr-[80px] w-auto'>
            {techStacks.map((tech, idx) => {
              const domain = process.env.NEXT_PUBLIC_DOMAIN_URL
              const myBlurDataUrl = getBase64(`${domain}skills/${tech.src}`) as any

              return (
                <Image
                  key={idx}
                  src={`/skills/${tech.src}`}
                  width={90}
                  height={90}
                  blurDataURL={myBlurDataUrl}
                  loading='lazy'
                  alt='thutadev techstacks'
                  className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center'
                />
              )
            })}
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default Skills
