import RoastBarbecueNavBar from "./roast_barbecue/roast_barbecue.NavBar";
import WoodFurnitureNavBar from "./wood_furniture/wood_furniture.NavBar";
import ElectronicNavBar from "./Electronic/electronic.NavBar";
import BreadShopNavBar from "./bread_shop/bread_shop.NavBar";
import StationeryStoreNavBar from "./stationery_store/stationery_store.NavBar";
import GardenNavBar from "./garden/garden.NavBar";
import CoffeeShopNavBar from "./coffee_shop/coffee_shop.NavBar";

import RoastBarbecueInfoCard from "./roast_barbecue/roast_barbecue.InfoCard";
import WoodFurnitureInfoCard from "./wood_furniture/wood_furniture.InfoCard";
import ElectronicInfoCard from "./Electronic/electronic.InfoCard";
import BreadShopInfoCard from "./bread_shop/bread_shop.InfoCard";
import StationeryStoreInfoCard from "./stationery_store/stationery_store.InfoCard";
import GardenInfoCard from "./garden/garden.InfoCard";
import CoffeeShopInfoCard from "./coffee_shop/coffee_shop.InfoCard";

// El componente que recibirá el string y retornará otro componente
interface DynamicElementsPresentationsProps {
  componentType: string;
}

const DynamicElementsPresentations: React.FC<DynamicElementsPresentationsProps> = ({ componentType }) => {
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
    case 'StationeryStore':
      return (
        <>
          <StationeryStoreNavBar/>
          <StationeryStoreInfoCard/>
        </>
    );
    case 'Garden':
      return (
        <>
          <GardenNavBar/>
          <GardenInfoCard/>
        </>
    );
    case 'CoffeeShop':
      return (
        <>
          <CoffeeShopNavBar/>
          <CoffeeShopInfoCard/>
        </>
    );
    default:
      return <></>; // Componente por defecto si no coincide
  }
};

export default DynamicElementsPresentations;
