'use client';

import { ProductGrid } from '@/components/ProductGrid';
import { useProductStore } from '@/store/useProductStore';
import { useState, useEffect } from 'react';

export default function AllProducts() {
  const products = useProductStore((state) => state.products);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'rating'>('newest');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);

  // Prevent hydration mismatch by rendering default until mounted, 
  // or just accept that we need to wait for mount to show *updated* data.
  // We'll use the store products, but if not mounted, we might want to show nothing or default?
  // Actually, standard pattern:
  if (!mounted) {
    return <div className="min-h-screen bg-gray-50 dark:bg-slate-900" />;
  }

  let filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar - Filters */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md dark:shadow-none dark:border dark:border-slate-700 sticky top-24">
            <h3 className="font-bold text-lg mb-4 dark:text-white">Filters</h3>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-sm dark:text-gray-300">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded text-sm focus:outline-none focus:border-daraz-red dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded text-sm focus:outline-none focus:border-daraz-red dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h4 className="font-semibold mb-3 text-sm dark:text-gray-300">Sort By</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded text-sm focus:outline-none focus:border-daraz-red dark:bg-slate-700 dark:text-white"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} products
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
