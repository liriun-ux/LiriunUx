'use client'
import { useEffect, useRef, useState, useCallback } from 'react';
import { Electronic,  Coffee, CoffeePrd, StationeryStore } from './ProductsExport';
import DynamicElementsProducts from './DynamicElementProduct';
import {  WoodFurniture, CoffeeShop } from '../presentations/PresenntationExports';
import { Smartphones } from '@/catalogo/phones/phones';
import { Pollos } from '@/catalogo/pollos/pollos';
import { Ingenieria } from '@/catalogo/ingenieria/ingenieria';


const animationList: { [key: string]: string } = {
  'Electronic': 'animate-slideInR',
  'StationeryStore': 'animate-slideBRtoTF',
  'WoodFurniture': 'animate-slideInR',
  'RoastBarbecue': 'animate-slideInR',
  'CoffeeShop': 'animate-slideInR',
  'CoffeeShopPrd': 'animate-slideInR',
  'CoffeeShoG': 'animate-slideInR',
  'Smartphones':'animate-slideInR',
  'Pollos':'animate-slideInR',
  'Ingenieria':'animate-slideInR',
};

const HandleProducts = () => {
  const [_DynamicElements, setDynamicElements] = useState(<></>);
  const currentID = useRef<string>(""); // Usa useRef para mantener el valor de currentID

  const handleSectionChange = useCallback((sectionId: string) => {
    if (currentID.current !== sectionId) { // Accede al valor del ref
      const element = document.getElementById(`${sectionId}C`);
      if (element) {
        // Elimina la clase de animación y luego la vuelve a agregar
        const result = animationList[sectionId];
        element.classList.remove(result);
        // Forzamos un reflow para asegurarnos de que la clase se vuelva a aplicar
        void element.offsetWidth; // Esta línea fuerza un reflow
        element.classList.add(result);
      }

      setDynamicElements(<DynamicElementsProducts componentType={sectionId} />);
      currentID.current = sectionId; // Actualiza el valor del ref
    }
  }, []); // Esta función no necesita dependencias adicionales

  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            handleSectionChange(sectionId); // Llamar a la función cuando cambia de sección
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [handleSectionChange]); // Agrega handleSectionChange aquí

  return (
    <div>
      {_DynamicElements}
      <Ingenieria ref={(el) => { sectionRefs.current[0] = el; }} />
      <Smartphones ref={(el) => { sectionRefs.current[1] = el; }} />
      <Pollos ref={(el) => { sectionRefs.current[2] = el; }} />
      <Coffee ref={(el) => { sectionRefs.current[3] = el; }} />
      <CoffeePrd ref={(el) => { sectionRefs.current[4] = el; }} />
      <Electronic ref={(el) => { sectionRefs.current[5] = el; }} />
      <StationeryStore ref={(el) => { sectionRefs.current[6] = el; }} />
      <CoffeeShop ref={(el) => { sectionRefs.current[7] = el; }} />
      <WoodFurniture ref={(el) => { sectionRefs.current[8] = el; }} />
    </div>
  );
};

export default HandleProducts;
      // <Garden ref={(el) => { sectionRefs.current[8] = el; }} />
