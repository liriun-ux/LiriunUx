
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "¿Necesito un sitio web para mi negocio? - LIRIUN-UX",
  description:
    "Un sitio web da visibilidad, credibilidad y ventas a tu negocio. Es económico, competitivo y esencial para crecer y ganar confianza online.",
};

// pages/index.tsx
import PageInfo from "@/pages/pginfo";
export default function info() {
    return (
        <PageInfo/>
    )
}

