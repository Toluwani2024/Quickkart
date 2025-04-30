import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.jpg';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CartDrawer from '../cart/CartDrawer';

const Header = () => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false); 

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="QuickKart Logo" className="logo" />
        <h1>QuicKart</h1>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search products..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      <a href="#" className="returns-orders">Returns & Orders</a>

      <div
        className="cart-section"
        onClick={() => setShowCartDropdown(!showCartDropdown)}
      >
        <FaShoppingCart className="icon" />
        {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}

        {showCartDropdown && (
          <div className="cart-dropdown">
            {cartItems.length > 0 ? (
              <>
                {cartItems.map(({ item, quantity }) => (
                  <div key={item.id} className="cart-preview-item">
                    <p>{item.name} x {quantity}</p>
                  </div>
                ))}
                {/*  Button to open the Drawer */}
                <button
                  className="go-to-cart-button"
                  onClick={() => {
                    setCartOpen(true);
                    setShowCartDropdown(false); // close dropdown when drawer opens
                  }}
                >
                  View Cart
                </button>
              </>
            ) : (
              <p>No items in cart</p>
            )}
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

      <div
        className="user-section"
        onClick={() => setShowUserDropdown(!showUserDropdown)}
      >
        <FaUserCircle className="icon" />
        {showUserDropdown && (
          <div className="user-dropdown">
            <a href="#">Account</a>
            <a href="#">Orders</a>
            <a href="#">Watchlist</a>
            <a href="#">Settings</a>
            <a href="#">Site Community</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
