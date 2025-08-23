
'use client'
import React from 'react';
import Image from 'next/image';
import CoffeeShopPrdProducts from './coffee_prd.products';

export const CoffeePrd = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="CoffeeShopPrd"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
          <Image
        src="/img/coffee/pexels-apgpotr-683039.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

<div id='CoffeeShopPrdC' className=" flex flex-col 
 items-center  gap-4  rounded-lg w-11/12   h-5/6  relative top-10  mx-10 py-5 lg:p-5 opacity-0 ">
<CoffeeShopPrdProducts />

</div>
    </div>
  );
});
CoffeePrd.displayName = 'CoffeePrd';
