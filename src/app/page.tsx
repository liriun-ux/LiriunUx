
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - LIRIUN-UX",
  description: "LIRIUN-UX: diseño y creación de sitios web modernos y rápidos.",
};

import PageInicio from "@/pages/Inicio";


export default function Home() {
  return (
    <PageInicio/>
  );
}
