'use client'
import Image from 'next/image';
import React from 'react';
import PollosMenu from './pollos.menu'

export const Pollos = React.forwardRef<HTMLDivElement>((props, ref) => {


  const slides = [
    { img: "/img/pollo/img1.png", title: "Primera Diapositiva", description: "Introduce tu sitio web y comunica de inmediato la propuesta de valor a tus visitantes." },
    { img: "/img/pollo/img2.png", title: "Segunda Diapositiva", description: "Destaca tus productos o servicios más importantes de forma visual y clara." },
    { img: "/img/pollo/img3.png", title: "Tercera Diapositiva", description: "Muestra características clave que diferencian tu negocio de la competencia." },
    { img: "/img/pollo/img4.png", title: "Cuarta Diapositiva", description: "Comparte testimonios de clientes o casos de éxito que generen confianza." },
    { img: "/img/pollo/img5.png", title: "Quinta Diapositiva", description: "Resalta promociones, novedades o noticias importantes de tu empresa." },
    { img: "/img/pollo/img6.jpg", title: "Sexta Diapositiva", description: "Invita a tus visitantes a interactuar, suscribirse o conocer más sobre tu negocio." },
    { img: "/img/pollo/img7.jpg", title: "Séptima Diapositiva", description: "Cierra con un llamado a la acción claro que dirija a tus visitantes a la siguiente sección." }
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
        <div id='Psucr1'>
        </div>
        <div id='Psucr'>
        </div>

        <div id='PollosC' className="KOLOP">
            <PollosMenu slides={slides}/>
        </div>
    </div>
  );
});

Pollos.displayName = 'Pollos';

            // <PollosHeroCarr slides={slides}  />


//             <div id='CSioc'>
// <Image
//   src="/img/pollo/fried-chicken-lunch-svgrepo-com.svg"
//   alt="Fondo"
//   fill
//   quality={100}
//   style={{
//     objectFit: "contain",
//     filter: "invert(71%) sepia(93%) saturate(385%) hue-rotate(7deg) brightness(109%) contrast(101%)",
//   }}
// />
//             </div>
//             <div id='Pstx' >
//                 <div className='bg-[#120f0c78]'>
//
//         ¡Aprovecha un <span className='StxS '>40%</span> de descuento en tu primer pedido!  </div>
//             </div>
//             <div id='Psim'>
//                 <Image
//                 src="/img/pollo/Daco_4140579.png"
//                 alt="Fondo"
//                 fill
//                 quality={100}
//                 style={{ objectFit: "contain" }}
//                 className=""
//                 />
//             </div>

