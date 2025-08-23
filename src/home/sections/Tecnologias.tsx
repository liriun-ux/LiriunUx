// components/Tecnologias.tsx
import React from "react";
import { HomeNavBarItem } from "../navbar.item";

const Tecnologias: React.FC = () => {
    return (
    <section className=" h-screen w-screen ">
    <div id="HTB">
        <div id="HTT" className="boxA"> 
            <div id="HTTB">
<p >Utilizamos las siguientes tecnologías modernas y probadas en la industria para crear páginas web rápidas, seguras y adaptadas a cualquier dispositivo.</p>
                   <span className="HTTBT"> <span   id="rNe">Next.js</span><span>  Framework de React que permite crear sitios web rápidos y optimizados.</span></span>
                   <span className="HTTBT"> <span   id="rTy">TypeScript   </span><span>  Lenguaje que añade tipado a JavaScript, mejorando la seguridad y mantenibilidad del código.</span></span>
                   <span className="HTTBT"> <span   id="rTa">Tailwind CSS </span><span>  Framework de CSS que permite diseñar interfaces modernas de forma rápida y flexible.</span></span>
                   <span className="HTTBT"> <span   id="rHt">HTML5        </span><span>  Lenguaje estándar para estructurar contenido en la web.</span></span>
                   <span className="HTTBT"> <span   id="rCs">CSS3         </span><span>  Herramienta para dar estilo y animaciones atractivas a las páginas.</span></span>
                   <span className="HTTBT"> <span   id="rVe">Vercel       </span><span>  Plataforma de despliegue que garantiza velocidad y disponibilidad global de tu sitio.</span></span>

            </div>
        </div>


        <div id="HTC" className="boxA">
            <div id="HTCB">
                <div id="HTCBT">
    <span>Dale forma a tu visión </span><br/>

Explora nuestro catálogo de secciones únicas y descubre cómo tu página puede lucir profesional, moderna y atractiva.
                </div>
                <div id="HTCBB">
                    <HomeNavBarItem  name="CATALOGO" href="/catalogo"/>
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}

export default Tecnologias;
