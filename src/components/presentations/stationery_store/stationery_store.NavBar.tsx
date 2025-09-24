
'use client'

import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { StationeryStoreNavItem } from './stationery_store.NavItem';
import Link from 'next/link';


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
const StationeryStoreNavBar: React.FC =() => {
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
  return (
    <nav className="text-white fixed top-0 left-0 w-full z-10  opacity-0 animate-slideTRtoBF font-mono ">
      <div className="container mx-auto flex justify-around items-center bg-green-50/80 py-1 lg:py-2 px-4 my-1 lg:my-4 rounded-lg">
        {/* Título centrado en móviles */}
        <div className="text-green-900 text-3xl font-bold  mx-auto lg:mx-0 px-8 " >
          <Link href="/" className="">
            Mysite
          </Link>
        </div>

        {/* Botón hamburguesa solo en pantallas pequeñas */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Alterna entre el icono de abrir/cerrar */}
          </button>
        </div>

        {/* Enlaces y redes sociales en pantallas grandes */}
        <div className="hidden lg:flex space-x-6">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  ">
            {navigation.map((item) =>
              <li key={item.name}>
                <StationeryStoreNavItem  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
        </div>

        <div className="hidden lg:flex space-x-4 px-8">
<Link 
  href="https://x.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-900 hover:text-white"
>
  <FaTwitter />
</Link>

<Link 
  href="https://www.facebook.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-900 hover:text-white"
>
  <FaFacebook />
</Link>

<Link 
  href="https://www.instagram.com/liriun_ux" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-900 hover:text-white"
>
  <FaInstagram />
</Link>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className={`lg:hidden  p-4 flex justify-end animate-Top
          ${open && 'animate-TopOut'}
          `}>
          <div className="bg-green-50/80 rounded-lg">
          <ul className="font-medium flex flex-col p-2 lg:p-0   lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  w-min">
            {navigation.map((item) =>
              <li key={item.name}>
                <StationeryStoreNavItem  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
          <div className="flex space-x-4 px-4 pb-2">
<Link 
  href="https://x.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-900 hover:text-white"
>
  <FaTwitter />
</Link>

<Link 
  href="https://www.facebook.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-900 hover:text-white"
>
  <FaFacebook />
</Link>

<Link 
  href="https://www.instagram.com/liriun_ux" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-900 hover:text-white"
>
  <FaInstagram />
</Link>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StationeryStoreNavBar;
