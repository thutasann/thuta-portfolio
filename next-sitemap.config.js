/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thutadev.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [`https://thutadev.vercel.app/sitemap.xml`, `https://thutadev.vercel.app/server-sitemap.xml`],
  },
}
