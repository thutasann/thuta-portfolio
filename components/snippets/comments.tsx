'use client'

import Giscus from '@giscus/react'

export default function Comments() {
  return (
    <div className='text-dark dark:text-light'>
      <Giscus
        id='630078088'
        repo='https://github.com/thutasann/thuta-portfolio'
        repoId=''
        category=''
        categoryId=''
        mapping='specific'
        term='Welcome to thuta-portfolio Discussions! '
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        theme='dark_tritanopia'
        lang='en'
        loading='lazy'
      />
    </div>
  )
}
