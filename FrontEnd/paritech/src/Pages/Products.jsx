import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import { ProductCard } from "./WishList";

const Products = () => {

    const {products} = useContext(ProductContext)
    console.log(products)
  return (
    <section className="px-[20px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] my-[40px]">
      {
        products.map((ele, index) =>{
            return <ProductCard key={index} prod={ele}/>
        })
      }
    </section>
  );
};

export default Products;
