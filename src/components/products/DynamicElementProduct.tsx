import RoastBarbecueNavBar from "./roast_barbecue/roast_barbecue.NavBar";
import WoodFurnitureNavBar from "../presentations/wood_furniture/wood_furniture.NavBar";
// import WoodFurnitureNavBar from "./wood_furniture/wood_furniture.NavBar";
import BreadShopNavBar from "./bread_shop/bread_shop.NavBar";
import CoffeeShopNavBar from "../presentations/coffee_shop/coffee_shop.NavBar";
import ElectronicNavBar from "../presentations/Electronic/electronic.NavBar";
import StationeryStoreNavBar from "../presentations/stationery_store/stationery_store.NavBar";


import RoastBarbecueInfoCard from "./roast_barbecue/roast_barbecue.InfoCard";
import WoodFurnitureInfoCard from "../presentations/wood_furniture/wood_furniture.InfoCard";
// import WoodFurnitureInfoCard from "./wood_furniture/wood_furniture.InfoCard";
import BreadShopInfoCard from "./bread_shop/bread_shop.InfoCard";
import CoffeeInfoCard from "./coffee_shop/coffee_shop.InfoCard";
import ElectronicInfoCard from "../presentations/Electronic/electronic.InfoCard";
import StationeryStoreInfoCard from "../presentations/stationery_store/stationery_store.InfoCard";
import CoffeeShopInfoCard from "../presentations/coffee_shop/coffee_shop.InfoCard";

import GardenNavBar from "../presentations/garden/garden.NavBar";
import GardenInfoCard from "../presentations/garden/garden.InfoCard";


import NavSmartphones from "@/catalogo/phones/nav.phone";
import NavPollos from "@/catalogo/pollos/nav.pollos";

// El componente que recibirá el string y retornará otro componente
interface DynamicElementsProductsProps {
  componentType: string;
}

const DynamicElementsProducts: React.FC<DynamicElementsProductsProps> = ({ componentType }) => {
    console.log(componentType);
  switch (componentType) {
    case 'RoastBarbecue':
      return (
        <>
        <RoastBarbecueNavBar />
        <RoastBarbecueInfoCard/>
        </>
    );
    case 'BreadShop':
      return (
        <>
          <BreadShopNavBar />
          <BreadShopInfoCard/>
        </>
    );
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
    case 'Garden':
      return (
        <>
          <GardenNavBar/>
          <GardenInfoCard/>
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
    default:
      return <></>; // Componente por defecto si no coincide
  }
};

export default DynamicElementsProducts;
