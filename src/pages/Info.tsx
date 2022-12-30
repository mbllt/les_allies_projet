import React from 'react';
import './Info.css';

const Info = () => {
	return (
		<div className='info'>
			<img className='slogan_info' src="slogan.png" alt="slogan"/>
			<div className='text_info'>
				<p className='p1'>L’image et la réputation de votre entreprise conditionne<br />sa performance et sa croissance.</p>
				<p className='p2'>C’est pourquoi l’agence <strong className='color_text' style={{color:'#E3C0FF'}}>Les Alliés</strong> crée des stratégies de<br />communication globale et sur-mesure.</p>
			</div>
			<div className='vec5-6box'>
				<img className='vector_info' src="vector5-6.svg" alt="vector"/>
			</div>
		</div>
	);
};

export default Info;