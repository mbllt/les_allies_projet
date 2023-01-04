import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<div id='contact'>
			<p className='title_contact'>Contactez <span className='nous'>nous</span></p>
			<p className='text_contact'>Basée en région lyonnaise, nous serions ravies de vous <strong className='color_text' style={{color:'#E3C0FF'}}>accompagnez</strong> ou simplement de <strong className='color_text' style={{color:'#E3C0FF'}}>répondre à vos questions.</strong></p>
			<div className='link_contact'>
				<a className='mail_contact'>noemie@lesalliésdelacom.com</a>
				<a className='phone_contact'>06.32.95.14.76</a>
				<img src="/insta_logo.png"></img>
				<img src="/linkedin_logo.png"></img>
			</div>
		</div>
	);
};

export default Contact;