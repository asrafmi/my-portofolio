import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Header />

      {/* Section hero*/}
      <section>hero</section>

      {/* Section about */}
      <section>about</section>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
