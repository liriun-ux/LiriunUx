'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import ElectronicRandomCard from './randomCard';


export const Electronic = React.forwardRef<HTMLDivElement>((props, ref) => {
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
    setRandomCard(<ElectronicRandomCard key={key}/>); // Cambiar el estado para mostrar/ocultar el div
    // Configurar un nuevo temporizador para ocultar el componente después de 2 segundos
    timerRef.current = setTimeout(() => {
      setRandomCard(<></>); // Ocultar el componente estableciendo un div vacío
      timerRef.current = null; // Reiniciar la referencia
    }, 2000);
  };

  return (
    <div
      id="Electronic"
      className="relative h-screen bg-black/40 flex justify-start items-center text-white newSection overflow-hidden "
      ref={ref}
    >
      {/* Imagen de fondo */}
      <Image
        src="/img/electronic/pexels-pixabay-163100.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

      {/* Contenedor con título, descripción y botón */}
<div id='ElectronicC' className="relative flex flex-col sm:flex-row items-center  gap-4 bg-gray-800/45 m-5 lg:p-10 p-5 rounded-lg lg:w-3/6 lg:ml-[10vw] opacity-0 top-6 lg:top-0  ">
  {/* Contenedor del título y descripción */}
  <div className="flex flex-col">
    <h2 className="text-3xl text-amber-500 lg:text-5xl font-bold mb-4">Componentes Electrónicos</h2>
    <p className="text-lg lg:text-xl">
      Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos.
    </p>
  </div>

  {/* Botón con margen si hay espacio */}
  <div className="mt-4 lg:mt-0 lg:ml-4  ">
  <button className="bg-amber-500 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-amber-500 transition duration-300 ease-in-out w-max"
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

Electronic.displayName = 'Electronic';
