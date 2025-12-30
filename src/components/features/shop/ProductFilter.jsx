import React from "react";
import Input from "../../ui/Input";

export default function ProductFilter({ onFilter }) {
  return (
    <div className="bg-white/5 p-4 rounded-md">
      <h4 className="font-medium mb-3">Filter</h4>
      <div className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Category</label>
          <select className="w-full rounded-md bg-white/5 p-2">
            <option value="">All</option>
            <option value="blazers">Blazers</option>
            <option value="shirts">Shirts</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Search</label>
          <Input placeholder="Search products" />
        </div>
      </div>
    </div>
  );
}
