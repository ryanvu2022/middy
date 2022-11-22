import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { CartIcon } from "../icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownCart from "./DropdownCart";
import middy from "../products/logo";

const Navbar = () => {
   const { state: { cart } } = CartState();

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const [amount, setAmount] = useState(0);

   useEffect(() => {
      const total = cart.reduce((acc, item) => acc + item.quantity, 0);
      setAmount(total);
   }, [cart]);

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   }

   return (
      <nav className="bg-baseColor max-w-[1280px] mx-auto w-full px-4 pb-2 pt-3 text-darkblue fixed top-0 left-0 right-0 z-10 border-b-2 border-x-2 ">
         <div className="w-full flex justify-between items-center m-0">
            <h2 className="mb-0 tracking-widest text-3xl font-medium cursor-pointer">
               <Link to="/" onClick={() => setIsDropdownOpen(false)}>
                  <img src={middy} className="h-16"/>
               </Link>
            </h2>

            <Dropdown>
               <Dropdown.Toggle>
                  <div className="block relative cursor-pointer mr-4" onClick={toggleDropdown}>
                     <CartIcon />
                     <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-lightblue rounded-full flex items-center justify-center">
                        <p className="mb-0 text-lg">{amount}</p>
                     </div>              
                  </div>         
               </Dropdown.Toggle>
               <Dropdown.Menu className="z-10 flex flex-col bg-[#F9F9F9] rounded border-solid shadow-2xl border-2 border-gray-300">
                  {isDropdownOpen && <DropdownCart setIsDropdownOpen={setIsDropdownOpen}/>}
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </nav>
   )
}

export default Navbar;
