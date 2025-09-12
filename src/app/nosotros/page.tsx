'use client'
import { useState ,useEffect } from "react";

import SplashScreen from "@/home/splashscreen";
import N_Pressentation from "@/nosotros/presentacion";
// import N_vision from "@/nosotros/vision";
// import N_mision from "@/nosotros/mision";
import N_carateristicas from "@/nosotros/caracteristicas";
import N_elegirnos from "@/nosotros/elegirnos";
import NewHomeNavBar from "@/home/NewNav";

export default function Nosotros() {
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
    <div id="" className="">
  {/* Fondo */}
  <div id="NBack" >
  </div>
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}
      {showContent && (
       <div className="relative  log-cont flex-col justify-center items-center ">
        <NewHomeNavBar/>
          <N_Pressentation/>
          <N_carateristicas/>
          <N_elegirnos/>
      </div>
      )}
    </div>
  );
}
          // <N_mision/>
          // <N_vision/>
