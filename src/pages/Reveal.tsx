import React from 'react';
import './Reveal.css';

const Reveal = () => {
	return (
		<div id='reveal'>
			<div className='box reveal'>
				<p className='slogan reveal'>Branding,<br />Formation,<br/><span id='communication'>Communication</span></p>
				<p className='agile'>agile</p>
				<p className='text reveal'>L’image et la réputation de votre entreprise<br/>
					conditionnent sa performance et sa croissance.<br/>
					C’est pourquoi l’agence <span id="allies">Les Alliés</span> crée des stratégies<br/>
					de communication globales et sur-mesures.</p>
			</div>
			<img className='vector_reveal' src="/assets/vec/vec1.svg" alt="vector"/>
		</div>
	);
};

export default Reveal;