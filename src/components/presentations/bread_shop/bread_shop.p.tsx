'use client'
import React from 'react';
import Image from 'next/image';
export const BreadShop = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="BreadShop"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
      <Image
        src="/img/bread_shop/pexels-nadin-sh-78971847-20644802.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />
      <h1 className="text-4xl sm:text-6xl font-bold">BreadShop Service</h1>
    </div>
  );
});
BreadShop.displayName = 'BreadShop';
