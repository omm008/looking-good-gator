import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state } = useContext(CartContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="w-full fixed top-0 z-50 font-sans">
      {/* Announcement Bar */}
      <div className="bg-[#D4AF37] text-[#1a1a1a] text-xs font-medium py-1.5 text-center tracking-widest uppercase">
        <span className="inline-flex items-center">
          <span className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full mr-2 animate-pulse"></span>
          AI Virtual Try-On - Coming Soon
        </span>
      </div>

      <nav
        className={`w-full transition-all duration-300 border-b border-white/5 ${
          isScrolled
            ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-[#0f172a] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* BRANDING */}
            <div className="flex flex-col">
              <Link
                to="/"
                className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-none hover:opacity-90"
              >
                LOOKING <span className="text-[#D4AF37] italic">GOOD</span>
              </Link>
            </div>

            {/* DESKTOP MENU - Home & Shop */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                Shop
              </Link>
            </div>

            {/* ACTIONS - Cart & Profile */}
            <div className="flex items-center space-x-6 text-white">
              {/* Profile Link */}
              <Link
                to="/profile"
                className="hidden md:block hover:text-[#D4AF37] transition-colors"
                title="My Profile"
              >
                <User size={20} strokeWidth={1.5} />
              </Link>

              {/* Cart Link */}
              <Link
                to="/cart"
                className="relative hover:text-[#D4AF37] transition-colors group"
              >
                <ShoppingCart size={20} strokeWidth={1.5} />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#0f172a] text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                    {state.items.length}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-1 hover:text-[#D4AF37] transition-colors"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-[#0f172a] z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 px-8 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          <Link
            to="/"
            className="text-2xl font-serif text-white hover:text-[#D4AF37]"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-2xl font-serif text-white hover:text-[#D4AF37]"
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/profile"
            className="text-2xl font-serif text-white hover:text-[#D4AF37]"
            onClick={() => setOpen(false)}
          >
            My Profile
          </Link>

          <div className="pt-8 border-t border-white/10 mt-8">
            <Link
              to="/cart"
              className="block w-full bg-[#D4AF37] text-[#0f172a] py-4 text-sm font-bold uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              Cart ({state.items.length})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
