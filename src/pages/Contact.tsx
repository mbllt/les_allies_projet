import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='top'>
				<a href='#top'>Reveal</a>
				<img className='small_logo_contact' src="small_logo.png" alt="small_logo_la"/>
				<a href='#bottom'>Contact</a>
			</div>
			<div className='vec6box'>
				<img className='vector6_contact' src="vector6.png" alt="vector6"/>
			</div>
			<div className='title_contact'>
				<p>Contactez</p>
				<img className='nous' src="nous.png" alt="nous"/>
			</div>
			<div className='text_box'>
				<p className='text_contact'>Basée en région lyonnaise,<br />nous serions ravies de vous <strong className='color_text' style={{color:'#E3C0FF'}}>accompagnez</strong> ou<br/>simplement de <strong className='color_text' style={{color:'#E3C0FF'}}>répondre à vos questions.</strong></p>
			</div>
			<div className='mail_phone_box'>
				<p className='mail_contact'>noemie@lesalliésdelacom.com</p>
				<p className='phone_contact'>06 32 95 14 76</p>
				{/* <div className='reseaux_sociaux'> */}
					<img className='insta_logo' src="insta_logo.png" alt="insta_logo"/>
					<img className='linkedin_logo' src="linkedin_logo.png" alt="linkedin_logo"/>
				{/* </div> */}
			</div>
		</div>
	);
};

export default Contact;