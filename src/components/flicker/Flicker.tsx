"use client"
import React, { useEffect, useState } from 'react'
import "./flicker.scss"
import { SkewLoader } from "react-spinners";



const Flicker = ({children}:any) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	  // Simulate lazy loading with timeout
	  const timer = setTimeout(() => setIsLoading(false), 2500); // 1.5s delay
	  return () => clearTimeout(timer);
	}, []);
	return (
		<div className="flicker">
			{
				isLoading ?  <SkewLoader className="loader" color="#191a20" /> : children
			}
		</div>
	)
}
{/* <HashLoader color="#ae1616" /> */}

export default Flicker
