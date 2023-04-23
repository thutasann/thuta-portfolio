const userData = {
  githubUsername: 'thutasann',
  name: 'THUTA SANN',
  designation: 'PASSIONATE CODER',
  email: 'thutasann2002@gmail.com',
  phone: '+95 9895388882',
  address: 'S/Okkalpa, Yangon, Myanmar',

  about: {
    metaTitle: 'Thuta Sann | Frontend Dev',
    title:
      "I'm a developer that loves building NEXTJS, ANGULAR & SpringBoot and IOS Mobile apps. Also loves building UI/UX with TailwindCSS, Material UI, ChakraUI, etc",
    description: [
      `I've been developing websites since I was 18 years old. I started my web development career with HTML, CSS and PHP. and After PHP, I've learnt Laravel web Framework.`,
      `After learning HTML and struggling with CSS, I came up with a brilliant idea of using Bootstrap and Tailwind so that I don't have to style everything by myself and - for obvious reasons - if you knew Tailwind, you were cool. 👽`,
      `But now, I've been coding in React.js, React Native, Nextjs, Nestjs, MongoDB, MySQL, Tailwind, Flutter programming languages etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.
      Now, I am currently exploring Flutter Programming Language as a Mobile Development & Spring Boot Framework as a Backend Development for Microservices meanwhile Exploring deeply to NextJs.`,
    ],
    keywords: ['Thuta Sann', 'thutadev', 'Thuta Dev', 'Thutasann Developer'],
    currentProject: 'UIKit Netflix Clone',
    currentProjectUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6997520383801270272/',
  },
  resumeUrl: 'https://drive.google.com/file/d/11CVNmYzbdW2OCROig8gHbPJvThP9mMZB/view?usp=sharing',

  socialLinks: {
    instagram: 'https://www.instagram.com/thuta_sann/',
    twitter: 'https://twitter.com/Thutasann3',
    linkedin: 'https://www.linkedin.com/in/thuta-sann-3508a7199/',
    github: 'http://github.com/thutasann/',
    facebook: 'https://www.facebook.com/thuta.sann.52',
  },
}

// 14
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
    title: 'Current Portfolio site',
    link: 'https://thutadev.vercel.app/',
    imgUrl: '/projects/thutasann.png',
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
    category: 'Angular',
    title: 'Angular GameDB App',
    link: 'https://videogame-tts.vercel.app/',
    imgUrl: '/projects/gamedbclone.png',
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
    position: 'Frontend Developer',
    company: 'Codigo',
    companyLink: 'https://www.codigo.co/',
    time: '2022 - Present',
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
    name: 'TailWindCSS',
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
    x: '15vw',
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

export default userData
