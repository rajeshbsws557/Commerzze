'use client';

import { useEffect, useState } from 'react';
import {
    ArrowUpRight,
    DollarSign,
    Package,
    ShoppingCart,
    Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOrderStore, useProductStore } from '@/store';
import { Order } from '@/types';

export default function AdminDashboard() {
    const { getStats, getRecentOrders, orders } = useOrderStore();
    const { products } = useProductStore();
    const [mounted, setMounted] = useState(false);
    const [stats, setStats] = useState({
        revenue: 0,
        orders: 0,
        products: 0,
        users: 1250, // Mock users for now
    });
    const [recentOrders, setRecentOrders] = useState<Order[]>([]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const { revenue, totalOrders } = getStats();
        setStats({
            revenue,
            orders: totalOrders,
            products: products.length,
            users: 1250,
        });
        setRecentOrders(getRecentOrders(5));
    }, [orders, products, mounted, getStats, getRecentOrders]);

    if (!mounted) return <div className="p-6 dark:text-gray-300">Loading Dashboard...</div>;

    const statsCards = [
        { title: 'Total Revenue', value: `₨ ${stats.revenue.toLocaleString()}`, icon: DollarSign, color: 'bg-green-500' },
        { title: 'Total Orders', value: stats.orders, icon: ShoppingCart, color: 'bg-blue-500' },
        { title: 'Products', value: stats.products, icon: Package, color: 'bg-orange-500' },
        { title: 'Active Users', value: stats.users, icon: Users, color: 'bg-purple-500' },
    ];

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Real-time Updates Active</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsCards.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.color} p-3 rounded-lg text-white`}>
                                <stat.icon size={24} />
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                +2.5% <ArrowUpRight size={16} className="text-green-500 ml-1" />
                            </span>
                        </div>
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Orders</h2>
                </div>
                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-gray-500 dark:text-gray-400 text-sm border-b border-gray-100 dark:border-slate-700">
                                    <th className="pb-3 font-medium">Order ID</th>
                                    <th className="pb-3 font-medium">Customer</th>
                                    <th className="pb-3 font-medium">Total</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Time</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <AnimatePresence initial={false}>
                                    {recentOrders.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="py-8 text-center text-gray-500 dark:text-gray-400">
                                                No orders yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        recentOrders.map((order) => (
                                            <motion.tr
                                                key={order.id}
                                                initial={{ opacity: 0, x: -20, height: 0 }}
                                                animate={{ opacity: 1, x: 0, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="border-b border-gray-50 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                                            >

                                                <td className="py-4 font-medium dark:text-gray-300">{order.id}</td>
                                                <td className="py-4 text-gray-600 dark:text-gray-300">{order.customerName || 'Guest'}</td>
                                                <td className="py-4 font-medium dark:text-gray-200">₨ {order.total.toLocaleString()}</td>
                                                <td className="py-4">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'delivered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                                                        order.status === 'processing' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                                                            'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 text-gray-400">
                                                    {new Date(order.createdAt).toLocaleTimeString()}
                                                </td>
                                            </motion.tr>
                                        ))
                                    )}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
