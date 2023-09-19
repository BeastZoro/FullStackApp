import React from "react";
import Banner from '../components/banner/Banner'
import Midbanner from "../components/midbanner/Midbanner";
import Products from "../components/products/Products";
import Offers from "../components/offers/Offers";
import HotItems from "../components/hot_Items/HotItems";
import OfferComp from "../components/offer_sections/OfferComp";
import Limited from "../components/limited_offer/Limited";
import Blogs from "../components/blogs/Blogs";
import Options from "../components/options/Options";
import NewsLetter from "../components/newsletter/NewsLetter";

const Home = () => {
  return (
    <main>
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
    </main>
  );
};

export default Home;
