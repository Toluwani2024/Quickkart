import React from 'react';
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../redux/cartSlice"; 


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getTotal = () =>
    cartItems.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(({ item, category, quantity }) => (
            <div key={item.id} className="cart-item">
              <p>
                {item.name} - ${item.price} x {quantity} = ${item.price * quantity}
              </p>
              <button onClick={() => dispatch(removeItem({ category, id: item.id }))}>
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ${getTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
