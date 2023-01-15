import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {

	const [reveal, setReveal] = useState("");
	const [contact, setContact] = useState("");
	const [navbar, setNavbar] = useState(false);
	
	const changeBackgroundColor = () => {
		const newsite = document.getElementById("reveal");

		if (newsite) {
			if (window.scrollY >=  newsite.offsetTop) {
				setReveal("Reveal");
				setContact("Contact");
				setNavbar(true);
			}
			else {
				setNavbar(false);
				setReveal("");
				setContact("");
			}
		}
	}

	window.addEventListener("scroll", changeBackgroundColor);

	return (
		<div className={navbar ? 'navbar active' : 'navbar'}>
			<div className='content_navbar'>
				<a href='#reveal'>{reveal}</a>
				<img className='small_logo_newsite' src="/assets/logo/small_logo.png" alt="small_logo_la"/>
				<a href='#contact'>{contact}</a>
			</div>
		</div>
	);
};

export default NavBar;