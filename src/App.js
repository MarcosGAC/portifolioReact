import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar/index.js';
import Projects from './components/projects/projects';
import Skills from './components/skills';
import './index.css'

function App() {
  return (
    <div className='bg-[#202324] pl-[10%] pr-[10%]'>
      <div>
     <Navbar />
     <section id='about'>
     <About />
     </section>
     <section id='skills' className='mt-20'>
     <Skills />
     </section>
     <section id='projects'>
     <Projects />
     </section>
     <section id='contact'>
     <Contact />
     </section>
     </div>
    </div>
  );
}

export default App;
