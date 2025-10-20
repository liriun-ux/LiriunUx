



"use client"


import { useState ,useEffect } from "react";
import SplashScreen from "@/home/splashscreen";

import NewHomeNavBar from "@/home/NewNav";
import Maro from "@/info/maro";

export default function PageInfo() {
    const [showContent, setShowContent] = useState(false);
      useEffect(() => {
    if (!showContent) {
      // document.body.style.overflow = "hidden";
    } else {
      // document.body.style.overflow = "auto";
      // document.body.style.overflowY = "scroll";
    }
  }, [showContent]);
  return (

    <div id="" className="">
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}
      {showContent && (
       <div className="relative  log-cont flex-col justify-center items-center ">
        <NewHomeNavBar/>
        <Maro/>
        </div>
      )}

    </div>
  );
}
