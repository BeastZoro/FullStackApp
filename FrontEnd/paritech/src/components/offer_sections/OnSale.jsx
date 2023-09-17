import React from "react";
import OfferCard from "./OfferCard";


const OnSale = ({ title, images }) => { 
  const [img1, img2, img3] = images
  return (
    <article>
      <h2 className="sale_title">{title}</h2>
      <div className="flex flex-col">
        <OfferCard desc={"Lorem ipsum dolor sit amet."} image={img1}/>
        <OfferCard desc={"Lorem ipsum dolor sit amet."} image={img2}/>
        <OfferCard desc={"Lorem ipsum dolor sit amet."} image={img3}/>
      </div>
    </article>
  );
};

export default OnSale;
