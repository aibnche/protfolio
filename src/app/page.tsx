"use client"

import Image from "next/image";
import "./style/style.scss"
import AboutMe from "@/components/aboutme/AboutMe";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import CareerTimeLine from "@/components/careerTimeLine/CareerTimeLine"
import Skills from '@/components/skills/Skills'
import Flicker from "@/components/flicker/Flicker"
import FireMouse from "@/components/firemouse/FireMouse";
import Stairs from "@/components/stairs/Stairs"
import { useEffect, useState } from "react";
import { div } from "three/tsl";

export default function Home() {

  const images = [
    'https://static.tildacdn.com/tild3234-3964-4061-b934-343630363862/Screenshot_2023-11-1.png',
    'https://static.tildacdn.com/tild3234-3964-4061-b934-343630363862/Screenshot_2023-11-1.png',
    'https://static.tildacdn.com/tild3234-3964-4061-b934-343630363862/Screenshot_2023-11-1.png',
    'https://static.tildacdn.com/tild3234-3964-4061-b934-343630363862/Screenshot_2023-11-1.png',
  ];


  
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