import Link from 'next/link'
import React from 'react'
import Layout from '../layout'

const Footer = () => {
  return (
    <footer className='w-full border-t border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build with <span className='text-primary text-2xl px-1'>&#9825;</span>by&nbsp;
          <Link href='/' className='underline underline-offset-2 '>
            Thuta Sann
          </Link>
        </div>
        <Link href='mailto:thutasann2002@gmail.com' aria-label='Say Hello' className='underline underline-offset-2'>
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
