'use client'
import { useState ,useEffect } from "react";
import Image from "next/image";

import SplashScreen from "@/home/splashscreen";
import NewHomeNavBar from "@/home/NewNav";
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
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}
      {showContent && (
          <div className="relative w-screen log-cont flex-col justify-center items-center HomeFor">
          <NewHomeNavBar/>
      <section className="h-screen  w-1/3 bg-black/30 underline ">hello</section>
      <section className="h-screen  w-1/3 bg-black/30 ">hello</section>
      <section className="h-screen  w-1/3 bg-black/30 ">hello</section>
      </div>
      )}
    </div>
  );
}
