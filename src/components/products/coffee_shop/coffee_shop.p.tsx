
'use client'
import React from 'react';
import Image from 'next/image';
import CoffeeShopProducts from './coffee_shop.products';

export const Coffee = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="CoffeeShop"
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

<div id='CoffeeShopC' className=" flex flex-col 
 items-center  gap-4  rounded-lg w-11/12   h-5/6 bg-darkWood/70 relative top-10  mx-10 py-5 lg:p-5 opacity-0 ">
<h2 className="absolute text-vintageGold text-2xl text-center py-1 bg-darkWood/70 w-full rounded-t-lg backdrop-blur-sm z-10 -top-0">
List of coffes
</h2>
<CoffeeShopProducts />

</div>
    </div>
  );
});
Coffee.displayName = 'Coffee';



      // className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
