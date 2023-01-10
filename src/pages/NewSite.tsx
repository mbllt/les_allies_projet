import React, { useState } from 'react';
import './NewSite.css';
import AnimatedLogo from '../components/AnimatedLogo';

const NewSite = () => {

	// const [isHover, setIsHover] = useState(false);

	// const handleMouseEnter = () => {
	// 	setIsHover(true);
	// }

	// const handleMouseLeave = () => {
	// 	setIsHover(false);
	// }

	// const styleA = {
	// 	color: '#B84DFF',
	// 	// transition-duration: '300ms',
	// }

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
				{/* <p className='allies'><span style={isHover ? styleA : {}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>a</span>lliés</p> */}
				<p className='allies'>lliés</p>
				{/* <AnimatedLogo text='alliés' classname='allies'/> */}
				<p className='com'>COMMUNICATION AGILE</p>
			</div>
		</div>
	);
};

export default NewSite;