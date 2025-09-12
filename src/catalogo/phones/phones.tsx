'use client'
import Image from 'next/image';
import React from 'react';
import Slider from './slider';

export const Smartphones = React.forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <div
      id="Smartphones"
      className="relative h-screen bg-white flex justify-center items-center text-white newSection overflow-hidden "
      ref={ref}
    >
    <div className="bottom-bar"></div>

      {/* Imagen de fondo */}
    <div id="TLO">
      <Image
        src="/img/phones/tekken8.png"
        alt="Fondo"
    fill
    quality={100}
    style={{ objectFit: "contain" }}
    className=""
  />
</div>
            <Slider/>
      {/* Contenedor con título, descripción y botón */}
        <div id='SmartphonesC' className="SmartPhoneA">
            <div id='Srbar'></div>
            <div id='Srop'>
                <Image
                src="/img/phones/xboxof.png"
                alt="Fondo"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                className=""
                />
            </div>
            
            <div id='Spoo'>
                <div id='Sdfr'>
                    <div className='TSK'>XBOX SERIES X</div>
                    <div className='Frgo'>
Vive juegos potentes, rápidos y totalmente inmersivos con la Xbox Series X.
                    </div>
                </div>
                <div id='Spio'></div>
                <div id='Sdf'>
                    <div className='TSK'>TEKKEN 8</div>
                    <div className='Frgo'>
Disfruta de combates intensos, gráficos impresionantes y emoción competitiva sin fin en Tekken 8.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
});

Smartphones.displayName = 'Smartphones';
