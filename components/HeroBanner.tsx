import { ArrowRight, Star } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-amber-300 text-xs font-semibold tracking-wide uppercase">
                New Summer Collection 2024
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Discover the new Products{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
                You&apos;ll Love
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Curated collections of premium electronics, fashion, home goods, and more — all at prices that make sense. Free shipping on orders over $75.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: '#ef4444' }}
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Sale Items
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="text-center" style={{ color: '#22c55e', backgroundColor: '#ef4444' }}>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-slate-400 mt-0.5">Happy Customers</div>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9&#9733;</div>
                <div className="text-xs text-slate-400 mt-0.5">Average Rating</div>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-xs text-slate-400 mt-0.5">Products</div>
              </div>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800">
                <img
                  src="https://cdn.thewirecutter.com/wp-content/media/2025/07/BEST-HEADPHONES-3x2-1.jpg?auto=webp&quality=75&crop=1:1,smart&width=1024"
                  alt="Featured headphones"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-800">
                <img
                  src="https://cdn.thewirecutter.com/wp-content/media/2025/07/BEST-HEADPHONES-3x2-1.jpg?auto=webp&quality=75&crop=1:1,smart&width=1024"
                  alt="Coffee set"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-800">
                <img
                  src="http://mockberg.us/cdn/shop/files/Timelessleatherbrowngold1-original_1369211_375b2720-667d-4e91-9dc7-87744bee17b4.jpg?v=1772763425"
                  alt="Leather watch"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800">
                <img
                  src="http://mockberg.us/cdn/shop/files/Timelessleatherbrowngold1-original_1369211_375b2720-667d-4e91-9dc7-87744bee17b4.jpg?v=1772763425"
                  alt="Cotton hoodie"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}