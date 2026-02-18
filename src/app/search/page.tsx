'use client';

import { Suspense } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { PRODUCTS } from '@/data/products';
import { useSearchParams } from 'next/navigation';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const products = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Search Results for "{query}"
      </h1>
      <p className="text-gray-600 mb-8">
        {products.length} products found
      </p>
      <ProductGrid products={products} />
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}
