import { AnimatedText } from '@/components/animated-text'
import BlurImage from '@/components/blur-image'
import HireMe from '@/components/hire-me'
import { LinkArrow } from '@/components/icons'
import Layout from '@/components/layout'
import { textData } from '@/constants/texts'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <BlurImage src='/thutadev.webp' alt='thutadev' width={1920} height={1920} />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text={textData.bannerText.title} className='!text-6xl !text-left' />
            <p className='my-4 text-[17px] font-medium'>{textData.bannerText.para}</p>
            <div className='flex items-center self-start mt-2 gap-4'>
              <Link href='/cv/Thuta_Sann.pdf' target='_blank' rel='noopener' download={true} className='btnResume'>
                Resume <LinkArrow className='w-6 ml-1' />
              </Link>
              <Link className='btnContact' href='mailto:thutasann2002@gmail.com'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  )
}
