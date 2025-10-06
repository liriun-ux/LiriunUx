'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import WoodFurnitureRandomCard from './randomCard';

export const WoodFurniture = React.forwardRef<HTMLDivElement>((props, ref) => {
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
    setRandomCard(<WoodFurnitureRandomCard key={key}/>); // Cambiar el estado para mostrar/ocultar el div
    // Configurar un nuevo temporizador para ocultar el componente después de 2 segundos
    timerRef.current = setTimeout(() => {
      setRandomCard(<></>); // Ocultar el componente estableciendo un div vacío
      timerRef.current = null; // Reiniciar la referencia
    }, 2000);
  };

  return (
    <div
      id="WoodFurniture"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
      {/* Imagen de fondo */}
<div className="absolute w-full h-[20%] top-36"> 
  <Image
    src="/img/wood/pexels-caio-mantovani-97605853-14495131.jpg"
    alt="Fondo"
    fill
    style={{ objectFit: "cover" }}
    quality={100}
    className="-z-10"
  />
</div>

      {/* Contenedor con título, descripción y botón */}
<div id='WoodFurnitureC' className="maedraConter">

  {/* Contenedor del título y descripción */}
  <div className="MadProductos">
  
        <div className="RFTcontenedor">
      {/* Caja principal */}
      <div className="RFTcajaPrincipal">
        <Image
        src="/img/wood/silla.jpg" // Reemplaza con el nombre de tu imagen
          alt="Imagen central"
          width={150}
          height={150}
          className="RFTimagenCentral"
        />
      </div>

      {/* Caja sombra */}
      <div className="RFTcajaSombra">
        <Image
        src="/img/wood/bkop.png" // Reemplaza con el nombre de tu imagen
          alt="Imagen sombra"
          fill
          className="RFTimagenSombra"
        />
      </div>
    </div>


        <div className="RFTcontenedor">
      {/* Caja principal */}
      <div className="RFTcajaPrincipal">
        <Image
        src="/img/wood/mesanogal.jpg" // Reemplaza con el nombre de tu imagen
          alt="Imagen central"
          width={150}
          height={150}
          className="RFTimagenCentral"
        />
      </div>

      {/* Caja sombra */}
      <div className="RFTcajaSombra">
        <Image
        src="/img/wood/maderaNogal.jpg" // Reemplaza con el nombre de tu imagen
          alt="Imagen sombra"
          fill
          className="RFTimagenSombra"
        />
      </div>
    </div>


        <div className="RFTcontenedor">
      {/* Caja principal */}
      <div className="RFTcajaPrincipal">
        <Image
    src="/img/wood/mesa2.jpg"
          alt="Imagen central"
          width={150}
          height={150}
          className="RFTimagenCentral"
        />
      </div>

      {/* Caja sombra */}
      <div className="RFTcajaSombra">
        <Image
    src="/img/wood/madera2color.jpg"
          alt="Imagen sombra"
          fill
          className="RFTimagenSombra"
        />
      </div>
    </div>

        <div className="RFTcontenedor">
      {/* Caja principal */}
      <div className="RFTcajaPrincipal">
        <Image
    src="/img/wood/silla2.jpg"
          alt="Imagen central"
          width={150}
          height={150}
          className="RFTimagenCentral"
        />
      </div>

      {/* Caja sombra */}
      <div className="RFTcajaSombra">
        <Image
    src="/img/wood/silla2color.jpg"
          alt="Imagen sombra"
          fill
          className="RFTimagenSombra"
        />
      </div>
    </div>

  </div>

  {/* Botón con margen si hay espacio */}
  <div className="mt-4 lg:mt-0 lg:ml-4  ">
  <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg 
                    hover:bg-amber-50 hover:text-amber-900 transition duration-300 ease-in-out w-max"
    onClick={handleButtonClick}
  >
      Ver más
    </button>
  </div>
</div>
    {_RandomCard}
    </div>
  );
});

WoodFurniture.displayName = 'WoodFurniture';
