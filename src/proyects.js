import crudRedux from './assets/redux-crud.png';
import ageCalcApp from './assets/agecalculator.png';
import shortly from './assets/shortly.png';
import fastTournament from './assets/fast-tournament.webp';
import { techs } from './assets/techs';
import fastTournamentVideo from './assets/videos/fastTournamentVideo.mp4';

export const proyectsList = [
  {
    title: 'Fast Tournament',
    img: fastTournament,
    url: 'https://fast-tournament.omad.site/',
    github: 'https://github.com/oliveramarilla14/org-front',
    techs: [techs.React],
    description: 'Fullstack football tournament manager with features like fixture, team register, payments, etc.',
    video: fastTournamentVideo
  },
  {
    title: 'ToDo List',
    img: crudRedux,
    url: 'https://olivertodoapp.netlify.app/',
    github: 'https://github.com/oliveramarilla14/todo',
    techs: [techs.JavaScript, techs.React, techs.Tailwind],
    description: 'ToDo list with options to CRUD using React, Redux Toolkit, Router and tailwind.'
  },
  {
    title: 'Shortly',
    img: shortly,
    url: 'https://shortlyoliver.netlify.app/',
    github: 'https://github.com/oliveramarilla14/link-shorter',
    techs: [techs.JavaScript, techs.React],
    description: 'Functional link shorter with bit.ly API using styled components in react.'
  },
  {
    title: 'Age Calculator',
    img: ageCalcApp,
    url: 'https://oliveragecalc.netlify.app/',
    github: 'https://github.com/oliveramarilla14/agecalculator',
    techs: [techs.JavaScript, techs.React],
    description: 'Front-end mentor challenge with react.'
  }
];
