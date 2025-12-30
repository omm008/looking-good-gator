import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Lock, User, Check } from "lucide-react";

// Image for the aesthetic side panel
const BG_IMAGE =
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Mock submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, logic goes here.
    // For now, redirect to profile after 1s
    setTimeout(() => navigate("/profile"), 800);
  };

  return (
    <div className="min-h-screen flex bg-[#f8f5f2]">
      {/* LEFT SIDE: VISUAL (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0f172a]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={BG_IMAGE}
            alt="Luxury Suit"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* Overlay Text */}
        <div className="relative z-10 p-20 flex flex-col justify-between h-full text-white">
          <Link to="/" className="text-3xl font-serif tracking-tight">
            LOOKING <span className="text-[#D4AF37] italic">GOOD</span>
          </Link>

          <div>
            <h2 className="text-5xl font-serif leading-tight mb-6">
              {isLogin
                ? "Welcome back to the club."
                : "Tailoring the future of your style."}
            </h2>
            <p className="text-gray-400 max-w-md text-lg font-light">
              {isLogin
                ? "Access your bespoke measurements, order history, and exclusive consultations."
                : "Join the atelier to unlock AI fitting, priority shipping, and curated recommendations."}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: FORMS */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12 relative bg-[#f8f5f2]">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-8 left-8">
          <Link to="/" className="text-2xl font-serif text-[#0f172a]">
            LG
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          {/* Toggle Header */}
          <div className="flex items-center gap-8 mb-12">
            <button
              onClick={() => setIsLogin(true)}
              className={`text-2xl font-serif transition-colors duration-300 ${
                isLogin ? "text-[#0f172a]" : "text-gray-300 hover:text-gray-400"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`text-2xl font-serif transition-colors duration-300 ${
                !isLogin
                  ? "text-[#0f172a]"
                  : "text-gray-300 hover:text-gray-400"
              }`}
            >
              Register
            </button>
          </div>

          {/* Form Container */}
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-8 absolute w-full"
              >
                {!isLogin && (
                  <div className="group relative">
                    <User
                      className="absolute left-0 top-3 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b-2 border-gray-200 py-3 pl-8 text-[#0f172a] placeholder-gray-400 focus:border-[#D4AF37] outline-none transition-colors font-medium"
                    />
                  </div>
                )}

                <div className="group relative">
                  <Mail
                    className="absolute left-0 top-3 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors"
                    size={20}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 pl-8 text-[#0f172a] placeholder-gray-400 focus:border-[#D4AF37] outline-none transition-colors font-medium"
                  />
                </div>

                <div className="group relative">
                  <Lock
                    className="absolute left-0 top-3 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors"
                    size={20}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 pl-8 text-[#0f172a] placeholder-gray-400 focus:border-[#D4AF37] outline-none transition-colors font-medium"
                  />
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#D4AF37] transition-colors"
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}

                <button className="w-full bg-[#0f172a] text-white py-4 mt-4 font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#0f172a] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
                  {isLogin ? "Access Account" : "Join The Atelier"}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                {/* Social Proof / Divider */}
                <div className="pt-8 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                    Or continue with
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      type="button"
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                    >
                      <span className="font-serif font-bold text-lg">G</span>
                    </button>
                    <button
                      type="button"
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                    >
                      <span className="font-serif font-bold text-lg">Ap</span>
                    </button>
                  </div>
                </div>
              </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
