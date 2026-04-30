export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
};

export const categories = ["All", "Electronics", "Clothing", "Home & Living", "Sports", "Beauty"];

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 149.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviewCount: 2341,
    image: "https://cdn.thewirecutter.com/wp-content/media/2025/07/BEST-HEADPHONES-3x2-1.jpg?auto=webp&quality=75&crop=1:1,smart&width=1024",
    badge: "Sale",
    description: "Premium sound with 30-hour battery life and active noise cancellation.",
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    category: "Clothing",
    price: 89.99,
    rating: 4.6,
    reviewCount: 876,
    image: "http://mockberg.us/cdn/shop/files/Timelessleatherbrowngold1-original_1369211_375b2720-667d-4e91-9dc7-87744bee17b4.jpg?v=1772763425",
    badge: "New",
    description: "Slim profile with genuine leather strap and sapphire crystal glass.",
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    category: "Electronics",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviewCount: 1203,
    image: "https://media.wired.com/photos/692759910bd064a72000766c/191:100/w_1280,c_limit/The%20Smart%20Speakers%20We%20Can't%20Stop%20Talking%20To.png",
    badge: "Sale",
    description: "Voice-controlled speaker with 360° sound and smart home integration.",
  },
  {
    id: 4,
    name: "Organic Cotton Hoodie",
    category: "Clothing",
    price: 59.99,
    rating: 4.7,
    reviewCount: 543,
    image: "http://mockberg.us/cdn/shop/files/Timelessleatherbrowngold1-original_1369211_375b2720-667d-4e91-9dc7-87744bee17b4.jpg?v=1772763425",
    description: "Sustainably made with 100% organic cotton for ultimate comfort.",
  },
  {
    id: 5,
    name: "Ceramic Pour-Over Coffee Set",
    category: "Home & Living",
    price: 44.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewCount: 389,
    image: "https://cdn.thewirecutter.com/wp-content/media/2025/07/BEST-HEADPHONES-3x2-1.jpg?auto=webp&quality=75&crop=1:1,smart&width=1024",
    badge: "Best Seller",
    description: "Handcrafted ceramic dripper with matching carafe and filters.",
  },
  {
    id: 6,
    name: "Yoga Mat Pro",
    category: "Sports",
    price: 69.99,
    rating: 4.6,
    reviewCount: 712,
    image: "https://www.manduka.com/cdn/shop/files/111011050-Mats-PRO71-BLACK-SAGE-01.jpg?v=1768944270&width=871",
    description: "Non-slip surface with alignment lines and extra cushioning.",
  },
  {
    id: 7,
    name: "Vitamin C Glow Serum",
    category: "Beauty",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewCount: 1567,
    image: "https://geekandgorgeous.us/cdn/shop/files/C-Glow-web.jpg?crop=center&height=2048&v=1705591084&width=2048",
    badge: "Sale",
    description: "Brightening serum with 20% Vitamin C and hyaluronic acid.",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 129.99,
    rating: 4.7,
    reviewCount: 934,
    image: "https://i.rtings.com/assets/pages/ifvcOk4a/best-mechanical-keyboards-20260114-medium.jpg?format=auto",
    badge: "New",
    description: "Compact TKL layout with Cherry MX switches and RGB backlighting.",
  },
  {
    id: 9,
    name: "Linen Throw Blanket",
    category: "Home & Living",
    price: 39.99,
    rating: 4.5,
    reviewCount: 267,
    image: "https://m.media-amazon.com/images/I/71EUmwZhM6L.jpg",
    description: "Lightweight woven linen blanket perfect for all seasons.",
  },
  {
    id: 10,
    name: "Running Shoes Ultra",
    category: "Sports",
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviewCount: 1089,
    image: "https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/267/267-best-ultra-running-shoes-15820184-main.jpg",
    badge: "Sale",
    description: "Responsive foam cushioning with breathable mesh upper.",
  },
  {
    id: 11,
    name: "Retinol Night Cream",
    category: "Beauty",
    price: 28.99,
    rating: 4.4,
    reviewCount: 823,
    image: "/images/retinol-night-cream-jar.jpg",
    description: "Anti-aging formula with retinol and peptides for overnight renewal.",
  },
  {
    id: 12,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewCount: 2108,
    image: "https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_UF894,1000_QL80_.jpg",
    badge: "Sale",
    description: "Waterproof IPX7 speaker with 12-hour playtime and deep bass.",
  },
];
