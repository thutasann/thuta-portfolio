import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://thutadev.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://thutadev.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://thutadev.vercel.app/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://thutadev.vercel.app/articles',
      lastModified: new Date(),
    },
  ]
}
