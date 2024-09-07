import { motion } from 'framer-motion';

function AnimatedProyectCard({ proyect, setSelectedProyect }) {
  const { title, img, url, github, techs, description } = proyect;

  const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <motion.div
      className='card'
      style={style}
      onClick={() => setSelectedProyect(proyect)}
      layoutId={title}
      whileHover={{ scale: 1.05 }}
    >
      <div className='description'>
        <header className='proyect-head'>
          <h3>
            <a href={url} target='_blank' rel='noreferrer'>
              {title}
            </a>
          </h3>
          <nav className='techs'>{techs ? techs.map((tech, index) => <img src={tech} key={index} />) : null}</nav>
        </header>
      </div>
    </motion.div>
  );
}

export default AnimatedProyectCard;
