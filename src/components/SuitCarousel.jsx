import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getImg = (path) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const suits = [
  {
    id: 1,
    name: "Midnight Black",
    src: "store/suits/black.png",
    color: "#000000",
    desc: "The timeless classic.",
  },
  {
    id: 2,
    name: "Royal Navy",
    src: "store/suits/navy.png",
    color: "#1e3a8a",
    desc: "For the boardroom.",
  },
  {
    id: 3,
    name: "Charcoal Grey",
    src: "store/suits/gray.png",
    color: "#374151",
    desc: "Understated elegance.",
  },
  {
    id: 4,
    name: "Royal Maroon",
    src: "store/suits/maroon.png",
    color: "#561C24",
    desc: "Bold and sophisticated.",
  },
  {
    id: 5,
    name: "Deep Green",
    src: "store/suits/green.png",
    color: "#1C352D",
    desc: "Natural authority.",
  },
  {
    id: 6,
    name: "Classic Brown",
    src: "store/suits/brown.png",
    color: "#B87C4C",
    desc: "Vintage charm.",
  },
];

export default function SuitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // For Mobile 3D direction

  // --- LOGIC: Handle Navigation ---
  const navigate = (newIndex) => {
    let targetIndex = newIndex;

    // Handle wrapping
    if (newIndex < 0) targetIndex = suits.length - 1;
    else if (newIndex >= suits.length) targetIndex = 0;

    setDirection(targetIndex > activeIndex ? 1 : -1);
    setActiveIndex(targetIndex);
  };

  // --- LOGIC: Determine Visual Position for Desktop ---
  // Returns: 'center', 'left', 'right', or 'hidden'
  const getSuitPosition = (index) => {
    if (index === activeIndex) return "center";

    // Calculate circular neighbors
    const prevIndex = (activeIndex - 1 + suits.length) % suits.length;
    const nextIndex = (activeIndex + 1) % suits.length;

    if (index === prevIndex) return "left";
    if (index === nextIndex) return "right";
    return "hidden";
  };

  // --- ANIMATION VARIANTS ---
  const desktopVariants = {
    center: {
      x: "0%",
      scale: 1.2,
      opacity: 1,
      zIndex: 30,
      filter: "grayscale(0%)",
    },
    left: {
      x: "-60%",
      scale: 0.9,
      opacity: 0.6,
      zIndex: 10,
      filter: "grayscale(30%)",
    }, // 90% scale, 60% opacity
    right: {
      x: "60%",
      scale: 0.9,
      opacity: 0.6,
      zIndex: 10,
      filter: "grayscale(30%)",
    }, // 90% scale, 60% opacity
    hidden: {
      x: "0%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
      filter: "grayscale(100%)",
    },
  };

  const activeSuit = suits[activeIndex];

  return (
    <div className="w-full bg-[#f8f5f2] py-16 overflow-hidden select-none">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-8 md:mb-12">
        <div>
          <h3 className="text-[#0f172a] font-serif text-3xl md:text-5xl font-bold">
            The Perfect Shade
          </h3>

          <div className="w-12 h-1 bg-[#D4AF37] mt-2"></div>
        </div>
        <div className="text-[#D4AF37] font-mono text-xl hidden md:block">
          0{activeIndex + 1}
          <span className="text-gray-300">/0{suits.length}</span>
        </div>
      </div>

      {/* =========================================
          MOBILE VIEW (< 768px) -> 3D ROTATION
          (Kept exactly as you liked it)
         ========================================= */}
      <div className="md:hidden relative h-[450px] flex items-center justify-center perspective-1000">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${activeSuit.color}20 0%, transparent 70%)`,
          }}
        />

        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={activeSuit.id}
            custom={direction}
            initial={{ rotateY: direction * 90, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1, zIndex: 1 }}
            exit={{
              rotateY: direction * -90,
              opacity: 0,
              scale: 0.8,
              zIndex: 0,
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute w-full flex justify-center items-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10 bg-white/40 blur-3xl rounded-full" />
            <img
              src={getImg(activeSuit.src)}
              alt={activeSuit.name}
              className="h-[400px] object-contain drop-shadow-2xl relative z-10"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute -bottom-5 left-0 right-0 text-center z-20">
          <p className="text-2xl font-condensed text-[#0f172a] ">
            {activeSuit.name}
          </p>
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (>= 768px) -> SLIDING CAROUSEL
         ========================================= */}
      <div className="hidden md:flex relative h-[600px] items-center justify-center max-w-7xl mx-auto">
        {/* Render ALL suits, but use variants to position them */}
        {suits.map((suit, index) => {
          const position = getSuitPosition(index);
          const isClickable = position === "left" || position === "right";

          return (
            <motion.div
              key={suit.id}
              initial={false}
              animate={position}
              variants={desktopVariants}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} // Smooth luxurious ease
              onClick={() => isClickable && navigate(index)}
              className={`absolute flex flex-col items-center justify-center ${
                isClickable ? "cursor-pointer" : ""
              }`}
              style={{ width: "40%" }} // Base width for calculation
            >
              {/* Center Suit Glow */}
              {position === "center" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[80px] -z-10"></div>
              )}

              {/* Suit Image */}
              <img
                src={getImg(suit.src)}
                alt={suit.name}
                className="h-[500px] w-auto object-contain drop-shadow-2xl"
              />

              {/* Text only visible for center item */}
              <motion.div
                animate={{
                  opacity: position === "center" ? 1 : 0,
                  y: position === "center" ? 0 : 20,
                }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-16 text-center w-full"
              >
                <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-1 whitespace-nowrap">
                  {suit.name}
                </h2>
                <p className="text-[#D4AF37] uppercase tracking-widest text-sm">
                  {suit.desc}
                </p>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={() => navigate(activeIndex - 1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full border border-[#0f172a]/10 hover:bg-[#0f172a] hover:text-[#D4AF37] transition-all duration-300 text-[#0f172a] z-50 bg-white/50 backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={() => navigate(activeIndex + 1)}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full border border-[#0f172a]/10 hover:bg-[#0f172a] hover:text-[#D4AF37] transition-all duration-300 text-[#0f172a] z-50 bg-white/50 backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Color Dots */}
      <div className="flex justify-center flex-wrap gap-2 mt-12 md:mt-24 px-4 z-30 relative">
        {suits.map((suit, index) => (
          <button
            key={suit.id}
            onClick={() => navigate(index)}
            className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
              index === activeIndex
                ? "border-[#D4AF37] scale-110 shadow-xl"
                : "border-gray-300 opacity-70 hover:opacity-100 hover:scale-105 hover:border-[#D4AF37]"
            }`}
          >
            <div
              className="w-full h-full rounded-full shadow-inner"
              style={{ backgroundColor: suit.color }}
            />
            {index === activeIndex && (
              <motion.div
                layoutId="activeColor"
                className="absolute -bottom-4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
