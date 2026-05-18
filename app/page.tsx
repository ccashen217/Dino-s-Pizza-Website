'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, MessageCircle, Clock, Mail, ChevronRight, Utensils, Info } from 'lucide-react';
import Image from 'next/image';

export default function DinosPizzaPage() {
  const phoneObj = { display: '(910) 488-6100', link: 'tel:+19104886100' };
  const waObj = { display: '(910) 488-6100', link: 'https://wa.me/19104886100' };
  const mapsLink = 'https://maps.app.goo.gl/X5qNc79NnRpsXwdM7';
  const email = 'dinospizza@aol.com';
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-purple-900 selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image src="/Logo1.svg" alt="Dino's Pizza Logo" fill className="object-contain" unoptimized />
            </div>
            <div className="font-bold text-xl tracking-tight text-white">
              Dino&apos;s Pizza
            </div>
          </div>
          <div className="flex gap-4 items-center">
             <a 
              href={phoneObj.link} 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition"
            >
              <Phone size={16} />
              {phoneObj.display}
            </a>
            <a 
              href={phoneObj.link} 
              className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Order here
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden" id="hero">
          <div className="absolute inset-0 z-0 bg-gray-900/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial="hidden" animate="visible" variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin size={14} />
                Fayetteville, NC
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Perfectly Priced <span className="text-purple-400">Pizzas.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
                Fresh, honest, and local. Serving Fayetteville the best pizza, wings, and desserts down on Andrews Road.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a 
                  href={phoneObj.link}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-md hover:shadow-lg"
                >
                  Order Online Today.
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 w-full max-w-lg md:max-w-none relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-gray-900">
                 <Image 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" 
                  alt="Delicious Fresh Baked Pepperoni Pizza at Dino's" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
              {/* Floating detail badge */}
              <div className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-700">
                <div className="bg-purple-900/40 p-3 rounded-full text-purple-400">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium">Open Tue-Sun</div>
                  <div className="text-white font-bold">4:00 PM – 11:00 PM</div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="py-24 bg-gray-950" id="menu">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Menu</h2>
              <p className="text-gray-400 text-lg">
                We keep things simple and focus on doing what we do best. Quality ingredients and great taste, every time.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { title: 'Pizza', desc: "Perfectly priced, classic pizzas made with our signature crust and fresh toppings.", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop" },
                { title: 'Wings', desc: "Crispy edges, juicy inside. The ultimate companion to any Pizza order.", img: "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?q=80&w=800&auto=format&fit=crop" },
                { title: 'Desserts', desc: "Round off your meal with something sweet. Ask about our current dessert options.", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop" }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeIn}
                  className="relative rounded-2xl overflow-hidden group aspect-[4/5] sm:aspect-square md:aspect-auto md:h-[400px]"
                >
                  <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* --- COMPANY HISTORY SECTION --- */}
        <section className="py-24 bg-gray-900 text-white" id="about">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Our History
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Dino&apos;s Pizza has been in this locations for over 20 years, providing pizza lovers throughout North Cumberland County with tasty specialty pizzas, great prices, the best service, and on-time deliveries. We use only the freshest ingredients for all our menu items and our sauce and dough is prepared daily.
            </p>
          </div>
        </section>

        {/* --- LOCATION & HOURS --- */}
        <section className="py-24 bg-gray-950" id="location">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-3xl shadow-sm border border-gray-800 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Details side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-8">Visit or Contact Us</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-900/30 p-3 rounded-full text-purple-400 shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-1">Address</h4>
                        <p className="text-gray-400 text-lg">
                          150 Andrews Rd<br/>
                          Fayetteville, NC 28311
                        </p>
                        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-purple-400 font-medium mt-2 hover:underline">
                          Get Directions <ChevronRight size={16} />
                        </a>
                      </div>
                    </div>

                    <div className="w-full h-px bg-gray-800"></div>

                    <div className="flex items-start gap-4">
                      <div className="bg-purple-900/30 p-3 rounded-full text-purple-400 shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-1">Hours</h4>
                        <p className="text-gray-400 text-lg">
                          <span className="font-medium text-gray-200">Tue - Sun:</span> 4:00 PM – 11:00 PM<br/>
                          <span className="font-medium text-gray-200">Monday:</span> Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map/Image side - using a conceptual map placeholder for clean look */}
                <div className="bg-gray-800 min-h-[300px] relative overflow-hidden">
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative group">
                    <Image 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                      alt="Map locating Dino's Pizza" 
                      fill 
                      className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gray-950 px-6 py-3 rounded-full shadow-xl font-medium text-white flex items-center gap-2 group-hover:scale-105 transition-transform border border-gray-800">
                          <MapPin size={18} className="text-purple-400" /> Open in Google Maps
                        </div>
                     </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-12 h-12">
                  <Image src="/Logo1.svg" alt="Dino's Pizza Logo" fill className="object-contain" unoptimized />
                </div>
                <div className="font-bold text-2xl tracking-tight text-white">
                  Dino&apos;s Pizza
                </div>
              </div>
              <p className="text-gray-400 text-center md:text-left italic">&quot;Let Dino&apos;s do it.&quot;</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={phoneObj.link} className="flex items-center gap-2 text-gray-300 hover:text-purple-400 font-medium bg-gray-900 px-4 py-2 rounded-full transition border border-gray-800">
                <Phone size={18} /> {phoneObj.display}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-300 hover:text-purple-400 font-medium bg-gray-900 px-4 py-2 rounded-full transition border border-gray-800">
                <Mail size={18} /> Email Us
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            &copy; {new Date().getFullYear()} Dino&apos;s Pizza. All rights reserved. 150 Andrews Rd, Fayetteville, NC 28311.
          </div>
        </div>
      </footer>

    </div>
  );
}
