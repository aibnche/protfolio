"use client"
import React, { useEffect } from 'react'

useEffect(() => {
	setTimeout(() => {
		
	}, 2000)
}, [])

export const Loading = () => {
  return (
	<div>
		<p>loading..........</p>
	</div>
  )
}

export default Loading