import { Form, Button } from "react-bootstrap";
import { CartState } from '../context/Context';
import Rating from './Rating';
import { SORT_BY_PRICE, FILTER_BY_STOCK, FILTER_BY_DELIVERY, FILTER_BY_RATING } from "../constants/actionTypes";

const Filter = () => {
   const { productState: { sort, byFastDelivery, byStock, byRating  }, productDispatch } = CartState();

   return (
      <div className="flex flex-col sm:w-96 w-full bg-white mt-3 p-4 text-darkblue h-56 sm:h-full ">
         <span className="pb-3 text-2xl sm:text-xl sm:text-left sm:ml-2 text-center">Filter Products</span>
         <div className="flex flex-row sm:flex-col justify-evenly">
            <div className="flex flex-col">
               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check 
                     inline
                     label=" Price Low to High"
                     name="group1"
                     type="radio"
                     id={`inline-1`}
                     onChange={() => productDispatch({
                        type: SORT_BY_PRICE,
                        payload: "lowToHigh"
                     })}
                     checked={sort === "lowToHigh" ? true : false}
                  />
               </span>

               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check 
                     inline
                     label=" Price High to Low"
                     name="group1"
                     type="radio"
                     id={`inline-2`}
                     onChange={() => productDispatch({
                        type: SORT_BY_PRICE,
                        payload: "highToLow"
                     })}
                     checked={sort === "highToLow" ? true : false}
                  />
               </span>
            </div>

            <div className="flex flex-col">
               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check 
                     inline
                     label=" Fast Delivery"
                     name="group1"
                     type="checkbox"
                     id={`inline-3`}
                     onChange={() => productDispatch({
                        type: FILTER_BY_DELIVERY
                     })}
                     checked={byFastDelivery}
                  />
               </span>

               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check
                     inline
                     label=" In Stock Only"
                     name="group1"
                     type="checkbox"
                     id={`inline-4`}
                     onChange={() => productDispatch({
                        type: FILTER_BY_STOCK,
                     })}
                     checked={byStock}
                  />
               </span>        
            </div>         
         </div>
         
         <span className="flex flex-row justify-center sm:justify-start mb-1 sm:ml-1">
            <label className="pr-2.5 text-lg sm:text-base">Rating: </label>
            <Rating 
               rating={byRating} 
               onClick={(index) => productDispatch({
                  type: FILTER_BY_RATING,
                  payload: index + 1,
               })}            
            />
         </span>

         <Button className="transition-all duration-300 ease-linear border-2 hover:border-2 hover:bg-blue-600 bg-darkblue text-white tracking-wide rounded p-1 font-medium text-lg sm-text-base w-1/2 sm:w-full mx-auto mt-2" 
         onClick={() => productDispatch({ type: "CLEAR_FILTERS"})}>Clear Filter</Button>    
            
      </div>
   )
}

export default Filter;