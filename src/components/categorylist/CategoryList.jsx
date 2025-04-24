import React from 'react';
import './categoryList.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import products from "../../data/products";
import { useSelector } from 'react-redux'; 


const CategoryList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get items from cart state
console.log("Cart Items:", cartItems); // Log to see live updates


  const handleAdd = (category, product) => {
    dispatch(addItem({ category, item: product }));
  };

  return (
    <div id="categories" className="categories">
      {Object.keys(products).map((category) => {
        const categoryData = products[category];
<h4>🛒 Cart Items: {cartItems.length}</h4>

        return (
          <div key={category} className="category">
            <h2>{category.toUpperCase()}</h2>

            {Array.isArray(categoryData) ? (
              // Flat category like books, clothes, etc.
              <div className="product-list">
                {categoryData.map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <p>{product.name} - ${product.price}</p>
                    <button onClick={() => handleAdd(category, product)}>Add</button>
                  </div>
                ))}
              </div>
            ) : (
              // Nested category like gadgets
              Object.entries(categoryData).map(([subcategory, items]) => (
                <div key={subcategory} className="subcategory-block">
                  <h3>{subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}</h3>
                  <div className="product-list">
                    {items.map((product) => (
                      <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} className="product-img" />
                        <p>{product.name} - ${product.price}</p>
                        <button onClick={() => handleAdd(subcategory, product)}>Add</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
