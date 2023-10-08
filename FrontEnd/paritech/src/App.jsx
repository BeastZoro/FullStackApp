import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/navbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import ProductView from "./Pages/ProductView";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Location from "./Pages/Location";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <main className="container mx-auto">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="location" element={<Location />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
