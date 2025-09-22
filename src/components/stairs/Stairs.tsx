import React, {useEffect, useState} from 'react'
import './stairs.scss'
import {motion, AnimatePresence} from "framer-motion"
import { UserProvider } from '@/context/context'

interface StairsProps {
	children: React.ReactNode;
}

const Stairs = ({children}: StairsProps) => {
	const [delay, setDelay] = useState(true)
	const n_divs = 6

	useEffect(()=>{
		// setTimeout(()=>{
		// 	setDelay(false)
		// }, 5000)
		console.log("*********1***********")
		console.log(delay)
		console.log("**********2**********")
	},[delay])


	return (
		<AnimatePresence mode="wait">
		{
			delay && <motion.div 
				className="stair-cont"
				key="stair-container">
				<motion.div
					className="overlay"
					initial={{opacity:0.1}}
					animate={{opacity:0}}
					exit={{opacity:0.1}}
					>
				</motion.div>
				{
					[...Array(n_divs)].map((_, i)=>(
						<motion.div
							className="slide"
							key={i}
							initial={{  y: -1150}}
							animate={{ y: 0}}
							exit={{ y: 1150}}
							transition = {{ duration: 0.5, delay: 0.08 * (n_divs - i) , ease: [0.61, 1, 0.88, 1] }}
							></motion.div>
						))
				}
		</motion.div>
		}
		<UserProvider value={{delay, setDelay}}>
			{children}
		</UserProvider>
	</AnimatePresence>
	)
}

export default Stairs
