
'use client'
import React from 'react';
import Image from 'next/image';
import StationeryPencils from './stationery_store.pencils';

export const StationeryStore = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="StationeryStore"
      className="relative h-screen flex justify-center items-center text-white newSection overflow-hidden"
      ref={ref}
    >
          <Image
        src="/img/stationaryStore/pexels-n-voitkevich-5554661.jpg"
        alt="Fondo"
  fill // Reemplaza "layout='fill'"
  style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
        quality={100}
        className="-z-10"
      />

<div id="StationeryStoreC" className=" flex flex-col 
 items-center  gap-4  rounded-lg w-11/12   h-5/6  relative top-10   opacity-0 ">
  <StationeryPencils/>
</div>
    </div>
  );
});
StationeryStore.displayName = 'Electronic';
