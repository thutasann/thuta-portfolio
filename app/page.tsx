import { AnimatedText } from '@/components/animated-text'
import BlurImage from '@/components/blur-image'
import HireMe from '@/components/hire-me'
import { LinkArrow } from '@/components/icons'
import Layout from '@/components/layout'
import Repos from '@/components/repos'
import { textData } from '@/constants/texts'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import Link from 'next/link'
import userData from '@/constants/data'
import { IRepos } from '@/types/typings'
import { getLastestRepos } from '@/utils/getLatestRepos'

export default async function Home() {
  const repos: IRepos[] = await getLastestRepos()

  return (
    <main className=' flex items-center text-dark w-full min-h-full dark:text-light'>
      <Layout className='pt-0 md:pt-16 sm:pt-8'>
        <div className='flex items-center justify-between w-full  lg:flex-col max-w-[1400px] mx-auto'>
          <div className='w-1/2 md:w-full'>
            <BlurImage className='w-full h-auto md:inline-block md:w-full' src='/thutadev.webp' alt='thutadev' width={1920} height={1920} />
          </div>
          <div className='w-1/2 flex flex-col  items-center self-center lg:w-full lg:text-center'>
            <AnimatedText
              text={textData.bannerText.title}
              className='!text-6xl !text-left !leading-[62px] xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl'
            />
            <p className='my-4 text-base font-medium md:text-sm sm:text-[15px]'>{textData.bannerText.para}</p>
            <div className='flex items-center self-start mt-2 gap-4 lg:self-center'>
              <a
                href='/cv/Thuta_Sann.pdf'
                target='_blank'
                aria-label='thutasann resume'
                rel='noopener'
                download={true}
                className='btnResume'
              >
                Resume <LinkArrow className='w-6 ml-1' />
              </a>
              <Link className='btnContact' href='mailto:thutasann2002@gmail.com'>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-16'>
          <div className=''>
            <AnimatedText
              text='Latest Codes'
              className='!text-6xl !text-left !leading-[62px] xl:!text-5xl  lg:!text-5xl md:!text-5xl sm:!text-4xl'
            />
            <p className='mt-2 text-base text-dark/90 dark:text-light/90'>
              You can explore all other repos at my{' '}
              <a
                className='underline underline-offset-2 hover:opacity-80'
                href={userData.socialLinks.github}
                target='_blank'
                rel='noopener'
                aria-label='thutasann github'
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <Repos repos={repos} />
        </div>
      </Layout>
      <HireMe />
    </main>
  )
}
