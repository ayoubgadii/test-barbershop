import React from 'react';
import { Scissors, User, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  onMoreClick: () => void;
}

const About: React.FC<AboutProps> = ({ onMoreClick }) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      {/* Mobile/Tablet spacer for the hero overlap */}
      <div className="h-20 lg:h-32"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-8">
              About Barbershop Co.
            </h2>
            <div className="flex gap-8 mb-8">
                <div className="w-1 bg-[#d4af37] h-auto"></div>
                <div>
                     <p className="text-gray-500 mb-4 text-sm font-bold uppercase tracking-widest">
                    Our mission
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                    Is to create a welcoming environment where every client feels valued and leaves looking their best. At Barbershop Co., we believe that a great haircut is more than just a style—it's an experience. With multiple locations across Canada, our skilled barbers are dedicated to providing top-notch grooming services tailored to each client's unique needs. Whether you're looking for a classic cut, a modern style, or a relaxing shave, we've got you covered.
                    </p>
                </div>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <Scissors className="text-[#d4af37] w-8 h-8" />
                <span className="font-heading font-bold text-xl uppercase">8 Years of Experience</span>
              </div>
              <div className="flex items-center gap-4">
                <User className="text-[#d4af37] w-8 h-8" />
                <span className="font-heading font-bold text-xl uppercase">Professional Stylers</span>
              </div>
              <div className="flex items-center gap-4">
                <Star className="text-[#d4af37] w-8 h-8" />
                <span className="font-heading font-bold text-xl uppercase">100% Branded Product</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button 
                onClick={onMoreClick}
                className="bg-[#d4af37] text-white font-heading font-bold uppercase py-4 px-8 tracking-widest hover:bg-black transition-colors"
              >
                More About Us
              </button>
              
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                        <img 
                            key={i}
                            src={`https://picsum.photos/seed/user${i}/100/100`}
                            alt="User"
                            className="w-12 h-12 rounded-full border-2 border-white"
                        />
                    ))}
                 </div>
                 <div className="font-heading font-bold">
                    <span className="block text-xl">99+</span>
                    <span className="text-xs uppercase text-gray-500">Satisfied Customer</span>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
                <img 
                    src="https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.29.32.jpeg" 
                    alt="Kid Haircut" 
                    className="w-full h-auto object-cover shadow-2xl"
                />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-10 -right-10 w-full h-full border-4 border-[#d4af37] z-0 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;