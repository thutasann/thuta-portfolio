import { AnimatedText } from '@/components/animated-text'
import BlurImage from '@/components/blur-image'
import HireMe from '@/components/hire-me'
import { LinkArrow } from '@/components/icons'
import Layout from '@/components/layout'
import { textData } from '@/constants/texts'
import Link from 'next/link'

export default async function Home() {
  // const token = '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'

  // const headers = {
  //   Authorization: `Bearer ${token}`,
  //   'Content-Type': 'application/json',
  // }

  // const repos: IRepos[] = await fetch('https://api.github.com/users/thutasann/repos', { headers })
  //   .then(response => response.json())
  //   .catch(error => console.error(error))

  return (
    <main className=' flex items-center text-dark w-full min-h-full dark:text-light'>
      <Layout className='pt-0 md:pt-16 sm:pt-8'>
        <div className='flex items-center justify-between w-full lg:flex-col max-w-[1400px] mx-auto'>
          <div className='w-1/2 md:w-full'>
            <BlurImage className='w-full h-auto md:inline-block md:w-full' src='/thutadev.webp' alt='thutadev' width={1920} height={1920} />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText
              text={textData.bannerText.title}
              className='!text-6xl !text-left !leading-[62px] xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl'
            />
            <p className='my-4 text-base font-medium md:text-sm sm:text-[15px]'>{textData.bannerText.para}</p>
            <div className='flex items-center self-start mt-2 gap-4 lg:self-center'>
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
