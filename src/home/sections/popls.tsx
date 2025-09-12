'use client'
import { useState } from "react";
import { createPortal } from "react-dom";

export default function PopContact() {
  const [open, setOpen] = useState(false);

  return (
    <div id="" className=" cont-home-nav-item-fo cursor-pointer">
      {/* Div que abre la ventana */}
      <div id="" className="text-[#4a6c7b] text-animado" onClick={() => setOpen(true)}>
        CONTACTO
      </div>

      {/* Portal para renderizar el popup en <body> */}
      {open &&
        createPortal(
          <div id="overlay">
            <div id="popup">
              <p className="popup-text fck boxA" >Facebook</p>
              <p className="popup-text twe boxA" >X</p>
              <p className="popup-text ist boxA" >Instagram</p>
              <button id="close-btn" onClick={() => setOpen(false)}>
                X
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
