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
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { AnimatePresence } from "framer-motion";
import Auth from "./pages/Auth";
import ScrollToTop from "./components/utils/ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/profile" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <CartProvider>
      {/* 👇 THIS IS THE FIX: Add the basename matching your repo name */}
      <Router basename="/looking-good-gator">
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
