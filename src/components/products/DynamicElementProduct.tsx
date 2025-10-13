import WoodFurnitureNavBar from "../presentations/wood_furniture/wood_furniture.NavBar";
// import WoodFurnitureNavBar from "./wood_furniture/wood_furniture.NavBar";
import CoffeeShopNavBar from "../presentations/coffee_shop/coffee_shop.NavBar";
import ElectronicNavBar from "../presentations/Electronic/electronic.NavBar";
import StationeryStoreNavBar from "../presentations/stationery_store/stationery_store.NavBar";


import WoodFurnitureInfoCard from "../presentations/wood_furniture/wood_furniture.InfoCard";
// import WoodFurnitureInfoCard from "./wood_furniture/wood_furniture.InfoCard";
import CoffeeInfoCard from "./coffee_shop/coffee_shop.InfoCard";
import ElectronicInfoCard from "../presentations/Electronic/electronic.InfoCard";
import StationeryStoreInfoCard from "../presentations/stationery_store/stationery_store.InfoCard";



import NavSmartphones from "@/catalogo/phones/nav.phone";
import NavPollos from "@/catalogo/pollos/nav.pollos";

import NavIngenieria from "@/catalogo/ingenieria/nav";

// El componente que recibirá el string y retornará otro componente
interface DynamicElementsProductsProps {
  componentType: string;
}

const DynamicElementsProducts: React.FC<DynamicElementsProductsProps> = ({ componentType }) => {
    console.log(componentType);
  switch (componentType) {
    case 'WoodFurniture':
      return (
        <>
          <WoodFurnitureNavBar />
          <WoodFurnitureInfoCard />
        </>
    );
    case 'Electronic':
      return (
        <>
          <ElectronicNavBar />
          <ElectronicInfoCard />
        </>
    );
    case 'CoffeeShop':
      return (
        <>
          <CoffeeShopNavBar />
          <CoffeeInfoCard />
        </>
    );
    case 'StationeryStore':
      return (
        <>
          <StationeryStoreNavBar />
          <StationeryStoreInfoCard/>
        </>
    );
    case 'CoffeeShopPrd':
      return (
        <>
          <CoffeeShopNavBar />
        </>
    );
    case 'CoffeeShoG':
      return (
        <>
          <CoffeeShopNavBar />
          <CoffeeInfoCard />
        </>
    );
    case 'Smartphones':
      return (
        <>
           <NavSmartphones/>
        </>
    );
    case 'Pollos':
      return (
        <>
           <NavPollos/>
        </>
    );
    case 'Ingenieria':
      return (
        <>
           <NavIngenieria/>
        </>
    );
    default:
      return <></>; // Componente por defecto si no coincide
  }
};

export default DynamicElementsProducts;
