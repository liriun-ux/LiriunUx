'use client'

import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { HeladeriaNavItem } from './nav.item';
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


const HeladeriaNavBar: React.FC =() => {
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
        <div id='HBNPDS' className=' rounded-2xl p-8 shadow-lg border border-white/20 transition-transform hover:scale-105'>
            <Link href="/">
            <div id='HNPtx'>Heladeria</div>
            </Link>

        {/* Botón hamburguesa solo en pantallas pequeñas */}
        <div className="HPBTOIO">
          <button onClick={toggleMenu} className="HPBtxt">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Alterna entre el icono de abrir/cerrar */}
          </button>
        </div>

            <div id='Snav-item' >
                <ul  id='Snav-item-b' >
                    {navigation.map((item) =>
                      <li key={item.name}>
                        <HeladeriaNavItem name={item.name} href={item.href}/>
                      </li>)
                    }
                </ul>
            </div>

            <div id='Snav-cont'>
        <div className="Sri HIPlooo">
<a 
  href="https://x.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className={style_icons}
>
  <FaTwitter />
</a>

<a 
  href="https://www.facebook.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className={style_icons}
>
  <FaFacebook />
</a>

<a 
  href="https://www.instagram.com/liriun_ux" 
  target="_blank" 
  rel="noopener noreferrer" 
  className={style_icons}
>
  <FaInstagram />
</a>
        </div>

            </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className={`HPllSope animate-Top ${open && 'animate-TopOut'}`}>
          <ul className=" Sjoio">
            {navigation.map((item) =>
              <li key={item.name}>
                <HeladeriaNavItem  name={item.name} href={item.href}/>
              </li>)
            }
            </ul>
        <div className="Sri HIPlooo">
<a 
  href="https://x.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className={style_icons}
>
  <FaTwitter />
</a>

<a 
  href="https://www.facebook.com/LiriunUX" 
  target="_blank" 
  rel="noopener noreferrer" 
  className={style_icons}
>
  <FaFacebook />
</a>

<a 
  href="https://www.instagram.com/liriun_ux" 
  target="_blank" 
  rel="noopener noreferrer" 
  className={style_icons}
>
  <FaInstagram />
</a>
        </div>
        </div>
      )}
        </div>
    </div>
  );
};

export default HeladeriaNavBar;
