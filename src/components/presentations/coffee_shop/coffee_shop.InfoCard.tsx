'use client'
// components/CoffeeShopInfoCard.tsx

const CoffeeShopInfoCard: React.FC = () => {
  return (
    <div className="hidden  lg:block backdrop-blur-sm bg-darkWood/80 fixed lg:bottom-4 bottom-1 right-1 lg:right-4 w-60 lg:w-80 shadow-lg rounded-lg lg:p-4 px-2 z-20 opacity-0 animate-slideTRtoBF font-mono">

      <h2 className="text-sm lg:text-xl font-semibold my-1 text-vintageGold ">Paginas para Muebles</h2>
      <p className="text-sm   lg:mb-4 text-latteLight ">Esta es una parte de como podria ser una pagina referente a bazar </p>
      <a href="#more-info" className="text-white hover:underline  ">Cotizar</a>
    </div>
  );
};

export default CoffeeShopInfoCard;
