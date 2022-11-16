import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ item }) => {

  const { state: { cart }, dispatch } = CartState();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item
    })
  }

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item
    })
  }

  return (    
    <div className="shadow-2xl sm:w-64 ss:w-72 w-88 m-2.5 p-4 rounded-md bg-white cursor-pointer">
      <img src={item.image} alt={item.name}/>
      <div>
        <h4>{item.name}</h4>
        <h5>${item.price}</h5>
        {
          item.fastDelivery
            ? <div>Fast Delivery</div>
            : <div>5 Days Delivery</div>
        }
        <div className="flex flex-row">
          <Rating rating={item.ratings}/>
        </div> 
      </div>
      <div>
        {cart.some(p => p.id === item.id) && (
          <button className="transition-all duration-300 ease-linear bg-red-500 hover:bg-red-700 text-white py-2 px-4 mr-2 my-2 rounded-md" onClick={removeFromCart}>
            Remove from Cart
          </button>
        )}
        {!cart.some(p => p.id === item.id) && item.inStock && (
          <button className="transition-all duration-300 ease-linear bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 my-2 rounded-md" onClick={addToCart}>
            Add to Cart
          </button>
        )}
        {!item.inStock && (
          <button className="transition-all duration-300 ease-linear bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 mr-2 my-2 rounded-md" disabled>
            Out of Stock
          </button>
        )}
        
      </div>
      
    </div>
  )
}

export default SingleProduct;