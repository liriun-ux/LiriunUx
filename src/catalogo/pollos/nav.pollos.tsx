'use client'

import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { PolloNavBar } from './nav.items';
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


const NavPollos: React.FC =() => {
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

  const style_icons=" hover:translate-y-[-5px] transition duration-100 ease-in-out PSma-tx";
  return (
    <div id='PNNsb' className=" opacity-0 animate-slideIn">
        <div id='BNPDS'>

            <div id='NPtx'>Pollos Feliz</div>

        {/* Botón hamburguesa solo en pantallas pequeñas */}
        <div className="PBTOIO">
          <button onClick={toggleMenu} className="PBtxt">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Alterna entre el icono de abrir/cerrar */}
          </button>
        </div>

            <div id='Snav-item' >
                <ul  id='Snav-item-b' >
                    {navigation.map((item) =>
                      <li key={item.name}>
                        <PolloNavBar name={item.name} href={item.href}/>
                      </li>)
                    }
                </ul>
            </div>

            <div id='Snav-cont'>
        <div className="Sri IPlooo">
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
        <div className={`PllSope animate-Top ${open && 'animate-TopOut'}`}>
          <ul className=" Sjoio">
            {navigation.map((item) =>
              <li key={item.name}>
                <PolloNavBar  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
        <div className="Sri IPlooo">
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
    </div>
  );
};

export default NavPollos;
