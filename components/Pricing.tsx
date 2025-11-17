import React from 'react';
import { motion } from 'framer-motion';
import { PriceItem } from '../types';

const prices: PriceItem[] = [
  { service: "Trim Your Beard", description: "Achieve a timeless and refined look with our expertly tailored classic haircut.", price: "$10.00" },
  { service: "Trim Your Hair", description: "Achieve a timeless and refined look with our expertly tailored classic haircut.", price: "$19.00" },
  { service: "Beard Treatment", description: "Achieve a timeless and refined look with our expertly tailored classic haircut.", price: "$20.00" },
  { service: "Color Your Beard", description: "Enjoy a smooth, luxurious shave with our traditional hot lather technique.", price: "$30.00" },
  { service: "Wax Your Face", description: "Achieve a timeless and refined look with our expertly tailored classic haircut.", price: "$55.00" },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display uppercase mb-6"
          >
            Our Barber Pricing
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 max-w-2xl mx-auto text-sm"
          >
            At Barbershop Co., we offer competitive and transparent pricing to ensure you receive top-quality grooming services without breaking the bank. From classic haircuts and beard trims to specialized coloring and waxing, our affordable rates cater to every style and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {prices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-baseline mb-2 border-b border-gray-200 pb-2 border-dotted">
                <h3 className="font-heading font-bold text-xl uppercase group-hover:text-[#d4af37] transition-colors">{item.service}</h3>
                <span className="font-heading font-bold text-[#d4af37] text-lg">FROM {item.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;