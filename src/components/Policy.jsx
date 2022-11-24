import React from 'react';
import icons from '../products/icons';

const Policy = () => {
   return (
      <div className="flex flex-wrap justify-evenly text-base items-stretch">
         <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
            <img src={icons.shipping} className="sm:w-16 ss:w-10 w-12"/>
            <p className="text-center">Worldwide <br/> Shipping</p>
         </div>
         <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
            <img src={icons.returns} className="sm:w-16 ss:w-10 w-12"/>
            <p className="text-center">Free 30-day <br/> Returns</p>
         </div>            
         <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
            <img src={icons.warranty} className="sm:w-16 ss:w-10 w-12"/>
            <p className="text-center">12-month <br/> Warranty</p>
         </div>
         <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
            <img src={icons.checkout} className="sm:w-16 ss:w-10 w-12"/>
            <p className="text-center">Secure <br/> Checkout</p>
         </div>                     
      </div>
   )
}

export default Policy