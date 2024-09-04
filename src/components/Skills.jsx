import './skills.css'
import Marquee from './Marquee'
import { techsData } from '../assets/techs'

function Skills () {
  const firstPart = techsData.slice(0, Math.floor(techsData.length / 2))
  const secondPart = techsData.slice(Math.floor(techsData.length / 2))
  return (
    <section id='skills' className=' bg-black'>
      <div className='skills container'>
        <h3 className='title'>skills<span>( )</span></h3>
        <Marquee items={firstPart} position={{ from: 0, to: '-100%' }} />
        <Marquee items={secondPart} position={{ to: 0, from: '-100%' }} />

      </div>

    </section>
  )
}

export default Skills
