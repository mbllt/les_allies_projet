import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
	return (
		<div className='navbar'>
			<div className='content_navbar'>
				<a href='#reveal'>Reveal</a>
				<img className='small_logo_newsite' src="/assets/logo/small_logo.png" alt="small_logo_la"/>
				<a href='#contact'>Contact</a>
			</div>
		</div>
	);
};

export default NavBar;