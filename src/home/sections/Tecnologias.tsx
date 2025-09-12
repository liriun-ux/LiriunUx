// components/Tecnologias.tsx
import React from "react";
import { HomeNavBarItem } from "../navbar.item";

const Tecnologias: React.FC = () => {
    return (
    <section className=" h-screen w-screen ">
    <div id="HTB">
        <div id="HTT" className="boxA"> 
            <div id="HTTB">
<p >
Con las mejores tecnologías, hacemos que tu sitio web sea rápido, seguro y se vea perfecto en cualquier dispositivo.
</p>
                   <span className="HTTBT"> <span   id="rNe">&nbsp;Next.js      </span><span>  Usamos este framework de React para que tu web sea rápida, eficiente y fácil de usar.</span></span>
                   <span className="HTTBT"> <span   id="rHt">&nbsp;HTML5        </span><span>  El lenguaje que usamos para organizar el contenido de tu web, asegurando que todo se vea claro y ordenado.</span></span>
                   <span className="HTTBT"> <span   id="rCs">&nbsp;CSS3         </span><span>  El lenguaje que usamos para que tu web luzca atractiva y tenga animaciones que mejoran la experiencia de tus usuarios.</span></span>
                   <span className="HTTBT"> <span   id="rTy">&nbsp;TypeScript   </span><span>  Lenguaje de programación que usamos para que tu web sea más segura y su código más fácil de actualizar.</span></span>
                   <span className="HTTBT"> <span   id="rTa">&nbsp;Tailwind CSS </span><span>  Usamos este framework de CSS para que tu web tenga un diseño moderno, bonito y que se adapte a cualquier dispositivo rápidamente.</span></span>
                   <span className="HTTBT"> <span   id="rVe">&nbsp;Vercel       </span><span>  Usamos esta plataforma para que tu web cargue rápido y esté accesible desde cualquier lugar del mundo.</span></span>

            </div>
        </div>


        <div id="HTC" className="boxA">
            <div id="HTCB">
                <div id="HTCBT">
    <span>Dale vida a tu idea  </span><br/>

Mira nuestro catálogo de secciones web y descubre cómo tu página puede verse profesional, moderna y llamativa.                </div>
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
