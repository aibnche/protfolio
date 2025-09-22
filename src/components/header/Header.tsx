"use client"
import React from 'react'
import './header.scss'
import Flicker from '@/components/flicker/Flicker'

const Header = () => {
	return (
		<Flicker>
			<header className='container'>
				<h1 style={{textAlign:"center"}}>header ...</h1>
			</header>
		</Flicker>
	)
}

export default Header
