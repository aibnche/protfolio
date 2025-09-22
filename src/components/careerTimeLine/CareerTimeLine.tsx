"use client"
import React, { useState } from 'react'
import "./careerTimeLine.scss"
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import MainContent from './MainContent'
import Card from "./Card"
import Strais from "@/components/stairs/Stairs"

const lists = [
	{
	  id: 'Web Dev',
	  title: 'JavaScript / Frontend Development',
	  items: [
		{
		  title: 'Admin Dashboard',
		  image: '/dashboard.png', // replace with your actual path
		  overview: 'A responsive admin dashboard built with HTML and Sass, featuring clean UI components and modular styling.',
		  technologies: ['JS', 'Sass', 'HTML'],
		  Key_Features: [
			'Responsive layout design',
			'Reusable Sass mixins & variables',
			'Custom theming support',
			'Optimized for modern browsers'
		  ],
		  projectUrl: 'https://github.com/achrafato/admin_dashboard'
		},
		{
		  title: 'Comment System',
		  image: '/nested_comments.webp',
		  overview: 'An advanced MERN stack comment system with nested replies and YouTube-like features for interaction.',
		  technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
		  Key_Features: [
			'Nested comments & replies',
			'Like/Dislike functionality',
		  ],
		  projectUrl: 'https://github.com/achrafato/Comment_system'
		},
		{
		  title: 'CRUD Inventory (Next.js)',
		  image: '/inventory.png',
		  overview: 'An inventory management system built with Next.js and Prisma ORM for efficient database handling.',
		  technologies: ['Next.js', 'Prisma', 'TypeScript'],
		  Key_Features: [
			'Create, Read, Update, Delete inventory items',
			'Prisma ORM with type-safe queries',
			'API routes for data management',
			'Responsive UI design'
		  ],
		  projectUrl: 'https://github.com/achrafato/crud-inventory-nextjs'
		}
	  ]
	},
	{
	  id: 'C++',
	  title: 'C++ / Systems Programming',
	  items: [
		{
		  title: 'WebServ',
		  image: '/webserve.jpeg',
		  overview: 'WebServ is an advanced, production-grade HTTP server implementation designed to showcase sophisticated network programming techniques and web server architecture.',
		  technologies: ['C++', 'Networking', 'HTTP'],
		  Key_Features: [
			'Full HTTP/1.1 support',
			'Efficient socket & request handling',
			'Configurable server architecture',
			'Scalable & optimized for performance'
		  ],
		  projectUrl: 'https://github.com/Terex881/WebServ-42'
		}
	  ]
	},
	{
	  id: 'Docker',
	  title: 'Inception Project',
	  items: [
		{
		  title: 'Inception',
		  image: '/docker_pic.png',
		  overview: 'Inception is a comprehensive project that simulates the deployment and management of containerized applications using Docker, showcasing skills in container orchestration, networking, and system architecture.',
		  technologies: ["Docker", "Containers", "Linux", "Networking"],
		  Key_Features: [
			"Container orchestration and management",
			"Efficient image building and layering",
			"Network configuration and linking between containers",
			"Volume management and persistent storage"
		  ],
		  projectUrl: 'https://github.com/inception_'
		}
	  ]
	},
  ];
  

// const lists = [
//     {
// 		id: '2024',
// 		title: 'First List',
// 		items: [
// 			{
// 				title:'Fetchr App',
// 				image:'https://www.robertkan.com/images/projectCard/fetchr.svg',
// 				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
// 				technologies: ["React Native 1", "Node.js", "MongoDB", "AWS"],
// 				Key_Features: [
// 					"Real-time scheduling and tracking",
// 					"Secure payment processing",
// 					"In-app messaging",
// 					"Rating and review system"
// 				]

