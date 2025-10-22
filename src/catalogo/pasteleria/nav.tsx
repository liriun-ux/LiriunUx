'use client'

const SaltenaNavBar: React.FC =() => {

  return (

      <nav className=" fixed top-0 left-0 w-full z-20  opacity-0 animate-rebote font-mono mt-16">

      <div className=" burger-nav1">
        <div className=' saltena_title_saltena '>
            SALTEÑAS
        </div>
        <div className='relative w-full h-full'>
        <div className='bbtf'>
    <div className="flex items-center justify-center w-full ">
      <span className="mx-4 text-2xl saltena_title_factory ">Bolivianas</span>
    </div>
        </div>
        </div>
      </div>



      <div className=" burger-nav">

        <div className=' saltena_title_saltena '>
            SALTEÑAS
        </div>

        <div className='relative w-full h-full'>
        <div className='bbtf'>

            <div className="flex items-center justify-center w-full ">
              <span className="mx-4 text-2xl saltena_title_factory ">Bolivianas</span>
            </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default SaltenaNavBar;
