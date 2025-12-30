import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-white/5 rounded-md">
      <h3 className="text-lg font-medium mb-2">Categories</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link to="/shop?cat=blazers" className="hover:underline">
            Blazers
          </Link>
        </li>
        <li>
          <Link to="/shop?cat=shirts" className="hover:underline">
            Shirts
          </Link>
        </li>
        <li>
          <Link to="/shop?cat=accessories" className="hover:underline">
            Accessories
          </Link>
        </li>
      </ul>
    </aside>
  );
}
