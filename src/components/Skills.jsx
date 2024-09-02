import './skills.css'
import { techsData } from '../assets/techs'

function Skills () {
  return (
    <section id='skills' className=' bg-black'>
      <div className='skills container'>
        <h3 className='title'>skills<span>( )</span></h3>
        <div className='list'>
          {techsData.map(([name, tech], i) => <div key={i}> <img src={tech} />{name}</div>)}
        </div>
        <div />
      </div>

    </section>
  )
}

export default Skills
