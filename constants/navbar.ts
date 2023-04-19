import userData from './data'

export const navbarLinks: ILinks[] = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/about',
    text: 'About',
  },
  {
    link: '/projects',
    text: 'Projects',
  },
  {
    link: '/articles',
    text: 'Articles',
  },
]

export const SocialLinks: ILinks[] = [
  {
    link: userData.socialLinks.github,
    text: 'GitHub',
  },
  {
    link: userData.socialLinks.linkedin,
    text: 'LinkedIn',
  },
  {
    link: userData.socialLinks.twitter,
    text: 'Twitter',
  },
  {
    link: userData.socialLinks.instagram,
    text: 'Instagram',
  },
]
