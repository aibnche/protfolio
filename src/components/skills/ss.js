"use client"

import React from 'react'
import './aboutme.scss'
import ContactInfo from "@/components/ContactInfo/ContactInfo"
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
	// ...existing code...
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
