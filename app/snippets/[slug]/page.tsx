import React from 'react'
import { groq } from 'next-sanity'
import { Snippet } from '@/types/typings'
import { client } from '@/utils/sanity.client'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import BlurImage from '@/components/blur-image'
import urlFor from '@/utils/urlFor'
import Link from 'next/link'
import CustomCopyToClipboard from '@/components/copy-to-clipboard'
import Image from 'next/image'
import { Metadata } from 'next'
import userData from '@/constants/data'
import CodeBlock from '@/components/code-block'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/rich-text-component'

interface Props {
  params: {
    slug: string
  }
}

export const revalidate = 30

export async function generateStaticParams() {
  const query = groq`
    *[_type == "snippet"]
    {
        slug
    }
  `

  const slugs: Snippet[] = await client.fetch(query)
  const slugRoutes = slugs.map(slug => slug?.slug.current)

  return slugRoutes?.map(slug => ({
    slug,
  }))
}

async function getSnippet(slug: string) {
  const query = groq`
        *[_type == 'snippet' && slug.current == $slug][0]
        {
            ...,
            author->,
            tags[]->
        }
    `
  const snippet = await client.fetch(query, { slug })
  return snippet
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const snippet: Snippet = await getSnippet(params.slug)
  return {
    title: snippet.title + ' | Thuta Sann',
    openGraph: {
      images: urlFor(snippet.mainImage).url(),
      type: 'website',
      url: `https://thutadev.vercel.app/snippets/${snippet.slug.current}`,
      locale: 'en',
      title: snippet.title + ' | Thuta Sann',
      description: snippet.description,
      siteName: userData.about.metaTitle,
      countryName: 'Myanmar',
      alternateLocale: 'eng',
    },
    twitter: {
      title: snippet.title + ' | Thuta Sann',
      description: snippet.description,
      card: 'summary_large_image',
      site: '@thutasann3',
      images: urlFor(snippet.mainImage).url(),
    },
  }
}

const SnipppetDetail = async ({ params: { slug } }: Props) => {
  const query = groq`
        *[_type == 'snippet' && slug.current == $slug][0]
        {
            ...,
            author->,
            tags[]->
        }
    `

  const snippet: Snippet = await client.fetch(query, { slug })

  const baseUrl: string = `https://thutadev.vercel.app/snippets/${snippet.slug.current}`
  const facebookShareLink: string = `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`
  const twitterSharedLink: string = `https://twitter.com/share?text=${baseUrl}`
  const linkedInSharedLink: string = `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}`

  return (
    <section className='w-full h-full xl:p-24 lg:p-16 md:p-9 p-32 pt-12'>
      <article className='pb-28 mt-7'>
        {/* Header */}
        <section className='space-y-2 text-dark dark:text-light border border-opacity-50 rounded-md border-primary mb-[50px]'>
          <div className='relative flex flex-col justify-between min-h-56 md:flex-row'>
            {/* Image */}
            <div className='absolute z-[-99] top-0 w-full h-full p-10 opacity-20 blur-sm'>
              <Image
                className='object-cover object-center mx-auto'
                src={urlFor(snippet.mainImage).url()}
                alt={snippet.title}
                fill
                priority
              />
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
                        <Link key={snippet._id} href='#' className='category'>
                          {snippet.title}
                        </Link>
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
                <h3 className='text-dark/80 dark:text-light'>Share This Blog To :</h3>
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

        <div className='text-dark dark:text-light'>
          <PortableText value={snippet.body} components={RichTextComponents} />
        </div>

        <CodeBlock snippet={snippet} />
      </article>
    </section>
  )
}

export default SnipppetDetail
