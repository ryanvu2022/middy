import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

const App = () => {
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
