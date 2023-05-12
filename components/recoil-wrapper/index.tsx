'use client'

import React from 'react'
import { RecoilRoot } from 'recoil'

interface IRecoilWrapper {
  children: React.ReactNode
}

const RecoilWrapper: React.FC<IRecoilWrapper> = ({ children }): React.ReactElement => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default RecoilWrapper
