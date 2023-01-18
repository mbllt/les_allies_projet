import React from 'react';
import './Accueil.css';

const Accueil = () => {
	return (
		<div id='accueil'>
			<div className='box_accueil'>
				<div className='box_slogan_accueil'>
					<p className='slogan accueil'>Branding,<br />Formation,<br/>
						<span id='communication'>Communication</span>
					</p>
					<p id='agile'>agile</p>
				</div>
				<p className='text accueil'>L’image et la réputation de votre entreprise<br/>
					conditionnent sa performance et sa croissance.<br/>
					C’est pourquoi l’agence <span id="allies">Les Alliés</span> déploie des stratégies<br/>
					de communication globales et sur-mesures.
				</p>
			</div>
		</div>
	);
};

export default Accueil;