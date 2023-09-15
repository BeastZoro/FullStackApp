import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/Context";

const Products = () => {
  const {
    products,
    updateProducts,
    categories,
    updateCategories,
    allProducts,
    updateAllProducts,
    loading, updateLoading
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
    updateLoading(false)
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


  if(loading){
    return <h1>Loading.....</h1>
  }

  if (products) {
    return (
      <section>
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
              <article
                key={index}
                className="product-card md:max-h-[400px] relative shadow-md shadow-gray-500 cursor-pointer"
              >
                <img
                  className="w-full object-cover h-[80%]"
                  src={prod.image}
                  alt={prod.name}
                />
                <div className="flex flex-col gap-[10px] p-[15px]">
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
              </article>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Products;
