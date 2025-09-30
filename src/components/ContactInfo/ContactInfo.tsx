"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { useTypewriter } from 'react-simple-typewriter';

import './ContactInfo.scss'


const ContactInfo = () => {
	
	const email = "achrafibncheikh@gmail.com"
	const handleEmailClick = () => {
		window.location.href = `mailto:${email}`;
	};

	const githubClick = () => {
		window.open('https://github.com/achrafato', '_blank', 'noopener,noreferrer');
	};

	const [text] = useTypewriter({
		words: ["Want to see what I've been building?", "Check out my GitHub!"],
		loop: true,
		typeSpeed: 80,
		deleteSpeed: 50,
	});
	return (
	<div className="gh-promo-container container">
		<div className="gh-promo">
			<CiSearch className="gh-promo-icon"/>
			<p>{text}</p>
		</div>
		
		<div className="dropdown">
			<div className="dropdown-item">
				<FaPhoneAlt className="icon-circle phone-icon"/>
				<div className="contact-info">
					<span className="contact-value">+212723482982</span>
					<span className="contact-type">— Phone</span>
				</div>
			</div>
			
			<div className="dropdown-item" onClick={handleEmailClick}>
				<MdEmail className="icon-circle email-icon"/>
				<div className="contact-info">
					<span className="contact-value">{email}</span>
					<span className="contact-type">— Email</span>
				</div>
			</div>
			
			<div className="dropdown-item" onClick={githubClick}>
				<FaGithub className="icon-circle github-icon"/>
				<div className="contact-info">
					<span className="contact-value">@achrafato</span>
					<span className="contact-type">— Github</span>
				</div>
			</div>
		</div>
	</div>
	)
}

export default ContactInfo
