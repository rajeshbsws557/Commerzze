'use client';

import Image from 'next/image';
import { Heart, ShoppingCart, Share2, Star, Truck, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useParams } from 'next/navigation';
import { useCartStore, useWishlistStore } from '@/store';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = PRODUCTS.find((p) => p.id === productId);

  const addToCart = useCartStore((state) => state.addItem);
  const isFavorite = useWishlistStore((state) => state.isFavorite(productId));
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-lg text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleToggleWishlist = () => {
    if (isFavorite) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(product);
    }
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md dark:shadow-none dark:border dark:border-slate-700 sticky top-24 h-fit">
          <div className="relative bg-gray-100 dark:bg-slate-700 aspect-square rounded overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <div className="absolute top-4 left-4 bg-daraz-red text-white px-4 py-2 rounded-lg font-bold text-lg">
                -{product.discount}%
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleToggleWishlist}
              className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-slate-600 py-3 rounded-lg hover:border-daraz-red dark:hover:border-daraz-red hover:text-daraz-red dark:text-gray-200 transition-colors font-semibold"
            >
              <Heart
                size={20}
                className={isFavorite ? 'fill-daraz-red text-daraz-red' : ''}
              />
              Wishlist
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-slate-600 py-3 rounded-lg hover:border-daraz-red dark:hover:border-daraz-red hover:text-daraz-red dark:text-gray-200 transition-colors font-semibold">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div>
          {/* Title & Rating */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }
                  />
                ))}
              </div>
              <span className="text-lg font-semibold dark:text-white">{product.rating}</span>
            </div>
            <span className="text-gray-600 dark:text-gray-400">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-6 pb-6 border-b dark:border-slate-700">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-4xl font-bold text-daraz-red">
                ₨ {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
                  ₨ {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.discount && (
              <p className="text-green-600 dark:text-green-400 font-semibold">
                You save ₨ {(product.originalPrice! - product.price).toLocaleString()} ({product.discount}%)
              </p>
            )}
          </div>

          {/* Seller Info */}
          <div className="mb-6 pb-6 border-b dark:border-slate-700">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">Seller:</span> {product.seller}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white">Stock:</span>{' '}
              <span
                className={
                  product.stock > 10
                    ? 'text-green-600 dark:text-green-400'
                    : product.stock > 0
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-red-600 dark:text-red-400'
                }
              >
                {product.stock > 10
                  ? 'In Stock'
                  : product.stock > 0
                    ? `Only ${product.stock} left`
                    : 'Out of Stock'}
              </span>
            </p>
          </div>

          {/* Quantity */}
          <div className="mb-6 pb-6 border-b dark:border-slate-700">
            <label className="block font-semibold mb-3 dark:text-white">Quantity:</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={product.stock === 0}
                className="w-10 h-10 border dark:border-slate-600 rounded hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <span className="text-lg font-semibold w-8 text-center dark:text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                disabled={product.stock === 0}
                className="w-10 h-10 border dark:border-slate-600 rounded hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-4 rounded-lg font-bold text-lg mb-4 flex items-center justify-center gap-2 transition-colors ${product.stock === 0
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : isAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-daraz-red text-white hover:bg-red-700'
              }`}
          >
            <ShoppingCart size={24} />
            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
          </button>

          {/* Info Cards */}
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg dark:border dark:border-slate-700">
              <Truck size={24} className="text-daraz-red" />
              <div>
                <p className="font-semibold dark:text-white">Free Shipping</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">On orders over ₨999</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg dark:border dark:border-slate-700">
              <RotateCcw size={24} className="text-daraz-red" />
              <div>
                <p className="font-semibold dark:text-white">Easy Returns</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">30-day return guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md dark:shadow-none dark:border dark:border-slate-700 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Description</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow dark:shadow-none dark:border dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="relative bg-gray-100 dark:bg-slate-700 aspect-square">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm line-clamp-2 mb-2 dark:text-white">
                    {p.title}
                  </p>
                  <p className="text-daraz-red font-bold">
                    ₨ {p.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
