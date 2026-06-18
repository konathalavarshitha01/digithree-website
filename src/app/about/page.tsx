'use client';

import { motion } from 'motion/react';
import { ChevronRight, Globe, Zap } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="DigiThree Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition font-medium">Home</Link>
            <Link href="/#services" className="text-gray-700 hover:text-amber-600 transition font-medium">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-amber-600 transition font-medium">Portfolio</Link>
            <Link href="/about" className="text-amber-600 font-bold">About</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-amber-600 transition font-medium">Contact</Link>
            <Link href="/contact" className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2 rounded-full font-bold transition block">
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
              About <span className="text-amber-400">DigiThree</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a team of digital marketing experts dedicated to helping businesses grow online with proven strategies and creative campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Helping Your Business Grow Online
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                With proven digital marketing strategies and creative campaigns, we help businesses attract more customers and increase sales online. From brand awareness to lead generation, our team focuses on delivering real, measurable growth.
              </p>
              <div className="space-y-4">
                {[
                  'Social Media Marketing',
                  'Lead Generation Campaigns',
                  'Website & SEO Optimization'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                      <ChevronRight size={16} className="text-black" />
                    </div>
                    <p className="text-gray-800 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden h-96 shadow-xl"
            >
              <img 
                src="/digital-growth.jpg" 
                alt="Digital Growth Platform" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-black mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Strategy',
                  description: 'With years of digital marketing experience, our expert team creates proven strategies that attract customers, generate quality leads, and grow your business online.'
                },
                {
                  title: 'Affordable Solutions',
                  description: 'We provide affordable marketing solutions designed for startups and small businesses, helping you generate more leads and increase sales without wasting your budget.'
                },
                {
                  title: 'Real Results',
                  description: 'Our data-driven marketing campaigns focus on real business growth, delivering measurable results, consistent leads, and long-term success for your brand.'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 rounded-2xl p-8 hover:shadow-xl hover:border-amber-300 transition"
                >
                  <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-amber-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-12"
          >
            <h2 className="text-5xl font-bold text-black mb-4">5+</h2>
            <p className="text-xl text-gray-700 mb-6">Years of Experience in Digital Marketing</p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our digital marketing expertise helps startups, small businesses, and local brands grow online with affordable strategies. We focus on generating real leads, increasing visibility, and driving consistent sales through data-driven campaigns designed to deliver measurable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to work with us?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Let's discuss how we can help your business grow online.
            </p>
            <button className="bg-black hover:bg-gray-900 text-amber-400 px-8 py-4 rounded-full transition font-bold text-lg shadow-lg">
              Get In Touch
            </button>
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
