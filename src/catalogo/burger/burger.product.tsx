'use client'
import React from "react";
import Image from "next/image";
import IngredienteLinea from "./burger.ingrediente"; 

interface BurgerPrdProductProps {
  title: string;
  description: string;
  price: string;
  ingredients: string[];
}

const BurgerPrdProduct: React.FC<BurgerPrdProductProps> = ({ title, description, price, ingredients,  }) => {
  return (
      <div className=" burger-carrusel  ">
        
      <div className="burger-img">
      {/* Imagen desktop */}
      <Image
            src="/img/burger/burger1.jpg" // Ruta de tu imagen
        alt="Hamburguesa PC"
        fill
        className="hidden lg:block rounded-[0.5rem]"
        style={{ objectFit: "cover" }}
      />

      {/* Imagen móvil */}
      <Image
            src="/img/burger/burger03.jpg" // Ruta de tu imagen
        alt="Hamburguesa móvil"
        fill
        className="block lg:hidden rounded-[0.5rem]"
        style={{ objectFit: "cover" }}
      />
        </div>

        <div className="burger-tab">
            <div className="burger-tab-ing">
                <div className="h-0.5 bg-yellow-500 flex-1"></div> {/* barra izquierda */}
                  <div className="">INGREDIENTES</div>
                <div className="h-0.5 bg-yellow-500 flex-1"></div> {/* barra izquierda */}
            </div>
            <div className="burger-tab-cio">
      <IngredienteLinea ingrediente="Pan artesanal" gramos={80} />
      <IngredienteLinea ingrediente="Carne de res" gramos={150} />
      <IngredienteLinea ingrediente="Queso cheddar" gramos={30} />
      <IngredienteLinea ingrediente="Lechuga" gramos={15} />
      <IngredienteLinea ingrediente="Tomate" gramos={20} />
      <IngredienteLinea ingrediente="Cebolla cocida" gramos={25} />
      <IngredienteLinea ingrediente="Salsa especial" gramos={10} />
            </div>
            <div className="hidden absolute">
            {title}{description}{price}{ingredients}
            </div>
        </div>
    </div>
  );
};

export default BurgerPrdProduct;




          // <div className=" lg:h-2/5 lg:pt-12">
          //   <h2 className=" lg:text-3xl text-lg font-semibold mb-2 items-center text-red-700 ">{title}</h2>
          //   <p className="lg:text-lg text-sm mb-4 text-latteLight ">{description}</p>
          // </div>
          // <div className="flex flex-col items-center lg:h-2/5">
          //   <p className="lg:text-2xl text-sm text-vintageGold">Ingredientes:</p>
          //    {ingredients.map((ingredient,key ) => (
          //     <p  key={key} className="lg:text-xl text-sm text-latteLight">{ingredient}</p>
          //   ))}
          // </div>
          // <div className="lg:h-1/5 lg:flex lg:justify-center lg:text-center lg:items-center ">
          // <a href="#" className="lg:text-xl text-vintageGold hover:underline">{price}</a>
          // </div>
