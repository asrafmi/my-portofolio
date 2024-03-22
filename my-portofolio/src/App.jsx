import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header />
      {/* Section hero*/}
      <Hero />
      {/* Section about */}
      <About />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
