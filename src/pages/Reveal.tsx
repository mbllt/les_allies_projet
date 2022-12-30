import React from 'react';
import './Reveal.css';

const Reveal = () => {
	return (
		<div id='reveal'>
			<div className="central_text">
				<p className='text_reveal'><strong>Bâtisseur de marque,<br />Accélérateur de</strong></p>
				<img className='business_reveal' src="business.png" alt="business_text"/>
				<img className='vector_reveal' src="vector1-2.svg" alt="vector"/>
			</div>
		</div>
	);
};

export default Reveal;