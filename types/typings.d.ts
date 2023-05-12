interface ILinks {
  link: string
  text: string
  icon?: React.FC
}

interface ICustomLink {
  href: string
  title: string
  className: string
  toggle?: any
}

interface IIcons {
  className?: string
}

interface IAnimatedtext {
  text: string
  className?: string
}

interface ISkill {
  name: string
  x: string
  y: string
  isWeb?: boolean
}

interface IExperience {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

interface IEducation {
  type: string
  time: string
  place: string
  info: string
  link: string
}

interface IProject {
  id?: number
  category: string
  title: string
  link: string
  imgUrl: string
  github?: string
  summary?: string
}

interface IHumburger {
  onClick: () => void
  isOpen: boolean
}

interface IRepos {
  name: string
  description: string
  clone_url: string
}

import { Reference } from 'sanity'

type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Post extends Base {
  author: Author
  body: Block[]
  categories: Category[]
  mainImage: Image
  slug: Slug
  title: string
  description: string
  code: any
}

interface Snippet extends Base {
  author: Author
  title: string
  slug: Slug
  description: string
  tags: CodeCategory[]
  code: any
  body: Block[]
}

interface Category {
  _createdAt: string
  _updatedAt: string
  _id: string
  title: string
  description: string
}

interface CodeCategory {
  _createdAt: string
  _updatedAt: string
  _id: string
  title: string
  description: string
}

interface Author extends Base {
  bio: Blockp[]
  image: Image
  name: string
  slug: Slug
}

interface Image {
  _ref: string
  _type: 'reference'
}

interface Slug {
  _type: 'slug'
  current: string
}

interface Block {
  _key: string
  _type: 'block'
  children: Span[]
  markDefs: any[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
  _key: string
  _type: 'span'
  marks: string[]
  text: string
}

interface Category extends Base {
  description: string
  title: string
}

interface MainImage {
  _type: 'image'
  asset: Reference
}

interface Title {
  _type: 'string'
  current: string
}

export interface Meta {
  title?: string
  description?: string
  keywords?: string
  url?: string
  image?: string
  ogimage?: string
  type?: string
}
