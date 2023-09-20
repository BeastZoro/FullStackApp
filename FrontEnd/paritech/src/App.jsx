import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/navbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import ProductView from "./Pages/ProductView";

function App() {
  return (
    <main className="container mx-auto">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
