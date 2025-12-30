import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-6">
              LOOKING <span className="text-[#D4AF37] italic">GOOD</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Redefining the modern silhouette with traditional hand-stitching
              and AI-driven precision fitting. The future of bespoke is here.
            </p>
            <div className="flex gap-6">
              <Instagram
                className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                size={20}
              />
              <Twitter
                className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                size={20}
              />
              <Facebook
                className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-[#D4AF37] uppercase text-xs font-bold tracking-[0.2em] mb-6">
              Collections
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  The Boardroom{" "}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Black Tie Event{" "}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Casual Friday{" "}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Summer Linen{" "}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-[#D4AF37] uppercase text-xs font-bold tracking-[0.2em] mb-6">
              Assistance
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Sizing Guide
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Bespoke Consultations
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
          <div>
            © {new Date().getFullYear()} Looking Good — All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
