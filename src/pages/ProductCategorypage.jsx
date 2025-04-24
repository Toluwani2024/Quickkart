import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import products from '../data/products';
import './ProductCategoryPage.css';

const ProductCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const categoryProducts = products[category] || [];

  const handleAddToCart = (product) => {
    dispatch(addItem({ category, item: product }));
  };

  return (
    <div className="category-page">
      <h2>{category.toUpperCase()}</h2>
      <div className="product-grid">
        {categoryProducts.map((product) => (
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

export default ProductCategoryPage;
