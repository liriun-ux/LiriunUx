import React from 'react';
import Image from 'next/image';
import StationeryPictures from './stationery_store.pictures';

const StationeryPencils: React.FC = () => {
const pencils = [
  { name: 'Lápiz 10H', color: 'text-gray-200', colorBg: 'bg-gray-100' },
  { name: 'Lápiz 9H', color: 'text-gray-200', colorBg: 'bg-gray-100' },
  { name: 'Lápiz 8H', color: 'text-gray-300', colorBg: 'bg-gray-200' },
  { name: 'Lápiz 7H', color: 'text-gray-300', colorBg: 'bg-gray-200' },
  { name: 'Lápiz 6H', color: 'text-gray-400', colorBg: 'bg-gray-300' },
  { name: 'Lápiz 5H', color: 'text-gray-400', colorBg: 'bg-gray-300' },
  { name: 'Lápiz 4H', color: 'text-gray-500', colorBg: 'bg-gray-400' },
  { name: 'Lápiz 3H', color: 'text-gray-500', colorBg: 'bg-gray-400' },
  { name: 'Lápiz 2H', color: 'text-gray-600', colorBg: 'bg-gray-500' },
  { name: 'Lápiz H', color: 'text-gray-600', colorBg: 'bg-gray-500' },
  { name: 'Lápiz HB', color: 'text-gray-700', colorBg: 'bg-gray-600' },
  { name: 'Lápiz B', color: 'text-gray-800', colorBg: 'bg-gray-700' },
  { name: 'Lápiz 2B', color: 'text-gray-800', colorBg: 'bg-gray-700' },
  { name: 'Lápiz 3B', color: 'text-gray-900', colorBg: 'bg-gray-800' },
  { name: 'Lápiz 4B', color: 'text-gray-900', colorBg: 'bg-gray-800' },
  { name: 'Lápiz 5B', color: 'text-black', colorBg: 'bg-gray-900' },
  { name: 'Lápiz 6B', color: 'text-black', colorBg: 'bg-gray-900' },
  { name: 'Lápiz 7B', color: 'text-black', colorBg: 'bg-gray-900' },
  { name: 'Lápiz 8B', color: 'text-black', colorBg: 'bg-gray-900' },
  { name: 'Lápiz 9B', color: 'text-black', colorBg: 'bg-gray-900' },
];

  return (
    <div className="p-4 backdrop-blur-md rounded-lg shadow-lg shadow-gray-700 h-full w-full ">
      <h2 className="h-[10%] text-3xl text-white text-center font-bold  ">Lápices de Papelería</h2>
      <div className="flex flex-col lg:flex-row w-full h-[90%] ">

        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full ">
          <div className="h-1/2  flex justify-center items-center p-4">
            <div className=" h-full w-full shadow-lg shadow-gray-800  bg-white/30 lg:bg-none backdrop-blur-lg  rounded-lg flex items-center overflow-y-auto">
            <ul className="w-full h-full p-4">
              {pencils.map((pencil, index) => (
                <li
                  key={index}
                  className="flex justify-between lg:justify-around items-center p-2  rounded-md  shadow-sm mb-2 mx-10"
                >
                  <span className={` text-white  font-medium `}>{pencil.name}</span>
                  <span className={`${pencil.color} ${pencil.colorBg} w-2/6 lg:w-1/6 `}>&nbsp;</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
          <div className="relative h-1/2 w-full rounded-lg flex items-center justify-center ">
            <div className="p-4 relative lg:w-[95%] lg:h-[95%] w-[90%] h-[90%] shadow-lg shadow-gray-700 rounded-lg">
            <Image
              src="/img/stationaryStore/pexels-jessbaileydesign-750913.jpg"
              alt="Fondo"
              fill // Reemplaza "layout='fill'"
              style={{ objectFit: 'cover' }} // Reemplaza "objectFit='cover'"
              quality={100}
              className="rounded-lg "
            />
            </div>
          </div>
        </div>

        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full ">
          <div className="relative h-full w-full rounded-lg flex items-center justify-center ">
            <div className=" relative w-[90%] h-[90%] ">
              <StationeryPictures/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StationeryPencils;
