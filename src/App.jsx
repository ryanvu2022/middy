import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import icons from "./products/icons";
import { CartState } from "./context/Context";

const App = () => {
  const { state: { isLoading } } = CartState();

  if (isLoading) {
    return <img src={icons.spinner} className="w-16 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>
 }

  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
