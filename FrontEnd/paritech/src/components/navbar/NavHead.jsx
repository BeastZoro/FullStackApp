import React, { useContext } from "react";
import logo from "../../assets/Images/logo/logo.png";
import { CartContext, ProductContext, WishListContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const NavHead = () => {
  const { categories, updateProducts, allProducts } =
    useContext(ProductContext);

  const { cart } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);

  const totalQuantity = cart.reduce((acc, ele) => acc + ele.count, 0);
  const totalWishItems = wishList.length

  const handleCategory = (cate) => {
    console.log(cate);
    if (cate === "all") {
      updateProducts(allProducts);
    } else {
      const CateProds = allProducts.filter((prod) => prod.categories === cate);
      updateProducts(CateProds);
    }
  };

  return (
    <section className="nav_head flex items-center justify-between my-4 px-3 md:px-0">
      <Link to="/">
        <div className="nav_logo w-[200px]">
          <img src={logo} alt="logo" className="object-cover w-full" />
        </div>
      </Link>

      <div className="hidden search_wrap md:flex border-2 border-gray-300 rounded-lg overflow-hidden">
        <select className="category px-[20px] bg-transparent outline-none text-gray-500">
          {categories.map((cate, index) => {
            return (
              <option
                key={index}
                value={cate}
                className="capitalize"
                onClick={() => handleCategory(cate)}
              >
                {cate}
              </option>
            );
          })}
        </select>

        <div className="search_bar flex items-center border-l-[2px] border-gray-300">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search products here..."
            className="border-none outline-none px-[15px]"
          />
          <p className="bg-black text-white px-[15px] py-[8px] cursor-pointer text-sm">
            <i className="fa-solid fa-magnifying-glass"></i>
          </p>
        </div>
      </div>

      <div className="profile flex items-center gap-[10px] lg:gap-[20px]">
        <Link to="wishlist">
          <Badge color="secondary" badgeContent={totalWishItems} showZero>
            <i className="text-[1.2rem]  fa-regular fa-heart"></i>
          </Badge>
        </Link>
        <p className="cursor-pointer">
          <i className="text-[1.2rem]  fa-regular fa-user"></i>
        </p>
        <Link to="cart">
          <Badge color="secondary" badgeContent={totalQuantity} showZero>
            <i className="text-[1.2rem] fa-solid fa-bag-shopping"></i>
          </Badge>
        </Link>
      </div>
    </section>
  );
};

export default NavHead;
