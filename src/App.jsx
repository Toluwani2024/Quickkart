import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductListingPage from "./pages/ProductListingPage";
import Cart from "./pages/Cart";
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router basename="/quickkart" >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ProductCategoryPage />} />
          <Route path="/products/:subcategory" element={<ProductListingPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer /> {/*  Add this so footer appears on every page */}
      </>
    </Router>
  );
};

export default App;


