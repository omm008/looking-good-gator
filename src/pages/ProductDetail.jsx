import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { allProducts } from "../data/shopData";
import {
  ArrowLeft,
  Ruler,
  Scissors,
  Truck,
  ShoppingBag,
  Star,
} from "lucide-react";

// Image Path Helper for GitHub Pages
const getImg = (path) => {
  if (!path) return "";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  // State to prevent layout shift/glitches during initial render
  const [isLoading, setIsLoading] = useState(true);

  // Find the product in our flattened data array
  const product = allProducts.find((item) => item.id === parseInt(id));

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Simulate a brief loading period for a smooth transition
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [id]);

  // Fallback if the URL ID doesn't match any product
  if (!product && !isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5f2]">
        <h2 className="text-3xl font-serif text-[#0f172a] mb-4">
          Piece Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The item you are looking for may have been moved or is out of stock.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="px-8 py-3 bg-[#0f172a] text-white font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all"
        >
          Return to Collection
        </button>
      </div>
    );
  }

  // --- SKELETON UI: Prevents "glitchy" jumps on load ---
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 animate-pulse">
        <div className="h-6 w-32 bg-gray-200 mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-gray-200 aspect-[4/5] rounded-sm"></div>
          <div className="space-y-8 pt-8">
            <div className="space-y-4">
              <div className="h-4 w-24 bg-gray-200"></div>
              <div className="h-16 w-full bg-gray-200"></div>
              <div className="h-8 w-32 bg-gray-200"></div>
            </div>
            <div className="h-40 w-full bg-gray-200"></div>
            <div className="h-16 w-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-24 min-h-screen"
    >
      {/* Navigation Header */}
      <button
        onClick={() => navigate("/shop")}
        className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] mb-12 hover:text-[#D4AF37] transition-colors group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT: Cinematic Image Section */}
        <div className="relative group">
          <div className="bg-[#0f172a] aspect-[4/5] rounded-sm flex items-center justify-center overflow-hidden shadow-2xl relative">
            {/* Background Monogram Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
              <h1 className="text-[15rem] font-serif text-white">LG</h1>
            </div>

            {/* Main Product Image */}
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={getImg(product.image)}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-top z-10"
            />

            {/* Fabric Texture Overlay */}
            <div className="absolute inset-0 bg-black opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
          </div>

          {/* Quote Badge (Desktop only) */}
          <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 hidden xl:block shadow-2xl z-30">
            <p className="text-[#0f172a] font-serif italic text-xl">
              "Excellence in every fiber."
            </p>
          </div>
        </div>

        {/* RIGHT: Details Section */}
        <div className="flex flex-col pt-4 md:pt-8">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            {product.tag || "Bespoke Collection"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-serif text-[#0f172a] mb-6 leading-tight"
          >
            {product.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6 mb-8"
          >
            <span className="text-3xl font-light text-[#0f172a]">
              ${product.price}
            </span>
            <div className="flex text-[#D4AF37] gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 leading-relaxed text-lg mb-10 border-l-2 border-[#D4AF37] pl-6 italic"
          >
            {product.description ||
              "Crafted with precision and a commitment to timeless elegance. This piece represents the pinnacle of modern tailoring, designed for those who command respect and appreciate comfort."}
          </motion.p>

          {/* Micro-Features */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-500 uppercase tracking-widest">
              <Scissors size={18} className="text-[#D4AF37]" /> Hand-Finished
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500 uppercase tracking-widest">
              <Ruler size={18} className="text-[#D4AF37]" /> Custom Sizing
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: { ...product, quantity: 1 },
              })
            }
            className="bg-[#0f172a] text-white py-6 text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#0f172a] transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <ShoppingBag
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            Add to your Wardrobe
          </motion.button>

          {/* Shipping Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-3 text-xs text-gray-400 uppercase tracking-[0.2em]"
          >
            <Truck size={16} /> Complimentary Express Shipping on all Orders
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
