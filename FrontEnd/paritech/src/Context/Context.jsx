import { createContext, useState } from "react";

export const ProductContext = createContext();
export const CartContext = createContext();
export const WishListContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [wishList, setWishList] = useState([]);

  const checkIsWishList = (prod) => {
    const findProd = wishList.findIndex((ele) => ele.id === prod.id);
    // console.log(findProd, prod.id)
    return findProd;
  };

  const totalPrice = cart.reduce(
    (total, ele) => total + ele.product.price * ele.count,
    0
  );
  
  const totalQuantity = cart.reduce((acc, ele) => acc + ele.count, 0);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const updateAllProducts = (allProds) => {
    setAllProducts(allProds);
  };

  const updateCart = (newProduct) => {
    const existing_product = cart.find(
      (prod) => prod.product.id === newProduct.id
    );

    if (existing_product) {
      const updated_cart = cart.map((ele) =>
        ele.product.id === existing_product.product.id
          ? { ...ele, count: ele.count + 1 }
          : ele
      );
      console.log(updated_cart);
      setCart(updated_cart);
    } else {
      setCart([...cart, { product: newProduct, count: 1 }]);
    }
  };

  // remove products from cart
  const removeFromCart = (remove_product) => {
    console.log(remove_product);
    const filtered_cart = cart.filter(
      (ele) => ele.product.id !== remove_product.product.id
    );
    setCart(filtered_cart);
  };

  //decrease the count of products in the cart
  const decreaseCount = (prod) => {
    const updated_cart = cart
      .map((ele) =>
        ele.product.id === prod.product.id
          ? { ...ele, count: ele.count - 1 }
          : ele
      )
      .filter((item) => item.count > 0); //removing the products with count < 0
    setCart(updated_cart);
  };

  const updateLoading = (newValue) => {
    {
      cart.map((ele, index) => {
        return (
          <article>
            <p className="text-red-600 text-[2rem]">{ele.name}</p>
          </article>
        );
      });
    }
    setLoading(newValue);
  };

  const updateCategories = (newCategories) => {
    setCategories(newCategories);
  };

  const updateWishList = (newProd) => {
    // const existing = wishList.find((ele) => ele.id === newProd.id);
    // if (!existing) {
    setWishList([...wishList, newProd]);
  };

  const removeWishList = (newProd) => {
    const updated_wishList = wishList.filter((ele) => ele.id !== newProd.id);
    setWishList(updated_wishList);
  };

  const toggleWishList = (newProd) => {
    checkIsWishList(newProd);
    const exists = wishList.find((ele) => ele.id === newProd.id);
    if (exists) {
      removeWishList(newProd);
    } else {
      updateWishList(newProd);
    }
  };

  const prod_data = {
    products,
    updateProducts,
    loading,
    updateLoading,
    categories,
    updateCategories,
    allProducts,
    updateAllProducts,
  };

  const cart_data = {
    cart,
    updateCart,
    removeFromCart,
    decreaseCount,
    totalPrice,
    totalQuantity,
  };

  const wishListData = {
    wishList,
    toggleWishList,
    checkIsWishList,
  };
  return (
    <ProductContext.Provider value={prod_data}>
      <CartContext.Provider value={cart_data}>
        <WishListContext.Provider value={wishListData}>
          {children}
        </WishListContext.Provider>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Context;
