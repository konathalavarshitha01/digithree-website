'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    contactReason: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        contactReason: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="DigiThree Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition font-medium">Home</Link>
            <Link href="/#services" className="text-gray-700 hover:text-amber-600 transition font-medium">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-amber-600 transition font-medium">Portfolio</Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">About</Link>
            <Link href="/contact" className="text-amber-600 font-bold">Contact</Link>
            <Link href="/contact" className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2 rounded-full font-bold transition block">
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
              Get In <span className="text-amber-400">Touch</span>
            </h1>
            <p className="text-lg text-gray-600">
              Have a project in mind? Let's work together to grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Container - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.0857369755426!2d83.25189!3d17.6869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39266c7c7c7c7d%3A0x3a39266c7c7c7c7d!2sPendurthi%2CVisakhapatnam!5e0!3m2!1sen!2sin!4v1234567890"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Submit a Request</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border-2 border-green-400 rounded-xl text-green-700 font-semibold text-center"
                  >
                    ✓ Thank you! We've received your message. We'll contact you soon!
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First Name & Last Name - Two Column */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="firstName" className="block text-gray-900 font-semibold mb-2 text-sm">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 transition placeholder-gray-500"
                        placeholder="First name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.22 }}
                    >
                      <label htmlFor="lastName" className="block text-gray-900 font-semibold mb-2 text-sm">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 transition placeholder-gray-500"
                        placeholder="Last name"
                      />
                    </motion.div>
                  </div>

                  {/* Email & Phone - Two Column */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.24 }}
                    >
                      <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 text-sm">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 transition placeholder-gray-500"
                        placeholder="your@company.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.26 }}
                    >
                      <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2 text-sm">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 transition placeholder-gray-500"
                        placeholder="+91 9550277643"
                      />
                    </motion.div>
                  </div>

                  {/* Company & Contact Reason - Two Column */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28 }}
                    >
                      <label htmlFor="company" className="block text-gray-900 font-semibold mb-2 text-sm">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 transition placeholder-gray-500"
                        placeholder="Your company"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="contactReason" className="block text-gray-900 font-semibold mb-2 text-sm">
                        Contact Reason *
                      </label>
                      <select
                        id="contactReason"
                        name="contactReason"
                        value={formData.contactReason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 transition"
                      >
                        <option value="">Select reason...</option>
                        <option value="website-development">Website Development</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="google-ads">Google & Facebook Ads</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 }}
                  >
                    <label htmlFor="message" className="block text-gray-900 font-semibold mb-2 text-sm">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 transition resize-none placeholder-gray-500"
                      placeholder="Tell us more about your project and what you're looking for..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-amber-400 hover:bg-amber-500 disabled:bg-amber-300 text-black px-6 py-3 rounded-lg font-bold text-base transition flex items-center justify-center gap-2 shadow-md mt-8"
                  >
                    <Send size={18} />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-gray-600 text-xs text-center pt-2">
                    * Required fields. We respect your privacy and will never spam you.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Contact Info Section Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <h3 className="text-2xl font-bold text-black mb-10 text-center">Other Ways to Reach Us</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  items: ['+91 9550277643', '+91 9346690152'],
                  color: 'from-blue-50 to-transparent border-blue-200'
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  items: ['Near Pendurthi Junction', 'Visakhapatnam, India'],
                  color: 'from-red-50 to-transparent border-red-200'
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  items: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
                  color: 'from-green-50 to-transparent border-green-200'
                }
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className={`bg-gradient-to-r ${info.color} rounded-xl p-6 border hover:shadow-lg transition text-center`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-amber-400/20">
                        <Icon className="text-amber-600" size={28} />
                      </div>
                    </div>
                    <h4 className="text-black font-bold text-lg mb-3">{info.title}</h4>
                    <div className="space-y-1">
                      {info.items.map((item, j) => (
                        <p key={j} className="text-gray-700 text-sm leading-relaxed">{item}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">DigiThree</h3>
              <p className="text-sm leading-relaxed">We help businesses grow online with result-driven digital marketing strategies.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#services" className="hover:text-white transition">Google & Facebook Ads</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">Website Development</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">Social Media Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">📞 +91 9550277643</p>
              <p className="text-sm">📞 +91 9346690152</p>
              <p className="text-sm">📍 Near Pendurthi Junction, Visakhapatnam</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2024 DigiThree Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
