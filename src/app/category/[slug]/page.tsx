'use client';

import { ProductGrid } from '@/components/ProductGrid';
import { PRODUCTS } from '@/data/products';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const category = decodeURIComponent(params.slug as string);

  const products = PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{category}</h1>
      <p className="text-gray-600 mb-8">
        {products.length} products available
      </p>
      <ProductGrid products={products} />
    </div>
  );
}
