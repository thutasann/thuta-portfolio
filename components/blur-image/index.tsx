import getBase64 from '@/utils/getBase64'
import Image from 'next/image'

interface IBlurImage {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
}

// @ts-ignore
async function BlurImage({ src, alt, fill, className, width, height, priority, ...props }: IBlurImage): any {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL
  const myBlurDataUrl = await getBase64(`${domain}${src}`)

  return (
    <Image
      {...props}
      src={src}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={myBlurDataUrl}
      loading='lazy'
      className={className}
      alt={alt}
      fill={fill}
      priority={priority}
    />
  )
}

export default BlurImage
