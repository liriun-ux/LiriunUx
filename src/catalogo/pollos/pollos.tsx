'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import ElectronicRandomCard from '@/components/presentations/Electronic/randomCard';


export const Pollos = React.forwardRef<HTMLDivElement>((props, ref) => {
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
      id="Pollos"
      className="relative h-screen bg-black/40 flex justify-start items-center text-white newSection overflow-hidden "
      ref={ref}
    >

      {/* Contenedor con título, descripción y botón */}
        <div id='PollosC' className="relative flex flex-col sm:flex-row items-center  gap-4 bg-gray-800/45 m-5 lg:p-10 p-5 rounded-lg lg:w-3/6 lg:ml-[10vw] opacity-0 top-6 lg:top-0  ">
            pollo
        </div>
    {_RandomCard}
    </div>
  );
});

Pollos.displayName = 'Pollos';
