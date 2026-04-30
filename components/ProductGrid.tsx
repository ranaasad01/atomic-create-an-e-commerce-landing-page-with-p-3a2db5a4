"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured Products
          </h2>
          <p className="text-slate-500 mt-1">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} style={index === 4 ? { backgroundColor: "Blue", color: "#f97316" } : index === 3 ? { backgroundColor: "Red", color: "#f97316" } : undefined} linkStyle={index === 3 ? { color: "#f97316", backgroundColor: "#a855f7" } : undefined} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg font-medium">No products found in this category.</p>
        </div>
      )}
    </section>
  );
}