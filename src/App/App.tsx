import React from 'react';
import './App.css';
import Reveal from '../pages/Reveal';
import NewSite from '../pages/NewSite';
import Info from '../pages/Info';
import Contact from '../pages/Contact';

function App() {
  return (
    <div className="App">
      <div className='top'>
				<a href='#newsite'>Reveal</a>
				<img className='small_logo_newsite' src="small_logo.png" alt="small_logo_la"/>
				<a href='#contact'>Contact</a>
			</div>
      <Reveal/>
      <NewSite/>
      <Info/>
      <Contact/>
    </div>
  )
}

export default App
