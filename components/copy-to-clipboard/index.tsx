'use client'

import React, { useState } from 'react'
import { BiLink } from 'react-icons/bi'
import Alert from './alert'

type Props = {
  baseUrl: string
}

function CustomCopyToClipboard({ baseUrl }: Props) {
  const [alert, setAlert] = useState<boolean>(false)

  return (
    <>
      <span
        onClick={() => {
          navigator.clipboard.writeText(baseUrl)
          setAlert(true)
        }}
        className='icons group'
        aria-label='Copy Link'
      >
        <BiLink className='group-hover:text-light' />
      </span>
      {alert && <Alert alert={alert} setAlert={setAlert} />}
    </>
  )
}

export default CustomCopyToClipboard
