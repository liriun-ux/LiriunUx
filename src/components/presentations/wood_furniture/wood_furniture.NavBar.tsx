
'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { WoodFurnitureNavItem } from './wood_furniture.NavItem';


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
const WoodFurnitureNavBar: React.FC =() => {
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
  const style_icons="text-white hover:text-amber-800/40";
  return (
    <nav className=" fixed top-0 left-0 w-full z-10  opacity-0 animate-rebote font-mono ">
      <div className="relative container mx-auto flex justify-around items-center   py-1 lg:py-2 px-4 my-1 lg:my-4 rounded-lg ">
<Image
  src="/img/wood/bkop.png" // Reemplaza con el nombre de tu imagen
  alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
  className="absolute inset-0 -z-10 rounded-lg" // Posiciona la imagen detrás del contenido
/>
        {/* Título centrado en móviles */}
        <div className="text-amber-50 text-3xl font-bold  mx-auto lg:mx-0 px-8 " >
          <a href="/" className="">
            Mysite
          </a>
        </div>

        {/* Botón hamburguesa solo en pantallas pequeñas */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-amber-800 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Alterna entre el icono de abrir/cerrar */}
          </button>
        </div>

        {/* Enlaces y redes sociales en pantallas grandes */}
        <div className="hidden lg:flex space-x-6">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  ">
            {navigation.map((item) =>
              <li key={item.name}>
                <WoodFurnitureNavItem  name={item.name} href={item.href}/>
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
        <div className={`lg:hidden  p-4 flex justify-end animate-Top
          ${open && ' animate-TopOut '} `}>
          <div className="relative  rounded-lg">
                <Image
        src="/img/wood/bkwood.png" // Reemplaza con el nombre de tu imagen
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        className="absolute inset-0 -z-10 rounded-lg" // Posiciona la imagen detrás del contenido
      />

          <ul className="font-medium flex flex-col p-2 lg:p-0   lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  w-min">
            {navigation.map((item) =>
              <li key={item.name}>
                <WoodFurnitureNavItem  name={item.name} href={item.href}/>
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

export default WoodFurnitureNavBar;
