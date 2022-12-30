import React from 'react';
import './NewSite.css';

const NewSite = () => {
	return (
		<div className='newsite'>
			<div className='top'>
				<a>Reveal</a>
				<img className='small_logo_newsite' src="small_logo.png" alt="small_logo_la"/>
				<a>Contact</a>
			</div>
			<div className="text_vector">
				<img className='vector2_newsite' src="vector2.png" alt="vector2"/>
				<article className="text">
					<p>L’agence se réinvente !</p>
					<p>En attendant de découvrir notre nouveau site internet,</p>
					<p>découvrez notre nouvelle identité</p>
				</article>
			</div>
			<div className="logo">
				<img className='logo_newsite image-main' src="logo.png" alt="logo"/>
				<img className='logo_newsite image-hover' src="logo_purple.png" alt="logo_purple"/>
			</div>
			<div className='vec3box'>
				<img className='vector3_newsite' src="vector3.png" alt="vector3"/>
			</div>
		</div>
	);
};

export default NewSite;