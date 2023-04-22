interface ILinks {
  link: string
  text: string
  icon?: React.FC
}

interface ICustomLink {
  href: string
  title: string
  className: string
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
  id: number
  category: string
  title: string
  link: string
  imgUrl: string
  github?: string
  summary?: string
}
