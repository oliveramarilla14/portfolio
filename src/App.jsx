import BentoContainer from './components/BentoContainer'
import Header from './components/Header'
import Proyects from './components/Proyects'
import Skills from './components/Skills'

function App () {
  return (
    <div className='app'>
      <Header />
      <BentoContainer />
      <Skills />
      <Proyects />
    </div>
  )
}

export default App
