"use client"

import React, { useEffect, useRef } from 'react'
import './aboutme.scss'
import ContactInfo from "@/components/ContactInfo/ContactInfo"
import Flicker from "@/components/flicker/Flicker"
import {motion} from "framer-motion"


const AnimatedText = ({ text, className = "" }) => {
	// Split text into an array of characters
	const chars = Array.from(text);
	
	return (
	  <div className={`word-wrapper ${className}`}>
		{chars.map((char, index) => (
		  <motion.span
			key={index}
			className="char"
			variants={{
			  initial: { y: 0 },
			  hovered: { y: "-100%" }
			}}
			transition={{
			  duration: 0.4,
			  ease: "easeInOut",
			  delay: index * 0.03 // Small delay based on character position
			}}
		  >
			{char === " " ? "\u00A0" : char} {/* Replace spaces with non-breaking spaces */}
		  </motion.span>
		))}
	  </div>
	);
  };



const AboutMe = () => {
	const containerRef = useRef(null);
	const requestRef = useRef();
	const previousMousePosition = useRef({ x: 0, y: 0 });

	const children = "Hi, this is Ashraf"
	const DURATION = 0.25;
	const STAGGER = 0.025;
	return (
			// <Flicker>
				<div className='container aboutme'>
					<ContactInfo/>
					<div className="intro">
					<motion.h1
        className="headLine"
        initial="initial"
        whileHover="hovered"
        style={{ position: 'relative', overflow: 'hidden', height: '3em' }}
      >
        <motion.div style={{ position: 'relative' }}>
          <AnimatedText text="Hi, this is " />
          <AnimatedText text="Achraf" className="name" />
          <AnimatedText text="." />
        </motion.div>

        <motion.div 
          className="absolute-t"
          style={{ 
            position: 'absolute', 
            top: '100%', 
            left: 0,
            display: 'flex'
          }}
        >
          <AnimatedText text="About " />
          <AnimatedText text="Me" className="name" />
        </motion.div>
      </motion.h1>
						<p className='titles'>Currently → <strong>Student at 42 School</strong></p>
						<p className='titles'>Exploring → <strong>Full-Stack Development | DevOps | Mobile Apps</strong></p>
						<p className='titles'>Building → <strong>Personal Projects & Open Source Contributions</strong></p>
					</div>
				</div>
			// </Flicker>
	)
}

export default AboutMe
