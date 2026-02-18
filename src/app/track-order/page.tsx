'use client';

import { useState } from 'react';
import { Package, Truck } from 'lucide-react';

export default function TrackOrderPage() {
    const [orderId, setOrderId] = useState('');
    const [isTracking, setIsTracking] = useState(false);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        if (!orderId) return;
        setIsTracking(true);
        // Mimic API call
        setTimeout(() => setIsTracking(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-12">
                    <Package className="w-16 h-16 text-daraz-orange mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Track Your Order</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Enter your Order ID to see the current status of your shipment.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 mb-8">
                    <form onSubmit={handleTrack} className="flex gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder="Enter Order ID (e.g., ORD-123456)"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-daraz-orange outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isTracking}
                            className="px-6 py-3 bg-daraz-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isTracking ? 'Tracking...' : 'Track'}
                        </button>
                    </form>
                </div>

                {/* Mock Result for Demo */}
                {orderId && !isTracking && (
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 animate-fade-in">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
                                <Truck size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Order #{orderId}</h3>
                                <p className="text-sm text-green-600 dark:text-green-400">In Transit</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="w-0.5 h-full bg-green-200 dark:bg-green-900/30 my-1"></div>
                                </div>
                                <div className="pb-4">
                                    <p className="font-medium text-gray-900 dark:text-white">Out for Delivery</p>
                                    <p className="text-xs text-gray-500">Today, 8:30 AM</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-300 dark:bg-slate-600 rounded-full"></div>
                                    <div className="w-0.5 h-full bg-gray-200 dark:bg-slate-700 my-1"></div>
                                </div>
                                <div className="pb-4">
                                    <p className="font-medium text-gray-500 dark:text-gray-400">Shipped</p>
                                    <p className="text-xs text-gray-500">Yesterday, 4:20 PM</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-300 dark:bg-slate-600 rounded-full"></div>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-500 dark:text-gray-400">Order Placed</p>
                                    <p className="text-xs text-gray-500">Feb 14, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
