import crudRedux from './assets/redux-crud.png'
import quotesApp from './assets/quotesapp.png'
import quizApp from './assets/quizapp.png'
import ageCalcApp from './assets/agecalculator.png'
import starWarsApi from './assets/starwarsapi.png'
import { techs } from './assets/techs'

export const proyectsList = [
  {
    title: 'ToDo List',
    img: crudRedux,
    url: 'https://olivertodoapp.netlify.app/',
    github: 'https://github.com/oliveramarilla14/todo',
    techs: [techs.javascript, techs.react, techs.tailwind],
    description: 'ToDo list with options to CRUD using React, Redux Toolkit, Router and tailwind.'
  },
  {
    title: 'Star Wars API',
    img: starWarsApi,
    url: 'https://oliverstarwarsapi.netlify.app/',
    github: 'https://github.com/oliveramarilla14/hero-squad',
    techs: [techs.javascript, techs.react],
    description: 'Simple App to consume an API, with search,light/dark theme and routes using react Router.'
  },
  {
    title: 'Age Calculator',
    img: ageCalcApp,
    url: 'https://oliveragecalc.netlify.app/',
    github: 'https://github.com/oliveramarilla14/agecalculator',
    techs: [techs.javascript, techs.react],
    description: 'Front-end mentor challenge with react.'
  },
  {
    title: 'Daily Quotes',
    img: quotesApp,
    url: 'https://oliverquotes.netlify.app/',
    github: 'https://github.com/oliveramarilla14/Quotes',
    techs: [techs.html5, techs.sass, techs.javascript],
    description: 'Daily quotes with API fetch and twitter share.'
  },
  {
    title: 'Quiz App',
    img: quizApp,
    url: 'https://oliverquiz.netlify.app/',
    github: 'https://github.com/oliveramarilla14/quiz',
    techs: [techs.html5, techs.sass, techs.javascript],
    description: 'Quiz app with step form and final score.'
  }

]
