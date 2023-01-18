import React from 'react';
import './Reveal.css';

const Reveal = () => {

	return (
		<div id='reveal'>
			<article className='text reveal'>
				<p>L’agence se réinvente !</p>
				<p>Trop impatients de vous<br/>
					révéler notre <span style={{fontFamily:'NeueHaas75Bold'}}>nouvelle<br/>
					identité</span>, notre nouveau site<br/>
					arrive bientôt.</p>
			</article>
			<div className='logo'>
				<p className='les'>les</p>
				<p className='allies'>alliés</p>
				<p className='com'>COMMUNICATION AGILE</p>
			</div>
		</div>
	);
};

export default Reveal;