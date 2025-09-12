'use client'
import Image from "next/image";
// components/WoodFurnitureInfoCard.tsx

const WoodFurnitureInfoCard: React.FC = () => {
  return (
    <div className="hidden h-sm:block lg:block bg-green-100/80  fixed lg:bottom-4 bottom-1 right-1 lg:right-4 w-60 lg:w-80 shadow-lg rounded-lg lg:p-4 px-2 z-20 opacity-0 animate-slideTRtoBF font-mono">
          <Image
        src="/img/wood/bkwood.png" // Reemplaza con el nombre de tu imagen
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        className="absolute inset-0 -z-10 rounded-lg " // Posiciona la imagen detrás del contenido
      />

      <h2 className="text-lg lg:text-2xl font-semibold my-1 text-amber-900 ">Título de la tarjeta</h2>
      <p className="text-sm lg:text-lg  lg:mb-4 text-black ">Este es un ejemplo de una tarjeta flotante pequeña, ideal para mostrar información breve y clara.</p>
    </div>
  );
};

export default WoodFurnitureInfoCard;
