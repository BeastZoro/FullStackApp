import React, { useContext } from "react";
import logo from "../../assets/Images/logo/logo.png";
import { ProductContext } from "../../Context/Context";

const NavHead = () => {
  const { categories, updateProducts, allProducts } = useContext(ProductContext);

  const handleCategory = (cate) =>{
    console.log(cate)
    if (cate === "all") {
      updateProducts(allProducts);
    } else {
      const CateProds = allProducts.filter((prod) => prod.categories === cate);
      updateProducts(CateProds);
    }
  }
  
  return (
    <section className="nav_head flex items-center justify-between my-4 px-3 md:px-0">
      <div className="nav_logo w-[200px]">
        <img src={logo} alt="logo" className="object-cover w-full" />
      </div>

      <div className="hidden search_wrap md:flex border-2 border-gray-300 rounded-lg overflow-hidden">
        <select className="category px-[20px] bg-transparent outline-none text-gray-500">
          {categories.map((cate, index) => {
            return (
              <option key={index} value={cate} className="capitalize" onClick={() =>handleCategory(cate)}>
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
        <p className="cursor-pointer">
          <i className="fa-regular fa-heart"></i>
        </p>
        <p className="cursor-pointer">
          <i className="fa-regular fa-user"></i>
        </p>
        <p className="cursor-pointer">
          <i className="fa-solid fa-bag-shopping"></i>
        </p>
      </div>
    </section>
  );
};

export default NavHead;
