import { Search, Package, RefreshCw, CreditCard, User } from 'lucide-react';
import Link from 'next/link';

export default function HelpCenterPage() {
    const topics = [
        { icon: Package, title: 'Orders & Shipping', link: '/shipping-policy' },
        { icon: RefreshCw, title: 'Returns & Refunds', link: '/return-policy' },
        { icon: CreditCard, title: 'Payment & Pricing', link: '/faq' },
        { icon: User, title: 'Account Settings', link: '/profile' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    How can we help you?
                </h1>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mb-12">
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-daraz-orange focus:border-transparent outline-none shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>

                {/* Quick Topics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {topics.map((topic, index) => (
                        <Link
                            key={index}
                            href={topic.link}
                            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700 text-center group"
                        >
                            <topic.icon className="w-8 h-8 text-daraz-orange mb-3 group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-gray-900 dark:text-white">{topic.title}</span>
                        </Link>
                    ))}
                </div>

                {/* FAQs Section */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-8">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">How do I track my order?</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                You can track your order by clicking on the "Track Order" link in the footer or by visiting your profile page.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">What is your return policy?</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                We offer a 14-day return policy for most items. Please visit our Return Policy page for more details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
