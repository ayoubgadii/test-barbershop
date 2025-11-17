import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.06.36.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.29.40.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-09.43.07.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.29.38.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-09.43.09.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.28.56.jpeg"
];

const Gallery: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const openLightbox = (i: number) => {
    setIndex(i);
    setDirection(0);
  };

  const closeLightbox = () => {
    setIndex(null);
  };

  const nextImage = () => {
    if (index === null) return;
    setDirection(1);
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    if (index === null) return;
    setDirection(-1);
    setIndex((index - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (index === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section id="gallery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative h-80 overflow-hidden group"
        >
          <img 
            src={src} 
            alt={`Gallery ${i + 1}`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <button 
                onClick={() => openLightbox(i)}
                className="text-white font-heading font-bold tracking-widest border-2 border-[#d4af37] px-6 py-2 uppercase hover:bg-[#d4af37] hover:text-black transition-colors cursor-pointer"
             >
                View
             </button>
          </div>
        </motion.div>
      ))}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {index !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={40} />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-gray-400 hover:text-[#d4af37] transition-colors z-50 p-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={48} />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[90vh] p-4 overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img 
                  key={index}
                  src={images[index]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 250, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute w-full h-full object-contain shadow-2xl"
                  alt="Gallery Lightbox"
                />
              </AnimatePresence>
            </div>

            <button 
              className="absolute right-4 md:right-10 text-gray-400 hover:text-[#d4af37] transition-colors z-50 p-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={48} />
            </button>
            
            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 font-heading tracking-widest">
              {index + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;