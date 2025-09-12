"use client"
import React, { useRef, useEffect } from 'react';
import "./firemouse.scss";

const FireMouse = () => {
	const coords = useRef({ x: 0, y: 0 });
	const containerRef = useRef(null);

	useEffect(() => {
		// Only run this code after component is mounted
		const circles = containerRef.current.querySelectorAll(".circle");
		
		// Initialize circle positions
		circles.forEach(circle => {
			circle.x = 0;
			circle.y = 0;
		});
		
		const animateCircles = () => {
			let x = coords.current.x;
			let y = coords.current.y;
			
			circles.forEach((circle, index) => {
				circle.style.left = x - 12 + "px";
				circle.style.top = y - 12 + "px";
				
				circle.x = x;
				circle.y = y;
				
				const nextCircle = circles[index + 1] || circles[0];
				x += (nextCircle.x - x) * 0.5;
				y += (nextCircle.y - y) * 0.5;
			});
			
			requestAnimationFrame(animateCircles);
		};
		
		const handleMouseMove = (e) => {
			coords.current.x = e.clientX;
			coords.current.y = e.clientY;
		};
		
		window.addEventListener("mousemove", handleMouseMove);
		
		// Start animation
		animateCircles();
		
		// Clean up when component unmounts
		return () => {
		window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []); // Empty dependency array means this runs once on mount

	return (
		<div className="ffd" ref={containerRef}>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
		</div>
	);
};

export default FireMouse;