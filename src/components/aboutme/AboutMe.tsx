"use client"

import React, { useEffect, useRef } from 'react'
import './aboutme.scss'
import ContactInfo from "@/components/ContactInfo/ContactInfo"
import {motion} from "framer-motion"
import Link from "next/link"
import FireMouse from '@/components/firemouse/FireMouse'
import { TbHandFingerLeft } from "react-icons/tb";


const AboutMe = () => {
	const containerRef = useRef(null);
	const previousMousePosition = useRef({ x: 0, y: 0 });

	const title_1 = "Hi, this is Ashraf"
	const title_2 = "About me"
	const DURATION = 0.25;
	const STAGGER = 0.025;
	const dd = 5;
	return (
				<div className='container aboutme'>
					<FireMouse />
					<ContactInfo/>
					<div className="intro">
						<TbHandFingerLeft className='clickMe'/>

						{/* ************Staggered Text************* */}
						<motion.h1
							className='headLine'
							initial="initial"
							whileHover="hovered"
							transition={{
								staggerChildren:0.2
							}}
						>
							
							<div className='word-wrapper'>
								{title_1.split(" ").map((l, i) => (
									<motion.span
										variants={{
										initial: {y:0},
										hovered: {y: "-100%"},
										}}
										transition={{
										duration: DURATION,
										ease: "easeInOut",
										delay: STAGGER * (i * 5),
										}}
										key={i}
									>
										{l}
									</motion.span>
									))}
							</div>

							{/* ---------------------- */}
							<Link href="/about">
							<div className="absolute-t word-wrapper">
								{title_2.split(" ").map((l, i) => (
									<motion.span
										variants={{
										initial: {y:"100%"},
										hovered: {y: 0},
									}}
									transition={{
										duration: DURATION,
										ease: "easeInOut",
										delay: STAGGER * (i * 14),
										}}
										key={i}
										>
										{l}
									</motion.span>
									))}
							</div>
							</Link>
						</motion.h1>
						{/* ************Staggered Text************* */}
						
						<p className='titles'>Currently → <strong>Student at 42 School</strong></p>
						<p className='titles'>Exploring → <strong>Full-Stack Development | DevOps | Mobile Apps</strong></p>
						<p className='titles'>Building → <strong>Personal Projects & Contributions</strong></p>
					</div>
				</div>
	)
}

export default AboutMe
