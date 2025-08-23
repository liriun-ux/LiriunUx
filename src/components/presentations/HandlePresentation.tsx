'use client'
import { useEffect, useRef, useState, useCallback } from 'react';
import { Electronic, WoodFurniture, StationeryStore, Garden, CoffeeShop } from './PresenntationExports';
import DynamicElementsPresentations from './DynamicElementPresentation';

const animationList: { [key: string]: string } = {
  'Electronic': 'animate-slideInR',
  'StationeryStore': 'animate-slideBRtoTF',
  'WoodFurniture': 'animate-slideInR',
  'BreadShop': 'animate-slideInR',
  'RoastBarbecue': 'animate-slideInR',
  'Garden': 'animate-slideInR',
  'CoffeeShop': 'animate-slideInR',
};
const HandlePresentations = () => {
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

      setDynamicElements(<DynamicElementsPresentations componentType={sectionId} />);
      currentID.current = sectionId; // Actualiza el valor del ref
    }
  }, []); // Ahora no necesitas currentID como dependencia porque es un ref

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
  }, [handleSectionChange]); // Mantén handleSectionChange en las dependencias

  return (
    <div>
      {_DynamicElements}
      <CoffeeShop ref={(el) => { sectionRefs.current[1] = el; }} />
      <Electronic ref={(el) => { sectionRefs.current[2] = el; }} />
      <Garden ref={(el) => { sectionRefs.current[3] = el; }} />
      <WoodFurniture ref={(el) => { sectionRefs.current[4] = el; }} />
      <StationeryStore ref={(el) => { sectionRefs.current[5] = el; }} />

    </div>
  );
};

export default HandlePresentations;
