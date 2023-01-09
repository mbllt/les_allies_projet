import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<div id='contact'>
			<p className='slogan contact'>Contactez-<span className='nous'>nous</span></p>
			<p className='text contact'>Basée en région lyonnaise, nous serions ravies de vous<br/>
			<strong>accompagnez</strong> ou simplement de <strong>répondre à vos<br/>questions.</strong></p>

			<div className='logo_contact'>
				<p className='les'>les</p>
				<p className='allies'>alliés</p>
				<p className='com'>COMMUNICATION AGILE</p>
			</div>

			<div className='link_contact'>
				<a className='mail_contact'>noemie@lesalliésdelacom.com</a>
				<a className='phone_contact'>06.32.95.14.76</a>
				<div className='link_logo'>
					<img src="/assets/social_media/insta_logo.png"></img>
					<img src="/assets/social_media/linkedin_logo.png"></img>
				</div>
			</div>
		</div>
	);
};

export default Contact;