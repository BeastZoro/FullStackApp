import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Context";
import { Button, ButtonWhite } from "../components/Buttons/Button";

const Cart = () => {
  return (
    <section className="min-h-[100vh] flex flex-wrap gap-[30px] justify-center my-[30px]">
      <CheckOut />
      <ShopCart />
    </section>
  );
};

export default Cart;

const ShopCart = () => {
  const { cart, removeFromCart, updateCart, decreaseCount, totalPrice } =
    useContext(CartContext);

  const [ToggleCart, setToggleCart] = useState(true);
  const [viewCart, setViewCart] = useState(false)

  const handleViewCart = () =>{
    setViewCart(!viewCart)
    console.log(viewCart)
  }


  if (!ToggleCart) {
    return (
      <button
        className="bg-slate-300 px-[30px] py-[15px] text-[1.3rem]"
        onClick={() => setToggleCart(!ToggleCart)}
      >
        Show Cart
      </button>
    );
  }

  return (
    <article className={`shop_cart max-w-fit w-full md:w-fit`}>
      <div className="cart_title flex justify-between items-center px-[20px]">
        <h2 className="font-semibold text-[1.2rem]">Shopping Cart</h2>
        <p className="text-[1.4rem]" onClick={() => setToggleCart(!ToggleCart)}>
          <i className="fa-solid fa-xmark cursor-pointer"></i>
        </p>
      </div>

      <hr />

      <article className={`${viewCart ? 'max-h-fit' : 'max-h-[470px]'} overflow-hidden  border rounded-lg px-[30px]`}>
        {cart.map((ele, index) => {
          return (
            <div key={index} className="flex gap-[20px] items-center my-[10px]">
              <div className="flex flex-wrap items-center gap-[10px]">
                <img
                  src={ele.product.image}
                  alt={ele.product.name}
                  className="w-[100px] object-cover"
                />
                <div className="info">
                  <p className="font-medium">{ele.product.name}</p>
                  <div className="flex gap-[10px]">
                    <p>Brown</p>
                    <p>XL</p>
                    <p onClick={() => removeFromCart(ele)}>
                      <i className="fa-solid fa-trash text-red-500 cursor-pointer"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="cart_count flex items-center gap-[20px]">
                <button
                  onClick={() => decreaseCount(ele.product)}
                  className="text-[1.5rem] bg-slate-200 px-[10px] rounded-lg"
                >
                  -
                </button>
                <p>{ele.count}</p>
                <button
                  onClick={() => updateCart(ele.product)}
                  className="text-[1.5rem] bg-slate-200 px-[10px] rounded-lg"
                >
                  +
                </button>
              </div>
              <p className="font-semibold">${ele.product.price}</p>
            </div>
          );
        })}
      </article>

      <div className="total_price flex justify-between items-center px-[30px] py-[10px] font-medium">
        <h2 className="text-[1.2rem]">Subtotal Price :</h2>
        <p>${Math.round(totalPrice)}.00</p>
      </div>

      <div className="flex justify-start gap-[30px]">
        <ButtonWhite value={"viewcart"} action={handleViewCart}/>
        <Button value={"checkout"} />
      </div>
    </article>
  );
};


const CheckOut = () => {
  const { cart, removeFromCart, updateCart, decreaseCount, totalPrice } =
    useContext(CartContext);
  return (
    <article className="w-full md:w-[900px] px-[20px]">
      <div className="titles flex gap-[30px] justify-between py-[10px]">
        <p>Products</p>
        <div className="flex gap-[20px] md:gap-[40px]">
          <p>Quantity</p>
          <p>Price</p>
          <p>Action</p>
        </div>
      </div>

      <hr className="border border-gray-400" />
      <div className="cart_prods">
        {cart.map((ele, index) => {
          return (
            <article key={index} className="flex justify-between  gap-[30px] items-center my-[10px]">
              <div className="flex flex-wrap items-center gap-[10px]">
                <img
                  src={ele.product.image}
                  alt={ele.product.name}
                  className="w-[100px] object-cover"
                />
                <div className="info">
                  <p className="font-medium">{ele.product.name}</p>
                  <div className="flex gap-[10px]">
                    <p>Brown</p>
                    <p>XL</p>
                  </div>
                </div>
              </div>
              <div className="prod_details flex gap-[20px] md:gap-[50px]">
                <div className="cart_count flex items-center gap-[20px]">
                  <button
                    onClick={() => decreaseCount(ele.product)}
                    className="text-[1.5rem] bg-slate-200 px-[10px] rounded-lg"
                  >
                    -
                  </button>
                  <p>{ele.count}</p>
                  <button
                    onClick={() => updateCart(ele.product)}
                    className="text-[1.5rem] bg-slate-200 px-[10px] rounded-lg"
                  >
                    +
                  </button>
                </div>
                <p>${ele.product.price}</p>
                <p onClick={() => removeFromCart(ele.product)}>
                  <i className="fa-solid fa-trash text-red-500 cursor-pointer"></i>
                </p>
              </div>
            </article>
          );
        })}


        <div className="flex justify-between gap-[30px] md:gap-[50px] items-center">
          <div>
            <p className="text-gray-500">Apply Coupon to get discount</p>
            <div>
              <form className="flex gap-[10px] flex-wrap my-[10px]" onSubmit={(e) => e.preventDefault() }>
                <input type="text" placeholder="coupon code" className="border-2 border-gray-500 py-[4px] indent-[5px] outline-none rounded-md font-semibold"/>
                <Button value={'apply'}/>
              </form>
            </div>
          </div>

          {/* total prices in checkout */}
          <div>
            <p className="text-gray-600 flex flex-wrap gap-[10px]">Subtotal Price: <span className="font-medium">${Math.round(totalPrice)}</span></p>
            <p className="text-gray-600 flex flex-wrap gap-[10px]">Shipping Cost(+): <span className="font-medium">$10.50</span></p>
            <p className="text-gray-600 flex flex-wrap gap-[10px]">Discount(-): <span className="font-medium">$10.50</span></p>
            <p className="text-gray-600 flex flex-wrap gap-[10px]">Total Payable: <span className="font-medium">{`${totalPrice - 10.50 <=0 ? '0' : `$${Math.round(totalPrice)}`}`}</span></p>
          </div>
        </div>

        <div className="flex justify-between gap-[30px] my-[10px]">
          <ButtonWhite value={"continue shopping"} />
          <Button value={"pay now"} />
        </div>
      </div>
    </article>
  );
};
