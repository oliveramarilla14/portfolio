import githubpng from '../assets/github.png'

function ProyectCard ({ proyect }) {
  console.log(proyect)
  const { title, img, url, github, techs, description } = proyect

  const style = {
    backgroundImage: `url(${img})`

  }

  return (
    <div className='card' style={style}>
      <div className='description'>
        <header className='proyect-head'>
          <h3><a href={url} target='_blank' rel='noreferrer'>{title}</a></h3>
          <nav className='techs'>
            {techs ? techs.map((tech, index) => <img src={tech} key={index} />) : null}
          </nav>
        </header>
        <p>{description}</p>
        <footer>
          <a href={github} target='_blank' rel='noreferrer'>
            <img width='25px' src={githubpng} alt='github folder' />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default ProyectCard
