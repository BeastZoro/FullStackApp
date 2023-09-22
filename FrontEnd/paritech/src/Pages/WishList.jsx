import React, { useContext, useState } from "react";
import { CartContext, WishListContext } from "../Context/Context";
import { Link, useParams } from "react-router-dom";

const WishList = () => {
  const { wishList } = useContext(WishListContext);

  if(wishList.length <=0 ){
    return(
      <section className="text-center my-[30vh] text-[2rem] font-medium">
        <h2>No Products added to Wishlist!</h2>
      </section>
    )
  }
  return (
    <section className="min-h-[60vh] my-[30px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] items-center justify-center">
        {wishList.map((ele, index) => {
          return <ProductCard key={index} prod={ele} />;
        })}
      </div>
    </section>
  );
};

export default WishList;

export const ProductCard = ({ prod }) => {
  const { id } = useParams();
  const { toggleWishList, checkIsWishList } = useContext(WishListContext);
  const { updateCart } = useContext(CartContext);
  const [inWishList, setInWishList] = useState(checkIsWishList(prod));

  const toggleWish = () => {
    toggleWishList(prod);
    setInWishList((prev) => !prev);
  };

  return (
    <article className="max-w-fit relative">
      {/* <Link to={`product/${id}`}> */}
        <img src={prod.image} alt={prod.name} />{" "}
      {/* </Link> */}
      <div className="text-center text-[1.3rem] font-bold text-gray-500 bg-black py-[20px]">
        <p>{prod.name}</p>
        <p>${prod.price}</p>
        <button onClick={() => updateCart(prod)}>Add to Cart</button>
      </div>
      <p
        className="absolute top-[5%] right-[10%] cursor-pointer"
        onClick={() => toggleWish(prod)}
      >
        <i
          className={`${
            inWishList && "text-red-500"
          } text-[1.5rem] fa-solid fa-heart`}
        ></i>
      </p>
    </article>
  );
};
