'use client';
import React, { useState, useEffect, useCallback } from 'react';
import coffeeProducts from '../../data/coffee_shop.products.json';
import BurgerPrdProduct from './burger.product';

import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const BurgerPrdProducts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("PrevEnd"); // Añade un estado para controlar la transición

  const handleNext = useCallback( () => {
    setDirection("NextInit"); // Iniciar desvanecimiento
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coffeeProducts.length - 1 ? 0 : prevIndex + 1
      );
      setDirection("NextEnd"); // Restablecer después del cambio
    }, 300); // Tiempo para que el desvanecimiento ocurra
  },[]);

  const handlePrev = useCallback( () => {
    setDirection("PrevInit"); // Iniciar desvanecimiento
    setTimeout(() => {
    
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? coffeeProducts.length - 1 : prevIndex - 1
      );
      setDirection("PrevEnd"); // Restablecer después del cambio
    }, 300); // Tiempo para que el desvanecimiento ocurra

  },[]);

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Cambia cada 3 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, [handleNext]);

  const styleButton=" rounded-full  bg-[#222222]  text-[#f0b100] hover:bg-vintageGold/70 hover:text-darkWood transition duration-300";
  return (
    <div className="text-gray-800 rounded-lg pt-6 px-4 w-full h-full  overflow-hidden">
      <div className="flex  justify-center items-center h-full w-full">
        <div className="absolute z-10 flex justify-between w-full ">
      <div className="flex justify-center items-center p-1">
            <button onClick={handlePrev} className={styleButton}>
          <GrFormPrevious style={{fontSize: '35px'}}/>
            </button>
          </div>
      <div className="flex justify-center items-center p-1">
            <button onClick={handleNext} className={styleButton}>
          <MdOutlineNavigateNext style={{fontSize: '35px'}}/>
            </button>
          </div>
        </div>

        <div className={` flex justify-center items-center h-full w-full
      ${direction === "NextInit" && ' animate-nextInit '} ${direction === "NextEnd" && ' animate-nextEnd '} 
      ${direction === "PrevInit" && ' animate-prevInit '} ${direction === "PrevEnd" && ' animate-prevEnd '}`}>
          <BurgerPrdProduct
            title={coffeeProducts[currentIndex].title}
            description={coffeeProducts[currentIndex].description}
            price={coffeeProducts[currentIndex].price}
            ingredients={coffeeProducts[currentIndex].ingredientes}
          />
        </div>

      </div>
    </div>
  );
};

export default BurgerPrdProducts;
