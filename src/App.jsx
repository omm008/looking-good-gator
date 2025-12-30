import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout"; // Acts as the "Cart" page
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { AnimatePresence } from "framer-motion";
import Auth from "./pages/Auth";
import { Scroll } from "lucide-react";
import ScrollToTop from "./components/utils/ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 1. Home Route */}
        <Route path="/" element={<Home />} />

        {/* 2. Shop Route */}
        <Route path="/shop" element={<Shop />} />

        {/* 3. Product Details (Hidden but essential) */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* 4. Cart Route (Using Checkout component) */}
        <Route path="/cart" element={<Checkout />} />

        {/* NEW - Pointing to the new Login/Signup Page */}
        <Route path="/profile" element={<Auth />} />

        {/* Fallback for /checkout if accessed directly */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#f8f5f2] selection:bg-[#D4AF37] selection:text-[#0f172a] font-sans">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
