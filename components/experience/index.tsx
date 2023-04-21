import { experiences } from '@/constants/data'
import React from 'react'

const Experience = (): JSX.Element => {
  return (
    <>
      <h2 className='section-title'>Experience</h2>
      <div className='w-[75%] mx-auto mt-16 relative'>
        <div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
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
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <div>
        <h3 className='capitalize font-[700] text-2xl'>
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
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='w-full font-medium'>{work}</p>
      </div>
    </li>
  )
}

export default Experience
