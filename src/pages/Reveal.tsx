import React from 'react';
import './Reveal.css';

const Reveal = () => {
	return (
		<div id='reveal'>
			<div className='box_text_reveal' style={{textAlign:'center'}}>
				<p className='text_reveal'>Branding,<br />Formation,<br/><span className='business'>Communication</span></p>
				<p className='agile'>agile</p>
			</div>
			<img className='vector_reveal' src="/assets/vec/vec1.svg" alt="vector"/>
		</div>
	);
};

export default Reveal;