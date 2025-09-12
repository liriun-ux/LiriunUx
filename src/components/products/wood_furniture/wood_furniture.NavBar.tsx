
'use client'

import Link from "next/link";

const WoodFurnitureNavBar: React.FC =() => {
  return (
    <nav className="bg-green-500 text-white fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">WoodFurnitureNavBar</Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#hero-one" className="px-3 py-2 text-sm font-medium">Hero One</Link>
              <Link href="#hero-two" className="px-3 py-2 text-sm font-medium">Hero Two</Link>
              <Link href="#hero-three" className="px-3 py-2 text-sm font-medium">Hero Three</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WoodFurnitureNavBar;
