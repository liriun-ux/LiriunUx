'use client'
import React from 'react';

export const RoastBarbecue = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="RoastBarbecue"
      className="h-screen bg-yellow-500 flex justify-center items-center text-white newSection"
      ref={ref}
    >
      <h1 className="text-4xl sm:text-6xl font-bold">RoastBarbecue Service</h1>
    </div>
  );
});
RoastBarbecue.displayName = 'RoastBarbecue';
