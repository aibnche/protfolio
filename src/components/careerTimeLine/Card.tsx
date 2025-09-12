import React, { useEffect } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import "./card.scss"
import {UserContext} from '@/context/context'

const Card = ({setCard}:any) => {

	const context = React.useContext(UserContext);

	// Ensure context exists before destructuring
	if (!context) {
		throw new Error('Card must be used within a UserProvider');
	}
	
	const { setDelay } = context;

	const handleClose = () => {
		setDelay(false);
		// Allow time for animation to complete before removing the card
		setTimeout(() => {
			setCard(false);
		}, 800); // slightly longer than your animation duration
	};
	
	return (
	<div className="card-transition">
		<div className="inner-container">
			<div className="outlineClose">
				<AiOutlineClose className="icon" onClick={handleClose}/>
			</div>
			
			<div className="relative">
					<img src="https://www.robertkan.com/images/projectCard/searchneu.svg" alt="Screely screen" className="object-cover" />
			</div>

			<div className="p-6">
				<h2 className="title">Fetchr App</h2>

				<div className="overview">
					<h3 className="text-lg font-medium mb-2">Overview</h3>
					<p className="text-gray-700">A modern application for pet owners to schedule walks and connect with local service providers.</p>
				</div>
				
				<div className="techs">
					<h3 className="text-lg font-medium mb-2">Technologies</h3>
					<div className="flex-wrap">
						
						<span className="item">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code mr-1">
							<polyline points="16 18 22 12 16 6"></polyline>
							<polyline points="8 6 2 12 8 18"></polyline>
							</svg>React Native
						</span>
						<span className="item">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code mr-1">
							<polyline points="16 18 22 12 16 6"></polyline>
							<polyline points="8 6 2 12 8 18"></polyline>
							</svg>Node.js
						</span>
					</div>
				</div>

				<div className="features">
					<h3 className="text-lg font-medium mb-2">Key Features</h3>
					<ul className="list-disc">
						<li className="disc">Real-time scheduling and tracking</li>
						<li className="disc">Secure payment processing</li>
						<li className="disc">In-app messaging</li>
						<li className="disc">Rating and review system</li>
					</ul>
				</div>
			
				<div className="view-pro">
					<a href="https://example.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link">
						<path d="M15 3h6v6"></path>
						<path d="M10 14 21 3"></path>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
					</svg>Visit Project
					</a>
				</div>
			
			</div>
		</div>			
	</div>
	)
}

export default Card
