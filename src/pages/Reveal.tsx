import React from 'react';
import './Reveal.css';

const Reveal = () => {
	return (
		<div id='reveal'>
			<div className="central_text">
				<p className='text_reveal'><strong>Bâtisseur de marque,<br />Accélérateur de</strong></p>
				<img className='business_reveal' src="business.png" alt="business_text"/>
			<div className="vector_reveal_box">
				<img className='vector_reveal image-main' src="vector1-2.svg" alt="vector"/>
				<img className='vector_reveal image-hover' src="vector1-2color.svg" alt="vector_blue"/>
			</div>
			</div>
		</div>
	);
};

export default Reveal;