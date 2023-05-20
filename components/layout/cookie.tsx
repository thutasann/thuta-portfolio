'use client'

import React, { useState } from 'react'
import posthog from 'posthog-js'
import { SiCookiecutter } from 'react-icons/si'
import { IoCloseOutline } from 'react-icons/io5'

const CookieBanner = () => {
  const [close, setClose] = useState<boolean>(false)

  const handleDecline = () => {
    setClose(true)
    posthog.opt_out_capturing()
  }

  const handleAccept = () => {
    setClose(true)
    posthog.opt_in_capturing()
  }

  return (
    <div
      className={`bg-dark  text-light dark:text-dark dark:bg-light w-full h-auto fixed bottom-0 p-3 z-[9000] transition-all duration-500 ease-in-out ${
        close ? 'opacity-0 translate-y-[200%]' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-[4px]'>
          <SiCookiecutter size={20} className='text-light/90 dark:text-dark/90' />
          <h3 className='text-2xl font-[800]'>Cookie</h3>
        </div>
        <button
          className='border-none outline-none hover:bg-primaryGray/40 p-1 rounded-full transition-all duration-200 ease-in-out'
          aria-label='close btn'
          onClick={() => setClose(true)}
        >
          <IoCloseOutline size={23} />
        </button>
      </div>

      <p className='text-md font-[400] mb-3 break-word'>
        I baked some cookies that you have to accept, if you want to enjoy my portfolio. In order to gather information and make
        improvements, I should use some third-party cookies too, Can I?
      </p>

      <div className='flex items-center gap-3'>
        <button className='decline' onClick={handleDecline}>
          Decline
        </button>
        <button className='accept' onClick={handleAccept}>
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
