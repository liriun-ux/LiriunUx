
// components/InfoHome.tsx
import React from "react";
import { useState } from 'react';



const Text = {
  inicio: (
    <div id="InfoAnCTXTXI" >
      La portada principal donde se presenta la propuesta de valor y lo más destacado del sitio.
    </div>
  ),
  Nosotros: (
    <div id="InfoAnCTXTXN">
      Sección dedicada a explicar quiénes somos, nuestra historia, misión, visión y equipo.
    </div>
  ),
  Productos: (
    <div id="InfoAnCTXTXP">
      Catálogo o listado de productos o servicios que la empresa ofrece a sus clientes.
    </div>
  ),
  Contactos: (
    <div id="InfoAnCTXTXC">
      Espacio con formularios, teléfonos, emails o direcciones para que los usuarios puedan comunicarse.
    </div>
  ),
};


const InfoHome: React.FC = () => {

  const [activeSection, setActiveSection] = useState(      <div className="InfoAnCTXTX">Seleciona alguno de los botons que explica usu proposito en las paginas weba a</div>);

  return (
    <section className=" h-screen w-screen ">

        <div id="Info_base">

            <div id="InfoText" className="boxA">
                <div id="InfoTextB"> 
                    <div id="InfoTextT">
                        En la parte inferior encontrarás un ejemplo del esquema clásico de navegación web, 
                        con las secciones esenciales tal como se emplea en sitios web 
                        modernos y funcionales.
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
