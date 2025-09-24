'use client'
import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

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
  <Link
    href="https://www.facebook.com/LiriunUX"
    target="_blank"
    rel="noopener noreferrer"
    className="popup-text fck boxA"
  >
    Facebook
  </Link>

  <Link
    href="https://x.com/LiriunUX"
    target="_blank"
    rel="noopener noreferrer"
    className="popup-text twe boxA"
  >
    X
  </Link>

  <Link
    href="https://www.instagram.com/liriun_ux"
    target="_blank"
    rel="noopener noreferrer"
    className="popup-text ist boxA"
  >
    Instagram
  </Link>
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
