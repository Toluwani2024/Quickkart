import React from 'react';
import './CartDrawer.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem } from '../../redux/cartSlice';

const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, i) => sum + i.item.price * i.quantity, 0);

  const increaseQty = (category, item) => {
    dispatch(addItem({ category, item }));
  };

  const decreaseQty = (category, item) => {
    if (item.quantity > 1) {
      dispatch(removeItem({ category, id: item.id }));
    }
  };

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-drawer-header">
        <h3>Your Cart</h3>
        <button onClick={onClose} className="close-btn">✖</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(({ item, category, quantity }) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-thumb" />
                <div className="cart-item-info">
                  <p>{item.name}</p>
                  <p>${item.price} x {quantity} = ${item.price * quantity}</p>
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(category, item)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQty(category, item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">Total: ${total}</div>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
