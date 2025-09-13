"use client"

import Image from "next/image";
import "./style/style.scss"
import AboutMe from "@/components/aboutme/AboutMe";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import CareerTimeLine from "@/components/careerTimeLine/CareerTimeLine"
import Test from '@/components/tes/Test'
import Flicker from "@/components/flicker/Flicker"
import FireMouse from "@/components/firemouse/FireMouse";
import Stairs from "@/components/stairs/Stairs"

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
        <Test/>
      
        <CareerTimeLine/>
      </Flicker>
      
        {/* <FireMouse/> */}
        {/* <Stairs/> */}
    </main>
  );
}
// Want to see what I've been building? Check out my GitHub!