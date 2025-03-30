import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  linkedIn,
  github,
  leetcode,
  blogTheme,
  companyTheme, 
  statsDashboard,
  lyrics,
  imageSearchApp,
  fellacarz,
  textToSpeech,
  xcaliber,
  comingSoon,
  workloop,
  nextJsSmall
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJS Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJsSmall,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Xcaliber Infotech Pvt. Ltd",
    company_website: "https://xcaliberinfotech.com/",
    icon: xcaliber,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      
      "Crafted highly interactive web applications through the utilization of React, HTML5, CSS, JSON, Javascript, TailwindCSS with a proven track record of seamlessly integrating RESTful APIs.",
      "Developed Reusable Stateful Dynamic UI Components using React, Hooks, Redux, TypeScript listening for state changes.",
      "Optimized the Redux store, reducing load time by 25% and significantly boosting system performance by executing best state management practices.",
      "Implemented React Router to establish protected routes based on user-specific access roles, ensuring seamless and role-driven navigation.",
    ],
  },
];

const projects = [
  {
    name: "WorkLoop",
    description:
      "A real-time workflow management SPA with 1:1 and group messaging, online/offline status tracking, instant message delivery, typing indicators, optimized file uploads, media rendering, and customizable themes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "Semantic UI",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: workloop,
    hosted_link: "https://slacky-b869a.web.app/",
  },
  {
    name: "GridFlow",
    description:
      "A spreadsheet application with real-time two-way data binding across multiple sheets. It detects circular dependencies using cycle detection algorithms and visually highlights errors using DFS.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "dom api",
        color: "green-text-gradient",
      },
      {
        name: "webstorage api",
        color: "orange-text-gradient",
      },
      {
        name: "html css",
        color: "pink-text-gradient",
      },
    ],
    image: comingSoon,
    hosted_link: "",
  },
  {
    name: "FellaCarz",
    description:
      "A UI project for a startup based in kota, rajasthan, where in I was required to make react based UI, for car rental business. It has many features like booking car, filtering, search and list nearby rentals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context api",
        color: "green-text-gradient",
      },
      {
        name: "html css",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: fellacarz,
    hosted_link: "https://ecstatic-hermann-8665df.netlify.app/",
  },
];

const oldProjects = [
  {
    name: "Blog Theme",
    description: "Blog theme for wordpress that contains smooth scroll effects, cool animations, post catagorisation sections and much more.",
    tags: [
      { name: "sass/scss", color: "text-yellow-300" },
      { name: "javascript", color: "text-gray-500" },
      { name: "HTML CSS", color: "orange-text-gradient" },
    ],
    image: blogTheme,
    hosted_link: "https://jolly-lamport-b01c2e.netlify.app/",
  },
  {
    name: "Dashboard Theme",
    description: "A dashboard theme that shows you statistics based on data, it shows graphs for better visualisation, tabular data, and smooth stat loading effect with cool animations.",
    tags: [
      { name: "Material UI", color: "text-yellow-300" },
      { name: "javascript", color: "text-gray-500" },
      { name: "HTML CSS", color: "orange-text-gradient" },
    ],
    image: statsDashboard,
    hosted_link: "https://trusting-kilby-a30aac.netlify.app/",
  },
  {
    name: "Text To Speech",
    description: "This is a Web app which uses Speech API for instant translation from text. It is useful for visually impared people.",
    tags: [
      { name: "javascript", color: "text-yellow-300" },
      { name: "UI", color: "text-gray-500" },
    ],
    image: textToSpeech,
    hosted_link: "https://sad-albattani-9b44de.netlify.app/",
  },
  {
    name: "Company Landing Page",
    description: "A unique vanilla css styled landing page template for any organisation to make there presence in online world. It includes contact form, services section and more",
    tags: [
      { name: "Bootstrap", color: "text-yellow-300" },
      { name: "HTML CSS", color: "text-gray-500" },
    ],
    image: companyTheme,
    hosted_link: "https://focused-mccarthy-29d238.netlify.app/",
  },
  {
    name: "Image Search Engine",
    description: "I would say this was my expermentation with js, learning to use web api's and display content nicely. This app lets you search for image as you type and see it in bulk.",
    tags: [
      { name: "JavaScript", color: "text-yellow-300" },
      { name: "HTML CSS", color: "text-gray-500" },
    ],
    image: imageSearchApp,
    hosted_link: "https://hardcore-blackwell-089cb3.netlify.app/",
  },
  {
    name: "Lyrics App",
    description: "This app lets you type a song and fetches its lyrics from vast source of links, it uses Lyrics API internally.",
    tags: [
      { name: "JavaScript", color: "text-yellow-300" },
      { name: "HTML CSS", color: "text-gray-500" },
    ],
    image: lyrics,
    hosted_link: "https://determined-feynman-3d54c0.netlify.app/",
  },
];


const personalInfo = {
  name: "Siddhant",
  fullName: "Siddhant Sahare",
  email: "siddhants8019@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, React-native,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const heroTitles = [
  "React Developer",
  "JavaScript Developer",
  "Full Stack Developer",
  "NodeJS Developer",
];

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1jpMHKjNtmPa5bNSn-o1VDkBcu61L9CDb/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/siddhantsahare/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/siddhantsahare",
      icon: github,
    },  
    leetcode: {
      title: "leetcode",
      link: "https://leetcode.com/u/siddhants8019/",
      icon: leetcode,
    },  
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  oldProjects,
  navigationPaths,
  personalInfo,
  publicUrls,
  heroTitles
};
