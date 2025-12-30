import React from "react";
import Button from "./Button";

export default function Card({ product = {}, onAdd }) {
  return (
    <div className="bg-white/5 rounded-lg p-4 flex flex-col justify-between h-full">
      <div className="mb-3 h-48 bg-white/5 rounded-md flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-sm opacity-60">Image Placeholder</div>
        )}
      </div>

      <div className="">
        <h4 className="font-semibold text-lg">
          {product.title || "Product Title"}
        </h4>
        <p className="text-sm opacity-80 my-2">
          {product.subtitle || "Elegant, tailored pieces."}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-lg font-bold">${product.price || "199"}</div>
          <Button onClick={() => onAdd && onAdd(product)}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
