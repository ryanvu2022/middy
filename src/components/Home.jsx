import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
   const { state: { products } } = CartState();

   return (
      <div className="flex flex-wrap bg-[#F9F9F9]">
         <Filter />
         <div className="flex w-9/12 flex-wrap justify-evenly">
            {products.map(item => (
               <SingleProduct 
                  key={item.id}
                  item={item}
               />
            ))}
         </div>
      </div>
   )
}

export default Home;