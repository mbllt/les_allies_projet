import React from 'react';
import './App.css';
import Reveal from '../pages/Reveal';
import NewSite from '../pages/NewSite';
import Info from '../pages/Info';
import Contact from '../pages/Contact';

function App() {
  return (
    <div className="App">
      <Reveal/>
      <NewSite/>
      <Info/>
      <Contact/>
    </div>
  )
}

export default App
