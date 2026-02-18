'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store';
import { useState, useEffect } from 'react';

export default function CartPage() {
  const [isClient, setIsClient] = useState(false);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 999 ? 0 : 99;
  const tax = Math.floor(totalPrice * 0.1);
  const grandTotal = totalPrice + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Add items to your cart and come back here to check out.
          </p>
          <Link
            href="/all-products"
            className="inline-block bg-daraz-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-none dark:border dark:border-slate-700 overflow-hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 border-b dark:border-slate-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 dark:bg-slate-700 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <Link
                    href={`/product/${item.product.id}`}
                    className="font-semibold text-gray-900 dark:text-white hover:text-daraz-red dark:hover:text-red-400 mb-2 block"
                  >
                    {item.product.title}
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    by {item.product.seller}
                  </p>
                  <p className="text-lg font-bold text-daraz-red">
                    ₨ {item.product.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-8 h-8 border dark:border-slate-600 rounded hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-8 h-8 border dark:border-slate-600 rounded hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold text-gray-900 dark:text-white">
                    ₨ {(item.product.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-none dark:border dark:border-slate-700 p-6 sticky top-24 h-fit">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b dark:border-slate-700">
              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Subtotal ({items.length} items)</span>
                <span className="font-semibold">
                  ₨ {totalPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Shipping Cost</span>
                <span className="font-semibold">
                  {shippingCost === 0 ? (
                    <span className="text-green-600 dark:text-green-400">Free</span>
                  ) : (
                    `₨ ${shippingCost}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Tax (10%)</span>
                <span className="font-semibold">₨ {tax.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white mb-6">
              <span>Total</span>
              <span className="text-daraz-red">₨ {grandTotal.toLocaleString()}</span>
            </div>

            <Link href="/checkout">
              <button className="w-full bg-daraz-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mb-3">
                Proceed to Checkout
              </button>
            </Link>

            <Link
              href="/all-products"
              className="block text-center text-daraz-red font-semibold hover:text-red-700 dark:hover:text-red-400 py-2 border border-daraz-red rounded-lg transition-colors"
            >
              Continue Shopping
            </Link>

            {shippingCost === 0 && (
              <p className="text-sm text-green-600 dark:text-green-400 text-center mt-4 font-semibold">
                ✓ Free shipping applied!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
