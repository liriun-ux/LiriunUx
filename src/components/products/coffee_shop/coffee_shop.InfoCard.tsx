// components/CoffeeInfoCard.tsx
import React, { useState } from 'react';

const CoffeeInfoCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad del card
  const [isExiting, setIsExiting] = useState(false); // Estado para controlar la animación de salida

  const handleClose = () => {
    setIsExiting(true); // Inicia la animación de salida
    setTimeout(() => {
      setIsVisible(false); // Oculta el componente después de la animación
    }, 1000); // Asegúrate de que coincida con la duración de la animación
  };

  if (!isVisible) return null; // Si no es visible, no renderiza nada

  return (
    <div className={`hidden lg:block backdrop-blur-sm bg-darkWood/80 fixed lg:bottom-4 bottom-1 right-1 lg:right-4 w-60 lg:w-80 shadow-lg rounded-lg lg:p-4 px-2 z-20 opacity-100  font-mono ${isExiting ? ' animate-nextInit ' : ' animate-slideTRtoBF '}`}>
      
      {/* Botón de cierre */}
      <button 
        onClick={handleClose} // Cambia el estado a false al hacer clic
        className="absolute top-2 right-2 text-white hover:text-red-500 text-2xl"
        aria-label="Cerrar"
      >
        &times; {/* X simbolizando cerrar */}
      </button>

      <h2 className="text-sm lg:text-xl font-semibold my-1 text-vintageGold">Paginas para Muebles</h2>
      <p className="text-sm lg:mb-4 text-latteLight">Esta es una parte de como podría ser una página referente a bazar</p>
      <a href="#more-info" className="text-white hover:underline">Cotizar</a>
    </div>
  );
};

export default CoffeeInfoCard;
