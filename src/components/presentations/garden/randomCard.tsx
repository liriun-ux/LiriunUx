'use client'
// components/RandomCard1.tsx
import DataRandomMessage from '../../../../public/randomMessage.json'
// Función para seleccionar un elemento aleatorio
function getRandomItem() {
  const items = DataRandomMessage; // Asume que el array está bajo la propiedad "items"
  const randomIndex = Math.floor(Math.random() * items.length); // Genera un índice aleatorio
  return items[randomIndex]; // Retorna el elemento correspondiente
}

const GardenRandomCard: React.FC = () => {
  const randomItem = getRandomItem();
 return (
    <div className=" backdrop-blur-sm bg-white/70   fixed lg:bottom-4 bottom-1 left-4 w-60 lg:w-80 shadow-lg rounded-lg lg:p-4 p-2 z-20 opacity-0 animate-slideInXB">

      <h2 className="text-lg lg:text-2xl font-semibold mb-2 text-yellow-700 ">{randomItem.title}</h2>
      <p className="text-sm lg:text-lg  lg:mb-4 text-black ">{randomItem.description}</p>
      <a href="#more-info" className="text-green-900 hover:underline ">Cotizar</a>
    </div>
  );
};

export default GardenRandomCard;
