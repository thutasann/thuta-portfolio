'use client'

import React from 'react'
import UpcomingLottie from '../../components/lottie/upcoming.json'
import Lottie, { Options } from 'react-lottie'

const options: Options = {
  loop: true,
  autoplay: true,
  animationData: UpcomingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const UpcomingAnimation = () => {
  return <Lottie options={options} width={500} ariaLabel='Article Upcoming' title='Articles Upcoming' ariaRole='animation' />
}

export default UpcomingAnimation
