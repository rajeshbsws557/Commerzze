'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useWishlistStore } from '@/store';
import { useState, useEffect } from 'react';
import { ProductGrid } from '@/components/ProductGrid';

export default function WishlistPage() {
  const [isClient, setIsClient] = useState(false);
  const items = useWishlistStore((state) => state.items);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Wishlist is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add items to your wishlist to save them for later.
          </p>
          <Link
            href="/all-products"
            className="inline-block bg-daraz-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-8">{items.length} items saved</p>
      <ProductGrid products={items} />
    </div>
  );
}
