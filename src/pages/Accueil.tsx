import React from 'react';
import './Accueil.css'

const Acceuil = () => {
	return (
		<div id='box_acceuil'>
			<p className='slogan acceuil'>Branding,<br />Formation,<br/><strong>Communication</strong><span id='agile'>agile</span></p>
			<p className='text acceuil'>L’image et la réputation de votre entreprise<br/>
				conditionnent sa performance et sa croissance.<br/>
				C’est pourquoi l’agence <span id="allies">Les Alliés</span> crée des stratégies<br/>
				de communication globales et sur-mesures.</p>
		</div>
	);
};

export default Acceuil;