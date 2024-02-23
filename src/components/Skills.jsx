import './skills.css'
import { techsArray } from '../assets/techs'

function Skills () {
  return (
    <section id='skills' className=' bg-black'>
      <div className='skills container'>
        <h3 className='title'>skills<span>( )</span></h3>
        <div className='list'>
          {techsArray.map((tech, i) => <div key={i}> <img src={tech} /></div>)}
        </div>
        <div />
      </div>

    </section>
  )
}

export default Skills
