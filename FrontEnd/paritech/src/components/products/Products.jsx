import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/Context";
import Product from "./Product";

const Products = () => {
  const {
    products,
    updateProducts,
    categories,
    updateCategories,
    allProducts,
    updateAllProducts,
    loading,
    updateLoading,
  } = useContext(ProductContext);

  const [activeCate, setActiveCate] = useState("all");

  const handleActiveCate = (cate) => {
    setActiveCate(cate);
    if (cate === "all") {
      updateProducts(allProducts);
    } else {
      const CateProds = allProducts.filter((prod) => prod.categories === cate);
      updateProducts(CateProds);
    }
  };

  const fetchProducts = async () => {
    const response = await fetch("http://127.0.0.1:8000/products/");
    const data = await response.json();
    updateProducts(data);
    updateAllProducts(data);
    updateLoading(false);
    const allCat = ["all", ...new Set(data.map((ele) => ele.categories))];
    updateCategories(allCat);
  };

  useEffect(() => {
    try {
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (loading) {
    return <h1 className="text-center text-[1.5rem] font-semibold">Loading.....</h1>;
  }

  if (products) {
    return (
      <section>
        <h1 className='sec_title'>
          Trending Items
        </h1>
        <ul className="flex justify-center my-[30px] gap-[10px] md:gap-[20px] text-xs md:text-base">
          {categories.map((cate, index) => {
            return (
              <li
                key={index}
                onClick={() => handleActiveCate(cate)}
                className={`px-1 md:px-3 cursor-pointer rounded-lg ${
                  activeCate === cate && "active_category"
                } `}
              >
                {cate.toUpperCase()}
              </li>
            );
          })}
        </ul>

        <div className="prod_grid px-[15px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          {products.map((prod, index) => {
            return (
             <Product key={index} prod={prod}/>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Products;
