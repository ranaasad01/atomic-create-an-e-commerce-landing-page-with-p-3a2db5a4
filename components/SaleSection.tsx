import { ArrowRight, Zap, Truck, Shield, RotateCcw } from "lucide-react";

const perks = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $75",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    desc: "256-bit SSL encryption",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "2-3 business days",
  },
];

export default function SaleSection() {
  return (
    <>
      {/* Perks Bar */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-800 p-8 sm:p-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-400/10 rounded-full" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                <Zap className="w-3 h-3" />
                LIMITED TIME OFFER
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Flash Sale — Up to 40% Off
              </h2>
              <p className="text-indigo-200 text-sm max-w-md">
                Grab our best deals before they&apos;re gone. New markdowns added daily on top electronics, fashion, and home essentials.
              </p>
            </div>
            <a
              href="#products"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Shop the Sale
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
