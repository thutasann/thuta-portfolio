import Layout from '@/components/layout'
import { textData } from '@/constants/texts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image
              src='/thutadev.webp'
              alt='thutadev'
              className='w-full h-auto rounded-md'
              width={1920}
              height={1920}
              loading='eager'
              priority
              quality={100}
            />
          </div>
          <div className='w-1/2'>
            <h1>{textData.bannerText.title}</h1>
            <p>{textData.bannerText.para}</p>
          </div>
        </div>
      </Layout>
    </main>
  )
}
