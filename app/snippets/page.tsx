import { AnimatedText } from '@/components/animated-text'
import Layout from '@/components/layout'
import userData from '@/constants/data'
import { Metadata } from 'next'
import React, { Fragment } from 'react'
import { groq } from 'next-sanity'
import { client } from '@/utils/sanity.client'
import SnippetList from '@/components/snippets/snippet-list'

export const metadata: Metadata = {
  title: 'Snippets | Thuta Sann',
  description: userData.about.title,
  keywords: userData.about.keywords,
  openGraph: {
    images: '/thutadev.jpeg',
    type: 'website',
    url: 'https://thutadev.vercel.app/about',
    locale: 'en',
    title: 'Snippets | Thuta Sann',
    description: userData.about.title,
    siteName: userData.about.metaTitle,
    countryName: 'Myanmar',
    alternateLocale: 'eng',
  },
  twitter: {
    title: 'Snippets | Thuta Sann',
    description: userData.about.title,
    card: 'summary_large_image',
    site: '@thutasann3',
    images: '/thutasann-og.webp',
  },
  icons: {
    icon: '/thutadev.jpeg',
  },
}
const query = groq`
    *[_type=='snippet']
    {
        ...,
        author->,
        tags[]->
    } | order(_createdAt desc)
`

const tagsQuery = groq`
    *[_type=='codecategory']
    {
        ...,
    } | order(_createdAt desc)
`

export const revalidate = 30

export const dynamic = 'force-static'

const Articles = async () => {
  const snippets = await client.fetch(query)
  const tags = await client.fetch(tagsQuery)

  return (
    <Fragment>
      <main className='w-full max-w-[1400px] mx-auto mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Snippets' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <SnippetList snippets={snippets} tags={tags} />
        </Layout>
      </main>
    </Fragment>
  )
}

export default Articles
