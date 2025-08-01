'use client'
import { useState ,useEffect } from "react";

import SplashScreen from "@/home/splashscreen";
import NewHomeNavBar from "@/home/NewNav";
import HeroHome from "@/home/sections/Hero";
export default function Home() {
    const [showContent, setShowContent] = useState(false);
      useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowY = "scroll";
    }
  }, [showContent]);
  return (
    <div id="Home" className="HomeFor">
  {/* Fondo */}
  <div id="HBack" >
    <div className="HBR" id="HBRN1" style={{ background: '#00ff00', left: '10%', top: '10%' }}></div>
    <div className="HBR" id="HBRN2" style={{ background: '#00ffff', left: '10%', top: '70%' }}></div>
    <div className="HBR" id="HBRN3" style={{ background: '#ffaa00', left: '20%', top: '40%' }}></div>
    <div className="HBR" id="HBRN4" style={{ background: '#ffff00', left: '60%', top: '20%' }}></div>
    <div className="HBR" id="HBRN5" style={{ background: '#ff0000', left: '50%', top: '70%' }}></div>
    <div className="HBR" id="HBRN6" style={{ background: '#ffffff', left: '50%', top: '50%' }}></div>
  </div>
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}
      {showContent && (
       <div className="relative w-screen log-cont flex-col justify-center items-center HomeFor">
          <NewHomeNavBar/>
          <HeroHome/>
          <section className="h-screen  w-1/3  ">hello</section>
          <section className="h-screen  w-1/3  ">hello</section>
          <section className="h-screen  w-1/3  ">hello</section>
      </div>
      )}
    </div>
  );
}
