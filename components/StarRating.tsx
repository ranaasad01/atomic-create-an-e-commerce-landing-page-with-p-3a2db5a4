import { Star } from "lucide-react";

type Props = {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
};

export default function StarRating({ rating, reviewCount, size = "sm" }: Props) {
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.floor(rating);
          const partial = !filled && star === Math.ceil(rating) && rating % 1 !== 0;
          const pct = rating % 1;
          return (
            <span key={star} className="relative inline-block">
              <Star className={starSize + " text-slate-200 fill-slate-200"} />
              {(filled || partial) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? "100%" : pct * 100 + "%" }}
                >
                  <Star className={starSize + " text-amber-400 fill-amber-400"} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-xs font-medium text-slate-600">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-slate-400">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
