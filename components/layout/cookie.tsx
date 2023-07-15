'use client'

import React, { useEffect, useState } from 'react'
import { SiCookiecutter } from 'react-icons/si'
import { IoCloseOutline } from 'react-icons/io5'
import Cookies from 'js-cookie'

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true'
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365

const CookieBanner = () => {
  const [close, setClose] = useState<boolean>(false)

  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true)

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true'
    setCookieConsentIsTrue(consentIsTrue)
  }, [])

  const handleAccept = () => {
    setClose(true)

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      })
      setCookieConsentIsTrue(true)
    }
  }

  const handleDecline = () => {
    setClose(true)
  }

  return (
    <div
      className={` bg-dark  text-light selection:text-dark dark:selection:text-light dark:text-dark dark:bg-light w-full h-auto fixed bottom-0 p-3 z-[9000] transition-all duration-500 ease-in-out ${
        close || cookieConsentIsTrue ? 'opacity-0 translate-y-[200%]' : 'opacity-100 translate-y-0'
      }`}
    >
      <button
        className='absolute right-3 top-2 border-none outline-none hover:bg-primaryGray/40 p-1 rounded-full transition-all duration-200 ease-in-out'
        aria-label='close btn'
        onClick={() => setClose(true)}
      >
        <IoCloseOutline size={23} />
      </button>
      <div className='mx-8 px-5 lg:px-0 flex items-center flex-row lg:flex-col justify-between lg:items-start lg:justify-start'>
        <div>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-[4px]'>
              <SiCookiecutter size={20} className='text-light/90 dark:text-dark/90' />
              <h3 className='text-2xl font-[800]'>Cookie</h3>
            </div>
          </div>

          <p className='text-md font-[400] mb-3 break-word'>
            I baked some cookies that you have to accept, if you want to enjoy my portfolio. <br className='block md:hidden' />
            In order to gather information and make improvements, I should use some third-party cookies too, Can I?
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <button className='decline' onClick={handleDecline}>
            Decline
          </button>
          <button className='accept' onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
