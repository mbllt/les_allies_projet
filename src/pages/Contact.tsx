import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='top'>
				<a>Reveal</a>
				<img className='small_logo_info' src="small_logo.png" alt="small_logo_la"/>
				<a>Contact</a>
			</div>
			<div className='vec6box'>
				<img className='vector6_info' src="vector6.png" alt="vector6"/>
			</div>
			<p>Contactez</p>
			<img className='nous' src="nous.png" alt="nous"/>
			<p>Basée en région lyonnaise, nous serions ravies de vous accompagnez ou simplement de répondre à vos questions.</p>
			<p>noemie@lesalliésdelacom.com</p>
			<p>06 32 95 14 76</p>
			<img className='insta_logo' src="insta_logo.png" alt="insta_logo"/>
			<img className='linkedin_logo' src="linkedin_logo.png" alt="linkedin_logo"/>
		</div>
	);
};

export default Contact;