import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import Rating from './Rating';

const Filter = () => {
   const [rating, setRating] = useState(3);

   return (
      <div className="flex flex-col w-1/5 bg-darkblue mt-10 p-5 text-white h-[85vh]">
         <span className="pb-3 text-2xl">Filter Products</span>

         <span className="pb-3 text-lg">
            <Form.Check 
               inline
               label=" Ascending"
               name="group1"
               type="radio"
               id={`inline-1`}
            />
         </span>

         <span className="pb-3 text-lg">
            <Form.Check 
               inline
               label=" Descending"
               name="group1"
               type="radio"
               id={`inline-2`}
            />
         </span>

         <span className="pb-3 text-lg">
            <Form.Check 
               inline
               label=" Fast Delivery"
               name="group1"
               type="checkbox"
               id={`inline-3`}
            />
         </span>

         <span className="pb-3 flex flex-row">
            <label className="pr-2.5 text-lg">Rating: </label>
            <Rating 
               rating={rating} 
               onClick={(index) => setRating(index + 1)}            
            />
         </span>

         <Button className="bg-white text-darkblue tracking-wide rounded p-2 font-medium text-lg">Clear Filter</Button>    
            
      </div>
   )
}

export default Filter;