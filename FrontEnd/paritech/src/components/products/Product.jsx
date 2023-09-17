import React from "react";

const Product = ({prod}) => {
  return (
    <article
      className="product-card max-h-[500px] relative shadow-md shadow-gray-500 cursor-pointer"
    >
      <img
        className="w-full object-cover h-[80%]"
        src={prod.image}
        alt={prod.name}
      />
      <div className="flex flex-col justify-center md:gap-[3px] px-[15px] py-[10px]">
        <p className="font-medium">{prod.name}</p>
        <p>${prod.price}</p>
      </div>

      <div className="overlay text-white bg-gray-400 flex items-center justify-between px-[20px]">
        <p className="uppercase text-sm lg:text-base font-medium">
          add to cart
        </p>
        <div className="flex gap-[20px]">
          <p className="cursor-pointer ">
            <i className="fa-regular fa-eye"></i>
          </p>
          <p className="cursor-pointer">
            <i className="fa-solid fa-chart-simple"></i>
          </p>
        </div>
      </div>
      {prod.offer && (
        <p className="offer uppercase absolute top-[6%] right-[8%] bg-[#EB1B3E] px-[10px] py-[8px] rounded-full text-white font-medium">
          {prod.offer}
        </p>
      )}
    </article>
  );
};

export default Product;
