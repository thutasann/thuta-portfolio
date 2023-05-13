'use client'

import { Snippet } from '@/types/typings'
import React from 'react'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import CustomCopyToClipboard from '../copy-to-clipboard'
import Image from 'next/image'
import urlFor from '@/utils/urlFor'
import BlurImage from '../blur-image'
import Link from 'next/link'
import { useSetRecoilState } from 'recoil'
import { tagState } from '@/atoms/states'
import { useRouter } from 'next/navigation'

interface ISnippetDetailHeader {
  snippet: Snippet
}

const SnippetDetailHeader: React.FC<ISnippetDetailHeader> = ({ snippet }) => {
  const baseUrl: string = `https://thutadev.vercel.app/snippets/${snippet.slug.current}`
  const facebookShareLink: string = `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`
  const twitterSharedLink: string = `https://twitter.com/share?text=${baseUrl}`
  const linkedInSharedLink: string = `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}`

  const setTag = useSetRecoilState(tagState)
  const router = useRouter()

  return (
    <section className='space-y-2 text-dark dark:text-light border border-opacity-50 rounded-md border-primary mb-[50px]'>
      <div className='relative flex flex-col justify-between min-h-56 md:flex-row'>
        {/* Image */}
        <div className='absolute z-[-99] top-0 w-full h-full p-10 opacity-20 blur-sm'>
          <Image className='object-cover object-center mx-auto' src={urlFor(snippet.mainImage).url()} alt={snippet.title} fill priority />
        </div>

        {/* Text */}
        <section className='w-full p-5 bg-opacity-20 bg-primary-teal'>
          {/* Title */}
          <div className='flex flex-col justify-between gap-y-5'>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center space-x-3'>
                <p className='text-dark dark:text-light'>
                  {new Date(snippet._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <div className='flex items-start justify-start mt-auto space-x-2'>
                  {snippet.tags.map(snippet => (
                    <span
                      key={snippet._id}
                      className='category'
                      onClick={() => {
                        setTag(snippet.title)
                        router.push(`/snippets`)
                      }}
                    >
                      {snippet.title}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className='text-4xl md:text-3xl font-extrabold text-dark dark:text-light'>{snippet.title}</h1>
            </div>
            <div className='flex items-center space-x-2'>
              <BlurImage
                className='rounded-full'
                src={urlFor(snippet.author.image).url()}
                alt={snippet.author.name}
                height={40}
                width={40}
              />
              <div className='w-64'>
                <p className='text-lg font-bold text-dark/80 dark:text-light'>{snippet.author.name}</p>
                <div></div>
              </div>
            </div>
          </div>

          {/* description */}
          <div className='mt-4'>
            <h2 className='mb-3 italic text-dark/80 dark:text-light'>{snippet.description}</h2>
          </div>

          {/* Social */}
          <div className='mt-4'>
            <hr className='mb-4 border-primaryGray border-opacity-50' />
            <h3 className='text-dark/80 dark:text-light'>Share This Snippet To :</h3>
            <div className='flex items-center mt-2 space-x-3 text-dark dark:text-light'>
              <a className='icons group' href={facebookShareLink} target='_blank' rel='noopener' aria-label='Facebook Share'>
                <AiFillFacebook className='group-hover:text-light' />
              </a>
              <a className='icons group' href={linkedInSharedLink} target='_blank' rel='noopener' aria-label='LinkedIn Shared'>
                <AiFillLinkedin className='group-hover:text-light' />
              </a>
              <a className='icons group' href={twitterSharedLink} target='_blank' rel='noopener' aria-label='Twitter Share'>
                <FaTwitterSquare className='group-hover:text-light' />
              </a>
              <CustomCopyToClipboard baseUrl={baseUrl} />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default SnippetDetailHeader
