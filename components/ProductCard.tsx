"use client";

import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";

import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={
                "text-xs font-bold px-2.5 py-1 rounded-full " +
                (product.badge === "Sale"
                  ? "bg-red-500 text-white"
                  : product.badge === "New"
                  ? "bg-indigo-600 text-white"
                  : "bg-amber-400 text-slate-900")
              }
            >
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-500 text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          aria-label="Add to wishlist"
        >
          <Heart
            className={"w-4 h-4 transition-colors " + (wishlisted ? "fill-red-500 text-red-500" : "text-slate-400")}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-1">
          <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-slate-900 mb-2 line-clamp-2 leading-snug group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        {/* Price */}
        <div className="flex items-center gap-2 mt-3 mb-4">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          style={{ color: "#f97316", backgroundColor: "#a855f7" }}
          className={
            "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 " +
            (added
              ? "bg-green-500 text-white"
              : "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-md hover:shadow-indigo-200")
          }
        >
          <ShoppingCart className="w-4 h-4" />
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}