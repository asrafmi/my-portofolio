import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill.jsx';

function App() {
  return (
    <>
      <Header />
      {/* Section hero*/}
      <Hero />

      {/* Section about */}
      <section id="about">
        <About />
      </section>

      {/* Section skills */}
      <section id="skill">
        <Skill />
      </section>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
