import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Reveal from '../pages/Reveal';
import NewSite from '../pages/NewSite';
import Info from '../pages/Info';
import Contact from '../pages/Contact';

function App() {

    window.addEventListener("scroll", function() {
      const navbar = document.querySelector("top");
      navbar ? navbar.classList.toggle("sticky", window.scrollY > 0) : navbar;

    })

  // window.onscroll = function() {scrollFunction()};
  
  // function scrollFunction() {
  //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //     const navbar = document.querySelector("top");
  //     navbar ? navbar.classList.toggle("sticky", window.scrollY > 0) : navbar;
  //   } else {
  //     const navbar = document.getElementById("top");
  //     navbar ? navbar.style.color = "blue" : navbar;
  //   }
  // }

  return (
    <div className="App">
      {/* <div className='top'>
				<a href='#newsite'>Reveal</a>
				<img className='small_logo_newsite' src="/assets/logo/small_logo.png" alt="small_logo_la"/>
				<a href='#contact'>Contact</a>
			</div> */}
      <NavBar/>
      <Reveal/>
      {/* <NewSite/>
      <Info/>
      <Contact/> */}
    </div>
  )
}

export default App

