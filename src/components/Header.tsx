'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, ShoppingCart, Search, Menu, X, User as UserIcon, ChevronRight } from 'lucide-react';
import { useCartStore, useWishlistStore, useAuthStore } from '@/store';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const pathname = usePathname();
  const cartItems = useCartStore((state) => state.getTotalItems());
  const wishlistItems = useWishlistStore((state) => state.items.length);
  const { isAuthenticated, user } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname?.startsWith('/admin')) return null;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md dark:shadow-none dark:border-b dark:border-slate-800">
      {/* Top bar - Darker, more premium red/slate */}
      <div className="bg-slate-900 text-gray-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Official Store</span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Free Shipping on Orders Over $50</span>
          </div>
          <div className="hover:text-white cursor-pointer transition-colors">Customer Service: support@commerzze.com</div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-4 md:py-5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 md:gap-8">

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-daraz-red transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="bg-gradient-to-br from-daraz-red to-red-600 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl shadow-sm group-hover:shadow-md transition-all">
                C
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-daraz-red to-red-800 bg-clip-text text-transparent hidden sm:block tracking-tight">
                COMMERZZE
              </span>
            </Link>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <div className="flex w-full relative group">
                <input
                  type="text"
                  placeholder="Search 100+ million products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 pl-5 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-daraz-red transition-all text-sm w-full"
                />
                <Link
                  href={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="absolute right-1 top-1 bottom-1 bg-daraz-red text-white px-4 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
                >
                  <Search size={18} />
                </Link>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-2 md:gap-4 shrink-0">

              <ThemeToggle />

              <Link
                href="/wishlist"
                className="flex flex-col items-center gap-1 text-gray-500 hover:text-daraz-red dark:text-gray-400 dark:hover:text-daraz-red transition-colors relative group p-1"
              >
                <div className="relative">
                  <Heart size={22} strokeWidth={2} />
                  {mounted && wishlistItems > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-daraz-red text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white dark:border-slate-900">
                      {wishlistItems}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium hidden lg:block uppercase tracking-wide">Wishlist</span>
              </Link>

              <Link
                href="/cart"
                className="flex flex-col items-center gap-1 text-gray-500 hover:text-daraz-red dark:text-gray-400 dark:hover:text-daraz-red transition-colors relative group p-1"
              >
                <div className="relative">
                  <ShoppingCart size={22} strokeWidth={2} />
                  {mounted && cartItems > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-daraz-red text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white dark:border-slate-900">
                      {cartItems}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium hidden lg:block uppercase tracking-wide">Cart</span>
              </Link>

              {/* User Account */}
              {isAuthenticated && user ? (
                <div className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-gray-700 ml-2">
                  <Link href="/profile" className="hidden lg:block text-right cursor-pointer group">
                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-daraz-red transition-colors">Welcome</p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-none group-hover:text-daraz-red transition-colors">{user.name}</p>
                  </Link>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-2 bg-red-50 text-daraz-red px-4 py-2 rounded-full hover:bg-daraz-red hover:text-white transition-all ml-2 dark:bg-red-900/20 dark:hover:bg-daraz-red"
                >
                  <UserIcon size={18} />
                  <span className="font-semibold text-sm">Login</span>
                </Link>
              )}
            </div>
          </div>

          {/* Search bar for mobile (visible only on small screens) */}
          <div className="md:hidden mt-4 pb-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-daraz-red"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Premium look */}
      <nav className="bg-white border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-8 text-sm font-medium">
            <li>
              <Link href="/" className="block py-3 text-gray-600 hover:text-daraz-red border-b-2 border-transparent hover:border-daraz-red transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-products" className="block py-3 text-gray-600 hover:text-daraz-red border-b-2 border-transparent hover:border-daraz-red transition-all">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/deals" className="block py-3 text-gray-600 hover:text-daraz-red border-b-2 border-transparent hover:border-daraz-red transition-all">
                Best Deals
              </Link>
            </li>
            <li>
              <Link href="/new-arrivals" className="block py-3 text-gray-600 hover:text-daraz-red border-b-2 border-transparent hover:border-daraz-red transition-all">
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 right-0 bg-white border-t shadow-xl md:hidden z-40 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 space-y-1">
            <Link
              href="/"
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-daraz-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home <ChevronRight size={16} />
            </Link>
            <Link
              href="/all-products"
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-daraz-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products <ChevronRight size={16} />
            </Link>
            <Link
              href="/deals"
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-daraz-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Best Deals <ChevronRight size={16} />
            </Link>
            <Link
              href="/new-arrivals"
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-daraz-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals <ChevronRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
