
// components/StationeryStoreInfoCard.tsx
import React, { useState } from 'react';

const StationeryStoreInfoCard: React.FC = () => {
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
    <div className={`hidden h-sm:block lg:block bg-green-100/80  fixed lg:bottom-4 bottom-1 right-1 lg:right-4 w-60 lg:w-80 shadow-lg rounded-lg lg:p-4 px-2 z-20 opacity-0  font-mono ${isExiting ? ' animate-nextInit ' : ' animate-slideTRtoBF '}`}>
      {/* Botón de cierre */}
      <button 
        onClick={handleClose} // Cambia el estado a false al hacer clic
        className="absolute -top-4 -right-1 text-white hover:text-red-400 font-bold text-2xl  bg-red-600 px-2 rounded-lg "
        aria-label="Cerrar"
      >
        &times; {/* X simbolizando cerrar */}
      </button>
      <h2 className="text-lg lg:text-2xl font-semibold my-1 text-green-900 ">Paginas para Bazares</h2>
      <p className="text-sm lg:text-lg  lg:mb-4 text-green-800 ">Esta es una parte de como podria ser una pagina referente a bazar </p>
      <a href="#more-info" className="text-green-600 hover:underline  ">Cotizar</a>
    </div>
  );
};

export default StationeryStoreInfoCard;
