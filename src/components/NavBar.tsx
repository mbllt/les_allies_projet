import React, { useState } from 'react';

function NavBar() {

	const [navbar, setNavbar] = useState(true);

	const changeBackgroundColor = () => {
		if (window.scrollY >= 800)
			setNavbar(false);
		else
			setNavbar(true);
	}

	window.addEventListener("scroll", changeBackgroundColor);

	return (
		<div className={navbar ? 'navbar active' : 'navbar'}>
			<a href='#newsite'>Reveal</a>
			<img className='small_logo_newsite' src="/assets/logo/small_logo.png" alt="small_logo_la"/>
			<a href='#contact'>Contact</a>
		</div>
	);
};

export default NavBar;