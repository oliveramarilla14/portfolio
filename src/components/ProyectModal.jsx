import { motion } from 'framer-motion';
import githubpng from '../assets/github.png';

export default function ProyectModal({ proyect, setSelectedProyect }) {
  const { title, url, github, techs, description, video } = proyect;
  console.log(techs);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layoutId={proyect.title}
      transition={{ when: 'beforeChildren' }}
      onClick={() => setSelectedProyect(null)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        overflow: 'auto'
      }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
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
          flexDirection: 'column',
          justifyContent: 'end'
        }}
      >
        {video ? (
          <video
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'cover'
            }}
            controls
            autoPlay={true}
            muted
            loop
            id='myVideo'
          >
            <source src={video} type='video/mp4' />
          </video>
        ) : null}
        <div
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))',
            width: '100%',
            height: '5%'
          }}
        />
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', width: '100%' }}>
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
