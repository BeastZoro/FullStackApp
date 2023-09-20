import React, { useContext, useState } from "react";
import { CartContext, WishListContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Product = ({ prod }) => {
  const { updateCart } = useContext(CartContext);
  const { toggleWishList, checkIsWishList } = useContext(WishListContext);
  const [inWishList, setInWishList] = useState(checkIsWishList(prod));

  const toggleWish = () => {
    toggleWishList(prod);
    setInWishList((prev) => !prev);
  };

  return (
    <article className="product-card max-h-[500px] relative shadow-md shadow-gray-500 cursor-pointer">
      <Link to={`product/${prod.id}`}>
        <img
          className="w-full object-cover h-[80%]"
          src={prod.image}
          alt={prod.name}
        />
      </Link>
      <div className="flex flex-col justify-center md:gap-[3px] px-[15px] py-[10px]">
        <p className="font-medium">{prod.name}</p>
        <p>${prod.price}</p>
      </div>

      <div className="overlay text-white bg-gray-400 flex items-center justify-between px-[20px]">
        <button
          className="hidden md:block uppercase text-sm lg:text-base font-medium text-left"
          onClick={() => updateCart(prod)}
        >
          add to cart
        </button>

        <button
          className="block md:hidden text-[1rem] lg:text-base font-medium text-left"
          onClick={() => updateCart(prod)}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </button>

        <div className="flex gap-[20px]">
          <p className="cursor-pointer ">
            <i className="fa-regular fa-eye"></i>
          </p>
          <p className="cursor-pointer" onClick={toggleWish}>
            <i
              className={`${inWishList && "text-red-500"} fa-solid fa-heart`}
            ></i>
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
