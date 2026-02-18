'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">About Daraz</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Press</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help-center" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/track-order" className="hover:text-white">Track Order</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/return-policy" className="hover:text-white">Return Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-white">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>1-800-DARAZ-NOW</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>support@daraz.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
                <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
                <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Commerzze. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white">Terms of Service</Link>
              <Link href="/admin" className="hover:text-white opacity-50 text-xs">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
