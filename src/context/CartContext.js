import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
    if(!isInCart) {
        
        setTotalPrice(totalPrice + product.price)
        return setCartListItems(cartListItems => [...cartListItems, product])
    }
    
}
const deleteProduct = (product) => {
  // console.log("Producto a eliminar:", product)
  setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
  setTotalPrice(totalPrice - product.price)
}
  const data = {
    cartListItems,
    addToCart,
    totalPrice,
    deleteProduct
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
