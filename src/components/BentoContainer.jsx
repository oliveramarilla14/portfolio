import BentoItem from './BentoItem'
import './bento.css'
import pyflag from '../assets/pyflag.png'
import { techs } from '../assets/techs'
import ProyectCard from './ProyectCard'
import { proyectsList } from '../proyects'

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
    <main className='bento-container container' id='bento'>
      <BentoItem columns='1/3' rows='1/3'> <ProyectCard proyect={proyectsList[0]} /></BentoItem>
      <BentoItem columns='3/5' rows='1/4' img='https://www.alucoildesign.com/assets/pages/media/profile/people19.png' />
      <BentoItem columns='5/7' rows='1/3'><ProyectCard proyect={proyectsList[0]} /></BentoItem>
      <BentoItem columns='1/3' rows='3/6'><ProyectCard proyect={proyectsList[0]} /></BentoItem>
      <BentoItem columns='3/5' rows='4/5'>
        <h2 style={nameStyle}>{'< Oliver Amarilla />'} </h2>
      </BentoItem>
      <BentoItem columns='3/4' rows='5/6'>
        <p style={descriptionStyle}>
          Front-end <span style={{ color: '#70FF00' }}>{'</>'}</span> developer
        </p>
      </BentoItem>
      <BentoItem columns='4/5' rows='5/6' img={pyflag} />
      <BentoItem columns='5/6' rows='3/4'>
        <img className='logo' src={techs.javascript} alt='javascript' />
      </BentoItem>
      <BentoItem columns='6/7' rows='3/4'>
        <img className='logo' src={techs.react} alt='react' />
      </BentoItem>
      <BentoItem columns='5/7' rows='4/6'> <ProyectCard proyect={proyectsList[0]} /></BentoItem>
      <BentoItem columns='1/7' rows='6/7' className='about' align='left'>
        <h3 className='title'>aboutMe<span>( )</span></h3>
        <p>Passionate about technology from an early age, with outstanding skills in the assembly, installation and configuration of various electronic devices. Committed to proactive assistance and always willing to learn and help.</p>
      </BentoItem>

    </main>
  )
}

export default BentoContainer
