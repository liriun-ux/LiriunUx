'use client'

import { useState } from 'react';
import { HomeNavBarItem } from './navbar.item';
import HomeNavPBar from './nav.phone';
import PopupExample from './pop';
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
const NewHomeNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    if(isOpen){
      setOpen(true)
    // document.body.style.overflow = "auto";

      setTimeout(()=>{
        
        setOpen(false)
        setIsOpen(!isOpen);
      },300);
      }
      else{
        setIsOpen(!isOpen);
// document.body.style.overflow = "hidden";
      }
  };
  return (
      <div id='base-nav' className=' h-1/5 bg-amber-400/0 z-40  '>
        {//walker }   
        }

        <div id='nav-itor' className='flex h-full justify-around items-center'>

                <div className="walkerIll" style={{animationDelay:'-0.03s' , animationDuration:'4.8s'}}></div>
                <div className="walkerIll" style={{animationDelay:'0.03s' , animationDuration:'5.3s'}}></div>
                <div className="walkerIll" style={{animationDelay:'-0.43s' , animationDuration:'5.7s'}}></div>
                <div className="walkerIll" style={{animationDelay:'-0.73s' , animationDuration:'4.5s'}}></div>

                <Link href="/" className='nav-logo-ref'>
            <div id='nav-logo'>
                <div className=' underline'>LIRIUN-UX</div>
                <div className="walker"></div>
                <div className="walker" style={{animationDelay:'-0.03s' , animationDuration:'4.8s'}}></div>
                <div className="walker" style={{animationDelay:'0.03s' , animationDuration:'5.3s'}}></div>
                <div className="walker" style={{animationDelay:'-0.43s' , animationDuration:'5.7s'}}></div>
            </div>
            </Link>

            <div id='nav-item' >
                <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  ">
                    {navigation.map((item) =>
                      <li key={item.name}>
                        <HomeNavBarItem  name={item.name} href={item.href}/>
                      </li>)
                    }
                </ul>
            </div>

            <div id='nav-contacts' className='flex'>
                <div id="cont-home-nav-item-ct" 
                >
                    <PopupExample/>
                </div>
            </div>

            {/* Botón hamburguesa solo en pantallas pequeñas */}
            <div id='bt-burger' className='cont-home-nav-item-fo bt-burger' onClick={toggleMenu}>
                <button  className='text-animado'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                      <g id="menu" fill="none" fillRule="evenodd">
            <rect id="Rectangle" width="16" height="2.00" x="4"  fill="currentColor" className={`transition-transform duration-400 transform ${isOpen ? "rotate-45 translate-y-1.5  translate-x-1" : "rotate-0 translate-y-3"}`}></rect>
            <rect id="Rectangle-Copy" width="16" height="2.00" x="4"  fill="currentColor" className={`transition-transform duration-400 transform ${isOpen ? "-rotate-45 translate-y-5.5 translate-x-0.5" : "rotate-0 translate-y-5"}`}></rect>
                      </g>
                    </svg>
                </button>
            </div>
            {isOpen &&(
                <HomeNavPBar open={open} />
            )}
        </div>
      </div>
  );
}
export default NewHomeNavBar;
