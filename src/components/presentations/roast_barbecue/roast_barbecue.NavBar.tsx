'use client'

const RoastBarbecueNavBar: React.FC =() => {
  return (
    <nav className="bg-yellow-500 text-white fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold">RoastBarbecueNavBar</a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#hero-one" className="px-3 py-2 text-sm font-medium">Hero One</a>
              <a href="#hero-two" className="px-3 py-2 text-sm font-medium">Hero Two</a>
              <a href="#hero-three" className="px-3 py-2 text-sm font-medium">Hero Three</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RoastBarbecueNavBar;
