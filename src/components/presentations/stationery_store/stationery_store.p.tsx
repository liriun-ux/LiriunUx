'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import StationeryStoreRandomCard from './randomCard';

export const StationeryStore = React.forwardRef<HTMLDivElement>((props, ref) => {
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
    setRandomCard(<StationeryStoreRandomCard key={key}/>); // Cambiar el estado para mostrar/ocultar el div
    // Configurar un nuevo temporizador para ocultar el componente después de 2 segundos
    timerRef.current = setTimeout(() => {
      setRandomCard(<></>); // Ocultar el componente estableciendo un div vacío
      timerRef.current = null; // Reiniciar la referencia
    }, 2000);
  };

  return (
    <div
      id="StationeryStore"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
      {/* Imagen de fondo */}
      <Image
        src="/img/stationaryStore/pexels-n-voitkevich-5554661.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

      {/* Contenedor con título, descripción y botón */}
<div id='StationeryStoreC' className="relative flex flex-col sm:flex-row lg:flex-row items-center  gap-4 bg-green-50/80 m-5 lg:p-10 p-4 rounded-lg lg:w-3/6 lg:ml-[-20vw] opacity-0 top-6 lg:top-0 ">
  {/* Contenedor del título y descripción */}
  <div className="flex flex-col">
    <h2 className="text-3xl text-green-900 lg:text-5xl font-bold mb-4">Componentes Satias</h2>
    <p className="text-lg lg:text-xl text-green-800">
      Ofrecemos los mejores componentes electrónicos al mejor precio, garantizando calidad y rendimiento para tus proyectos tecnológicos.
    </p>
  </div>

  {/* Botón con margen si hay espacio */}
  <div className="mt-4 lg:mt-0 lg:ml-4  ">
  <button className="bg-green-900 text-green-100 font-semibold py-2 px-4 rounded-lg 
                    hover:bg-green-100 hover:text-green-900 transition duration-300 ease-in-out w-max"
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

StationeryStore.displayName = 'StationeryStore';
