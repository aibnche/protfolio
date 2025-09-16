import React from 'react'
import "./footer.scss"
import Flicker from "@/components/flicker/Flicker"

const Footer = () => {
	return (
		<Flicker>
			<footer className="footer">
				<ul className="flex flex-wrap justify-center">
					<li>
						<a href="" className="link" target="_blank">
							RESUME
						</a>
					</li>
					<li className="mx-0">
						/
					</li>

					<li>
						<a href="mailto:achrafibncheikh@gmail.com" className="link" target="_blank">
							MAIL
						</a>
					</li>
					<li className="mx-0">
						/
					</li>
					
					
					<li>
						<a href="https://www.linkedin.com/in/achraf-ibn-cheikh-636498247/" className="link" target="_blank">
							LINKEDIN
						</a>
					</li>
					<li className="mx-0">
						/
					</li>

					<li>
						<a href="https://github.com/achrafato" className="link" target="_blank">
							GITHUB
						</a>
					</li>
				</ul>
			</footer>
		</Flicker>
	)
}

export default Footer
