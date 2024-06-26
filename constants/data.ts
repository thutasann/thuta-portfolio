import { IEducation, IExperience, IProject, ISkill } from '@/types/typings'

const userData = {
  githubUsername: 'thutasann',
  name: 'THUTA SANN',
  designation: 'PASSIONATE CODER',
  email: 'thutasann2002@gmail.com',
  phone: '+65 86952624',
  address: 'YISHUN AVE 6, SINGAPORE',

  about: {
    metaTitle: 'Thuta Sann | Software Developer',
    title:
      "I'm a Software Developer who Passionate about crafting full-stack applications with React/Next.js, Angular, Node.js/NestJS, and .NET. Enthusiast for designing sleek, modern interfaces using the latest UI/UX frameworks.",
    description: [
      `I've been developing websites since I was 18 years old. I started my web development career with HTML, CSS and PHP. and After PHP, I've learnt Laravel web Framework.`,
      `After learning HTML and struggling with CSS, I came up with a brilliant idea of using Bootstrap and Tailwind so that I don't have to style everything by myself and - for obvious reasons - if you knew Tailwind, you were cool. `,
      `But now, I've been coding in Reactjs, React Native, Nextjs, Nestjs, MongoDB, MySQL, Tailwind, Nodejs, C# and .NETCore Tech stacks etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.
      Now, I'm currently learning MERN Stack and .NET Core as Full Stack Development, Nestjs as Backend Development and React Native as Hybrid App Development while Exploring deeply to React/NextJs.`,
    ],
    keywords: ['Thuta Sann', 'thutadev', 'Thuta Dev', 'thuta dev', 'Thutasann Developer'],
  },

  socialLinks: {
    instagram: 'https://www.instagram.com/thuta_sann/',
    twitter: 'https://twitter.com/Thutasann3',
    linkedin: 'https://www.linkedin.com/in/thuta-sann-3508a7199/',
    github: 'http://github.com/thutasann/',
    facebook: 'https://www.facebook.com/thuta.sann.52',
  },
}

export const projects: IProject[] = [
  {
    id: 3,
    category: 'React.js',
    title: 'Edubase Idea Sharing app',
    link: 'http://edubase-d4c34.web.app/',
    imgUrl: '/projects/edubase.png',
    github: 'https://github.com/thutasann/edubase',
    summary:
      'This is the Educational Idea Sharing app named Edubase where people can share their idea like a social media with secure role-based system.',
  },
  {
    id: 2,
    category: 'MERN Stack',
    title: 'MERN Chat + Game App',
    link: 'https://mern-t-chat.vercel.app/',
    imgUrl: '/projects/mern-chat.png',
    github: 'https://github.com/thutasann/mern-chat',
  },
  {
    id: 5,
    category: 'Next.js',
    title: 'Personal Portfolio site',
    link: 'https://thutadev.vercel.app/',
    imgUrl: '/projects/portfolio.png',
    github: 'https://github.com/thutasann/thuta-portfolio',
  },
  {
    id: 6,
    category: 'React.js',
    title: 'Slack Clone',
    link: 'https://slack-a3bcd.web.app/',
    imgUrl: '/projects/slackclone.png',
    github: 'https://github.com/thutasann/slack-v1',
  },
  {
    id: 7,
    category: 'React.js',
    title: 'Gmail Clone',
    link: 'https://clone-e131e.web.app/',
    imgUrl: '/projects/gmailclone.png',
    github: 'https://github.com/thutasann/react-gmail-clone',
  },
  {
    id: 8,
    category: 'Next.js',
    title: 'Twitter Clone',
    link: 'https://twitter-clone-thutasann.vercel.app/',
    imgUrl: '/projects/twitterclone.png',
    github: 'https://github.com/thutasann/twitter-clone',
  },
  {
    id: 9,
    category: 'React.js',
    title: 'LinkedIn Clone',
    link: 'https://linkedin-3ea13.web.app/',
    imgUrl: '/projects/linkedinclone.png',
    github: 'https://github.com/thutasann/react-linkedin-clone',
  },
  {
    id: 10,
    category: 'React Native',
    title: 'React Native Signal Clone',
    link: 'https://signal-clone-b6a27.web.app/',
    imgUrl: '/projects/rnclone.png',
    github: 'https://github.com/thutasann/signal-chat-app',
  },
  {
    id: 11,
    category: 'Next.js',
    title: 'NEXTJS Reddit Clone',
    link: 'https://reddit-thuta.vercel.app/',
    imgUrl: '/projects/redditclone.png',
  },
  {
    id: 12,
    category: 'Gatsby.js',
    title: 'Digital Laboratory Website',
    link: 'https://digitallaboratory.net/',
    imgUrl: '/projects/digital-lab.png',
  },
  {
    id: 13,
    category: 'Angular',
    title: 'Angular Currency Checker',
    link: 'https://currencychecker-thuta.vercel.app/',
    imgUrl: '/projects/angular-currency.png',
    github: 'https://github.com/thutasann/angular-currency-checker',
  },
  {
    id: 19,
    category: 'UIKit',
    title: 'Netflix Clone',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6997520383801270272/',
    imgUrl: '/projects/netflix-clone.png',
    github: 'https://github.com/thutasann/swift-netflix-clone',
  },
  {
    id: 20,
    category: 'SwiftUI',
    title: 'SwiftUI KickOff',
    link: 'https://github.com/thutasann/SwiftUI-Kick-Off#readme',
    imgUrl: '/projects/swiftui-kickoff.png',
    github: 'https://github.com/thutasann/SwiftUI-Kick-Off',
  },
  {
    id: 20,
    category: 'SwiftUI',
    title: 'SwiftUI UBER App',
    link: 'https://github.com/thutasann/swiftui-UBER-rebuild#readme',
    imgUrl: '/projects/swift-ui-uber.png',
    github: 'https://github.com/thutasann/swiftui-UBER-rebuild',
    summary:
      'This is my IOS development with SwiftUI by Re-building the Uber App focusing on Map, Location Search, Computing price, Light/Dark Theme.',
  },
  {
    id: 20,
    category: 'SwiftUI',
    title: 'Animated Weather App UI',
    link: 'https://github.com/thutasann/swiftui-weather-app#readme',
    imgUrl: '/projects/swift-ui-weather-app.png',
    github: 'https://github.com/thutasann/swiftui-weather-app',
  },
  {
    id: 20,
    category: 'SwiftUI',
    title: 'Core Data TaskManager',
    link: 'https://github.com/thutasann/swiftui-coredata-task-manager#readme',
    imgUrl: '/projects/swiftui-taskmanager.png',
    github: 'https://github.com/thutasann/swiftui-coredata-task-manager',
  },
]

