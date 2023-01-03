import React from 'react';
import './Reveal.css';

const Reveal = () => {
	return (
		<div id='reveal'>
			<div style={{textAlign:'center'}}>
				<p className='text_reveal'>Bâtisseur de marque,<br /> Accélérateur de <span style={{fontFamily:'gotcha-regular', fontSize:150, color:"#E3C0FF"}}>business</span></p>
			</div>
			<img className='vector_reveal' src="vector1-2.svg" alt="vector"/>
		</div>
	);
};

export default Reveal;