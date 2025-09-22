import React from 'react'
import './about.scss'
import Flicker from "@/components/flicker/Flicker"
import SlidingCircle from '../slidingCircle/SlidingCircle'
import FireMouse from '../firemouse/FireMouse'
const About = () => {
	return (
	
	<Flicker>
		<div className="container about-c">
			<FireMouse />
			<div className="intro">
				<h1>Hi there, I&apos;m Ashraf</h1>
				
				<div className="tagline">
					<span>A developer crafting digital magic with clean code and pixel-perfect interfaces</span>
				</div>
				
				<p>Currently honing my skills at <strong>42 School</strong> while building projects with the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) and <strong>Next.js</strong>. I bring designs to life with <strong>CSS/Sass</strong> superpowers and a focus on seamless user experiences.</p>
				
				<p>My tech journey started at <strong>OFPPT</strong>, with a passion for problem-solving through code. Now I&apos;m leveling up at <strong>42 School</strong>&apos;s peer-driven learning environment – surviving the infamous &quot;piscine&quot; and embracing the grind</p>
				
				<p>I thrive where logic meets creativity. Whether it&apos;s architecting a full-stack app or tweaking animations until they <em>feel</em> just right, I love the process as much as the result.</p>
				
				<p>Let&apos;s connect! I&apos;m always open to collaborating on wild ideas or debating React vs NextJs over coffee.</p>
				
				<div className="pic">
					<SlidingCircle 
						imageUrl="/profile_pic.jpeg" 
						lines={20} 
					/>
				</div>


				
			</div>
		</div>
	</Flicker>
	)
}

export default About
