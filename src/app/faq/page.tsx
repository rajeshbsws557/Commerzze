import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
    const faqs = [
        {
            question: "How do I check my order status?",
            answer: "You can track your order by clicking on 'Track Order' in the footer or by logging into your account and visiting the 'My Orders' section."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept Visa, MasterCard, e-Sewa, Khalti, and Cash on Delivery (COD) for eligible locations."
        },
        {
            question: "Can I return a product?",
            answer: "Yes, you can return a product within 14 days of delivery if it meets our return criteria. Please visit our Return Policy page for more details."
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping times vary by location. Typically, orders within Kathmandu valley are delivered within 24-48 hours, while outside valley orders may take 3-5 days."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Currently, we only ship within Nepal. We are working on expanding our services to international locations in the future."
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Find answers to common questions about your shopping experience.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                            <details className="group">
                                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                    <h3 className="font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown size={20} className="text-gray-500" />
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-slate-700 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
