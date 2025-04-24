import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import banner from "../../assets/exited-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look.jpg";

const HeroSection = ({ onShopClick }) => {
  const handleShopNow = () => {
    onShopClick(); // show the products
    setTimeout(() => {
      const categorySection = document.getElementById('categories');
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // wait for DOM to render
  };

  return (
    <section className="hero">
      <img src={banner} alt="QuickKart Banner" className="hero-image" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          QuickKart
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Your one-stop shop for everything you love.
        </motion.p>

        <motion.button
          className="shop-now-button"
          onClick={handleShopNow}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
