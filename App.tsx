import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Appointment from './components/Appointment';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import AppointmentPage from './components/AppointmentPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (target: string) => {
    if (target === 'home' || target === 'about' || target === 'gallery-page' || target === 'appointment-page') {
      setCurrentPage(target);
      window.scrollTo(0, 0);
    } else if (target.startsWith('#')) {
      // If we are not on home, go to home first
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Allow react to render home then scroll
        setTimeout(() => {
          const element = document.querySelector(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.querySelector(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#d4af37] selection:text-white">
      <Navbar onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <About onMoreClick={() => handleNavigate('about')} />
            <Services />
            <Reviews />
            <Pricing />
            <Appointment onNavigate={handleNavigate} />
            <Gallery />
            <Team />
          </>
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'gallery-page' && <GalleryPage />}
        {currentPage === 'appointment-page' && <AppointmentPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;