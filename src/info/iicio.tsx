// components/RespuestaSitioWeb.tsx
import React from "react";

type Punto = {
  titulo: string;
  descripcion: string;
};

const puntos: Punto[] = [
  {
    titulo: "1. Visibilidad y alcance",
    descripcion:
      "Un sitio web permite que tu negocio aparezca en Google y llegue a clientes locales, nacionales o internacionales."
  },
  {
    titulo: "2. Credibilidad y profesionalismo",
    descripcion:
      "Los clientes confían más en empresas con presencia en línea formal. Una página transmite seriedad y confianza."
  },
  {
    titulo: "3. Marketing y ventas",
    descripcion:
      "Puedes mostrar productos, servicios y promociones 24/7, sin límites."
  },
  {
    titulo: "4. Competitividad",
    descripcion:
      "Si tus competidores tienen sitio web y tú no, estás en desventaja. Una web te da ventaja estratégica."
  },
  {
    titulo: "5. Coste-efectividad",
    descripcion:
      "Es mucho más económico y duradero que publicidad tradicional, con mejor retorno de inversión."
  }
];

const RespuestaSitioWeb: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-16 ">
      <h2 className="goia font-bold mb-4 text-center text-gray-900">
        ¿Necesito un sitio web para mi negocio?
      </h2>

      <p className="mb-6 text-gray-700 goi">
        La respuesta es <span className="font-semibold text-[#05a95e]">sí</span>.
        Aquí están las principales razones:
      </p>

      <ul className="space-y-4">
        {puntos.map((punto, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg hover:shadow transition"
          >
            <h3 className="font-semibold goi ">{punto.titulo}</h3>
            <p className="text-gray-600 goi">{punto.descripcion}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <p className="goi font-semibold text-gray-900">
          Sí, un negocio mediano necesita un sitio web.
        </p>
        <p className="text-gray-600 goi">
          No solo es una herramienta de marketing, sino una{" "}
          <span className="font-medium">
            plataforma para ventas, confianza y crecimiento
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default RespuestaSitioWeb;
