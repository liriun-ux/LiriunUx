import { useState } from "react";
import { createPortal } from "react-dom";

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