// 			},
// 			{
// 				title:'LinkedIn Brand Kit',
// 				image:'https://www.robertkan.com/images/projectCard/linkedin.svg',
// 				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
// 				technologies: ["React Native 2", "Node.js", "MongoDB", "AWS"],
// 				Key_Features: [
// 					"Real-time scheduling and tracking",
// 					"Secure payment processing",
// 					"In-app messaging",
// 					"Rating and review system"
// 				]
// 			},
// 			{
// 				title:'SearchNEU Alerts',
// 				image:'https://www.robertkan.com/images/projectCard/searchneu.svg',
// 				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
// 				technologies: ["React Native 3", "Node.js", "MongoDB", "AWS"],
// 				Key_Features: [
// 					"Real-time scheduling and tracking",
// 					"Secure payment processing",
// 					"In-app messaging",
// 					"Rating and review system"
// 				]
// 			}
// 		]
//     },
//     {
// 		id: 'C++',
// 		title: 'Second List',
// 		items:[
// 			{
// 				title:'Fetchr App 1',
// 				image:'https://www.robertkan.com/images/projectCard/fetchr.svg',
// 				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
// 				technologies: ["React Native 4", "Node.js", "MongoDB", "AWS"],
// 				Key_Features: [
// 					"Real-time scheduling and tracking",
// 					"Secure payment processing",
// 					"In-app messaging",
// 					"Rating and review system"
// 				]
// 			},
// 			{
// 				title:'LinkedIn Brand Kit 2',
// 				image:'https://www.robertkan.com/images/projectCard/linkedin.svg',
// 				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
// 				technologies: ["React Native 5", "Node.js", "MongoDB", "AWS"],
// 				Key_Features: [
// 					"Real-time scheduling and tracking",
// 					"Secure payment processing",
// 					"In-app messaging",
// 					"Rating and review system"
// 				]
// 			},
// 			{
// 				title:'SearchNEU Alerts 3',
// 				image:'https://www.robertkan.com/images/projectCard/searchneu.svg',
// 				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
// 				technologies: ["React Native 6", "Node.js", "MongoDB", "AWS"],
// 				Key_Features: [
// 					"Real-time scheduling and tracking",
// 					"Secure payment processing",
// 					"In-app messaging",
// 					"Rating and review system"
// 				]
// 			}
// 		]
//     }
// ];

const CareerTimeLine = () => {

	const [cardToggle, setCard] = useState(false)
	const [currentCard, setCurrentCard] = useState(lists[0].items[0])
	const [toggleList, setToggleList] = useState<string | null>("2024")
	const [imageUrl, setImageUrl] = useState(lists[0].items[0].image)

	const togglingList = (listId: string) => {
		setToggleList(toggleList === listId ? null : listId);
	};

	const showCard = (item: {
		title: string;
		image: string;
		overview: string;
		technologies: string[];
		Key_Features: string[];
		projectUrl: string;
	}) =>{
		setCurrentCard(item);
		setCard(true)
	}
	
	let keyy = 0;
	return (
	// <Flicker>
		<div className="timeLine-container container">

			<div className='all-projects mobile-only'>
			{	
				lists.map((list) => (
					list.items.map((item, index) => {
						keyy += 1;
						return <div className="project" key={keyy + index} onClick={()=> showCard(item)}>
							{/* <div className="project-item" key={`${list.id}-${i}`}> */}
								<span className="projects-text">{`00${keyy}`}</span>
								<span className="projects-text">{item.title}</span>
								<div className="separator"></div>
								<span className="projects-type">{list.id}</span>
							{/* </div> */}
						</div>
					})
				))
			}
			</div>

			<div className={`sidebar desktop-only`}>
				{
					lists.map((list)=>(
						<div className={`year-section ${toggleList == list.id ? "line" : ""}`} key={list.id}>
							<div className="year-header" onClick={()=>{togglingList(list.id) }}>
								<span>{list.id}</span>
								{
									toggleList == list.id ? <FaChevronUp/> : <FaChevronDown/>
								}
							</div>
							<div className={`project-list ${toggleList == list.id ? "" : "collapse"}`} style={{
								clipPath: toggleList 
								? 'polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0)' 
								: 'polygon(50% 0%, 100% 0, 100% 0, 0 0, 0 0)',
							}}>
								{
									list.items.map((item)=>(
										<div
											key={item.title}
											className="project-item"
											onClick={()=>{
													setImageUrl(item.image)
													setCurrentCard(item)
												}}>
												
												{item.title}
										</div>
									))
								}
							</div>
						</div>
					))
				}
			
			
				{/* <div className="view-all">
					<span>VIEW ALL</span>
					<span className="view-all-icon">→</span>
				</div> */}
			</div>

			<div className={`desktop-only`}>

			<MainContent imageUrl={imageUrl} setCard={setCard}/>
			</div>
			{
				cardToggle && 
				<Strais>
					<Card setCard={setCard} imageUrl={imageUrl} currentCard={currentCard}/>
				</Strais>
			}
			


			
		</div>
	// </Flicker>

	)
}

export default CareerTimeLine
