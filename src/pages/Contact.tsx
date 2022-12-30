import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<div id='contact'>
			<div className='title_contact'>
				<p>Contactez</p>
				<img className='nous' src="nous.png" alt="nous"/>
			</div>
			<div className='text_box'>
				<p className='text_contact'>Basée en région lyonnaise,<br />nous serions ravies de vous <strong className='color_text' style={{color:'#E3C0FF'}}>accompagnez</strong> ou<br/>simplement de <strong className='color_text' style={{color:'#E3C0FF'}}>répondre à vos questions.</strong></p>
			</div>
			<div className='link_contact'>
				<a className='mail_contact'>noemie@lesalliésdelacom.com</a>
				<a className='phone_contact'>06.32.95.14.76</a>
				<a>instagram</a>
				<a>indeed</a>
			</div>
		</div>
	);
};

export default Contact;