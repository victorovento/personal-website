module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://victorvento.net`,
    // Your Name
    name: 'Victor Vento',
    // Main Site Title
    title: `Victor Vento | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer - Transforming Ideas into Seamless Software Experiences.`,
    // Optional: Twitter account handle
    author: `@victorovento`,
    // Optional: Github account URL
    github: `https://github.com/victorovento`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/vvento/`,
    // Content of the About Me section
    about: `Hello! I'm a passionate ${new Date().getFullYear() - 2000 - (new Date().getMonth() < 6 || (new Date().getMonth() === 6 && new Date().getDate() < 5) ? 1 : 0)}-year-old Software Engineer hailing from the vibrant and culturally rich island of Cuba. With a love for all things tech and a knack for solving complex problems, I've embarked on a journey to make the digital world more efficient and user-friendly.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Statistical variables calculator',
        description:
          'Calcule some statistical variables from the comand prompt, CLI application I made with C++',
        link: 'https://github.com/victorovento/statistical-variables-calculator',
      },
      {
        name: 'TODO List App',
        description:
          'A fast and responsive To-Do list app made with Node.js, HTML and CSS.',
        link: 'https://github.com/victorovento/todo-list',
      },
      {
        name: 'This Portfolio',
        description:
          'A very simple portfolio I made using Gatsby.js and Node.js to showcase my skills and experience',
        link: 'https://github.com/victorovento/website',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'WELS Sytems Foundation',
        location: 'Miami, FL',
        description: 'Software Developer, Jan 2024 - Present',
        link: 'https://bwelz.org',
      },
      {
        name: 'Upwork',
        location: 'Miami, FL',
        description: 'Freelancer, Jun 2023 - Dec 2023',
        link: 'https://upwork.com',
      },
      {
        name: 'ETECSA',
        location: 'Pinar del Rio, Cuba',
        description: 'Software Engineer, January 2023 - June 2023',
        link: 'https://www.etecsa.cu',
      },
      {
        name: 'Universidad de Pinar del Rio',
        location: 'Pinar del Rio, Cuba',
        description: 'Software Developer Internship, Sep 2020 - December 2022',
        link: 'http://www.upr.edu.cu/home/index',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, TypeScript, .NET, Node.js, Express.js, Angular',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};