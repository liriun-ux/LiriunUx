'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import PollosHeroCarr from './pollos.hero';

export const Pollos = React.forwardRef<HTMLDivElement>((props, ref) => {


  const slides = [
    { img: "/img/coffee/prd/pexels-chevanon-312418.jpg", title: "Primera Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos daw awd awd wa awd awd awd awdaw dwad aw." },
    { img: "/img/coffee/prd/pexels-evgeny-tchebotarev-1058775-2187601.jpg", title: "Segunda Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
    { img: "/img/coffee/prd/pexels-jayoke-851555.jpg", title: "Tercera Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
    { img: "/img/coffee/prd/pexels-ngqah83-885021.jpg", title: "Cuarta Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
    { img: "/img/coffee/prd/pexels-nurseryart-373639.jpg", title: "Quinte Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
    { img: "/img/coffee/prd/pexels-picturemechaniq-1749303.jpg", title: "Sexta Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
    { img: "/img/coffee/prd/pexels-tyler-nix-1259808-2396220.jpg", title: "Septima Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
  ];
  return (
    <div
      id="Pollos"
      className="relative h-screen bg-amber-50 flex justify-start items-center text-white newSection overflow-hidden "
      ref={ref}
    >
            <div id='CSioc3'>
                <Image
                src="/img/pollo/fried-chicken-lunch-svgrepo-com.svg"
                alt="Fondo"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                className=""
                />
            </div>
            <div id='CSioc2'>
                <Image
                src="/img/pollo/fried-chicken-lunch-svgrepo-com.svg"
                alt="Fondo"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                className=""
                />
            </div>
            <div id='CSioc1'>
                <Image
                src="/img/pollo/fried-chicken-lunch-svgrepo-com.svg"
                alt="Fondo"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                className=""
                />
            </div>

      {/* Contenedor con título, descripción y botón */}
        <div id='Psucr'>
            <div id='CSioc'>
                <Image
                src="/img/pollo/fried-chicken-lunch-svgrepo-com.svg"
                alt="Fondo"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                className=""
                />
            </div>
            <div id='Pstx' >
                <div>
            te esperamos con un <span className='StxS '>40%</span> de descuento en tu primer pedido
                </div>
            </div>
            <div id='Psim'>
                <Image
                src="/img/pollo/Daco_4140579.png"
                alt="Fondo"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                className=""
                />
            </div>

        </div>

        <div id='PollosC' className="KOLOP">
            <PollosHeroCarr slides={slides}  />
        </div>
    </div>
  );
});

Pollos.displayName = 'Pollos';
