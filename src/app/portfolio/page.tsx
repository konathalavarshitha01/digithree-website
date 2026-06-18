'use client';

import { motion } from 'motion/react';
import { Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Golden Eye Inflatables',
    category: 'Branding & Visibility',
    description: 'Sky-level brand visibility with inflatable advertising solutions - Turn heads, attract customers.',
    imageUrl: '/portfolio1.jpg'
  },
  {
    id: 2,
    title: 'SDS Educational Consultancy',
    category: 'Educational Marketing',
    description: 'ECET 2026 coaching promotion with 100% pass guarantee - Expert guidance, proven results.',
    imageUrl: '/portfolio2.jpg'
  },
  {
    id: 3,
    title: 'KNR Furniture',
    category: 'Service Marketing',
    description: 'Mattress repair service promotion with foam changing, re-covering, and reshaping services.',
    imageUrl: '/portfolio3.jpg'
  },
  {
    id: 4,
    title: 'Aadhyaadhvika Infra Group',
    category: 'Real Estate Marketing',
    description: 'Construction and real estate campaign - Premium projects starting from ₹1799 per sq.ft.',
    imageUrl: '/portfolio4.jpg'
  },
  {
    id: 5,
    title: 'Vidhata Solar Systems',
    category: 'Energy Solutions Marketing',
    description: 'Solar power business marketing - Help businesses save on energy costs with solar solutions.',
    imageUrl: '/portfolio5.jpg'
  }
];

export default function Portfolio() {
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
            <Link href="/portfolio" className="text-amber-600 font-bold">Portfolio</Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">About</Link>
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
              Our <span className="text-amber-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See our stunning projects and case studies showcasing how we've helped businesses grow online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-300 transition group cursor-pointer"
              >
                {/* Project Image Area */}
                <div className="h-64 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <p className="text-amber-600 text-sm font-bold uppercase tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <button className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition group/btn">
                    View Details
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
              { number: '250%', label: 'Avg. Traffic Growth' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="text-5xl font-bold text-amber-600 mb-2">{stat.number}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
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
              Want to see your project here?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Let's create something amazing together. Get in touch to discuss your next project.
            </p>
            <button className="bg-black hover:bg-gray-900 text-amber-400 px-8 py-4 rounded-full transition font-bold text-lg shadow-lg">
              Start Your Project
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
