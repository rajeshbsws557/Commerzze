import { Truck, Clock } from 'lucide-react';

export default function ShippingPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Shipping Policy</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">Last updated: February 18, 2026</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30 flex gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full h-fit text-blue-600 dark:text-blue-400">
                                <Truck size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Standard Shipping</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Delivery in 3-5 business days across major cities.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30 flex gap-4">
                            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full h-fit text-orange-600 dark:text-orange-400">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Express Delivery</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Next-day delivery available for select locations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Shipping Rates & Estimates</h2>
                            <p className="mb-4">
                                Shipping charges for your order will be calculated and displayed at checkout.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead className="bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 uppercase">
                                        <tr>
                                            <th className="px-6 py-3 border border-gray-200 dark:border-slate-600">Location</th>
                                            <th className="px-6 py-3 border border-gray-200 dark:border-slate-600">Standard Shipping</th>
                                            <th className="px-6 py-3 border border-gray-200 dark:border-slate-600">Express Shipping</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-6 py-4 border border-gray-200 dark:border-slate-600">Kathmandu Valley</td>
                                            <td className="px-6 py-4 border border-gray-200 dark:border-slate-600">Rs. 50</td>
                                            <td className="px-6 py-4 border border-gray-200 dark:border-slate-600">Rs. 100</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 border border-gray-200 dark:border-slate-600">Outside Valley</td>
                                            <td className="px-6 py-4 border border-gray-200 dark:border-slate-600">Rs. 100 - Rs. 150</td>
                                            <td className="px-6 py-4 border border-gray-200 dark:border-slate-600">Not Available</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Order Processing Time</h2>
                            <p>
                                All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Shipment Confirmation & Tracking</h2>
                            <p>
                                You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Damages</h2>
                            <p>
                                Commerzze is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
