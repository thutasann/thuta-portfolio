import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function NoResult() {
  return (
    <div className='flex flex-col items-center justify-center my-5 space-y-3 text-dark/50 dark:text-light/50'>
      <MagnifyingGlassIcon className='w-10 h-10 -ml-4 fill-primary-teal' />
      <h3>No Results Found.</h3>
    </div>
  )
}

export default NoResult
