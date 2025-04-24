import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductCategoryPage from "./Pages/ProductCategoryPage";
import ProductListingPage from "./Pages/ProductListingPage";
import Cart from "./pages/Cart";
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ProductCategoryPage />} />
          <Route path="/products/:subcategory" element={<ProductListingPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer /> {/* ✅ Add this so footer appears on every page */}
      </>
    </Router>
  );
};

export default App;


