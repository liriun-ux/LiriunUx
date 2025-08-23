
'use client'
import React from 'react';

export const WoodFurniture = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="WoodFurniture"
      className="h-screen bg-green-500 flex justify-center items-center text-white newSection"
      ref={ref}
    >
      <h1 className="text-4xl sm:text-6xl font-bold">WoodFurniture Service</h1>
    </div>
  );
});
WoodFurniture.displayName = 'WoodFurniture';
