import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Scissors,
  Ruler,
  ShieldCheck,
  Smartphone,
  Loader2,
} from "lucide-react";
import SuitCarousel from "../components/SuitCarousel";

// --- 1. IMAGE PATH HELPER ---
const getImg = (path) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// --- ANIMATION VARIANTS (Kept same) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const textHoverVariants = {
  rest: { y: 20, opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const arrowVariants = {
  rest: { x: -10, opacity: 0 },
  hover: { x: 0, opacity: 1, transition: { duration: 0.3 } },
};

export default function Home() {
  const [collectionsLoading, setCollectionsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCollectionsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // --- 2. UPDATED COLLECTIONS DATA WITH IMAGES ---
  const collections = [
    {
      title: "The Boardroom Dominator",
      sub: "Navy & Charcoal staples",
      color: "from-[#0f172a]",
      // Using your local images
      img: "store/suits/navy-suit.png",
    },
    {
      title: "Brown Tie",
      sub: "Evening wear & Tuxedos",
      color: "from-black",
      img: "store/ties/brown-tie.png", // Using gray as placeholder for black tie
    },
    {
      title: "Casual Friday",
      sub: "Unstructured Blazers",
      color: "from-[#3f2e3e]",
      img: "store/blazer/gray-blazer.png",
    },
  ];

  return (
    <div className="font-sans text-[#1a1a1a] bg-[#f8f5f2]">
      {/* HERO SECTION (Kept same) */}
      <div className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3f2e3e]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-[100px]"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase font-bold mb-4 block"
          >
            Est. 2024 • Bespoke Tailoring
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 leading-tight"
          >
            Elegance is not about being noticed,
            <br />
            <span className="italic font-light text-[#a8a29e]">
              it's about being remembered.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Hand-stitched suits crafted from the finest Italian wool. Experience
            the perfect union of traditional craftsmanship and modern
            technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              className="px-8 py-4 bg-[#D4AF37] text-[#0f172a] rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105"
            >
              Shop The Collection
            </Link>
            <Link
              to="/about"
              className="px-8 mb-10 sm:mb-0 py-4 border border-white/20 text-white rounded-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* CAROUSEL SECTION */}
      <section className="relative pt-10 py-10 z-20 -mt-10 md:-mt-20 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-tr from-white to-white/50">
            <SuitCarousel />
          </div>
        </div>
      </section>

      {/* CRAFT SECTION */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">
              The Art of the Stitch
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We don't mass produce. Every garment is a result of hours of
              meticulous labor by master tailors.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              {
                icon: Scissors,
                title: "Hand-Stitched",
                desc: "Lapels rolled by hand and buttonholes stitched with silk thread.",
              },
              {
                icon: ShieldCheck,
                title: "Italian Fabrics",
                desc: "Sourced directly from mills in Biella. Super 150s wool that breathes.",
              },
              {
                icon: Ruler,
                title: "Precision Fit",
                desc: "Our modern cut trims the excess while maintaining comfort.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 border border-gray-100 bg-[#f8f5f2] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors duration-500">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* COLLECTIONS SECTION (UPDATED WITH IMAGES) */}
      <div className="py-24 bg-[#3f2e3e] text-white relative min-h-[800px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm block mb-2">
                Curated For You
              </span>
              <h2 className="text-4xl font-serif font-bold">
                Latest Collections
              </h2>
            </motion.div>

            <Link
              to="/shop"
              className="hidden md:flex items-center gap-2 font-bold hover:text-[#D4AF37] transition-colors group"
            >
              View All
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>
          </div>

          <AnimatePresence mode="wait">
            {collectionsLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[500px] w-full flex flex-col items-center justify-center gap-4"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <div className="w-16 h-16 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full" />
                </motion.div>
                <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] animate-pulse">
                  Curating Collections...
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {collections.map((col, idx) => (
                  // 👇 1. WRAP THE CARD IN A LINK TO /SHOP
                  <Link
                    to="/shop"
                    key={idx}
                    className={`${
                      idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <motion.div
                      variants={cardVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      // Removed the col-span class from here and put it on the Link above
                      className="relative group overflow-hidden h-[500px] cursor-pointer bg-gray-900 shadow-xl w-full"
                    >
                      <motion.div
                        variants={imageHoverVariants}
                        className="absolute inset-0"
                      >
                        <div
                          className={`absolute inset-0 bg-gray-800 flex items-center justify-center`}
                        >
                          <img
                            src={getImg(col.img)}
                            alt={col.title}
                            className="w-full h-full object-cover object-top opacity-70"
                          />
                        </div>
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${col.color} via-transparent to-transparent opacity-90`}
                        />
                      </motion.div>

                      <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                        <motion.div layout>
                          <h3 className="text-3xl text-white font-serif italic mb-2 drop-shadow-md">
                            {col.title}
                          </h3>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            className="h-[2px] bg-[#D4AF37] mb-4"
                          />
                          <motion.div variants={textHoverVariants}>
                            <p className="text-gray-200 text-sm mb-6 font-light">
                              {col.sub}
                            </p>
                            <div className="flex items-center gap-3 text-[#D4AF37] font-display uppercase text-xs tracking-widest">
                              Shop Now
                              <motion.div variants={arrowVariants}>
                                <ArrowRight size={16} />
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* VIRTUAL TRY-ON (Kept same) */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
        {/* ... (Kept existing code) ... */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="inline-block p-3 rounded-full bg-white/10 mb-6 text-[#D4AF37]">
                <Smartphone size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Unsure about the fit?
                <br />
                <span className="text-[#D4AF37]">Try it on, virtually.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our proprietary AI technology scans your measurements to create
                a 3D avatar. See exactly how that double-breasted jacket sits on
                your shoulders before you buy.
              </p>
              <button className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0f172a] transition-all duration-300 font-bold uppercase tracking-widest">
                Join the Waitlist
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-80 h-[500px] border-8 border-gray-800 rounded-[3rem] bg-gray-900 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D4AF37]/20 animate-pulse"></div>
                <div className="text-center opacity-50">
                  <div className="w-32 h-32 border-2 border-dashed border-[#D4AF37] rounded-full mx-auto mb-4 animate-spin-slow"></div>
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
                    Scanning...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
