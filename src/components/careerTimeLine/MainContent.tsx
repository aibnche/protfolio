"use client"
import React, {useEffect, useRef} from 'react'

const MainContent = ({imageUrl, setCard}:any) => {
	// const {imageUrl} = params

	const mainContainer = useRef(null)

	useEffect(()=>{

		// console.log("***********")
		// console.log(imageUrl)
		// console.log("***********")
		mainContainer.current.classList.remove('animate-in');
		setTimeout(()=>{
			mainContainer.current.classList.add('animate-in');
		},1000)


	},[imageUrl])

	return (
		<div className="main-content" ref={mainContainer}>
				<div className="back-folder w-full h-full">
					<img src='/folder.svg'/>
				</div>
				


				<div className="content w-full px-4">
					<a className="block w-full mx-auto">
						<div className="w-full h-full relative">
							<img
								alt="Mockup of the project titled &quot;Linkedin Brand Kit&quot;"
								loading="eager"
								width="525"
								height="390"
								decoding="async"
								data-nimg="1"
								className="w-full h-full object-contain"
								src={imageUrl}
								style={{color: "transparent"}}
								onClick={()=>setCard(true)}
								/>
						</div>
					</a>
				</div>


				
				<div className="front-folder bottom-[0] w-full z-10">
					<img src='/folderFront.svg'/>
				</div>

			</div>
	)
}

export default MainContent
