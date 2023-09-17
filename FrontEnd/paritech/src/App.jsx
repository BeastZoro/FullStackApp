import { useEffect, useState } from "react";
import Topbar from "./components/navbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Midbanner from "./components/midbanner/Midbanner";
import Products from "./components/products/Products";
import Offers from "./components/offers/Offers";
import HotItems from "./components/hot_Items/HotItems";
import OfferComp from "./components/offer_sections/OfferComp";
import Limited from "./components/limited_offer/Limited";
import Blogs from "./components/blogs/Blogs";
import Options from "./components/options/Options";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main className="container mx-auto">
      <Topbar />
      <Navbar />
      <Banner />
      <Midbanner />
      <Products />
      <Offers />
      <HotItems />
      <OfferComp />
      <Limited />
      <Blogs />
      <Options />
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;
