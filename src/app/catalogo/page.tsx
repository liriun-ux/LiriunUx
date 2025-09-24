
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de sitios web con diseño único - LIRIUN-UX",
  description:
    "Explora nuestro catálogo de sitios web, cada uno con diseño y funcionalidad única, creado para mostrar productos y servicios de forma moderna y efectiva.",
};
import HandleProducts from "@/components/products/HandleProducts"

export default function catalogo() {
    return (
        <>
            <HandleProducts/>
        </>
    )
}

