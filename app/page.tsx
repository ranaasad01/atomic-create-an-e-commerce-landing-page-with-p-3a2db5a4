// Cart page is at app/cart/page.tsx — see CartContext for state management
import HeroBanner from "@/components/HeroBanner";
import SaleSection from "@/components/SaleSection";
import ProductGrid from "@/components/ProductGrid";
import NewsletterSection from "@/components/NewsletterSection";
import Link from "next/link";
import { Sparkles, Twitter, Github, Facebook } from "lucide-react";

const footerLinks = {
  Shop: ["Electronics", "Clothing", "Home & Living", "Sports", "Beauty", "Sale"],
  Company: ["About Us", "Careers", "Press", "Blog", "Affiliates"],
  Support: ["Help Center", "Track Order", "Returns", "Shipping Info", "Contact Us"],
};

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Lumière</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Premium products curated for modern living. Quality you can trust, prices you&apos;ll love.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: "Red" }}>
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors" style={{ color: "#f97316", backgroundColor: "#a855f7" }}>
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="/" className="text-sm hover:text-indigo-400 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} Lumière. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-indigo-400 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <SaleSection />
      <ProductGrid />
      <NewsletterSection />
      <Footer />
    </main>
  );
}