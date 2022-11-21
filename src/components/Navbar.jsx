import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { CartIcon } from "../icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownCart from "./DropdownCart";

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
      <nav className="bg-darkblue w-full px-8 py-5 text-white">
         <div className="w-full flex justify-between items-center m-0">
            <h2 className="mb-0 tracking-widest text-3xl cursor-pointer">
               <Link to="/" onClick={() => setIsDropdownOpen(false)}>Middy</Link>
            </h2>

            <Dropdown>
               <Dropdown.Toggle>
                  <div className="block relative cursor-pointer" onClick={toggleDropdown}>
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
