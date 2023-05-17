import Link from 'next/link'
import React from 'react'
import Layout from '../layout'

const Footer = () => {
  return (
    <footer className='w-full border-t  border-dark/60 font-medium text-lg dark:text-light dark:border-light/60'>
      <Layout className='py-8 flex lg:flex-col md:gap-y-2 items-center justify-between lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build with <span className='text-primaryDark dark:text-primary text-2xl px-1'>&#9825;</span>by&nbsp;
          <Link href='/' className='underline underline-offset-2 dark:hover:text-light/75 hover:text-dark/75 '>
            Thuta Sann
          </Link>
        </div>
        <Link
          href='mailto:thutasann2002@gmail.com'
          aria-label='Say Hello'
          className='underline underline-offset-2 dark:hover:text-light/75 hover:text-dark/75'
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
