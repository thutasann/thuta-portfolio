'use client'

import Image from 'next/image'
import { useState } from 'react'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface IBlurImage {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
}

function BlurImage({ src, alt, fill, className, width, height, ...props }: IBlurImage): JSX.Element {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      {...props}
      src={src}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={src}
      className={cn('transition-all duration-700 ease-in-out', isLoading ? 'blur-md' : 'blur-0', className!)}
      onLoadingComplete={() => setLoading(false)}
      alt={alt}
      fill={fill}
    />
  )
}

export default BlurImage
