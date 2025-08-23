'use client'
import React from "react";
import Image from "next/image";
interface CoffeeProductProps {
  title: string;
  description: string;
  price: string;
  ingredients: string[];
}

const CoffeeProduct: React.FC<CoffeeProductProps> = ({ title, description, price, ingredients,  }) => {
  return (
      <div className=" bg-darkWood/70 backdrop-blur-sm flex flex-row  w-[32rem] h-64 m-1 lg:m-5 rounded-lg transition-transform duration-300 transform hover:scale-105">
        <div className="relative w-1/2 flex ">
          <Image
            src="/img/coffee/prd/pexels-ngqah83-885021.jpg" // Ruta de tu imagen
            alt="Fondo"
            fill // Asegura que la imagen llene todo el contenedor
            style={{ objectFit: "cover" }} // Ajusta la imagen para cubrir todo el div sin distorsionar
            className="z-0 rounded-l-lg" // Envía la imagen al fondo
          />
        </div>

        <div className=" w-1/2 px-2 flex flex-col items-center text-center justify-center">
          <h2 className="text-lg font-semibold mb-2 items-center text-vintageGold ">{title}</h2>
          <p className="text-sm mb-4 text-latteLight ">{description}</p>
          <div className="flex flex-col items-center">
            <p className="text-sm text-vintageGold">Ingredientes:</p>
             {ingredients.map((ingredient,key ) => (
              <p  key={key} className="text-sm text-latteLight">{ingredient}</p>
            ))}
          </div>
          <a href="#" className="text-vintageGold hover:underline">{price}</a>
      </div>
      </div>
  );
};

export default CoffeeProduct;
