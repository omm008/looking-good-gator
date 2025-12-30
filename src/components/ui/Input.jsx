import React from "react";

export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-md bg-white/5 border border-white/5 focus:ring-2 focus:ring-[var(--color-secondary)] ${className}`}
      {...props}
    />
  );
}
