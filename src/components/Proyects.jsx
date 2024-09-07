import AnimatedProyectCard from './AnimatedProyectCard';
import { proyectsList } from '../proyects';
import './proyects.css';
import { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import ProyectModal from './ProyectModal';
function Proyects() {
  const [selectedProyect, setSelectedProyect] = useState(null);
  console.log(selectedProyect);
  return (
    <>
      <section className='container' id='proyects'>
        <h3 className='title'>
          proyects<span>( )</span>
        </h3>
        <div className='project-list'>
          {proyectsList.map((proyect, i) => (
            <AnimatedProyectCard key={i} proyect={proyect} setSelectedProyect={setSelectedProyect} />
          ))}
        </div>
      </section>
      {selectedProyect && <ProyectModal proyect={selectedProyect} setSelectedProyect={setSelectedProyect} />}
    </>
  );
}

export default Proyects;
