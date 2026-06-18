'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Globe, ShoppingCart, Share2, Search, PenTool, Video, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'We create modern, fast, and mobile-friendly websites designed to represent your brand and convert visitors into customers. Our websites are optimized for performance, user experience, and lead generation to help businesses grow online.'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Websites',
    description: 'We build powerful ecommerce websites that make it easy to sell products online. Our secure, scalable stores are designed to improve shopping experiences, increase conversions, and help businesses generate consistent online revenue.'
  },
  {
    icon: ShoppingCart,
    title: 'Google & Facebook Ads',
    description: 'Our targeted advertising campaigns help businesses reach the right audience at the right time. We create data-driven ad strategies that generate quality leads, increase brand visibility, and deliver measurable returns.'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'We manage and grow your social media presence with engaging content, strategic campaigns, and audience targeting. Our approach builds brand awareness, attracts potential customers, and drives consistent engagement for your business.'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'We design eye-catching graphics that strengthen your brand identity and attract attention online. From social media creatives to marketing materials, our designs help businesses communicate their message clearly and professionally.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Our SEO strategies help your website rank higher on search engines and attract organic traffic. We optimize content, keywords, and technical performance to bring consistent visitors and long-term growth for your business.'
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'We create engaging videos that capture attention and increase audience engagement. Our editing services help businesses produce professional promotional videos, social media reels, and marketing content that drives results.'
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'We create valuable and engaging content that builds trust with your audience and strengthens your brand authority. Our content strategies attract customers, improve visibility, and support long-term marketing success.'
  }
];

const testimonials = [
  {
    name: 'Sunitha',
    company: 'Manasaku manishi thodu, Hyderabad',
    text: 'Working with Digithree Marketing completely transformed our online presence. Their strategies helped us generate quality leads and attract more customers. Within a few months, our business visibility and sales improved significantly',
    rating: 5
  },
  {
    name: 'Ravi Kumar',
    company: 'Ravi CCTV Networks, Hyderabad',
    text: 'Digithree Marketing helped us run targeted advertising campaigns that brought real customers to our business. Their team understands marketing deeply and focuses on results that truly help small businesses grow',
    rating: 5
  },
  {
    name: 'Ayr Laptop',
    company: 'Ayr Laptop services Hyderabad',
    text: 'Our sales increased after working with Digithree Marketing. Their website optimization and advertising strategies improved our conversions and helped us reach the right customers online.',
    rating: 5
  },
  {
    name: 'Sri Vinayaka Electricals',
    company: 'Vinayaka Electricals, Hyderabad',
    text: 'The Digithree team created powerful marketing campaigns for our brand. Their creative ideas and data-driven approach helped us generate leads consistently and build strong visibility in our industry.',
    rating: 5
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="DigiThree Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#services" className="text-gray-700 hover:text-amber-600 transition font-medium">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-amber-600 transition font-medium">Portfolio</Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">About</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-amber-600 transition font-medium">Testimonials</Link>
            <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition font-medium">Contact</Link>
            <Link href="/contact" className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2 rounded-full font-bold transition block">
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-24 min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-bg-new.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)',
                letterSpacing: '-0.02em'
              }}
            >
              Grow faster with
              <br />
              <span className="text-amber-400">Digi3</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-semibold"
              style={{
                textShadow: '0 3px 15px rgba(0, 0, 0, 0.7), 0 1px 8px rgba(0, 0, 0, 0.5)'
              }}
            >
              Helping businesses grow with creative strategies, social media marketing, websites and high converting ad campaigns
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4 flex-wrap justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-full transition font-bold text-lg shadow-xl"
              >
                Get a Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition font-bold text-lg backdrop-blur-sm"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Complete Digital Marketing Services</h2>
            <p className="text-xl text-gray-600">Explore our powerful digital marketing services designed to attract customers, generate quality leads, and help your business grow online.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-amber-400 hover:bg-gradient-to-br hover:from-amber-100 hover:to-amber-50">
                    {/* Accent line that appears on hover */}
                    <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-amber-300 rounded-t-2xl w-0 group-hover:w-full transition-all duration-500"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-amber-400/25 to-amber-300/15 rounded-lg p-3 group-hover:from-amber-400/40 group-hover:to-amber-300/25 transition-all duration-300 flex-shrink-0">
                        <Icon className="text-amber-700 group-hover:text-amber-800 transition-colors duration-300" size={40} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-black font-bold mb-3 text-xl group-hover:text-amber-700 transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden h-96 shadow-xl"
            >
              <img 
                src="/digital-growth-home.jpg" 
                alt="Digital Growth Platform" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">Hear from businesses we've helped succeed online</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setCurrentTestimonial(i)}
                className={`rounded-2xl p-8 border-2 cursor-pointer transition ${
                  currentTestimonial === i
                    ? 'border-amber-400 bg-amber-50'
                    : 'border-gray-200 bg-white hover:border-amber-300'
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to grow your business online?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Contact us today for a free marketing consultation and discover strategies that generate leads and increase sales.
            </p>
            <button className="bg-black hover:bg-gray-900 text-amber-400 px-8 py-4 rounded-full transition font-bold text-lg inline-flex items-center gap-2 group shadow-lg">
              Get A Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
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
                <li><a href="#" className="hover:text-white transition">Google & Facebook Ads</a></li>
                <li><a href="#" className="hover:text-white transition">Website Development</a></li>
                <li><a href="#" className="hover:text-white transition">Social Media Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div id="contact">
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
