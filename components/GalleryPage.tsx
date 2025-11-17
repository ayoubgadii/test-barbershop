import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const galleryImages = [
  "https://barbershopco.ca/wp-content/uploads/2024/09/Design-sans-titre-18.png",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.29.40.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/86484686.png",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.29.11.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/Design-sans-titre-19.png",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-09.43.06-1.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-21-at-05.40.56.jpeg",
  "https://barbershopco.ca/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-09.43.08-1.jpeg"
];

const GalleryPage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setIsZoomed(false);
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setIsZoomed(false);
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const toggleZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const resetZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="bg-[#111] min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137d9c8?q=80&w=2070&auto=format&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#d4af37] font-heading tracking-[0.3em] uppercase text-sm md:text-base mb-4">
              Portfolio
            </h3>
            <h1 className="text-white font-display text-5xl md:text-7xl uppercase tracking-wide">
              Our Masterpieces
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid relative group overflow-hidden rounded-sm border-b-4 border-transparent hover:border-[#d4af37] transition-colors duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery Item ${index}`}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 cursor-pointer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer pointer-events-none">
                 <div className="border border-[#d4af37] p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="text-[#d4af37] w-8 h-8" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white z-50 p-2"
              onClick={closeLightbox}
            >
              <X size={40} />
            </button>

            {/* Nav Buttons */}
            <button
              className="absolute left-4 md:left-8 text-gray-400 hover:text-[#d4af37] z-50 p-4"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-4 md:right-8 text-gray-400 hover:text-[#d4af37] z-50 p-4"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            {/* Zoom Controls */}
            <div 
              className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/50 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm shadow-xl" 
              onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={toggleZoom}
                    className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-2"
                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                    {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                    <span className="text-xs font-heading tracking-widest hidden md:inline">{isZoomed ? "ZOOM OUT" : "ZOOM IN"}</span>
                </button>
                
                {isZoomed && (
                    <>
                        <div className="w-[1px] h-4 bg-white/20"></div>
                        <button 
                            onClick={resetZoom}
                            className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-2"
                            title="Reset Zoom"
                        >
                            <RotateCcw size={18} />
                            <span className="text-xs font-heading tracking-widest hidden md:inline">RESET</span>
                        </button>
                    </>
                )}
            </div>

            {/* Image Area */}
            <div 
              className="relative w-full h-full flex items-center justify-center overflow-hidden" 
              ref={containerRef}
              onClick={(e) => e.stopPropagation()} // Clicking background shouldn't close if dragging fails, but let's keep standard lightbox feel where bg click closes, img click zooms.
            >
                <motion.img
                    key={selectedImageIndex}
                    src={galleryImages[selectedImageIndex]}
                    alt="Full screen"
                    
                    // Animation state
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                        opacity: 1, 
                        scale: isZoomed ? 2.5 : 1,
                        x: isZoomed ? undefined : 0,
                        y: isZoomed ? undefined : 0
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    
                    // Drag functionality
                    drag={isZoomed}
                    dragConstraints={containerRef}
                    dragElastic={0.1}
                    
                    // Interactions
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleZoom();
                    }}
                    
                    className={`max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] border-b-4 border-[#d4af37] transition-all duration-200 ${isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
                    style={{ touchAction: "none" }}
                />
            </div>
            
            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 font-heading tracking-[0.2em] pointer-events-none">
                {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;