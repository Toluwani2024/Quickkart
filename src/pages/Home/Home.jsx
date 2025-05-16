import React, { useState } from 'react'; 
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import CategoryList from '../../components/CategoryList/CategoryList';
import '../../components/CategoryList/CategoryList.css';

const Home = () => {
  const [showProducts, setShowProducts] = useState(false); // new state

  return (
    <>
      <Header /> 
      <Hero onShopClick={() => setShowProducts(true)} />

      {showProducts && (
        <main id="categories" className="product-section">
          <CategoryList />
        </main>
      )}
    </>
  );
};

export default Home;
