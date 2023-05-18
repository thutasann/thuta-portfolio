import React from 'react'
import { groq } from 'next-sanity'
import { Snippet } from '@/types/typings'
import { client } from '@/utils/sanity.client'
import urlFor from '@/utils/urlFor'
import { Metadata } from 'next'
import userData from '@/constants/data'
import CodeBlock from '@/components/code-block'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/rich-text-component'
import SnippetDetailHeader from '@/components/snippets/header'

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

  return (
    <section className='w-full h-full xl:p-24 lg:p-16 md:p-9 p-32 pt-12'>
      <article className='pb-28 mt-7'>
        <SnippetDetailHeader snippet={snippet} />

        <div className='text-dark dark:text-light'>
          <PortableText value={snippet.body} components={RichTextComponents} />
        </div>

        <CodeBlock snippet={snippet} />
      </article>
    </section>
  )
}

export default SnipppetDetail
