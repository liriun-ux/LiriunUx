'use client'
import Image from 'next/image';

import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { ElectronicNavItem } from '@/components/presentations/Electronic/electronic.NavItem';
import { SmaNavBar } from './nav.item';

import { BiSolidDownArrow } from "react-icons/bi";

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


const NavSmartphones: React.FC =() => {
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
 // animate-slideIn 
  const style_icons=" hover:translate-y-[-5px] transition duration-100 ease-in-out Sma-tx";
  return (
    <div id='NNsb' className=" opacity-0 animate-slideIn">
<div className="sombra">
  <div className="trapecio">
    <div id='NIYO'>
      <Image
        src="/img/phones/tekken8tr2.png"
        alt="Fondo"
    fill
    quality={100}
    style={{ objectFit: "cover" }}
    className=""
  />

        </div>



            <div id='Snav-item' >
                <ul  id='Snav-item-b' >
                    {navigation.map((item) =>
                      <li key={item.name}>
                        <SmaNavBar name={item.name} href={item.href}/>
                      </li>)
                    }
                </ul>
            </div>

            <div id='Snav-cont'>
        <div className="Sri">
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

        <div> 
    </div>
  </div>
</div>
        {/* Botón hamburguesa solo en pantallas pequeñas */}
        <div id='SBI' className="">
          <button onClick={toggleMenu} className=" ybttt ">
            {isOpen ? <BiSolidDownArrow /> : <BiSolidDownArrow />} {/* Alterna entre el icono de abrir/cerrar */}
          </button>
        </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className={`Sope animate-Top ${open && 'animate-TopOut'}`}>
          <ul className=" Sjoio">
            {navigation.map((item) =>
              <li key={item.name}>
                <SmaNavBar  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
        <div className="ASri">
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
      )}

    </div>
  );
};

export default NavSmartphones;
