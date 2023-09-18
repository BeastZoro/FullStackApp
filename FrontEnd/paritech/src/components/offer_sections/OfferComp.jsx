import React, { useEffect, useState } from "react";
import OnSale from "./OnSale";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import image1 from "../../assets/Images/list/shop-list1.jpg";
import image2 from "../../assets/Images/list/shop-list2.jpg";
import image3 from "../../assets/Images/list/shop-list3.jpg";
import image4 from "../../assets/Images/list/shop-list4.jpg";
import image5 from "../../assets/Images/list/shop-list5.jpg";
import image6 from "../../assets/Images/list/shop-list6.jpg";
import image7 from "../../assets/Images/list/shop-list7.jpg";
import image8 from "../../assets/Images/list/shop-list8.jpg";
import image9 from "../../assets/Images/list/shop-list9.jpg";

const OfferComp = () => {
  const on_sale_images = [image1, image2, image3];
  const best_seller_images = [image4, image5, image6];
  const top_viewed_images = [image7, image8, image9];

  const [Window_w, setWindow_w] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindow_w(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  return (
    <section className=" my-[40px]">
      {Window_w <= 768 ? 
      
      (
        <article className="flex items-center justify-center gap-[20px] px-[20px]">
          <Splide
            options={{
              rewind: true,
              perPage: 1,
              gap: "15px",
              pagination: true,
              arrows: true,
              drag: "free",
            }}
          >
            <SplideSlide>
              <OnSale title={"On sale"} images={on_sale_images} />{" "}
            </SplideSlide>
            <SplideSlide>
              <OnSale title={"Best seller"} images={best_seller_images} />{" "}
            </SplideSlide>
            <SplideSlide>
              {" "}
              <OnSale title={"Top viewed"} images={top_viewed_images} />{" "}
            </SplideSlide>
          </Splide>
        </article>
      ) :
      
      (
        <article className="flex items-center justify-center gap-[20px] ">
          <OnSale title={"On sale"} images={on_sale_images} />
          <OnSale title={"Best seller"} images={best_seller_images} />
          <OnSale title={"Top viewed"} images={top_viewed_images} />
        </article>
      )}
    </section>
  );
};

export default OfferComp;
