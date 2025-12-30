import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base = "px-4 py-2 rounded-md font-medium transition focus:outline-none";
  const variants = {
    primary:
      "bg-[var(--color-secondary)] text-[var(--color-primary)] shadow-sm hover:opacity-95",
    secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/5",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
