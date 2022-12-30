import React from 'react';
import './NewSite.css';

const NewSite = () => {
	return (
		<div id='newsite'>
			<div className="text">
				<p>L’agence se réinvente !</p>
				<p>En attendant de découvrir notre nouveau site internet,</p>
				<p>découvrez notre nouvelle identité</p>
			</div>
			<div className="logo">
				<img className='logo_newsite image-main' src="logo.png" alt="logo"/>
				<img className='logo_newsite image-hover' src="logo_purple.png" alt="logo_purple"/>
			</div>
			<div className="vector_newsite_box">
				<img className='vector_newsite image-main' src="vector3-4.svg" alt="vector"/>
				<img className='vector_newsite image-hover' src="vector3-4color.svg" alt="vector_yellow"/>
			</div>
		</div>
	);
};

export default NewSite;