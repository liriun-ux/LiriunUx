'use client'
// components/RandomCard1.tsx
import DataRandomMessage from '../../../../public/randomMessage.json'
import Image from 'next/image';
// Función para seleccionar un elemento aleatorio
function getRandomItem() {
  const items = DataRandomMessage; // Asume que el array está bajo la propiedad "items"
  const randomIndex = Math.floor(Math.random() * items.length); // Genera un índice aleatorio
  return items[randomIndex]; // Retorna el elemento correspondiente
}

const WoodFurnitureRandomCard: React.FC = () => {
  const randomItem = getRandomItem();
 return (
    <div className="bg-green-100/80  fixed lg:bottom-4 bottom-1 left-4 w-60 lg:w-80 shadow-lg rounded-lg lg:p-4 p-2 z-20 opacity-0 animate-slideInXB">
          <Image
        src="/img/wood/bkop.png" // Reemplaza con el nombre de tu imagen
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        className="absolute inset-0 -z-10 rounded-lg " // Posiciona la imagen detrás del contenido
      />

      <h2 className="text-lg lg:text-2xl font-semibold mb-2 text-amber-900 ">{randomItem.title}</h2>
      <p className="text-sm lg:text-lg  lg:mb-4 text-black ">{randomItem.description}</p>
    </div>
  );
};

export default WoodFurnitureRandomCard;
