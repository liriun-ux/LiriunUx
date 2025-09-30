'use client'

import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { ElectronicNavItem } from './electronic.NavItem';
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


const ElectronicNavBar: React.FC =() => {
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
    <nav className=" fixed top-0 left-0 w-full z-20  opacity-0 animate-rebote font-mono ">
      <div className="mx-auto flex justify-around items-center bg-gray-800/45 w-full p-1 lg:p-4 ">
        {/* Título centrado en móviles */}
        <div className="text-amber-500 text-3xl font-bold mx-auto lg:mx-0" >
          <Link href="/" className="">
            MysiteA
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
                <ElectronicNavItem  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
        </div>

        <div className="hidden lg:flex space-x-4">
<Link 
  href="https://x.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-white"
>
  <FaTwitter />
</Link>

<Link 
  href="https://www.facebook.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-white"
>
  <FaFacebook />
</Link>

<Link 
  href="https://www.instagram.com/liriun_ux" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-white"
>
  <FaInstagram />
</Link>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className={`lg:hidden  animate-Top p-1 px-3 bg-gray-800/45 ${open && 'animate-TopOut'}`}>
          <ul className="font-medium flex flex-col p-1 px-3 lg:p-0 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  ">
            {navigation.map((item) =>
              <li key={item.name}>
                <ElectronicNavItem  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
          <div className="flex space-x-4 mt-4">
<Link 
  href="https://x.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-white"
>
  <FaTwitter />
</Link>

<Link 
  href="https://www.facebook.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-white"
>
  <FaFacebook />
</Link>

<Link 
  href="https://www.instagram.com/liriun_ux" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-white"
>
  <FaInstagram />
</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ElectronicNavBar;
