import React,{ useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  // let items = [];

  const [items,updateItems] = useState([])

  const addItemToCartHandler = (item) => {
    // cartContext.items.push(item);
    updateItems([...items,item])
    console.log('Inside addItemToCartHandler',cartContext)
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    // totalAmount:0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log('Inside CartContext.Proider',cartContext)}
        {props.children}
      </CartContext.Provider>
    );
};

export default CartProvider;