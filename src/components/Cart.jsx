import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import Policy from './Policy';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { OPEN_MODAL, RESET_CART } from '../constants/actionTypes';

const Cart = () => { 
  const { state: { cart }, dispatch, modalState: { isOpen }, modalDispatch } = CartState();

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
    setSubtotal(total);
  }, [cart]);

  useEffect(() => {
    setTax(subtotal * 0.13);
  }, [subtotal]);

  useEffect(() => {
    setTotal(subtotal + tax);
  },[subtotal, tax]);

  return (
    <section className="min-h-screen mx-12 my-0 px-0 py-10 max-w-7xl bg-white">
      {isOpen && <Modal />}
      <header>
        <h2 className="text-center text-black mb-12 text-4xl font-medium capitalize">Your Cart</h2>
      </header>
      {cart.length > 0 ? 
      <>     
          {cart.map(item => (
            <CartItem key={item._id} item={item}/>         
          ))}
        
        <footer className="flex flex-col">
          <hr className="border border-transparent bg-black sm:mx-12"/>
          <div className="text-center mt-4">
            <h4 className="capitalize flex justify-between text-darkblue font-medium text-xl mb-2 tracking-wider sm:mx-12">
              Subtotal <span>${subtotal.toFixed(2)}</span>
            </h4>
            <h4 className="capitalize flex justify-between text-darkblue font-medium text-xl mb-2 tracking-wider sm:mx-12">
              Tax (13%) <span>${tax.toFixed(2)}</span>
            </h4>
            <h4 className="capitalize flex justify-between text-darkblue font-medium text-xl mb-2 tracking-wider sm:mx-12">
              Total <span>${total.toFixed(2)}</span>
            </h4>
          </div>

          <Policy />
          
          <button className="transition-all duration-300 ease-linear text-darkred text-xl mt-4 items-center font-medium rounded bg-white border-2 border-solid border-darkred ss:w-2/5 w-52 mx-auto py-2 tracking-widest hover:text-white hover:bg-darkred"
          onClick={() => modalDispatch({ type: OPEN_MODAL })}>
            Clear Cart
          </button>

          <button className="transition-all duration-300 ease-linear mt-4 text-white text-xl items-center font-medium rounded bg-darkblue hover:bg-blue-500 ss:w-2/5 w-52 mx-auto py-3 tracking-widest" onClick={() => {
            alert("Thank you for your order!");
            dispatch({ type: RESET_CART })
          }}>
            Checkout
          </button>
        </footer>
      </> : (
        <div className="flex flex-col gap-10">
          <div className="text-center font-medium tracking-wider text-xl -mt-6">is currently empty</div>
          <Link to="/" className="transition-all duration-300 ease-linear text-center text-white text-xl items-center font-medium rounded bg-darkblue hover:bg-blue-500 ss:w-2/5 w-64 mx-auto py-3 tracking-widest">
            Start shopping
          </Link>                    
        </div>
        
      )}
      
    </section>    
  )
}

export default Cart;