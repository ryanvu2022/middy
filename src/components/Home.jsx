import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
   const { 
      state: { products },
      productState: { sort, byFastDelivery, byStock, byRating }
   } = CartState();

   const filterProducts = () => {
      let sortedProducts = products;
      if (sort) {
         sortedProducts = sortedProducts.sort((a,b) => (
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
         ));
      }

      if (byFastDelivery) {
         sortedProducts = sortedProducts.filter(item => item.fastDelivery)
      }

      if (byStock) {
         sortedProducts = sortedProducts.filter(item => item.inStock);
      }

      if (byRating) {
         sortedProducts = sortedProducts.filter(item => item.ratings == byRating)
      }

      return sortedProducts;
   }

   return (
      <div className="flex flex-col sm:flex-row bg-white">
         <div className="flex sm:w-56 w-full">
            <Filter />               
         </div> 
         <div className="flex flex-col">
            <div className="flex flex-wrap justify-around">
               {filterProducts().map(item => (
                  <SingleProduct 
                     key={item.id}
                     item={item}
                  />
               ))}
            </div>            
         </div>          
         
           
      </div>
   )
}

export default Home;