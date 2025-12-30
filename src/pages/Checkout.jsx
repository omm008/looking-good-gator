import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, PenTool } from "lucide-react";

export default function Checkout() {
  const { state } = useContext(CartContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#f8f5f2] py-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Billing Details */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-12 text-[#D4AF37]">
            <PenTool size={24} />
            <h2 className="text-4xl font-serif text-[#0f172a]">
              Shipping & Billing
            </h2>
          </div>

          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                  Full Name
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-xl font-serif text-[#0f172a]"
                  placeholder="James Bond"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                  Email Address
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-xl font-serif text-[#0f172a]"
                  placeholder="007@mi6.com"
                />
              </div>
            </div>
            <div className="space-y-2 group">
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                Shipping Address
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-xl font-serif text-[#0f172a]"
                placeholder="123 Savile Row, London"
              />
            </div>

            <button className="w-full bg-[#0f172a] text-white py-5 uppercase tracking-[0.2em] font-bold mt-12 hover:bg-[#D4AF37] hover:text-[#0f172a] transition-all shadow-xl">
              Proceed to Secure Payment
            </button>
          </form>
        </div>

        {/* Right: Order Summary (The Ledger) */}
        <div className="lg:col-span-5">
          <div className="bg-[#0f172a] text-white p-10 rounded-sm shadow-2xl sticky top-32">
            <h3 className="font-serif text-2xl mb-8 border-b border-white/10 pb-4">
              Order Summary
            </h3>
            <div className="space-y-6 mb-12">
              {state.items.length === 0 ? (
                <p className="text-gray-400 italic">Your wardrobe is empty.</p>
              ) : (
                state.items.map((it, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start text-sm"
                  >
                    <div>
                      <p className="font-serif italic text-lg">
                        {it.title || it.name}
                      </p>
                      <p className="text-gray-400">Qty: {it.quantity}</p>
                    </div>
                    <div className="font-bold text-[#D4AF37]">
                      ${(it.price * it.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-[#D4AF37]">
                  ${state.total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 text-[10px] uppercase tracking-tighter text-gray-500">
              <ShieldCheck size={14} /> Encrypted Secure Checkout
              <CreditCard size={14} /> Global Payment Accepted
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
