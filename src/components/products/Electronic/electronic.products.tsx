// components/ElectronicProduct.tsx
import ElectronicCapacitores from "./categorias/electronic.Capacitores";
import ElectronicResistencia from "./categorias/electronic.resistencias";
import ElectronicVarios from "./categorias/electronic.Varios";
// components/ElectronicProduct.tsx

import React, { useState } from 'react';
import { GiElectricalResistance } from "react-icons/gi";
import { SiCapacitor } from "react-icons/si";
import { FaCalculator } from "react-icons/fa";
const sections = [
  { id: 'Resisitencias', icon: GiElectricalResistance, title: 'Resisitencias', content: 'Contenido de la Sección 1' },
  { id: 'Capacitores', icon: SiCapacitor,            title: 'Capacitores', content: 'Contenido de la Sección 2' },
  { id: 'Varios', icon: FaCalculator,           title: 'Varios', content: 'Contenido de la Sección 3' },
];

interface SwitchSecctionsProps {
  componentType: string;
}

const SwitchSecctions: React.FC<SwitchSecctionsProps> = ({ componentType }) => {
  switch (componentType) {
    case 'Capacitores':
      return (
        <ElectronicCapacitores/>
    );
    case 'Varios':
      return (
        <ElectronicVarios/>
    );
    case 'Resisitencias':
      return (
        <ElectronicResistencia/>
    );
    default:
      return <></>; // Componente por defecto si no coincide
  }
}


const ElectronicProduct: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Resisitencias');
  
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
  const ActiveIcon = sections.find(section => section.id === activeSection)?.icon;

  return (
    <div className="flex flex-col items-center w-full h-full">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 bg-gray-800 text-white rounded-t-lg z-10">
        {/* Menú desplegable en pantallas pequeñas */}
        <div className=" lg:hidden flex items-center justify-between lg:justify-around w-full ">
          {ActiveIcon && <ActiveIcon className="h-6 w-6 mr-2" />} {/* Icono de la sección activa */}
          <span className="text-lg">{sections.find(section => section.id === activeSection)?.title}</span> {/* Título de la sección activa */}
          <button
            onClick={toggleMenu}
            className="text-white bg-gray-700 p-2 rounded-md ml-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>

        {/* Barra de navegación en pantallas grandes */}
        <div className="hidden lg:flex space-x-4 w-full items-center justify-around z-10">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center p-2 rounded-md ${activeSection === section.id ? 'bg-[#eeeeee] text-[#222242] hover:bg-gray-700 hover:text-[#eeeeee]' : 'bg-gray-700 hover:bg-[#eeeeee] hover:text-[#222242] '} `}
              >
                <Icon className="h-6 w-6 mr-2" />
                <span>{section.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className={`absolute top-20 lg:hidden w-full flex flex-col items-start bg-gray-700 text-white p-4 space-y-2 rounded-lg z-10 animate-Top ${open && 'animate-TopOut'}`}>
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                }}
                className={`w-full flex items-center p-2 rounded-md ${activeSection === section.id ? 'bg-gray-600' : 'bg-gray-700'} hover:bg-gray-600`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {section.title}
              </button>
            );
          })}
        </div>
      )}

      {/* Sección activa */}
      <div className=" lg:p-8 bg-white shadow-gray-700/70 shadow-lg rounded-md w-11/12 lg:w-5/6 m-2 h-5/6">
        {sections.map(
          (section, key) =>
            activeSection === section.id && (
              <SwitchSecctions componentType={section.id} key={key}/>
            )
        )}
      </div>
    </div>
  );
};

export default ElectronicProduct;
