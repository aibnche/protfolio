import React from 'react'
import "./slidingCircle.scss"

interface SlidingCircleProps {
	imageUrl: string;
	lines?: number;
}

const SlidingCircle = ({ imageUrl, lines = 8 }: SlidingCircleProps) => {

	// Create an array of items based on the number of lines
	const items = Array.from({ length: lines }, (_, i) => i);

	return (
<div className="slide" style={{ '--lines': lines } as React.CSSProperties}>
		{items.map((i) => (
		<div 
			key={i}
			className="slide__item" 
			style={{ 
			'--i': i,
			backgroundImage: `url(${imageUrl})` 
			} as React.CSSProperties}
		/>
		))}
    </div>
	)
}

export default SlidingCircle
