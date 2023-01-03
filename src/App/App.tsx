import React from 'react';
import './App.css';
import Reveal from '../pages/Reveal';
import NewSite from '../pages/NewSite';
import Info from '../pages/Info';
import Contact from '../pages/Contact';

function App() {
  return (
    <div className="App">

      {/* TOP */}
      <div className='top'>
				<a href='#newsite'>Reveal</a>
				<img className='small_logo_newsite' src="small_logo.png" alt="small_logo_la"/>
				<a href='#contact'>Contact</a>
			</div>
      {/* END */}

      {/* NEWSITE */}
      {/* <div style={{textAlign:'center'}}>
        <p className='text_reveal'>Bâtisseur de marque,<br /> Accélérateur de <span style={{fontFamily:'gotcha-regular', fontSize:150, color:"#E3C0FF"}}>business</span></p>
      </div>
      <img className='vector_reveal' src="vector1-2.svg" alt="vector"/> */}
      <Reveal/>
      {/* END */}

      {/* REVEAL */}
      <p className='paraph1'>L’agence se réinvente ! <br/>
				En attendant de découvrir notre nouveau site internet, <br/>
				découvrez notre nouvelle identité</p>
      {/* END */}

      {/* <NewSite/>
      <Info/>
      <Contact/> */}
    </div>
  )
}

export default App

