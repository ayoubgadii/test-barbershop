import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: "Ali", image: "https://barbershopco.ca/wp-content/uploads/2024/09/Design-sans-titre-24.png" },
  { name: "Christine", image: "https://barbershopco.ca/wp-content/uploads/2024/09/Design-sans-titre-23.png" },
  { name: "Moe", image: "https://barbershopco.ca/wp-content/uploads/2024/09/Design-sans-titre-21.png" },
  { name: "Ranji", image: "https://barbershopco.ca/wp-content/uploads/2024/09/Design-sans-titre-22.png" },
  { name: "Sabi", image: "https://barbershopco.ca/wp-content/uploads/2024/10/11.png" },
  { name: "Med", image: "https://barbershopco.ca/wp-content/uploads/2024/10/42.png" },
  { name: "Roop", image: "https://barbershopco.ca/wp-content/uploads/2024/10/32.png" },
  { name: "Momo", image: "https://barbershopco.ca/wp-content/uploads/2024/10/Design-sans-titre-26.png" },
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display uppercase mb-6"
          >
            Meet Our Experience<br />Barbers
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Our barbers are the heart of Barbershop Co. Each member brings a unique set of skills and a dedication to delivering exceptional grooming services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#d4af37] transition-colors duration-300"></div>
              </div>
              <h3 className="font-heading font-bold text-xl uppercase">{member.name}</h3>
            </motion.div>
          ))}
        </div>
        
         {/* The last Momo large image from original design */}
         <div className="mt-16 flex justify-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center max-w-sm"
             >
                 <img 
                    src="https://barbershopco.ca/wp-content/uploads/2024/10/52.png" 
                    alt="Momo Large" 
                    className="w-full h-96 object-cover mb-4 shadow-xl border-b-8 border-[#d4af37]"
                 />
                 <h3 className="font-heading font-bold text-xl uppercase">Momo</h3>
             </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Team;