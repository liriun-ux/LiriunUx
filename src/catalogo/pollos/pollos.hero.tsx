
'use client'
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

interface PollosHeroCarrProps {
  slides: { img: string; title: string; description: string }[];
}

const PollosHeroCarr: React.FC<PollosHeroCarrProps> = ({ slides, }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("PrevEnd"); // Añade un estado para controlar la transición

  const handlePrev = useCallback(() => {
    setDirection("PrevInit"); // Iniciar desvanecimiento
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setDirection("PrevEnd"); // Restablecer después del cambio
    }, 300); // Tiempo para que el desvanecimiento ocurra
  }, [currentIndex, slides.length]); // Agregamos currentIndex y slides.length como dependencias

  const handleNext = useCallback(() => {
    setDirection("NextInit"); // Iniciar desvanecimiento
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setDirection("NextEnd"); // Restablecer después del cambio
    }, 300); // Tiempo para que el desvanecimiento ocurra
  }, [currentIndex, slides.length]); // Agregamos currentIndex y slides.length como dependencias

  // Cambiar automáticamente de diapositiva cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handlePrev();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se delgonta
  }, [handlePrev]);
  const styleButton="Geio ";
  return (
    <>

      <div className="relative top-12 h-lg:top-4 flex flex-row justify-between w-full  ">
      
      <div className="flex justify-center items-center p-1">
        <button
          onClick={handlePrev}
          className={styleButton}        
          >
          <GrFormPrevious style={{fontSize: '35px'}}/>
        </button>
      </div>

      <div className={`flex flex-col justify-end items-end lg:items-end h-[60vh] h-lg:h-[70vh]   rounded-lg m-0 p-0 w-full 
      ${direction === "NextInit" && ' animate-nextInit '} ${direction === "NextEnd" && ' animate-nextEnd '} 
      ${direction === "PrevInit" && ' animate-prevInit '} ${direction === "PrevEnd" && ' animate-prevEnd '}`}>
        {/* Imagen de fondo */}
        <Image
          src={slides[currentIndex].img}
          alt={slides[currentIndex].title}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="-z-10 rounded-lg"
        />

        {/* Contenedor del título y descripción */}
        <div className="NTOPS">
          <div className="flex flex-col">
            <h2 className="text-3xl text-[#561c0d] lg:text-5xl font-bold mb-2">{slides[currentIndex].title}</h2>
            <p className="text-lg lg:text-xl text-[#000]">{slides[currentIndex].description}</p>
          </div>

          {/* Botón con margen si hay espacio */}
          <div className="mt-2 lg:mt-0 lg:ml-4 ">
            <button
              className="bg-[#fbe475] text-[#561c0d] font-semibold py-2 px-4 rounded-lg hover:bg-vintageGold hover:text-darkWood transition duration-300 ease-in-out w-max"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-1">
        <button
          onClick={handleNext}
          className={styleButton}        
        >
          <MdOutlineNavigateNext style={{fontSize: '35px'}}/>
        </button>
      </div>
      </div>
    </>
  );
};

export default PollosHeroCarr;
