'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store';
import { User, Package, Clock, ChevronRight, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfilePage() {
    const { user, logout } = useAuthStore();
    const [activeTab, setActiveTab] = useState<'info' | 'orders'>('info');

    // Mock Orders Data
    const orders = [
        {
            id: 'ORD-7782-XJ',
            date: '2024-02-15',
            total: 3500,
            status: 'In Transit',
            items: ['Wireless Headset Pro', 'USB-C Cable'],
        },
        {
            id: 'ORD-9921-MC',
            date: '2024-02-01',
            total: 1200,
            status: 'Delivered',
            items: ['Cotton T-Shirt'],
        },
    ];

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center dark:text-gray-200">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Please Log In</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">You need to be logged in to view your profile.</p>
                    <a href="/login" className="bg-daraz-red text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition-colors">Log In</a>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 dark:text-white">My Account</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 space-y-2">
                    <button
                        onClick={() => setActiveTab('info')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'info' ? 'bg-daraz-red text-white' : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700'
                            }`}
                    >
                        <User size={20} />
                        <span className="font-medium">Personal Info</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'orders' ? 'bg-daraz-red text-white' : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700'
                            }`}
                    >
                        <Package size={20} />
                        <span className="font-medium">My Orders</span>
                    </button>
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors bg-white dark:bg-slate-800 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    {activeTab === 'info' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                                <User className="text-daraz-red" /> Personal Information
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-100 outline-none border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                            defaultValue={user.name}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-100 outline-none border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white disabled:opacity-70"
                                            defaultValue={user.email}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-100 outline-none border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                            placeholder="+92 300 1234567"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Shipping Address</label>
                                        <textarea
                                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-100 outline-none border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white h-32 resize-none"
                                            placeholder="Enter your shipping address"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button className="bg-daraz-red text-white px-8 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-sm">
                                    Save Changes
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'orders' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                                <Package className="text-daraz-red" /> Order History
                            </h2>

                            {orders.map((order) => (
                                <div key={order.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
                                    <div className="flex flex-wrap justify-between items-start mb-4 border-b border-gray-50 dark:border-slate-700 pb-4">
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white">{order.id}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                <Clock size={14} /> Placed on {order.date}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg text-daraz-red">₨ {order.total.toLocaleString()}</p>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${order.status === 'Delivered' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                                <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-50 dark:border-slate-700 flex justify-end">
                                        <button className="text-daraz-red font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            View Details <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
