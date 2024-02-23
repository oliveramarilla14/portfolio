export default function Header () {
  return (
    <header id='header'>
      <h1><span className='brace'>{'{ }'} </span>OLIVER<span className='amarilla'>AMARILLA</span></h1>
      <nav>
        <a href='https://www.linkedin.com/in/oliver-amarilla/' target='_blank' className='btn' rel='noreferrer'><i className='fa-brands fa-linkedin' /> LinkedIn</a>
        <a className='btn' href='https://github.com/Oliveramarilla' target='_blank' rel='noreferrer'><i className='fa-brands fa-github' /> GitHub</a>
        <a className='btn contact'><i className='fa-regular fa-envelope' /> Contact me</a>

      </nav>
    </header>
  )
}
