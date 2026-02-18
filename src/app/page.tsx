'use client';

import { ProductGrid } from '@/components/ProductGrid';
import { PRODUCTS, getCategories } from '@/data/products';
import Link from 'next/link';
import {
  ChevronRight,
  Smartphone,
  Shirt,
  Home as HomeIcon,
  Dumbbell,
  Sparkles,
  Book,
  Gamepad2,
  Apple,
  HeartPulse,
  Car,
  Bone,
  PenTool,
  LucideIcon
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Electronics': Smartphone,
  'Clothing': Shirt,
  'Home & Garden': HomeIcon,
  'Sports & Outdoors': Dumbbell,
  'Beauty & Personal Care': Sparkles,
  'Books & Media': Book,
  'Toys & Games': Gamepad2,
  'Food & Grocery': Apple,
  'Health & Wellness': HeartPulse,
  'Automotive': Car,
  'Pet Supplies': Bone,
  'Office & Stationery': PenTool,
};

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 20);
  const categories = getCategories();
  const deals = PRODUCTS.filter((p) => p.discount && p.discount > 30).slice(0, 15);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-daraz-red to-red-700 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Commerzze</h1>
        <p className="text-lg mb-6">Discover millions of products at unbeatable prices</p>
        <Link
          href="/all-products"
          className="inline-block bg-white text-daraz-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
        >
          Shop Now
        </Link>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category] || HomeIcon;
            return (
              <Link
                key={category}
                href={`/category/${encodeURIComponent(category)}`}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-daraz-red dark:hover:border-daraz-red transition-all group text-center cursor-pointer flex flex-col items-center gap-3"
              >
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full text-daraz-red group-hover:bg-daraz-red group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-daraz-red transition-colors line-clamp-1">
                  {category}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flash Deals</h2>
          <Link
            href="/deals"
            className="text-daraz-red font-semibold flex items-center gap-1 hover:gap-2"
          >
            View All <ChevronRight size={20} />
          </Link>
        </div>
        <ProductGrid products={deals} />
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
          <Link
            href="/all-products"
            className="text-daraz-red font-semibold flex items-center gap-1 hover:gap-2"
          >
            View All <ChevronRight size={20} />
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow text-center dark:shadow-none dark:border dark:border-slate-700">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="font-bold text-lg mb-2 dark:text-white">100% Authentic</h3>
          <p className="text-gray-600 dark:text-gray-400">All products are verified and authentic</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow text-center dark:shadow-none dark:border dark:border-slate-700">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="font-bold text-lg mb-2 dark:text-white">Free Shipping</h3>
          <p className="text-gray-600 dark:text-gray-400">On orders over ₨999</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow text-center dark:shadow-none dark:border dark:border-slate-700">
          <div className="text-4xl mb-4">↩️</div>
          <h3 className="font-bold text-lg mb-2 dark:text-white">Easy Returns</h3>
          <p className="text-gray-600 dark:text-gray-400">30-day return guarantee</p>
        </div>
      </div>
    </div>
  );
}
