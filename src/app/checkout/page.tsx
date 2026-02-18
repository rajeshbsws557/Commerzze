'use client';

import { useState } from 'react';
import { useCartStore, useOrderStore, useAuthStore } from '@/store';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Calendar } from 'lucide-react';

export default function CheckoutPage() {
    const { items, getTotalPrice, clearCart } = useCartStore();
    const { addOrder } = useOrderStore();
    const { user } = useAuthStore();
    const amount = getTotalPrice();

    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiry: '',
        cvc: '',
        name: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Create Order
        const newOrder: any = { // Using any to bypass strict Date type mismatch during creation if needed, or strict:
            id: `ORD-${Math.floor(Math.random() * 10000)}`,
            userId: user?.id || 'guest',
            items: items,
            total: amount,
            status: 'pending',
            createdAt: new Date(),
            customerName: formData.name || 'Guest', // specific to Admin view requirement? Admin view used "customer" field.
        };

        // Add to store
        addOrder(newOrder);

        // Force success for demo purposes
        setIsSuccess(true);
        setIsProcessing(false);
        clearCart();
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-none dark:border dark:border-slate-700 p-8 max-w-md w-full"
                >
                    <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">Your order has been placed successfully. You will receive a confirmation email shortly.</p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full bg-daraz-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                    >
                        Continue Shopping
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-none dark:border dark:border-slate-700 overflow-hidden p-8">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Checkout</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Enter your payment details below</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Card Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="0000 0000 0000 0000"
                                className="block w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-daraz-red focus:border-daraz-red pl-11 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                required
                            />
                            <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Expiry */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    className="block w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-daraz-red focus:border-daraz-red pl-11 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
                                    value={formData.expiry}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Calendar className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            </div>
                        </div>
                        {/* CVC */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVC</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="cvc"
                                    placeholder="123"
                                    className="block w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-daraz-red focus:border-daraz-red pl-11 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
                                    value={formData.cvc}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Name on Card */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cardholder Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="block w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-daraz-red focus:border-daraz-red dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg flex justify-between items-center mt-6">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Total Amount:</span>
                        <span className="text-xl font-bold text-daraz-red">₨ {amount.toLocaleString()}</span>
                    </div>

                    <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-daraz-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isProcessing ? (
                            <>Processing...</>
                        ) : (
                            <>
                                <Lock size={18} /> Pay Now
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <Lock size={12} /> Secure 256-bit SSL encrypted payment
                    </p>
                </div>
            </div>
        </div>
    );
}
