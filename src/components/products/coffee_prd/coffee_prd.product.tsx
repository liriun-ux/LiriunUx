'use client'
import React from "react";
import Image from "next/image";
interface CoffeePrdProductProps {
  title: string;
  description: string;
  price: string;
  ingredients: string[];
}

const CoffeePrdProduct: React.FC<CoffeePrdProductProps> = ({ title, description, price, ingredients,  }) => {
  return (
      <div className="  flex flex-col lg:flex-row  w-[20rem] lg:w-4/6 h-full  m-1 lg:m-5 rounded-lg p-4 lg:p-10">

        <div className="relative lg:bottom-8 h-1/2 lg:h-5/6 lg:w-1/2 px-2 lg:p-10 flex flex-col items-center text-center justify-center bg-darkWood/70 backdrop-blur-sm rounded-lg lg:mr-10 ">
          <div className=" lg:h-2/5 lg:pt-12">
            <h2 className=" lg:text-3xl text-lg font-semibold mb-2 items-center text-vintageGold ">{title}</h2>
            <p className="lg:text-lg text-sm mb-4 text-latteLight ">{description}</p>
          </div>
          <div className="flex flex-col items-center lg:h-2/5">
            <p className="lg:text-2xl text-sm text-vintageGold">Ingredientes:</p>
             {ingredients.map((ingredient,key ) => (
              <p  key={key} className="lg:text-xl text-sm text-latteLight">{ingredient}</p>
            ))}
          </div>
          <div className="lg:h-1/5 lg:flex lg:justify-center lg:text-center lg:items-center ">
          <a href="#" className="lg:text-xl text-vintageGold hover:underline">{price}</a>
          </div>
        </div>
        <div className="relative h-1/2 lg:h-5/6 lg:w-1/2 flex lg:top-16 lg:ml-10 ">
          <Image
            src="/img/coffee/prd/pexels-ngqah83-885021.jpg" // Ruta de tu imagen
            alt="Fondo"
            fill // Asegura que la imagen llene todo el contenedor
            style={{ objectFit: "cover" }} // Ajusta la imagen para cubrir todo el div sin distorsionar
            className="z-0 rounded-lg  " // Envía la imagen al fondo
          />
        </div>
      </div>
  );
};

export default CoffeePrdProduct;
