'use client'

import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const statistics = [
  {
    count: 3.5,
    title: 'Coding Years',
  },
  {
    count: 15,
    title: 'Completed Projects',
  },
  {
    count: 20,
    title: 'Learnt Projects',
  },
]

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<any>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 3000,
  })
  const isInView = useInView(ref, {
    once: true,
  })

  // Motion Value
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  // Spring Value
  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const Statistics = () => {
  return (
    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
      {statistics.map((stat, idx) => (
        <div key={idx} className='flex flex-col items-end justify-center xl:items-center '>
          <span className='inline-block text-7xl dark:text-light font-[900] md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={stat.count} />+
          </span>
          <h2 className='text-xl text-dark/75 dark:text-light font-[600] capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>
            {stat.title}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Statistics
