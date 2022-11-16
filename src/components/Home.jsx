import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
   const { state: { products } } = CartState();

   return (
      <div className="flex flex-col sm:flex-row bg-verylightyellow">
         <div className="flex sm:w-56 w-full">
            <Filter />               
         </div>           
         <div className="flex flex-wrap justify-around">
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