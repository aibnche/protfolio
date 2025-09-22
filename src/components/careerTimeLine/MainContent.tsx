"use client"
import React, {useEffect, useRef} from 'react'

interface MainContentProps {
	imageUrl: string;
	setCard: (value: boolean) => void;
}

const MainContent = ({imageUrl, setCard}: MainContentProps) => {

	const mainContainer = useRef<HTMLDivElement>(null)

	useEffect(()=>{

		// console.log("***********")
		// console.log(imageUrl)
		// console.log("***********")
		if (mainContainer.current) {
			mainContainer.current.classList.remove('animate-in');
			setTimeout(()=>{
				if (mainContainer.current) {
					mainContainer.current.classList.add('animate-in');
				}
			},1000)
		}


	},[imageUrl])

	return (
		<div className="main-content" ref={mainContainer}>
				<div className="back-folder w-full h-full">
					<img src='/folder.svg' alt="Folder icon"/>
				</div>
				


				<div className="content w-full px-4">
					<a className="block w-full mx-auto">
						<div className="w-full h-full relative">
							<img
								alt="Project screenshot"
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
					<img src='/folderFront.svg' alt="Folder front icon"/>
				</div>

			</div>
	)
}

export default MainContent
