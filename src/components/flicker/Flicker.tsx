import React from 'react'
import "./flicker.scss"

const Flicker = ({children}:any) => {
	return (
		<div className="flicker">
			{children}
		</div>
	)
}

export default Flicker
