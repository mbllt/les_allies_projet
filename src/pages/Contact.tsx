import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<div id='contact'>
			<div className='slogan_text_contact'>
				<p className='slogan contact'>Contactez-<span className='nous'>nous</span></p>
				<p className='text contact'>Basés à Lyon, nous serions ravis de <span className='bold_contact_text'>vous accompagner<br/>
				</span> ou simplement de <span className='bold_contact_text'>répondre à vos questions.</span></p>
			</div>

			{/* <div className='logo_contact'> */}
				{/* <p className='les'>les</p>
				<p className='allies'>alliés</p>
				<p className='com'>COMMUNICATION AGILE</p> */}
				<img className='logo_contact' src="/assets/logo/logo.svg" alt="smallLogo"/>
			{/* </div> */}

			<div className='link_contact'>
				<a className='mail_contact'>noemie@lesalliesdelacom.com</a>
				<a className='phone_contact'>06.32.95.14.76</a>
				<div className='link_logo'>
					<a href="https://www.instagram.com/les_allies_agence_agile/" target="_blank"><img src="/assets/social_media/insta_logo.png" alt="logo_insta"></img></a>
					<a href="https://www.linkedin.com/company/les-alli%C3%A9s/" target="_blank"><img src="/assets/social_media/linkedin_logo.png" alt="logolinkedin"></img></a>
				</div>
			</div>
		</div>
	);
};

export default Contact;