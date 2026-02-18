'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore, useWishlistStore } from '@/store';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addItem);
  const isFavorite = useWishlistStore((state) => state.isFavorite(product.id));
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const [isAdded, setIsAdded] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite);
  }, [isFavorite]);

  // Separate state for image source to handle fallbacks
  const [imgSrc, setImgSrc] = useState(product.image);
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discount = product.discount || 0;

  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full"
      >
        {/* Image Container */}
        <div className="relative bg-gray-100 dark:bg-slate-700 aspect-square overflow-hidden group">
          <Image
            src={imgError ? 'https://placehold.co/600x600?text=No+Image' : imgSrc}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            onError={() => {
              setImgError(true);
              setImgSrc('https://placehold.co/600x600?text=No+Image');
            }}
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-daraz-red text-white px-2 py-1 rounded text-sm font-bold">
              -{discount}%
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 left-3 bg-white dark:bg-slate-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Heart
              size={20}
              className={isFav ? 'fill-daraz-red text-daraz-red' : 'text-gray-400 dark:text-gray-500'}
            />
          </button>

          {/* Stock Status */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 bg-white dark:bg-slate-800">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2 mb-2 min-h-[40px]">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-daraz-red">
                ₨ {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                  ₨ {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Seller */}
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">by {product.seller}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${product.stock === 0
              ? 'bg-gray-300 dark:bg-slate-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              : isAdded
                ? 'bg-green-500 text-white'
                : 'bg-daraz-light dark:bg-red-900/20 text-daraz-red hover:bg-daraz-red hover:text-white'
              }`}
          >
            <ShoppingCart size={16} />
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </motion.div>
    </Link>
  );
};
