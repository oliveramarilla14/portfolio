import BentoContainer from './components/BentoContainer';
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Proyects from './components/Proyects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='app'>
      <Header />
      <BentoContainer />
      <Skills />
      <Proyects />
      <ContactMe />
      <footer className='bg-black'>Oliver Amarilla - 2024</footer>
    </div>
  );
}

export default App;
