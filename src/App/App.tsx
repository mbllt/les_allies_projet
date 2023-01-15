import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Reveal from '../pages//Reveal';
import Accueil from '../pages/Accueil';
import Info from '../pages/Info';
import Contact from '../pages/Contact';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Accueil/>
  		<img className='vector1' src="/assets/vec/vec1.svg" alt="vector"/>
      <Reveal/>
  		<img className='vector2' src="/assets/vec/vec2.svg" alt="vector"/>
      <Info/>
          <source srcSet="/assets/vec/vec3.svg" media="(max-width: 500px)"/>
        <img className='vector3' src="/assets/vec/vec3.svg" alt="vector"/>
      <Contact/>
    </div>
  )
}

export default App

