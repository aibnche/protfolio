import React, { useState, useRef } from 'react'
import "./careerTimeLine.scss"
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import MainContent from './MainContent'
import Flicker from "@/components/flicker/Flicker"
import Card from "./Card"
import Strais from "@/components/stairs/Stairs"

const list = [
	{title:"fetchr app", },
]

const lists = [
    {
		id: '2024',
		title: 'First List',
		items: [
			{
				title:'Fetchr App',
				image:'https://www.robertkan.com/images/projectCard/fetchr.svg',
				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
				technologies: ["React Native 1", "Node.js", "MongoDB", "AWS"],
				Key_Features: [
					"Real-time scheduling and tracking",
					"Secure payment processing",
					"In-app messaging",
					"Rating and review system"
				]

			},
			{
				title:'LinkedIn Brand Kit',
				image:'https://www.robertkan.com/images/projectCard/linkedin.svg',
				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
				technologies: ["React Native 2", "Node.js", "MongoDB", "AWS"],
				Key_Features: [
					"Real-time scheduling and tracking",
					"Secure payment processing",
					"In-app messaging",
					"Rating and review system"
				]
			},
			{
				title:'SearchNEU Alerts',
				image:'https://www.robertkan.com/images/projectCard/searchneu.svg',
				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
				technologies: ["React Native 3", "Node.js", "MongoDB", "AWS"],
				Key_Features: [
					"Real-time scheduling and tracking",
					"Secure payment processing",
					"In-app messaging",
					"Rating and review system"
				]
			}
		]
    },
    {
		id: '2023',
		title: 'Second List',
		items:[
			{
				title:'Fetchr App 1',
				image:'https://www.robertkan.com/images/projectCard/fetchr.svg',
				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
				technologies: ["React Native 4", "Node.js", "MongoDB", "AWS"],
				Key_Features: [
					"Real-time scheduling and tracking",
					"Secure payment processing",
					"In-app messaging",
					"Rating and review system"
				]
			},
			{
				title:'LinkedIn Brand Kit 2',
				image:'https://www.robertkan.com/images/projectCard/linkedin.svg',
				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
				technologies: ["React Native 5", "Node.js", "MongoDB", "AWS"],
				Key_Features: [
					"Real-time scheduling and tracking",
					"Secure payment processing",
					"In-app messaging",
					"Rating and review system"
				]
			},
			{
				title:'SearchNEU Alerts 3',
				image:'https://www.robertkan.com/images/projectCard/searchneu.svg',
				overview: "A modern application for pet owners to schedule walks and connect with local service providers.",
				technologies: ["React Native 6", "Node.js", "MongoDB", "AWS"],
				Key_Features: [
					"Real-time scheduling and tracking",
					"Secure payment processing",
					"In-app messaging",
					"Rating and review system"
				]
			}
		]
    }
];

const CareerTimeLine = () => {

	const [cardToggle, setCard] = useState(false)
	const [toggleList, setToggleList] = useState("2024")
	const [imageUrl, setImageUrl] = useState("https://www.robertkan.com/images/projectCard/fetchr.svg")
	const togglingList = (listId:any) => {
		setToggleList(toggleList === listId ? null : listId);
	};

	const mainContainer = useRef(null)

	return (
	// <Flicker>
		<div className="timeLine-container container">
			<div className="sidebar">

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
												}}>
												
												{item.title}
										</div>
									))
								}
							</div>
						</div>
					))
				}
			
			
				<div className="view-all">
					<span>VIEW ALL</span>
					<span className="view-all-icon">→</span>
				</div>
			</div>
		



			<MainContent imageUrl={imageUrl} setCard={setCard}/>

			{
				cardToggle && 
				<Strais>
					<Card setCard={setCard}/>
				</Strais>
			}
			
			
		</div>
	// </Flicker>

	)
}

export default CareerTimeLine
