"use client";

import { categories } from "@/lib/products";

type Props = {
  active: string;
  onChange: (cat: string) => void;
};

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            "whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
            (active === cat
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
              : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600")
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
