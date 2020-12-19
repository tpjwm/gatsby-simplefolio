import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dimitar Pendurkov | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is', //Hello my name is
  name: 'Dimitar', //Name
  subtitle: 'I am a Software Developer', //I'm a Developer
  cta: 'Learn more...', //Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a software engineer studying Computer Science at the Univeristy of Illinois at Urbana-Champaign.',
  paragraphTwo: 'I am interested in many different areas including Web, Mobile, Back-end, and Application Development. I also have an interest in Cyber Security.',
  paragraphThree: 'I love learning and I am passionate about all things science and tech.',
  resume: '/dimitar_resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Conways Game of Life',
    info: 'I developed an application replicating Conways Game of Life using C++. It uses the Cinder library for the GUI.',
    info2: 'It functions as you would expect with an added bonus of a custom soundtrack during the simulation!',
    url: 'GitHub',
    repo: 'https://github.com/tpjwm/game-of-life', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Send me an email',
  btn: '',
  email: 'dimitar3@illinois.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dimitarpendurkov/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tpjwm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
