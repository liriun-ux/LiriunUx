'use client'
import React from 'react';

export const BreadShop = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="BreadShop"
      className="h-screen bg-red-500 flex justify-center items-center text-white newSection"
      ref={ref}
    >
      <h1 className="text-4xl sm:text-6xl font-bold">BreadShop Service</h1>
    </div>
  );
});
BreadShop.displayName = 'BreadShop';
