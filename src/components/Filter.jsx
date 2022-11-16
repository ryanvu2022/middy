import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import Rating from './Rating';

const Filter = () => {
   const [rating, setRating] = useState(3);

   return (
      <div className="flex flex-col md:w-96 w-full bg-darkblue mt-3 p-4 text-white h-52 sm:h-72 sm:ml-3 mx-4 sm:mx-0">
         <span className="pb-3 text-2xl sm:text-xl sm:text-left text-center">Filter Products</span>
         <div className="flex flex-row sm:flex-col justify-evenly">
            <div className="flex flex-col">
               <span className="text-lg sm:text-base sm:mb-2">
                  <Form.Check 
                     inline
                     label=" Ascending"
                     name="group1"
                     type="radio"
                     id={`inline-1`}
                  />
               </span>

               <span className="text-lg sm:text-base sm:mb-2">
                  <Form.Check 
                     inline
                     label=" Descending"
                     name="group1"
                     type="radio"
                     id={`inline-2`}
                  />
               </span>
            </div>

            <div className="flex flex-col">
               <span className="text-lg sm:text-base sm:mb-2">
                  <Form.Check 
                     inline
                     label=" Fast Delivery"
                     name="group1"
                     type="checkbox"
                     id={`inline-3`}
                  />
               </span>

               <span className="flex flex-row">
                  <label className="pr-2.5 text-lg sm:text-base">Rating: </label>
                  <Rating 
                     rating={rating} 
                     onClick={(index) => setRating(index + 1)}            
                  />
               </span>
            </div>
         </div>
  
         <Button className="bg-white text-darkblue tracking-wide rounded p-2 font-medium text-lg sm-text-base w-1/2 sm:w-full mx-auto mt-5">Clear Filter</Button>    
            
      </div>
   )
}

export default Filter;