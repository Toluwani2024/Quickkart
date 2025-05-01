import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import products from '../../data/products';
     // same here for alias
// import './ProductListingPage.css'; // Optional: uncomment if you have styles

const ProductListingPage = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  console.log("Cart Items:", cartItems);

  const filteredProducts = Object.values(products)
    .flat()
    .filter((product) =>
      product.name.toLowerCase().includes(subcategory.toLowerCase())
    );

  const handleAddToCart = (product) => {
    dispatch(addItem({ category: subcategory, item: product }));
  };

  return (
    <div className="category-page">
      <h2>{subcategory.toUpperCase()}</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