export const experiences: IExperience[] = [
  {
    position: 'Software Developer',
    company: 'Rockqet',
    companyLink: 'https://rockqet.com/',
    time: '2023 - Present',
    address: 'Singapore',
    work: 'Software developer who is responsible for building complex real time web-based application with Angular, Nextjs, Nodejs, Nestjs',
  },
  {
    position: 'Frontend Developer',
    company: 'Codigo',
    companyLink: 'https://www.codigo.co/',
    time: '2022 - 2023',
    address: 'Singapore',
    work: 'Frontend Developer who is responsible for Website Development and PWA Development with ReactJS and NextJS.',
  },
  {
    position: 'Junior Developer',
    company: 'Yoma Bank Ltd',
    companyLink: 'https://yomabank.com/',
    time: '2022',
    address: 'Myanmar',
    work: 'Web Developer who is responsible for building Banking system web application with AngularTS.',
  },
  {
    position: 'Frontend Developer',
    company: 'Digital Laboratory',
    companyLink: 'https://digitallaboratory.net/',
    time: '2022',
    address: 'Myanmar',
    work: 'Frontend Developer who is responsible for building Frontend websites with Gatsby.js, Nextjs, WordPress, Strapi.',
  },
  {
    position: 'Freelance Developer',
    company: 'self employed',
    companyLink: 'https://thutadev.vercel.app/',
    time: '2021 - 2022',
    address: 'Myanmar',
    work: 'Freelance Web Developer who is responsible for crafting websites along with UI/UX Design.',
  },
]

export const educations: IEducation[] = [
  {
    type: 'Global High Achiever Award',
    place: 'NCC Education',
    time: '2022',
    link: 'https://www.nccedu.com/',
    info: "I'm glad to announce that I am awarded the Global High Achiever Award From the NCC Education (UK).",
  },
  {
    type: 'Graduation',
    place: 'University of Greenwich',
    time: '2022',
    link: 'https://www.gre.ac.uk/',
    info: 'Qualified BSc (Hons) in Computing from University of Greenwich',
  },
  {
    type: 'Level 5 Diploma in Computing',
    place: 'NCC Education',
    time: '2020',
    link: 'https://www.nccedu.com/',
    info: 'Qualified Level 5 Diploma in Computing from NCC Education',
  },
  {
    type: 'Level 4 Diploma in Computing',
    place: 'NCC Education',
    time: '2019',
    link: 'https://www.nccedu.com/',
    info: 'Qualified Level 4 Diploma in Computing from NCC Education',
  },
  {
    type: 'Matriculation',
    place: 'No(1) B.E.H.S Thingangyun',
    time: '2018',
    link: 'https://www.facebook.com/profile.php?id=100064211914161',
    info: 'Matriculated with Flying colors',
  },
]

export const SkillsData: ISkill[] = [
  {
    name: 'Web',
    x: '',
    y: '',
    isWeb: true,
  },
  {
    name: 'ReactJs',
    x: '-20vw',
    y: '6vw',
  },
  {
    name: 'GatsbyJS',
    x: '-20vw',
    y: '-2vw',
  },
  {
    name: 'NextJS',
    x: '-15vw',
    y: '-10vw',
  },
  {
    name: 'TailwindCSS',
    x: '20vw',
    y: '6vw',
  },
  {
    name: 'Typescript',
    x: '0vw',
    y: '-10vw',
  },
  {
    name: 'NodeJS',
    x: '0vw',
    y: '-20vw',
  },
  {
    name: 'MongoDB',
    x: '17vw',
    y: '-10vw',
  },

  {
    name: 'Firebase',
    x: '20vw',
    y: '-3vw',
  },

  {
    name: 'Git',
    x: '0vw',
    y: '10vw',
  },
]

export const techStacks = [
  {
    src: 'nextjs.webp',
    width: 500,
    height: 500,
  },
  {
    src: 'nestjs.svg',
    width: 500,
    height: 500,
  },
  {
    src: 'react.png',
    width: 288,
    height: 288,
  },
  {
    src: 'typescript.png',
    width: 360,
    height: 360,
  },
  {
    src: 'javascript.png',
    width: 360,
    height: 360,
  },
  {
    src: 'tailwind.png',
    width: 256,
    height: 256,
  },
  {
    src: 'firebase.png',
    width: 288,
    height: 288,
  },
  {
    src: 'mongodb.png',
    width: 413,
    height: 484,
  },
  {
    src: 'nodejs.png',
    width: 2400,
    height: 1472,
  },
  {
    src: 'graphql.png',
    width: 2048,
    height: 2048,
  },
]

export default userData
