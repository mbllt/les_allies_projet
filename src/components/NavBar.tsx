import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {

	const [reveal, setReveal] = useState("");
	const [contact, setContact] = useState("");

	const changeBackgroundColor = () => {
		if (window.scrollY >= 800) {
			setReveal("Reveal");
			setContact("Contact");
		}
		else {
			setReveal("");
			setContact("");
		}
	}

	window.addEventListener("scroll", changeBackgroundColor);

	return (
		<div className='navbar'>
			<a href='#newsite'>{reveal}</a>
			<img className='small_logo_newsite' src="/assets/logo/small_logo.png" alt="small_logo_la"/>
			<a href='#contact'>{contact}</a>
		</div>
	);
};

export default NavBar;