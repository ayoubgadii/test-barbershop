import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Award, Users, MapPin, Clock, Shield, TicketPercent } from 'lucide-react';
import Team from './Team';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#111] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
            alt="Barbershop Tools"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center container mx-auto px-4 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#d4af37] font-heading tracking-[0.3em] uppercase text-sm md:text-base mb-4">
              Since 2016
            </h3>
            <h1 className="text-white font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mb-6 max-w-5xl mx-auto">
              A Smooth Barber Experience In Your Town
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm tracking-widest uppercase font-heading">
              <span>Home</span>
              <span className="text-[#d4af37]">•</span>
              <span className="text-white">About</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-5xl md:text-7xl font-display uppercase text-[#1a1a1a] mb-6">
                    " Groom Like A King "
                </h2>
                <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
                <p className="font-heading font-bold text-gray-500 uppercase tracking-widest">
                    Ceo & Founder BARBERSHOP.co
                </p>
            </motion.div>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 shadow-2xl">
                <img 
                  src="https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-09.43.07.jpeg" 
                  alt="Barber Working" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#d4af37] z-0 hidden md:block"></div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex flex-col justify-center"
            >
              <div className="mb-10">
                  <p className="text-gray-600 leading-relaxed text-lg mb-6 italic">
                    At Barbershop Co., we believe that a great haircut is more than just a style—it’s an experience. Founded with a passion for excellence in men’s grooming, our barbershop has become a trusted name in the Canadian barbershop community.
                  </p>
              </div>

              <div className="mb-10">
                  <h3 className="text-3xl font-display uppercase mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#1a1a1a] text-white flex items-center justify-center rounded-full text-sm font-bold">01</span>
                    Our Story
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Established in 2016, Barbershop Co. began with a simple mission: to provide top-quality grooming services in a welcoming and professional environment. Starting in Camrose, our dedication to exceptional service and skilled craftsmanship quickly earned us a loyal clientele. Today, we proudly operate multiple locations across Canada, including Blackfalds and Sherwood Park, each maintaining the same high standards that define our brand.
                  </p>
              </div>

              <div>
                  <h3 className="text-3xl font-display uppercase mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#d4af37] text-black flex items-center justify-center rounded-full text-sm font-bold">02</span>
                    Our Mission
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    Is to deliver personalized grooming services that enhance your style and confidence. We strive to create a community where every client feels valued and leaves looking and feeling their best.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Whether you’re seeking a classic cut, a modern fade, or a relaxing shave, our team is here to cater to your unique needs.
                  </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coupon Banner */}
      <section className="py-16 bg-[#d4af37] text-black relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="border-4 border-black p-8 md:p-12 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm"
            >
                <TicketPercent className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl md:text-5xl font-display uppercase mb-4">
                    Get $5 Off + Wax Nose & Ear For Free
                </h2>
                <p className="font-heading font-bold uppercase tracking-widest text-sm opacity-70">
                    *one coupon per customer, offer is for a limited time only.
                </p>
            </motion.div>
         </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Scissors className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-4xl font-display">50k+</h3>
              <p className="text-gray-400 text-sm font-heading uppercase tracking-widest">Haircuts Given</p>
            </div>
            <div className="space-y-2">
              <Users className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-4xl font-display">8+</h3>
              <p className="text-gray-400 text-sm font-heading uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="space-y-2">
              <MapPin className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-4xl font-display">4</h3>
              <p className="text-gray-400 text-sm font-heading uppercase tracking-widest">Locations</p>
            </div>
            <div className="space-y-2">
              <Shield className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-4xl font-display">100%</h3>
              <p className="text-gray-400 text-sm font-heading uppercase tracking-widest">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#f9f7f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">Why Choose Us</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">
               We treat every customer like family. Here is why Barbershop Co. is the preferred choice for gentlemen's grooming.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-10 shadow-lg border-b-4 border-transparent hover:border-[#d4af37] transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#f9f7f2] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                   <Scissors className="w-8 h-8 text-black group-hover:text-[#d4af37] transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold uppercase mb-4">Master Barbers</h3>
                <p className="text-gray-500 leading-relaxed">
                  Our team consists of highly trained professionals who stay updated with the latest trends and traditional techniques to ensure you get the perfect cut every time.
                </p>
             </div>

             <div className="bg-white p-10 shadow-lg border-b-4 border-transparent hover:border-[#d4af37] transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#f9f7f2] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                   <Clock className="w-8 h-8 text-black group-hover:text-[#d4af37] transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold uppercase mb-4">Online Booking</h3>
                <p className="text-gray-500 leading-relaxed">
                  We value your time. Our easy-to-use booking system ensures you can secure your spot at any of our 4 locations without the hassle of waiting in line.
                </p>
             </div>

             <div className="bg-white p-10 shadow-lg border-b-4 border-transparent hover:border-[#d4af37] transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#f9f7f2] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                   <Award className="w-8 h-8 text-black group-hover:text-[#d4af37] transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold uppercase mb-4">Premium Products</h3>
                <p className="text-gray-500 leading-relaxed">
                  We use and sell only top-tier grooming products. From pomades to beard oils, we ensure your hair and skin are treated with the best ingredients available.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Include Team Section */}
      <Team />
    </div>
  );
};

export default AboutPage;