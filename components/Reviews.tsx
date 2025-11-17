import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Review } from '../types';

const reviewsData: Review[] = [
  {
    text: "These guys are absolutely amazing. They go above and beyond to take care of their clients.",
    author: "Jack Robet",
    role: "Barber shop Sherwood Park Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Awesome haircut from the fantastic hairstylist. They cut my boys hair with care and not in a hurry. Well recommended!",
    author: "Alene Roxas",
    role: "Barber Shop Leduc - Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "I recently visited Barber Shop Camrose and was really impressed with the quality of service. The barbers are highly professional and did a great job with my haircut. The atmosphere is welcoming and the value for money is excellent. I highly recommend this shop to anyone looking for top-notch haircuts and beard trims in Camrose",
    author: "Carte Car",
    role: "Barber Shop Camrose - Local Guide Customer",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

const Reviews: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [page]);

  // Calculate the current review index based on the page
  const reviewIndex = ((page % reviewsData.length) + reviewsData.length) % reviewsData.length;
  const currentReview = reviewsData[reviewIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
           src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
           alt="Dark wood texture" 
           className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Razor Image Overlay - Decorative */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-30 hidden lg:block pointer-events-none">
          <img src="https://pngimg.com/d/razor_PNG48.png" alt="Straight Razor" className="h-full w-full object-contain rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-5xl font-display uppercase text-white mb-12">Our Customer Review</h2>
            
            <div className="max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="w-full"
                    >
                        <div className="flex flex-col items-center">
                            <Quote size={48} className="text-[#d4af37] mb-6 fill-current opacity-80" />
                            
                            <p className="text-xl md:text-2xl text-gray-300 italic font-light mb-10 leading-relaxed px-4 md:px-12">
                            "{currentReview.text}"
                            </p>
                            
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-sm opacity-50"></div>
                                    <img 
                                        src={currentReview.image} 
                                        alt={currentReview.author} 
                                        className="w-20 h-20 rounded-full border-2 border-[#d4af37] relative z-10 object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-heading font-bold text-lg tracking-widest uppercase">{currentReview.author}</h4>
                                    <p className="text-[#d4af37] text-sm uppercase tracking-wider font-bold">{currentReview.role}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-8 mt-4">
                <button 
                    onClick={() => paginate(-1)}
                    className="p-4 rounded-full bg-gray-800 text-white hover:bg-[#d4af37] hover:text-black transition-all hover:scale-110 shadow-lg border border-gray-700 hover:border-[#d4af37]"
                    aria-label="Previous review"
                >
                    <ArrowLeft size={24} />
                </button>
                <button 
                    onClick={() => paginate(1)}
                    className="p-4 rounded-full bg-gray-800 text-white hover:bg-[#d4af37] hover:text-black transition-all hover:scale-110 shadow-lg border border-gray-700 hover:border-[#d4af37]"
                    aria-label="Next review"
                >
                    <ArrowRight size={24} />
                </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;