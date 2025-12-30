import React from "react";
import Card from "../../ui/Card";

export default function ProductGrid({ products = [], onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length ? (
        products.map((p) => <Card key={p.id} product={p} onAdd={onAdd} />)
      ) : (
        <div className="col-span-full text-center text-sm opacity-70">
          No products found
        </div>
      )}
    </div>
  );
}
