"use client"

import "./style/style.scss"
import AboutMe from "@/components/aboutme/AboutMe";
import CareerTimeLine from "@/components/careerTimeLine/CareerTimeLine"
import Skills from '@/components/skills/Skills'
import Flicker from "@/components/flicker/Flicker"

export default function Home() {




  
  return (
    <main>
      <Flicker>

              <AboutMe/>
              <Skills/>
              <CareerTimeLine/>

      </Flicker>
      
        {/* <FireMouse/> */}
        {/* <Stairs/> */}
    </main>
  );
}
// Want to see what I've been building? Check out my GitHub!