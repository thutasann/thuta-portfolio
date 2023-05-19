/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client'

import Giscus from '@giscus/react'
import Script from 'next/script'

export default function Comments() {
  return (
    <div className='text-dark dark:text-light'>
      <Script
        strategy='beforeInteractive'
        src='https://giscus.app/client.js'
        data-repo='thutasann/thuta-portfolio'
        data-repo-id='R_kgDOJY46iA'
        data-category='Announcements'
        data-category-id='DIC_kwDOJY46iM4CWm8T'
        data-mapping='pathname'
        data-strict='0'
        data-reactions-enabled='1'
        data-emit-metadata='0'
        data-input-position='bottom'
        data-theme='dark_tritanopia'
        data-lang='en'
        crossOrigin='anonymous'
        async
      ></Script>

      <Giscus
        key={'Comments'}
        id='630078088'
        repo='thutasann/thuta-portfolio'
        repoId='R_kgDOJY46iA'
        category='Announcements'
        categoryId='DIC_kwDOJY46iM4CWm8T'
        mapping='pathname'
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
