import React from 'react'

const Loader = () => {
  return (
    <div className='z-[9999] top-0 backdrop-blur-md fixed w-full h-full flex items-center justify-center'>
      <div className='w-12 h-12 rounded-full animate-spin border border-solid border-primary border-t-transparent' />
    </div>
  )
}

export default Loader
