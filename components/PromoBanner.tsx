"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-indigo-600 text-white text-sm py-2.5 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="font-semibold text-amber-300">🎉 SUMMER SALE</span>
        <span className="hidden sm:inline text-indigo-100">—</span>
        <span className="text-indigo-100">
          Up to <span className="font-bold text-white">40% off</span> sitewide. Use code{" "}
          <span className="font-mono font-bold bg-white/20 px-1.5 py-0.5 rounded text-white">
            SUMMER40
          </span>{" "}
          at checkout.
        </span>
        <span className="hidden lg:inline text-indigo-200 ml-2">Free shipping on orders over $75.</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-200 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
