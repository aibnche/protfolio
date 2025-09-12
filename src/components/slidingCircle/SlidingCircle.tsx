import React from 'react'
import "./slidingCircle.scss"


const SlidingCircle = ({ imageUrl, lines = 8 }) => {

	// Create an array of items based on the number of lines
	const items = Array.from({ length: lines }, (_, i) => i);

	return (
<div className="slide" style={{ '--lines': lines }}>
		{items.map((i) => (
		<div 
			key={i}
			className="slide__item" 
			style={{ 
			'--i': i,
			backgroundImage: `url(${imageUrl})` 
			}}
		/>
		))}
    </div>
	)
}

export default SlidingCircle
