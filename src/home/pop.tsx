import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PopupExample() {
  const [open, setOpen] = useState(false);

  return (
    <div id="acontainer" className="text-animado-ct">
      {/* Div que abre la ventana */}
      <div id="open-btn" onClick={() => setOpen(true)}>
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
    facebook.com/LiriunUX
  </Link>

  <Link
    href="https://x.com/LiriunUX"
    target="_blank"
    rel="noopener noreferrer"
    className="popup-text twe boxA"
  >
    x.com/LiriunUX
  </Link>

  <Link
    href="https://www.instagram.com/liriun_ux"
    target="_blank"
    rel="noopener noreferrer"
    className="popup-text ist boxA"
  >
    instagram.com/liriun_ux
  </Link>
  <Link
    href="https://wa.me/59163156033"
    target="_blank"
    rel="noopener noreferrer"
    className="popup-text wst boxA"
  >
    +591 63156033
  </Link>
  <Link
    href="https://maps.app.goo.gl/R3cGmUXkMjFHY6vi7"
    target="_blank"
    rel="noopener noreferrer"
    className="popup-text mpas boxA flex flex-col"
  >
    <div className="flex">
    <FaMapMarkerAlt color="#f00"/>  Av. Alfredo Franco Valle 708-51
    </div>
    <div>
    El Alto Of A-7
    </div>
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
