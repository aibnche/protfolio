"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./tes.scss";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { LuUsersRound } from "react-icons/lu";

import { LuMousePointer2 } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { RxText } from "react-icons/rx";
import { LuSticker } from "react-icons/lu";
import { RiShapesLine } from "react-icons/ri";
import { MdCropFree } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuFrame } from "react-icons/lu";
import { rotate } from "three/tsl";
import { img } from "framer-motion/client";

export default function AnimatedShapes() {
  const containerRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef(null);

  const containerHeight = 500;

  const stciks = [
    { top: "15%", left: "10%", rotate: "-10deg", lang: "NodeJs" , img: "/sticky-note.png" },
    { top: "10%", left: "66%", rotate: "-10deg", lang: "MongoDB" , img: "/paper.png" },
    { top: "40%", left: "24%", rotate: "-20deg", lang: "ExpressJs" , img: "/sticky__note.png" },
    { top: "40%", left: "80%", rotate: "-20deg", lang: "ReactJs" , img: "/note.png" },
    { top: "70%", left: "70%", rotate: "17deg", lang: "Flutter" , img: "/note_pink.png" },
    { top: "70%", left: "40%", rotate: "17deg", lang: "SaSS" , img: "/note_or.png" },
    { top: "10%", left: "40%", rotate: "17deg", lang: "C++" , img: "/pinned-notes.png" },
    { top: "10%", left: "80%", rotate: "17deg", lang: "C" , img: "/stickynote.png" },
    { top: "70%", left: "10%", rotate: "17deg", lang: "Css" , img: "/sticky-noteee.png" },
    { top: "70%", left: "80%", rotate: "17deg", lang: "Docker" , img: "/docker-sticky.png" },
  ]
  // Image paths - replace these with your actual image paths
  const images = [
    "/_c.svg",
    "/_c++.svg",
    "/_css_css3_icon.svg",
    "/_github-logo.svg",
    "/_graphql.svg",
    "/_html_icon.svg",
    "/_java_language_icon.svg",
    "/_javascript_language_icon.svg",
    "/_mongodb.svg",
    "/_next.svg",
    "/_nodejs_icon.svg",
    "/_react_icon.svg",
    "/_sass_icon.svg",
    "/_spring-boot.svg",
    "/_json.svg",
  ];

  const languages: string[] = [
    "c",
    "c++",
    "css",
    "github",
    "graphql",
    "html",
    "java",
    "js",
    "mongodb",
    "nextjs",
    "nodejs",
    "reactjs",
    "sass",
    "springboot",
    "json",
  ];

  // function moveParticle(particle:any) {
  //   particle.x += particle.vx;
  //   particle.y += particle.vy;

  //   if (particle.x < 0 || particle.x > windowSize.width - particle.radius) {
  //     particle.vx = -particle.vx;
  //   }
  //   if (particle.y < 0 || particle.y > containerHeight - particle.radius) {
  //     particle.vy = -particle.vy;
  //   }

  //   particle.div.style.left = `${particle.x}px`;
  //   particle.div.style.top = `${particle.y}px`;
  //   particle.div.style.transform = `rotate(${particle.y}deg)`;

  //   return particle;
  // }

  // function animate() {
  //   particlesRef.current.forEach((particle, index) => {
  //     particlesRef.current[index] = moveParticle(particle);
  //   });
  //   animationRef.current = requestAnimationFrame(animate);
  // }

  // Throttle function
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const parallax = throttle((event: any) => {
    particlesRef.current.forEach((particle) => {
      const multiplier = 0.05;

      const x = (windowSize.width - event.pageX * 2) * multiplier;
      const y = (windowSize.height - event.pageY * 2) * multiplier;

      // Use translate3d for GPU-accelerated animation
      particle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }, 16);

  const reset_parallax = (e) => {
    particlesRef.current.forEach((particle) => {
      particle.style.transform = `translateX(${0}px) translateY(${0}px)`;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: containerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: containerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const jsss = "JS";

  return (
    <div className="ctt">
      <h1
        className="hh"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "50px",
          zIndex: "111",
        }}
      >
        Technologies
      </h1>

      <div className="ddd">
        <div className="skillNav">
          {/* Header section */}
          <div className="skillNav-header">
            <div className="profile-icon">
              {/* Replace with your actual icon component */}
              <LuUsersRound />
            </div>

            <h2 className="skillNav-title">Skills</h2>

            {/* Replace with arrow icon */}
            <IoIosArrowDown />
          </div>

          {/* Tools section */}
          <div className="tools">
            <LuMousePointer2 />
            <LuPencil />
            <RxText />
            <LuSticker />
            <RiShapesLine />
            <MdCropFree />
            <LuFrame />
            <HiOutlineDotsHorizontal />
          </div>
        </div>

        
        <div className="mui_text-box-handler">
          <div className="mui_text-box-corner"></div>
          <div className="mui_text-box-corner"></div>
          <div className="mui_text-box-corner"></div>
          <div className="mui_text-box-corner"></div>
          <h2>Areas<br></br>       of <br></br> Expertise</h2>
        </div>

        {
          stciks.map((stick, index)=>(
            <div 
            className="Sticky"
            key={index}
            style={{ top: stick.top, left: stick.left, transform: `rotate(${stick.rotate})`, backgroundImage: `url(${stick.img})` }}
            >
              {/* <Image src="/sticky-note.png" alt="dd" width={100} height={150}/> */}
              <p>{stick.lang}</p>
            </div>
          ))
        }
      </div>
      {/* <div
        className="ddd"

        ref={containerRef}
        onMouseMove={parallax}
        onMouseLeave={reset_parallax}
        style={{ 
          width: '100%', 
          height: '100%', 
        }}
      /> */}
      {
        // languages.map((lang, index) => {
        //   const randomTop = getRandomInt(0, 80);
        //   const randomLeft = getRandomInt(20, 70);
        //   const randomRight = 20;
        //   return (<pre
        //     className={`im${index+1} layer`}
        //     key={index}
        //     ref={(el : any) => (particlesRef.current[index] = el)}
        //     style={{
        //       top: `${randomTop}%`,
        //       left: `${randomLeft}%`,
        //       right: `${randomRight}%`
        //     }}
        //     >
        //     {lang}
        //     </pre>)
        // }
        // )
      }
    </div>
  );
}
