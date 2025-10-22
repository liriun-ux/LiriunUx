

'use client'
import React from 'react';
import Image from 'next/image';
import ProductsHeladeria from './products';

export const Heladeria = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="Heladeria"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden "
      ref={ref}
    >
          <Image
        src="/img/helado/helado.png"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

<div id='HeladeriaC' className=" flex flex-col 
 items-center  gap-4  rounded-lg  w-12/12 h-6/6  lg:w-10/12   lg:h-6/6  relative  mx-2 lg:mx-10 py-5 lg:p-5 opacity-0 ">
   <ProductsHeladeria/> 
</div>
    </div>
  );
});
Heladeria.displayName = 'Heladeria';
