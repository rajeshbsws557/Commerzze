import { RefreshCw, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function ReturnPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Return Policy</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">Last updated: February 18, 2026</p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
                            <Clock className="w-10 h-10 text-daraz-orange mx-auto mb-4" />
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">14-Day Returns</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">You have 14 days from the date of delivery to return your item.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
                            <RefreshCw className="w-10 h-10 text-daraz-orange mx-auto mb-4" />
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Easy Process</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Initiate a return online and schedule a pickup or drop-off.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
                            <CheckCircle className="w-10 h-10 text-daraz-orange mx-auto mb-4" />
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Full Refund</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Get a full refund to your original payment method or wallet.</p>
                        </div>
                    </div>

                    <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Return Eligibility</h2>
                            <p className="mb-4">To be eligible for a return, your item must be:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Unused and in the same condition that you received it.</li>
                                <li>In the original packaging with all tags, labels, and accessories included.</li>
                                <li>Accompanied by the receipt or proof of purchase.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Non-Returnable Items</h2>
                            <p className="mb-4">Certain items cannot be returned for hygiene or safety reasons, including:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <XCircle size={16} className="text-red-500" />
                                    <span>Perishable goods (food, flowers, newspapers)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <XCircle size={16} className="text-red-500" />
                                    <span>Intimate apparel and swimwear</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <XCircle size={16} className="text-red-500" />
                                    <span>Health and personal care items</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <XCircle size={16} className="text-red-500" />
                                    <span>Gift cards and downloadable software products</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. How to Initiate a Return</h2>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Log in to your account and go to "My Orders".</li>
                                <li>Select the order containing the item you wish to return.</li>
                                <li>Click on "Request Return" and follow the instructions to print your return shipping label.</li>
                                <li>Pack the item securely and attach the shipping label.</li>
                                <li>Drop off the package at the nearest designated courier location or schedule a pickup.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Refunds</h2>
                            <p>
                                Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
                            </p>
                            <p className="mt-2">
                                If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
