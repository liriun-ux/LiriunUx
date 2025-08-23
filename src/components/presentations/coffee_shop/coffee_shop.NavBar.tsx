
'use client'
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { SiCoffeescript } from "react-icons/si";
import { CoffeeShopNavItem } from './coffee_shop.NavItem';


const navigation =
  [
    {
      'name': "INICIO",
      'href': "/"
    },
    {
      'name': "CATÁLOGO",
      'href': "/catalogo"
    },
    {
      'name': "NOSOTROS",
      'href': "/nosotros"
    },
    {
      'name': "¿NECESITO UNA WEB?",
      'href': "/info"
    }
  ]
const CoffeeShopNavBar: React.FC =() => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    if(isOpen)
      {
      setOpen(true)
      setTimeout(()=>{
        
        setOpen(false)
        setIsOpen(!isOpen);
      },400);
      }
      else{
        setIsOpen(!isOpen);
      }
  };
  const style_icons="text-vintageGold hover:text-latteLight hover:translate-y-[-5px] transition duration-300 ease-in-out ";
  return (
    <nav className=" fixed top-0 left-0 w-full z-20  opacity-0 animate-rebote font-mono ">
      <div className="backdrop-blur-sm bg-darkWood/70 relative container mx-auto flex  lg:justify-around items-center  py-1 lg:py-2 px-4 my-2 lg:my-4 rounded-lg  ">
        {/* Título centrado en móviles */}
        <div className="text-vintageGold hover:text-latteLight text-3xl font-bold  mx-auto lg:mx-0 px-8 " >
          <a href="/" className="">
            <div className="flex">
              <h1>
              Coffee Shop
              </h1>
              <div className="flex justify-normal lg:justify-center items-center ">
              <SiCoffeescript className="ml-2"/>
              </div>
            </div>
          </a>
        </div>

        {/* Botón hamburguesa solo en pantallas pequeñas */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-vintageGold text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Alterna entre el icono de abrir/cerrar */}
          </button>
        </div>

        {/* Enlaces y redes sociales en pantallas grandes */}
        <div className="hidden lg:flex space-x-6">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  ">
            {navigation.map((item) =>
              <li key={item.name}>
                <CoffeeShopNavItem  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
        </div>

        <div className="hidden lg:flex space-x-4 px-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"   className={style_icons}>
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"  className={style_icons}>
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={style_icons}>
              <FaInstagram />
            </a>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className=" lg:hidden  p-4 flex justify-end z-50 ">
          <div className={`relative  rounded-lg backdrop-blur-lg bg-darkWood/70 animate-Top 
            ${open && 'animate-TopOut' }`}>

          <ul className="font-medium flex flex-col p-2 lg:p-0   lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  w-min">
            {navigation.map((item) =>
              <li key={item.name}>
                <CoffeeShopNavItem  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
          <div className="flex space-x-4 px-4 pb-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"   className={style_icons}>
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"  className={style_icons}>
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={style_icons}>
              <FaInstagram />
            </a>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CoffeeShopNavBar;
