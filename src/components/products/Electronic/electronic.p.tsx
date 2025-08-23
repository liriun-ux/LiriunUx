
'use client'
import React from 'react';
import Image from 'next/image';
import ElectronicProduct from './electronic.products';
export const Electronic = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="Electronic"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
          <Image
        src="/img/electronic/pexels-pixabay-163100.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

<div id="ElectronicC" className=" flex flex-col 
 items-center  gap-4  rounded-lg w-11/12   h-5/6 bg-gray-200/70 relative top-10   opacity-0 ">
 <ElectronicProduct/>
</div>
    </div>
  );
});
Electronic.displayName = 'Electronic';
