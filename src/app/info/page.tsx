
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "¿Necesito un sitio web para mi negocio? - LIRIUN-UX",
  description:
    "Un sitio web da visibilidad, credibilidad y ventas a tu negocio. Es económico, competitivo y esencial para crecer y ganar confianza online.",
};

// pages/index.tsx
import NewHomeNavBar from "@/home/NewNav";
import Maro from "@/info/maro";
export default function info() {
    return (
    <div id="" className="">
       <div className="relative  log-cont flex-col justify-center items-center ">
        <NewHomeNavBar/>
        <Maro/>
        </div>
    </div>
    )
}

