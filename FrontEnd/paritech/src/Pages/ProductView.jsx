import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext, ProductContext } from "../Context/Context";

const ProductView = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);

  console.log(products);
  const FilteredProd = products.find((ele) => ele.id === Number(id));

  if (!FilteredProd) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <h2 className="text-[2rem]">Product not Found!</h2>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] my-[30px] flex flex-wrap  justify-around w-full">
      <ProductLeftView FilteredProd={FilteredProd} />
      <ProductRightView />
    </section>
  );
};

export default ProductView;

const ProductLeftView = ({ FilteredProd }) => {
  const { name, image, desc, price } = FilteredProd;
  const [selectedImg, setSelectedImg] = useState(null);
  const [color, setColor] = useState("");
  const { cart, removeFromCart, updateCart, decreaseCount } =
    useContext(CartContext);

  const handleSelectedImg = (id) => {
    setSelectedImg(id);
  };

  const totalQuantity = cart.find((ele) => ele.product.id === FilteredProd.id);

  console.log(totalQuantity);
  const handleSelectedColor = (col) => {
    setColor(col);
  };
  const divs = [
    { id: 1, text: "Lorem", color: "red" },
    { id: 2, text: "Lorem", color: "green" },
    { id: 3, text: "Lorem", color: "blue" },
    ,
  ];

  return (
    <article className="max-w-[500px] w-full">
      <h2 className="text-[1.7rem] font-semibold">{name}</h2>
      <div>
        <p>select your product:</p>

        <div>
          <div className="grid grid-cols-3 max-w-[300px] gap-[20px]">
            {divs.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={`text-center ${
                    selectedImg === ele.id &&
                    "selectedProd shadow-md shadow-gray-500"
                  }`}
                  onClick={() => handleSelectedImg(ele.id)}
                >
                  <div>
                    <img
                      src={image}
                      alt=""
                      className="cursor-pointer rounded-md my-[10px]"
                    />
                    <p className="my-[5px]">{ele.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-[20px] px-[10px] flex flex-wrap gap-[20px] justify-between">
            <div>
              <p className="capitalize">
                select color : <span className="font-bold">{color} </span>
              </p>
              <div className="flex gap-[10px] my-[5px]">
                {divs.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        color === ele.color &&
                        "selectedProd shadow-md shadow-gray-500"
                      } bg-${
                        ele.color
                      }-600 w-[20px] h-[20px] rounded-full cursor-pointer`}
                      onClick={() => handleSelectedColor(ele.color)}
                    ></div>
                  );
                })}
              </div>
            </div>

            {/* cart buttons */}
            <div className="flex gap-[10px] items-center">
              <button
                className="max-h-[40px] text-[1.5rem] bg-slate-200 px-[10px] rounded-lg"
                onClick={() => decreaseCount(FilteredProd)}
              >
                -
              </button>
              <p className="font-semibold">
                {totalQuantity ? totalQuantity.count : 0}
              </p>
              <button
                className="max-h-[40px] text-[1.5rem] bg-slate-200 px-[10px] rounded-lg"
                onClick={() => updateCart(FilteredProd)}
              >
                +
              </button>
            </div>

            <div>
              <select
                name=""
                id=""
                className="py-[10px] px-[10px] bg-transparent border border-gray-500 rounded-sm"
              >
                <option value="Select shipping country--">
                  --Select shipping country--
                </option>
                <option value="India--">--India--</option>
                <option value="Japan--">--Japan--</option>
                <option value="Austrailia--">--Austrailia--</option>
                <option value="England--">--England--</option>
                <option value="America--">--America--</option>
              </select>
            </div>
          </div>

          {/* Product Price and other info */}
          <div className="px-[10px]">
            <p>Price:</p>
            <h2 className="text-[2.5rem] font-medium">
              ${FilteredProd.price}{" "}
              <span className="line-through text-[2rem] text-gray-400">
                $600
              </span>
            </h2>
            <div className="flex gap-[20px]">
              <button
                className="text-white py-[6px] px-[8px] bg-blue-600 rounded-md uppercase"
                onClick={() => updateCart(FilteredProd)}
              >
                <i class="fa-solid fa-cart-shopping mx-[5px]"></i>add to cart
              </button>

              <button className="text-white py-[6px] px-[8px] bg-pink-600 rounded-md uppercase">
                <i class="fa-solid fa-cart-shopping mx-[5px]"></i>buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ProductRightView = () => {
  const ProdImages = [1, 2, 3, 4, 5];
  const [selectedImg, setSelectedImg] = useState(ProdImages[0]);

  const selectedImage = (image) => {
    setSelectedImg(image);
  };
  return (
    <article className="flex justify-center items-center my-[30px] w-[500px] max-w-[500px] max-h-[400px] ">
      <div className="flex justify-center items-center flex-1 h-full">
        <p className="text-[4rem]">{selectedImg}</p>
      </div>
      <div className="flex flex-col gap-[10px]">
        {ProdImages.map((ele, index) => {
          return (
            <p
              key={index}
              className={`px-[30px] py-[20px] border max-w-fit cursor-pointer rounded-md ${selectedImg === ele && 'selectedProd shadow-md shadow-gray-500'}`}
              onClick={() => selectedImage(ele)}
            >
              {ele}
            </p>
          );
        })}
      </div>
    </article>
  );
};
