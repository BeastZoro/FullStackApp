import React, { useContext } from "react";
import { ProductContext } from "../../Context/Context";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Product from "../products/Product";
import Loader from "../Loader";

const HotItems = () => {
  const { allProducts, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <section className="min-h-[30vh] flex items-center justify-center">
        <h1 className="text-center text-[1.5rem] font-semibold">
          <Loader />
        </h1>
      </section>
    );
  }

  return (
    <section className="mx-auto px-[15px] max-w-[1300px] min-h-[400px] ">
      <h1 className="sec_title">Hot Items</h1>
      <div className="flex my-[30px]">
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            gap: "15px",
            pagination: true,
            arrows: true,
            drag: "free",
          }}
        >
          {allProducts.map((prod, index) => {
            return (
              <SplideSlide key={index}>
                <Product prod={prod} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default HotItems;
