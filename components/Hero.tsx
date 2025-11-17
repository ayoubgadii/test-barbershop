import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (target: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen w-full bg-[#111]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
          alt="Barbershop Interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h3 className="text-[#d4af37] font-heading tracking-[0.2em] uppercase text-sm md:text-lg flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-[#d4af37]"></span>
            World-Class Men's Haircuts
            <span className="h-[1px] w-12 bg-[#d4af37]"></span>
          </h3>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-none mb-6 shadow-black drop-shadow-lg"
        >
          Best Barbershop
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            In Your Town
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white px-1 py-1 max-w-md w-full mx-auto mt-8 transform -skew-x-6"
        >
             <button 
               onClick={() => onNavigate('#about')}
               className="w-full bg-white text-black border-2 border-black font-heading font-bold uppercase py-3 px-6 hover:bg-black hover:text-white transition-colors tracking-widest skew-x-6 text-sm md:text-base"
             >
            Visit Us Today & Get Wax Nose + Ear For Free
          </button>
        </motion.div>
      </div>

      {/* Info Bar - Absolute at bottom overlapping */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full z-20 translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Call Us */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 border-t-4 border-[#d4af37] text-center relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#d4af37] p-3 rounded-full">
                <Phone className="text-black w-6 h-6" />
              </div>
              <h3 className="text-white font-heading text-xl uppercase mb-4 mt-2">Call Us :</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sherwood Park : +1 (780) 416-1885<br />
                Blackfalds : +1 (587) 621-0450<br />
                Camrose : +1 (780) 673-8333<br />
                Leduc : +1 (780) 328-1781
              </p>
            </motion.div>

            {/* Address */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 border-t-4 border-[#d4af37] text-center relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#d4af37] p-3 rounded-full">
                <MapPin className="text-black w-6 h-6" />
              </div>
              <h3 className="text-white font-heading text-xl uppercase mb-4 mt-2">Address (Canada) :</h3>
              <div className="text-gray-400 text-sm leading-relaxed flex flex-col gap-1">
                <a href="https://maps.app.goo.gl/GkdCDwAPPmQBW8mw8" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
                  17 Sioux Rd, Sherwood Park, AB TBA 4C7
                </a>
                <a href="https://maps.app.goo.gl/pupNLJ2fRybGRtcq5" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
                  6037 Parkwood Rd, Blackfalds, AB
                </a>
                <a href="https://maps.app.goo.gl/YRUwP558ZizxcpTi7" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
                  6800 48 Ave Unit 164, Camrose, AB
                </a>
                <a href="https://maps.app.goo.gl/ZTvR6vC26BfV8gxX7" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
                  5210 50th Ave, Leduc, AB
                </a>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 border-t-4 border-[#d4af37] text-center relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#d4af37] p-3 rounded-full">
                <Clock className="text-black w-6 h-6" />
              </div>
              <h3 className="text-white font-heading text-xl uppercase mb-4 mt-2">Opening Hours :</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Monday - Friday : 9 AM - 7 PM<br />
                Saturday : 9 AM - 6 PM<br />
                Sunday : 9 AM - 5 PM
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;