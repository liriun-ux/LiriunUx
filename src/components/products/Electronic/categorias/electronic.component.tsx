import Image from "next/image";

interface ElectronicComponentProps {
  title: string;
  description: string;
  price: string;
}
const ElectronicComponent: React.FC<ElectronicComponentProps> = ({title, description, price}) => {
  return (
      <div className="  bg-gray-700/70 backdrop-blur-sm flex flex-row  w-[39rem] h-64 m-1 lg:m-5 rounded-lg transition-transform duration-300 transform hover:scale-105 ">
        <div className="relative w-1/2 flex ">
          <Image
            src="/img/electronic/prd/pexels-karolina-grabowska-7286026.jpg" // Ruta de tu imagen
            alt="Fondo"
            fill // Asegura que la imagen llene todo el contenedor
            style={{ objectFit: "cover" }} // Ajusta la imagen para cubrir todo el div sin distorsionar
            className=" rounded-l-lg" // Envía la imagen al fondo
          />
        </div>

        <div className=" w-1/2 px-2 flex flex-col items-center text-center justify-center">
          <h2 className="text-lg font-semibold mb-2 items-center text-white ">{title}</h2>
          <p className="text-sm mb-4 text-sky-200 ">{description}</p>
          <a href="#" className="text-white hover:underline">{price}</a>
      </div>
      </div>
  );
};

export default ElectronicComponent;
