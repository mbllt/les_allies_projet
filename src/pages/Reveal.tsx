import React from 'react';
import './Reveal.css';

const Reveal = () => {
	return (
		<div id='reveal'>
			<div style={{textAlign:'center'}}>
				<p className='text_reveal'>Bâtisseur de marque,<br /> Accélérateur de <span className='business'>business</span></p>
			</div>
			<img className='vector_reveal' src="vector1-2.svg" alt="vector"/>
		</div>
	);
};

export default Reveal;