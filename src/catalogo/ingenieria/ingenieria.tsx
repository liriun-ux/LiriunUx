'use client'
import React from 'react';
import IngHeroSection from './hero';

export const Ingenieria = React.forwardRef<HTMLDivElement>((props, ref) => {


  return (
    <div
      id="Ingenieria"
      className="relative h-screen bg-amber-50 flex justify-start items-center text-white newSection overflow-hidden "
      ref={ref}
    >
        <IngHeroSection/>
    </div>
  );
});

Ingenieria.displayName = 'Ingenieria';
