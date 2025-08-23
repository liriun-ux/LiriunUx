import ElectronicComponent from "./electronic.component";
import electronicComponent from "../../../../data/electronic.component.json";

const ElectronicResistencia: React.FC = () => {
  return (
    <div className=" text-gray-800 rounded-lg pt-6  px-4 w-full h-full overflow-y-auto animate-Top">
      <div className="flex flex-wrap gap-4 justify-center items-center ">
        {electronicComponent.map ( (item, key)=> (
            <ElectronicComponent key={key} title={item.title} description={item.description} price={item.price}  />
        ))}
      </div>
    </div>
  );
};

export default ElectronicResistencia;
