'use client'

import { AnimatePresence } from 'framer-motion'
import React from 'react'

interface IClientFramer {
  children: React.ReactElement
}

const ClientFramer = ({ children }: IClientFramer) => {
  return <AnimatePresence>{children}</AnimatePresence>
}

export default ClientFramer
