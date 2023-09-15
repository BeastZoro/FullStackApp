import { createContext, useState } from "react";

export const ProductContext = createContext()
export const CartContext = createContext()


const Context = ({children}) => {

  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts]  = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])


  const updateProducts = (newProducts) =>{
    setProducts(newProducts)
  }

  const updateAllProducts = (allProds) =>{
    setAllProducts(allProds)
  }

  const updateCart = (newProducts) =>{
    setCart(newProducts)
  }

  const updateLoading = (newValue) =>{
    setLoading(newValue)
  }

  const updateCategories = (newCategories) =>{
    setCategories(newCategories)
  }


  const prod_data = {products, updateProducts, loading, updateLoading, categories, updateCategories, allProducts, updateAllProducts}
  const cart_data = {cart, updateCart}

  return (
    <ProductContext.Provider value={prod_data}>
      <CartContext.Provider value={cart_data}>
        {children}
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default Context