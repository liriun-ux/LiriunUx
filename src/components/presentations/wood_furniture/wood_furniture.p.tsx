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
      <Image
        src="/img/wood/pexels-caio-mantovani-97605853-14495131.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

      {/* Contenedor con título, descripción y botón */}
<div id='WoodFurnitureC' className="relative flex flex-col sm:flex-row items-center lg:flex-row lg:items-center  gap-4 bg-green-50/80 m-5 lg:p-10 p-3 rounded-lg lg:w-3/6 lg:ml-[-20vw] opacity-0 top-6 lg:top-0">

      <Image
        src="/img/wood/bkop.png" // Reemplaza con el nombre de tu imagen
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        className="absolute inset-0 -z-10 rounded-lg " // Posiciona la imagen detrás del contenido
      />
  {/* Contenedor del título y descripción */}
  <div className="flex flex-col">
    <h2 className="text-3xl text-amber-900 lg:text-5xl font-bold mb-4">Maderera</h2>
    <p className="text-lg lg:text-xl text-black">
Este es un ejemplo de una tarjeta flotante pequeña, ideal para mostrar información breve y clara.
    </p>
  </div>

  {/* Botón con margen si hay espacio */}
  <div className="mt-4 lg:mt-0 lg:ml-4  ">
  <button className="bg-amber-900 text-amber-50 font-semibold py-2 px-4 rounded-lg 
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
