'use client';

import { ProductGrid } from '@/components/ProductGrid';
import { PRODUCTS } from '@/data/products';

export default function DealsPage() {
  const dealProducts = PRODUCTS.filter((p) => p.discount && p.discount > 0).sort(
    (a, b) => (b.discount || 0) - (a.discount || 0)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-daraz-red mb-2">🎉 Flash Deals</h1>
        <p className="text-gray-600">
          Grab amazing discounts on thousands of products
        </p>
      </div>

      <div className="bg-gradient-to-r from-daraz-red to-red-700 text-white rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2">Limited Time Offers</h2>
        <p>
          Shop now and save up to 60% on selected products. Hurry, stock is
          limited!
        </p>
      </div>

      <ProductGrid products={dealProducts} />
    </div>
  );
}
