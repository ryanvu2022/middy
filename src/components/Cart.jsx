import React, { useState, useEffect } from 'react';
import { CartState } from '../context/Context';
import CartItem from './CartItem';

const Cart = () => { 
  const { state: { cart }, dispatch } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
    setTotal(total);
  }, [cart])

  return (
    <section className="min-h-screen w-[90vw] mx-auto my-0 px-0 py-10 max-w-4xl">
      <header>
        <h2 className="text-center text-darkblue mb-12 text-4xl font-medium capitalize">Your Cart</h2>
      </header>
      {cart.length > 0 ? 
      <>     
          {cart.map(item => (
            <CartItem item={item}/>         
          ))}
        
        <footer className="flex flex-col">
          <hr className="border border-transparent bg-darkblue"/>
          <div className="text-center mt-4">
            <h4 className="capitalize flex justify-between text-darkblue font-medium text-xl">
              Total <span>${total}</span>
            </h4>
          </div>
          <button className="transition-all duration-300 ease-linear mt-4 text-white text-xl items-center font-medium rounded bg-darkblue w-2/5 mx-auto py-2 tracking-wider" onClick={() => {
            alert("Thank you for your order!");
            dispatch({ type: "RESET_CART"})
          }}>
            Checkout
          </button>
        </footer>
      </> : (
        <div>
          <div className="text-center font-medium tracking-wider text-xl text-darkblue">is currently empty</div>         
        </div>
        
      )}
      
    </section>    
  )
}

export default Cart;