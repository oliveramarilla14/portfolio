export default function Header () {
  const handleTp = (e) => {
    e.preventDefault()
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header id='header'>
      <h1><span className='brace'>{'{ }'} </span>OLIVER<span className='amarilla'>AMARILLA</span></h1>
      <nav className='hide-mq'>
        <a href='https://www.linkedin.com/in/oliver-amarilla/' target='_blank' className='btn' rel='noreferrer'><i className='fa-brands fa-linkedin' /> LinkedIn</a>
        <a className='btn' href='https://github.com/Oliveramarilla14' target='_blank' rel='noreferrer'><i className='fa-brands fa-github' /> GitHub</a>
        <a onClick={handleTp} className='btn contact'><i className='fa-regular fa-envelope' /> Contact me</a>

      </nav>
    </header>
  )
}
