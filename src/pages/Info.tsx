import React from 'react';
import './Info.css';

const Info = () => {
	return (
		<div className='info'>
			<div className='top'>
				<a href='#top'>Reveal</a>
				<img className='small_logo_info' src="small_logo.png" alt="small_logo_la"/>
				<a href='#bottom'>Contact</a>
			</div>
			<div className='vec4box'>
				<img className='vector4_info' src="vector4.png" alt="vector4"/>
			</div>
			<img className='slogan_info' src="slogan.png" alt="slogan"/>
			<div className='text_info'>
				<p className='p1'>L’image et la réputation de votre entreprise conditionne<br />sa performance et sa croissance.</p>
				<p className='p2'>C’est pourquoi l’agence <strong className='color_text' style={{color:'#E3C0FF'}}>Les Alliés</strong> crée des stratégies de<br />communication globale et sur-mesure.</p>
			</div>
			<div className='vec5box'>
				<img className='vector5_info' src="vector5.png" alt="vector5"/>
			</div>
		</div>
	);
};

export default Info;