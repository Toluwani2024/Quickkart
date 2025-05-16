import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from './components/Footer/Footer';
import ProductCategoryPage from "./pages/ProductCategoryPage/ProductCategoryPage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";


const App = () => {
  return (
    <Router >
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


