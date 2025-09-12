
// components/InfoHome.tsx
import React from "react";
import { useState } from 'react';



const Text = {
  inicio: (
    <div id="InfoAnCTXTXI" >
Es la primera página de tu sitio, donde mostramos lo más importante y lo que hace especial tu web.
    </div>
  ),
  Nosotros: (
    <div id="InfoAnCTXTXN">
Aquí contamos quién eres, tu historia, lo que te inspira y el equipo que hace posible tu proyecto.
    </div>
  ),
  Productos: (
    <div id="InfoAnCTXTXP">
Aquí encontrarás tus productos y servicios, con lo que ofrecen y cómo pueden ayudar a tus clientes.
    </div>
  ),
  Contactos: (
    <div id="InfoAnCTXTXC">
Aquí tus clientes pueden seguirte en tus redes sociales y ver dónde están tus sucursales en un mapa fácil de usar.
    </div>
  ),
};


const InfoHome: React.FC = () => {

  const [activeSection, setActiveSection] = useState(      <div className="InfoAnCTXTX">
Haz clic en un botón y descubre para qué sirve en una página web.
</div>);

  return (
    <section className=" h-screen w-screen ">

        <div id="Info_base">

            <div id="InfoText" className="boxA">
                <div id="InfoTextB"> 
                    <div id="InfoTextT">
En la parte inferior encontrarás un ejemplo del esquema clásico de navegación web, con las secciones esenciales tal como se utilizan en sitios modernos y funcionales.
                    </div>
                </div>
            </div>
            <div id="InfoAnimate" className="boxA">
                    <div id="InfoAnA" className="">
                        <button className={`InfoAnBTT ${activeSection === Text.inicio ? 'InfoAnBTTF' : ''}`}  onClick={() => setActiveSection(Text.inicio)}    >INICIO</button>
                        <button className={`InfoAnBTT ${activeSection === Text.Nosotros ? 'InfoAnBTTF' : ''}`}  onClick={() => setActiveSection(Text.Nosotros)}  >NOSOTROS</button>
                        <button className={`InfoAnBTT ${activeSection === Text.Productos ? 'InfoAnBTTF' : ''}`}  onClick={() => setActiveSection(Text.Productos)} >PRODUCTOS</button>
                        <button className={`InfoAnBTT ${activeSection === Text.Contactos ? 'InfoAnBTTF' : ''}`}  onClick={() => setActiveSection(Text.Contactos)} >CONTACTO</button>
                    </div>

                    <div id="InfoAnB">
                        <div className="InfoAnCTX" >
                        {activeSection}
                        </div>
                    </div>
            </div>


        </div>

    </section>
  );
};

export default InfoHome;
