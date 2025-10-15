
'use client'

const BurgerNavBar: React.FC =() => {

  return (
    <nav className=" fixed top-0 left-0 w-full z-20  opacity-0 animate-rebote font-mono ">
      <div className=" burger-nav1">
        <div>
    <div className="flex items-center justify-center w-full ">
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra izquierda */}
      <span className="mx-4 text-2xl burger_title_the">THE</span>
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra derecha */}
    </div>
        </div>
        <div className=' burger_title_burger1 '>
            BURGER
        </div>
        <div className='relative w-full h-full'>
        <div className='bbtf'>
    <div className="flex items-center justify-center w-full ">
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra izquierda */}
      <span className="mx-4 text-2xl burger_title_factory ">factory</span>
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra derecha */}
    </div>
        </div>
        </div>
      </div>



      <div className=" burger-nav">
        <div>
    <div className="flex items-center justify-center w-full ">
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra izquierda */}
      <span className="mx-4 text-2xl burger_title_the">THE</span>
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra derecha */}
    </div>
        </div>
        <div className=' burger_title_burger '>
            BURGER
        </div>
        <div className='relative w-full h-full'>
        <div className='bbtf'>
    <div className="flex items-center justify-center w-full ">
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra izquierda */}
      <span className="mx-4 text-2xl burger_title_factory ">factory</span>
      <div className="h-1 bg-yellow-500 flex-1"></div> {/* barra derecha */}
    </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default BurgerNavBar;
