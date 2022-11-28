import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { useState } from "react";

const Home = () => {
   const { 
      state: { products },
      productState: { sort, byFastDelivery, byStock, byRating }
   } = CartState();

   const [productsPerPage] = useState(12);
   const [currentPage, setCurrentPage] = useState(1);

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
         sortedProducts = sortedProducts.filter(item => item.ratings >= byRating)
      }

      return sortedProducts;
   }

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = filterProducts().slice(indexOfFirstProduct, indexOfLastProduct);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <div className="flex flex-col sm:flex-row bg-white">
         <div className="flex sm:w-56 w-full">
            <Filter />               
         </div> 
         <div className="flex flex-col">
            <div className="flex flex-wrap justify-evenly border-l-2 ">
               {currentProducts.map(item => (
                  <SingleProduct 
                     key={item.id}
                     item={item}
                  />
               ))}               
            </div>            
            <Pagination 
               productsPerPage={productsPerPage} 
               totalProducts={filterProducts().length} 
               paginate={paginate}            
            />
         </div>          
         
           
      </div>
   )
}

export default Home;