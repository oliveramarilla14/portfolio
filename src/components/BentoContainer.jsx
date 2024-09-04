import BentoItem from './BentoItem'
import './bento.css'
import pyflag from '../assets/pyflag.png'
import { techs } from '../assets/techs'
import ProyectCard from './ProyectCard'
import { proyectsList } from '../proyects'
import MediaQuery from 'react-responsive'
import porfileWeb from '../assets/porfileWeb.png'

function BentoContainer () {
  const nameStyle = {
    color: '#70FF00',
    padding: '10px',
    fontSize: '30px',
    letterSpacing: '3px'
  }
  const descriptionStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '10px'
  }

  return (
    <>
      <main className='bento-container container hide-mq' id='bento'>
        <BentoItem columns='1/3' rows='1/3' animate='left' transition={{ duration: 1.25, delay: 0.25 }}> <ProyectCard proyect={proyectsList[0]} /></BentoItem>
        <BentoItem columns='3/5' rows='1/4' img={porfileWeb} animate='top' transition={{ duration: 1.25, delay: 1.25 }} />
        <BentoItem columns='5/7' rows='1/3' animate='right' transition={{ duration: 1.25, delay: 0.50 }}><ProyectCard proyect={proyectsList[1]} /></BentoItem>
        <BentoItem columns='1/3' rows='3/6' animate='left' transition={{ duration: 1.25, delay: 0.65 }}><ProyectCard proyect={proyectsList[2]} /></BentoItem>
        <BentoItem columns='3/5' rows='4/5' animate='bottom' transition={{ duration: 1.25, delay: 1 }}>
          <h2 style={nameStyle}>{'< Oliver Amarilla />'} </h2>
        </BentoItem>
        <BentoItem columns='3/4' rows='5/6' animate='bottom' transition={{ duration: 1.25, delay: 0.85 }}>
          <p style={descriptionStyle}>
            Full-Stack <span style={{ color: '#70FF00' }}>{'</>'}</span> developer
          </p>
        </BentoItem>
        <BentoItem columns='4/5' rows='5/6' animate='bottom' transition={{ duration: 1.25, delay: 0.85 }}>
          <img className='logo' src={pyflag} alt='Paraguay flag' />
        </BentoItem>
        <BentoItem columns='5/6' rows='3/4' animate='left'>
          <img className='logo' src={techs.Laravel} alt='javascript' />
        </BentoItem>
        <BentoItem columns='6/7' rows='3/4' animate='right'>
          <img className='logo' src={techs.React} alt='react' />
        </BentoItem>
        <BentoItem columns='5/7' rows='4/6' animate='bottom'> <ProyectCard proyect={proyectsList[3]} /></BentoItem>
        <BentoItem columns='1/7' rows='6/7' className='about' align='left' animate='bottom'>
          <h3 className='title'>aboutMe<span>( )</span></h3>
          <p>3 years of experience as a Software Developer. Led front-end projects and migrations from legacy systems to modern ones, analyzing requirements with the development team to optimize delivery times and the quality of our products.</p>
        </BentoItem>
      </main>

      <MediaQuery query='(max-width: 709px)'>
        <main className='bento-container-mq container' id='bento'>
          <BentoItem columns='1/3' rows='1/4' img={porfileWeb} animate='top' transition={{ duration: 1.25, delay: 0.7 }} />

          <BentoItem columns='1/2' animate='left' transition={{ duration: 1.25, delay: 1 }}>
            <p style={{ ...descriptionStyle, fontSize: '30px', paddingTop: '20px' }}>
              Full-Stack<span style={{ color: '#70FF00' }}>{'</>'}</span> developer
            </p>
          </BentoItem>
          <BentoItem columns='2/3' img={pyflag} animate='right' transition={{ duration: 1.25, delay: 0.2 }} />
          <BentoItem columns='1/3' className='about' align='left' animate='bottom' transition={{ duration: 1.25, delay: 0.2 }}>
            <h3 className='title'>aboutMe<span>( )</span></h3>
            <p>Passionate about technology from an early age, with outstanding skills in the assembly, installation and configuration of various electronic devices. Committed to proactive assistance and always willing to learn and help.</p>
          </BentoItem>

        </main>
      </MediaQuery>
    </>
  )
}

export default BentoContainer
