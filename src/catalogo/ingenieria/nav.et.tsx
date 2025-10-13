
"use client";

export default function IngIANavBar() {
  return (
    <div id='APNNsb' className=" opacity-0 animate-slideIn">
    <nav className="rt1-nav">

      <div className="rt1-nav-logo">CONSULING</div>

      <div className="rt1-nav-links">
           <div className="rt1-services">
             <h3 className="rt1-yui">Inicio <span className="rt1-arrow">▶</span></h3>
             </div>
           <div className="rt1-services">
             <h3 className="rt1-yui">Servicios <span className="rt1-arrow">▶</span></h3>
             </div>
           <div className="rt1-services">
             <h3 className="rt1-yui">Proyectos<span className="rt1-arrow">▶</span></h3>
             </div>
           <div className="rt1-services">
             <h3 className="rt1-yui">Contacto<span className="rt1-arrow">▶</span></h3>
             </div>
      </div>

      <button className="rt1-nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    </div>
  );
}
