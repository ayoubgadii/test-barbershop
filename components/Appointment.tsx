import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface AppointmentProps {
  onNavigate: (page: string) => void;
}

const Appointment: React.FC<AppointmentProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-24 bg-[#111] overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 opacity-40">
         <img 
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop" 
            alt="Barber Background" 
            className="w-full h-full object-cover"
         />
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#d4af37]"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#d4af37]"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl mx-auto border-4 border-white/10 p-8 md:p-12 backdrop-blur-sm bg-black/30"
        >
           <h3 className="text-[#d4af37] font-heading tracking-[0.2em] uppercase text-sm md:text-lg mb-4 font-bold">
              Look Sharp, Feel Sharp
           </h3>
           <h2 className="text-white font-display text-4xl md:text-6xl uppercase leading-none mb-8">
              Ready For Your<br/>Next Transformation?
           </h2>
           <p className="text-gray-300 text-sm md:text-base mb-10 leading-relaxed max-w-xl mx-auto">
              Don't settle for anything less than the best. Our master barbers are ready to give you the premium grooming experience you deserve. Slots fill up fast!
           </p>
           
           <button 
              onClick={() => onNavigate('appointment-page')}
              className="bg-[#d4af37] text-black font-heading font-bold uppercase py-4 px-10 tracking-widest hover:bg-white transition-colors inline-flex items-center gap-3 text-lg"
           >
              <Calendar size={20} /> Book Appointment Now
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;