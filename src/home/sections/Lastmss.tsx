
// components/LastMss.tsx
import React from "react";
import { HomeNavBarItem } from "../navbar.item";
import PopContact from "./popls";

const LastMss: React.FC = () => {
    return (
    <section className=" h-screen w-screen ">
    <div id="HLB">

        <div id="HLN" className="boxA"> 
            <div className="HLCT one"  >
Descubre quiénes somos, nuestros valores y el equipo que hará posible tu proyecto.
            </div>
            <div className="HLCB">
                    <HomeNavBarItem  name="NOSOTROS" href="/nosotros"/>
            </div>
        </div>

        <div id="HLC" className="boxA">
            <div className="HLCT two" >
Analizamos la importancia de tener presencia en línea. Lee nuestro informe.
            </div>
            <div className="HLCB">
                    <HomeNavBarItem  name="¿NESESITO UNA WEB?" href="/info"/>
            </div>
        </div>

        <div id="HLO" className="boxA">
            <div className="HLCT tree">
¿Tienes alguna pregunta o estás listo para hacer realidad tu sitio web? ¡Contáctanos hoy!
            </div>
            <div className="HLCB">
                    <PopContact/>
            </div>
        </div>
    </div>
    </section>
    )
}

export default LastMss;
