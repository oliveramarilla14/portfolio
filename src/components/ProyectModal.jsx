import { calcLength, motion } from 'framer-motion';
import githubpng from '../assets/github.png';

export default function ProyectModal({ proyect, setSelectedProyect }) {
  const { title, img, url, github, techs, description } = proyect;
  console.log(techs);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layoutId={proyect.title}
      onClick={() => setSelectedProyect(null)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        overflow: 'auto'
      }}
    >
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        style={{
          backgroundImage: `url(${proyect.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '80%',
          height: '80%',
          maxWidth: '1000px',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'end',
          padding: '20px',
          borderRadius: '20px',
          border: '1px solid white'
        }}
      >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', width: '100%', borderRadius: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ textDecoration: 'underline', marginBottom: '10px' }}>
              <a href={url} target='_blank' rel='noreferrer'>
                {title}
              </a>
            </h3>
            <nav className='techs'>{techs ? techs.map((tech, index) => <img src={tech} key={index} />) : null}</nav>
          </div>

          <p>{description}</p>
          <footer style={{ display: 'flex', justifyContent: 'end' }}>
            <a href={github} target='_blank' rel='noreferrer'>
              <img width='25px' src={githubpng} alt='github folder' />
            </a>
          </footer>
        </div>
      </motion.div>
    </motion.div>
  );
}
