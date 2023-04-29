'use client'

import Link from 'next/link'
import React from 'react'
import { LinkArrow } from '../icons'

const Resume = () => {
  return (
    <Link href='/cv/Thuta_Sann.pdf' target='_blank' rel='noopener' download={true} className='btnResume'>
      Resume <LinkArrow className='w-6 ml-1' />
    </Link>
  )
}

export default Resume
