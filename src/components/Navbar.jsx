import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { CartIcon } from '../icons';

const Navbar = () => {
   const { state: { cart }, dispatch } = CartState();

   return (
      <nav className="bg-darkblue px-8 py-5 text-white">
         <div className="w-full flex flex-row justify-between items-center m-0">
            <h2 className="mb-0 tracking-wider text-3xl cursor-pointer">
               <Link to="/">Shopping Cart</Link>
            </h2>
            <div className="block relative cursor-pointer">
               <Link to="/cart">
                  <CartIcon />
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-lightblue rounded-full flex items-center justify-center">
                     <p className="mb-0 text-lg">{cart.length}</p>
                  </div>
               </Link>
            </div>
         </div>
      </nav>
   )
}

export default Navbar;
