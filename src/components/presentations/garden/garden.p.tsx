'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import GardenRandomCard from './randomCard';
import HeroCarousel from './garden.hero';
export const Garden = React.forwardRef<HTMLDivElement>((props, ref) => {

  const slides = [
    { img: "/img/garden/prd/pexels-cristian-rojas-8279863.jpg", title: "Primera Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos daw awd awd wa awd awd awd awdaw dwad aw." },
    { img: "/img/garden/prd/pexels-mibernaa-23842200.jpg", title: "Segunda Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
    { img: "/img/garden/prd/pexels-mareefe-1417945.jpg", title: "Tercera Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." },
    { img: "/img/garden/prd/pexels-vladimir-sladek-127740023-10165690.jpg", title: "Cuarta Diapositiva", description: "Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos." }
  ];

  // Estado para controlar la visibilidad del div
  const [_RandomCard, setRandomCard] = useState(<></>)
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Para almacenar el temporizador
  const [key, setKey] = useState(0); // Para forzar el reinicio de la animación

  const restartAnimation = () => {
    setKey((prevKey) => prevKey + 1); // Cambia la clave del elemento para reiniciar
  };
  // Función para manejar el clic del botón
  const handleButtonClick = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    restartAnimation();
    setRandomCard(<GardenRandomCard key={key}/>); // Cambiar el estado para mostrar/ocultar el div
    // Configurar un nuevo temporizador para ocultar el componente después de 2 segundos
    timerRef.current = setTimeout(() => {
      setRandomCard(<></>); // Ocultar el componente estableciendo un div vacío
      timerRef.current = null; // Reiniciar la referencia
    }, 2000);
  };

  return (
    <div
      id="Garden"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
      {/* Imagen de fondo */}
      <Image
        src="/img/garden/pexels-karoldach-409696.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

      {/* Contenedor con título, descripción y botón */}
<div id='GardenC' className=" flex flex-col 
lg:flex-row lg:items-center  gap-4  rounded-lg lg:w-3/6 w-full lg:ml-[-20vw] opacity-0 ">
<HeroCarousel slides={slides} handleButtonClick={handleButtonClick} />

</div>
    {_RandomCard}
    </div>
  );
});

Garden.displayName = 'Garden';
