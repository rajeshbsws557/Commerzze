import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-daraz-orange">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">+1 234 567 890</p>
                                        <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am-6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-daraz-orange">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">support@commerzze.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-daraz-orange">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">Office</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            123 Commerce St, Kathmandu<br />
                                            Nepal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-daraz-orange outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-daraz-orange outline-none" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-daraz-orange outline-none resize-none" placeholder="How can we help?" />
                            </div>
                            <button type="button" className="w-full py-2 bg-daraz-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
