import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
                 <img 
                    src="https://barbershopco.ca/wp-content/uploads/2024/09/cropped-PhotoRoom_20211230_132015-1-105x107-1.png"
                    alt="Barbershop Co."
                    className="w-full h-full object-cover"
                 />
               </div>
               <h3 className="font-heading text-2xl font-bold">Barbershop Co.</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Experience the Ultimate Grooming at Barbershop Co.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/BarberShopLeduc/" target="_blank" rel="noopener noreferrer" className="bg-[#d4af37] p-2 text-black hover:bg-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/barbershopcamrose/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-white p-2 text-black hover:bg-[#d4af37] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h4 className="font-heading text-xl uppercase mb-6 font-bold">Our Location</h4>
            <ul className="text-gray-500 text-sm space-y-3">
              <li>
                <a href="https://maps.app.goo.gl/GkdCDwAPPmQBW8mw8" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors block">
                  17 Sioux Rd, Sherwood Park, AB TBA 4C7
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/YRUwP558ZizxcpTi7" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors block">
                  6800 48 Ave Unit 164, Camrose, AB
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/pupNLJ2fRybGRtcq5" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors block">
                  6037 Parkwood Rd, Blackfalds, AB
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/ZTvR6vC26BfV8gxX7" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors block">
                  5210 50th Ave, Leduc, AB
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-xl uppercase mb-6 font-bold">Opening Hours</h4>
            <ul className="text-gray-500 text-sm space-y-3">
              <li className="flex justify-between"><span>Mon - Fri :</span> <span>9am - 7pm</span></li>
              <li className="flex justify-between"><span>Sat :</span> <span>9am - 6pm</span></li>
              <li className="flex justify-between"><span>Sun :</span> <span>9am - 5pm</span></li>
            </ul>
          </div>

          {/* Appointment Calls */}
          <div>
            <h4 className="font-heading text-xl uppercase mb-6 font-bold">Appointment Calls</h4>
            <ul className="text-gray-500 text-sm space-y-3">
              <li>Camrose : +1 (780) 673-8333</li>
              <li>Sherwood : +1 (780) 416-1885</li>
              <li>Blackfalds : +1 (587) 621-0450</li>
              <li>Leduc : +1 (780) 328-1781</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-gray-600 text-xs">
          <p>Copyright © 2025 Barbershop Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;