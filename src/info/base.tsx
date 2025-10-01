
// components/InvestigacionesList.tsx
import React from "react";

type Investigacion = {
  titulo: string;
  descripcion: string;
  enlace: string;
};

interface Props {
  investigaciones: Investigacion[];
}

const InvestigacionesList: React.FC<Props> = ({ investigaciones }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white " id="uyi">
      <h2 className="goia font-bold mb-6 text-center">Investigaciones sobre Negocios con Página Web</h2>
      <ul className="space-y-4">
        {investigaciones.map((item, index) => (
          <li key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="goi font-semibold mb-2 goi">{item.titulo}</h3>
            <p className="mb-2 text-gray-700 goi">{item.descripcion}</p>
            <a
              href={item.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#05a95e] hover:underline goi"
            >
              Ver más
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestigacionesList;
