import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Haircutting",
    description: "Precision cuts tailored to your style, from classic to trendy looks.",
    icon: "https://barbershopco.ca/wp-content/uploads/2024/09/Icon-1.png"
  },
  {
    title: "Beard Shaving",
    description: "Smooth, flawless shaves using top-quality products for ultimate comfort.",
    icon: "https://barbershopco.ca/wp-content/uploads/2024/09/Icon-4.png"
  },
  {
    title: "Coloring Services",
    description: "Enhance your look with vibrant or subtle hair color expertly applied.",
    icon: "https://barbershopco.ca/wp-content/uploads/2024/09/Icon-3.png"
  },
  {
    title: "Beard Waxing",
    description: "Shape and define your beard for a polished, sophisticated appearance.",
    icon: "https://barbershopco.ca/wp-content/uploads/2024/09/Icon-2.png"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#f9f7f2] relative">
      {/* Background Texture simulation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row mb-16 items-end gap-8">
            <div className="lg:w-1/2">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display uppercase mb-4 leading-none"
                >
                    Services We Can Offer<br/>For You.
                </motion.h2>
            </div>
            <div className="lg:w-1/2 pb-2">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-sm leading-relaxed"
                >
                    We pride ourselves on offering a comprehensive range of premium grooming services tailored to meet the unique needs of each client. Whether you're looking for a classic haircut, a modern fade, expert beard styling, or a relaxing hot towel shave, our skilled barbers deliver precision and style in a welcoming atmosphere.
                </motion.p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-[#d4af37]"
            >
              <div className="mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed min-h-[80px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;