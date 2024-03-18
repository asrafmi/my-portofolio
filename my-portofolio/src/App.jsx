import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Header />

      {/* Section hero*/}
      <Hero />

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
