import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowDown, ArrowRight } from "lucide-react";
import { shopData } from "../data/shopData";

// --- HELPER: Image Path Fixer ---
const getImg = (path) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// --- COMPONENT: Single Product Card ---
const ProductCard = ({ product, addToCart }) => (
  <div className="relative group min-w-[280px] md:min-w-[350px] snap-center">
    <Link to={`/product/${product.id}`} className="block">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

        <img
          src={getImg(product.image)}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {product.tag && (
          <span className="absolute top-3 right-3 bg-[#D4AF37] text-[#0f172a] text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-20">
            {product.tag}
          </span>
        )}

        {/* Product Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="font-serif text-2xl mb-1">{product.name}</h3>
          <div className="flex items-center justify-between border-t border-white/20 pt-3">
            <span className="font-medium text-[#D4AF37]">${product.price}</span>
            <div className="flex gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>

    {/* Quick Add Button (Outside Link) */}
    <button
      onClick={(e) => {
        e.preventDefault();
        addToCart(product);
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#0f172a] px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-[#D4AF37] shadow-xl flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
    >
      <ShoppingBag size={14} /> Add
    </button>
  </div>
);

// --- COMPONENT: Category Slider Section ---
const CategorySection = ({ title, subtitle, products, addToCart }) => {
  const scrollRef = useRef(null);

  return (
    <div className="py-12 border-b border-gray-200 last:border-0">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
        <div>
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs block mb-2">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0f172a]">
            {title}
          </h2>
        </div>

        {/* Desktop "Scroll Hint" */}
        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          Slide to Explore <ArrowRight size={16} />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}

          {/* Spacer for right padding */}
          <div className="min-w-[20px] md:min-w-[40px]" />
        </div>

        {/* Fade effect on the right edge to indicate scrollability */}
        <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-[#f8f5f2] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default function Shop() {
  const { dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="bg-[#f8f5f2] min-h-screen pb-24">
      {/* HERO HEADER */}
      <div className="relative h-[50vh] bg-[#0f172a] flex items-center justify-center overflow-hidden">
        {/* Use one of the blazer images for the hero background */}
        <div className="absolute inset-0 opacity-30">
          <img
            src={getImg("store/blazer/navy-blazer.png")}
            className="w-full h-full object-cover object-top"
            alt="Hero"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 to-[#f8f5f2]"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-4"
          >
            The Atelier
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold"
          >
            Spring / Summer Collection
          </motion.p>
        </div>
      </div>

      {/* CATEGORY SLIDERS */}
      <div className="-mt-20 relative z-20 space-y-8">
        <CategorySection
          title="The Suits"
          subtitle="Precision Tailoring"
          products={shopData.suits}
          addToCart={addToCart}
        />

        <CategorySection
          title="The Blazers"
          subtitle="Casual Elegance"
          products={shopData.blazers}
          addToCart={addToCart}
        />

        <CategorySection
          title="The Shirts"
          subtitle="Everyday Essentials"
          products={shopData.shirts}
          addToCart={addToCart}
        />

        <CategorySection
          title="Accessories"
          subtitle="Finishing Touches"
          products={shopData.accessories}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}
