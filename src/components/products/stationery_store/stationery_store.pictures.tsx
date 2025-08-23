import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './StationeryPictures.module.css';



const StationeryPictures = () => {
  const images = [
    '/img/stationaryStore/pexels-ckeletn-255082731-15100360.jpg',
    '/img/stationaryStore/pexels-shir-danieli-313365130-28614716.jpg',
    "/img/stationaryStore/pexels-saraofree-18372231.jpg",
    "/img/stationaryStore/pexels-niezam-16516.jpg",
    "/img/stationaryStore/pexels-maria-pashkova-83078736-9047678.jpg",
    "/img/stationaryStore/pexels-gulsahaydgn-14263393.jpg",
    "/img/stationaryStore/pexels-fotios-photos-16254138.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true); // Activar la animación de giro
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFlipping(false); // Desactivar la animación de giro
      }, 500); // Duración de la animación de 0.5s
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative w-full h-full shadow-lg shadow-gray-700 rounded-lg ${isFlipping ? styles.flipOut : styles.flipIn }`}>
      <Image
        src={images[currentIndex]}
        alt="Imagen de papelería"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="rounded-lg"
      />
    </div>
  );
};

export default StationeryPictures;
