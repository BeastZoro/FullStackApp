import { useEffect, useState } from "react";
import Topbar from "./components/navbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Midbanner from "./components/midbanner/Midbanner";
import Products from "./components/products/Products";

function App() {
  return (
    <main className="container mx-auto">
      <Topbar />
      <Navbar />
      <Banner />
      <Midbanner />
      <Products />
    </main>
  );
}

export default App;

// const [products, setProducts] = useState([]);


