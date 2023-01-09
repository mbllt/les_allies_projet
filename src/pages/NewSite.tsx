import React from 'react';
import './NewSite.css';

const NewSite = () => {
	return (
		<div id='newsite'>
			<article className='text newsite'>
				<p>L’agence se réinvente !</p>
				<p>Trop impatients de vous<br/>
					révéler notre nouvelle<br/>
					identité, <span style={{fontFamily:'NeueHaas55', fontWeight:"normal"}}>notre nouveau site<br/>
					arrive bientôt.</span></p>
			</article>
			<div className='logo'>
				<p className='les'>les</p>
				<p className='allies'>alliés</p>
				<p className='com'>COMMUNICATION AGILE</p>
			</div>
		</div>
	);
};

export default NewSite;