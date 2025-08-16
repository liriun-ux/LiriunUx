
// components/LastMss.tsx
import React from "react";
import { HomeNavBarItem } from "../navbar.item";

const LastMss: React.FC = () => {
    return (
    <section className=" h-screen w-screen ">
    <div id="HLB">

        <div id="HLN" className="boxA"> 
            <div className="HLCT" style={{ ["--color" as any]: '#0c808c', ["--color1" as any]: '#00ffdb' }}>
Descubre nuestra historia, valores y el equipo que hará realidad tu proyecto.
            </div>
            <div className="HLCB">
                    <HomeNavBarItem  name="NOSOTROS" href="/catalogo"/>
            </div>
        </div>

        <div id="HLC" className="boxA">
            <div className="HLCT" style={{ ["--color" as any]: '#eee', ["--color1" as any]: '#ff00cb' }}>
               Analizamos la importancia de tener presencia online. Lee nuestro informe. 
            </div>
            <div className="HLCB">
                    <HomeNavBarItem  name="¿NESESITO UNA WEB?" href="/catalogo"/>
            </div>
        </div>

        <div id="HLO" className="boxA">
            <div className="HLCT" style={{ ["--color" as any]: '#ff8f00', ["--color1" as any]: '#eee' }}>
¿Tienes alguna pregunta o quieres un sitio web a tu medida? ¡Contáctanos hoy!
            </div>
            <div className="HLCB">
                    <HomeNavBarItem  name="CONTACTO" href="/catalogo"/>
            </div>
        </div>
    </div>
    </section>
    )
}

export default LastMss;
