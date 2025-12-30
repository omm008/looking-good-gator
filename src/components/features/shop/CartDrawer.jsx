import React from "react";
import { ShoppingCart, X } from "lucide-react";
import { CartContext } from "../../../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { state, dispatch } = React.useContext(CartContext);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform ${
        open ? "visible" : "pointer-events-none invisible"
      }`}
      aria-hidden={!open}
    >
      <div className={`absolute inset-0 bg-black/40`} onClick={onClose} />

      <aside
        className={`absolute right-0 top-0 h-full w-96 bg-[var(--color-primary)] text-white p-6 shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ShoppingCart />
            <h3 className="font-semibold">Your Cart</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="close"
            className="p-2 rounded-md bg-white/10"
          >
            <X />
          </button>
        </div>

        <div className="space-y-4 overflow-auto" style={{ maxHeight: "65%" }}>
          {state.items.length ? (
            state.items.map((it, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-white/5 p-3 rounded-md"
              >
                <div>
                  <div className="font-medium">{it.title}</div>
                  <div className="text-sm opacity-80">Qty: {it.quantity}</div>
                </div>
                <div className="font-semibold">${it.price}</div>
              </div>
            ))
          ) : (
            <div className="text-sm opacity-80">Your cart is empty.</div>
          )}
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between font-semibold mb-4">
            Total <span>${state.total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-[var(--color-secondary)] text-[var(--color-primary)] py-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
