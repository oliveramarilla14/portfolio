import ProyectCard from './ProyectCard'
import { proyectsList } from '../proyects'
import './proyects.css'

function Proyects () {
  return (
    <section className='container' id='proyects'>
      <h3 className='title'>proyects<span>( )</span></h3>
      <div className='list'>
        {proyectsList.map((proyect, i) => <ProyectCard key={i} proyect={proyect} />)}
      </div>
    </section>
  )
}

export default Proyects
