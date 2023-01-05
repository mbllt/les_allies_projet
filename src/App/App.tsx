import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Reveal from '../pages/Reveal';
import NewSite from '../pages/NewSite';
import Info from '../pages/Info';
import Contact from '../pages/Contact';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Reveal/>
			<img className='vector_reveal' src="/assets/vec/vec1.svg" alt="vector"/>
      {/* <NewSite/>
      <Info/>
      <Contact/> */}
    </div>
  )
}

export default App

