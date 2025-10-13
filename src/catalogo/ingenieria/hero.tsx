//
// export default function IngHeroSection() {
//   return (
//     <section id="inicio" className="Inghero">
//       <div className="IngtextContainer">
//         <h1>Consultorio de Ingeniería</h1>
//         <p>
//           Soluciones profesionales en diseño estructural, planos arquitectónicos y 
//           supervisión técnica para proyectos civiles e industriales.
//         </p>
//         <a href="#contacto" className="Ingcta">
//           Contáctanos
//         </a>
//       </div>
//
//       <div className="IngimageContainer">
//         {/* 📸 Imagen sugerida: render 3D o ilustración técnica de planos estructurales,
//             ingeniero revisando documentos en una mesa */}
//         <div className="IngimagePlaceholder">
//           Imagen ilustrativa de planos y estructuras
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import AnimatedNumber from "./animate";

export default function IngHeroSection() {
  return (
<>
    <section className="rtl-main-section">
      <div className="rt1-main-container">
    <div className="rt1-container">
      <div className="rt1-a">

         <aside className="rt1-sidebar">
           <div className="rt1-services">
             <h3 className="rt1-yui">SERVICIOS <span className="rt1-arrow">▶</span></h3>
             <ul>
               <li>Diseño estructural</li>
               <li>Planos arquitectónicos</li>
               <li>Consultoría civil</li>
               <li>Peritajes técnicos</li>
               <li>Topografía</li>
               <li>Supervisión de obra</li>
             </ul>
           </div>
         </aside>
      </div>
      <div className="rt1-b ">

         <div className="rt1-hero-content z-10 relative">

      {/* 🔹 Imagen de fondo */}
      <Image
            src="/img/inge/inge.jpg" // Ruta de tu imagen
        alt="Fondo de ingeniería"
        fill
        priority
        className="object-cover -z-10 rounded-2xl"
      />

      {/* 🔹 Capa oscura encima (opcional para contraste) */}
      <div className="absolute inset-0 bg-black/30 -z-10 rounded-2xl "></div>

           <h1>EXPERIENCIA Y PRECISIÓN<br />EN CADA PROYECTO</h1>
           <div className="rt1-line"></div>
           <button className=" rt1-laser-border-btn">VER MÁS</button>
         </div>
      </div>
      <div className="rt1-c">
           <div className="rt1-stats">
             <div><span><AnimatedNumber end={45} duration={1200} delay={10000} /></span><p className="ddoai">CASOS</p></div>
             <div><span><AnimatedNumber end={12} duration={1200} delay={10000} /></span><p className="ddoai">DISEÑOS</p></div>
             <div><span><AnimatedNumber end={34} duration={1200} delay={10000} /></span><p className="ddoai">PLANOS</p></div>
           </div>
      </div>
    </div>
      </div>
      </section>
    </>
  );
}

      // <div className="rtl-up-contain">
      //   <aside className="rt1-sidebar">
      //     <div className="rt1-services">
      //       <h3>SERVICIOS <span className="rt1-arrow">▶</span></h3>
      //       <ul>
      //         <li>Diseño estructural</li>
      //         <li>Planos arquitectónicos</li>
      //         <li>Consultoría civil</li>
      //         <li>Peritajes técnicos</li>
      //         <li>Topografía</li>
      //         <li>Supervisión de obra</li>
      //       </ul>
      //     </div>
      //   </aside>
      //
      //   <div className="rt1-hero-content">
      //     <h1>EXPERIENCIA Y PRECISIÓN<br />EN CADA PROYECTO</h1>
      //     <div className="rt1-line"></div>
      //     <button className="rt1-btn">VER MÁS</button>
      //   </div>
      //   </div>
      //
      //   <aside className="rt1-sidebar">
      //     <div className="rt1-stats">
      //       <div><span>45</span><p>CASOS</p></div>
      //       <div><span>12</span><p>DISEÑOS</p></div>
      //       <div><span>34</span><p>PLANOS</p></div>
      //     </div>
      //   </aside>
