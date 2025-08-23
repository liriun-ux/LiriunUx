'use client'
// components/CoffeeInfoCard.tsx
import coffeeProducts from "../../../data/coffee_shop.products.json";
import CoffeeProduct from "./coffee_shop.product";

const CoffeeShopProducts: React.FC = () => {


  return (
    <div className=" text-gray-800  rounded-lg pt-6 px-4  w-full h-full overflow-y-auto ">
      <div className="flex flex-wrap gap-4 justify-center items-center  ">
        {coffeeProducts.map ( (item, key)=> (
            <CoffeeProduct key={key} title={item.title} description={item.description} price={item.price} ingredients={item.ingredientes} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeShopProducts;
