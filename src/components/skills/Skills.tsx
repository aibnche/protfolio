"use client";

import React from "react";
import "./tes.scss";
import { IoIosArrowDown } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";

import { LuMousePointer2 } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { RxText } from "react-icons/rx";
import { LuSticker } from "react-icons/lu";
import { RiShapesLine } from "react-icons/ri";
import { MdCropFree } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuFrame } from "react-icons/lu";

export default function AnimatedShapes() {

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

  return (
    <div className="ctt">
      <img src="/skills.png" alt="Skills background" className="background-image"/>
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

    </div>
  );
}
