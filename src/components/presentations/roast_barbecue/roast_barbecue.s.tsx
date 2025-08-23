'use client'
import React from 'react';
import Image from 'next/image';
export const RoastBarbecue = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="RoastBarbecue"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
      <Image
        src="/img/roast_barbecue/pexels-gustavoraton-9200398.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />
      <h1 className="text-4xl sm:text-6xl font-bold">RoastBarbecue Service</h1>
    </div>
  );
});
RoastBarbecue.displayName = 'RoastBarbecue';
