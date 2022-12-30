import React from 'react';
import './Reveal.css';

const Reveal = () => {
	return (
		<div className='reveal'>
			<img className='small_logo_reveal' src="small_logo.png" alt="small_logo_la"/>
			<div className="central_text">
				<p className='text_reveal'>Bâtisseur de marque,<br />Accélérateur de</p>
				<img className='business_reveal' src="business.png" alt="business_text"/>
				<img className='vector1_reveal' src="vector1.png" alt="vector1"/>
			</div>
		</div>
	);
};

export default Reveal;