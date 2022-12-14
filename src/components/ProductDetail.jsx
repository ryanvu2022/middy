import React, { useState, useEffect } from 'react';
import Rating from './Rating';
import { useParams } from 'react-router-dom';
import { CartState } from "../context/Context";
import { Link } from 'react-router-dom';
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";
import Policy from './Policy';
import axios from 'axios';
import icons from '../products/icons';

const ProductDetail = () => {
   const { productId } = useParams();
   const [item, setItem] = useState({});
   const [isFetching, setIsFetching] = useState(false);

   useEffect(() => {
      const getProductDetail = async () => {
         setIsFetching(true);
         const res = await axios.get(`https://middy-backend-api-production.up.railway.app/products/${productId}`)
         setItem(res.data);
         setIsFetching(false);
      }

      getProductDetail();
   }, [productId])

   const { _id, name, price, image, inStock, ratings, fastDelivery, description, numberOfRatedPeople } = item;
   const { state: { cart }, dispatch } = CartState();

   if (isFetching) return <img src={icons.spinner} className="w-16 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>

   return (
      <div className="flex flex-col gap-4">
         <div className="flex flex-col sm:flex-row gap-x-12 mt-12 mx-12">
            <img src={image} alt={name} className="md:w-96 md:h-96 sm:w-72 sm:h-72"/>
            <div className="flex flex-col gap-4">
               <h1 className="md:text-5xl sm:text-3xl text-2xl mt-4">{name}</h1>
               <div className="flex flex-row md:text-xl sm:text-base">
                  <span className="mr-2 tracking-wide">Rating:</span> 
                  <Rating rating={ratings}/>
                  <span className="ml-1">({numberOfRatedPeople})</span>                                 
               </div>
               { fastDelivery
                  ? <span className="tracking-wide md:text-xl sm:text-lg text-base">Fast Delivery</span>
                  : <span className="tracking-wide md:text-xl sm:text-lg text-base">5 Days Delivery</span>
               }
               <h2 className="md:text-xl sm:text-lg text-base">Details:</h2>
               <p className="md:text-lg text-base">{description}</p>
               <h4 className="md:text-3xl sm:text-2xl text-3xl text-darkblue font-medium mt-2">CAD ${price}</h4>
               <div className="flex gap-4">
                  {cart.some(p => p._id === _id) && (
                     <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide bg-red-600 hover:bg-red-400 text-white md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-56 sm:w-48 mt-4" 
                     onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item})}>
                        Remove from Cart
                     </button>
                  )}
                  {!cart.some(p => p._id === _id) && inStock && (
                     <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide bg-darkblue hover:bg-blue-500 text-white border-2 border-darkblue md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-44 sm:w-36 mt-4" 
                     onClick={() => dispatch({ type: ADD_TO_CART, payload: item})}>
                        Add to Cart
                     </button>
                  )}
                  {!inStock && (
                     <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide bg-gray-600 hover:bg-gray-400 text-white md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-44 sm:w-36 mt-4" disabled>
                        Out of Stock
                     </button>
                  )}
                  {inStock && (
                     <Link to="/cart">
                        <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide hover:text-white hover:bg-blue-500 text-darkblue border-2 border-darkblue md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-44 sm:w-36 mt-4" 
                        onClick={() => { if (!cart.some(p => p._id == _id)) dispatch({ type: ADD_TO_CART, payload: item }) }}>
                           Buy Now
                        </button>  
                     </Link>             
                  )}       
               </div>          
            </div>
         </div>
         <Policy />
      </div>
   )
}

export default ProductDetail;