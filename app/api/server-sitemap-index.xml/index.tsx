import { getServerSideSitemap } from 'next-sitemap'
import { groq } from 'next-sanity'
import { Snippet } from '../../../types/typings'
import { client } from '../../../utils/sanity.client'

export const getServerSideProps = async (ctx: any) => {
  const query = groq`
    *[_type == "snippet"]
    {
        slug
    }
`
  const slugs: Snippet[] = await client.fetch(query)
  const slugRoutes = slugs.map(slug => `https://thutadev.vercel.app/${slug?.slug.current}`)

  const fields = [
    {
      loc: `https://thutadev.vercel.app`, // Absolute url
      lastmod: new Date().toISOString(),
    },
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
