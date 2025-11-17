import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Scissors, MapPin, Send, Phone, AlertCircle } from 'lucide-react';

const locations = [
  { name: 'Sherwood Park', phone: '17804161885', label: 'Sherwood Park (+1 780-416-1885)' },
  { name: 'Blackfalds', phone: '15876210450', label: 'Blackfalds (+1 587-621-0450)' },
  { name: 'Camrose', phone: '17806738333', label: 'Camrose (+1 780-673-8333)' },
  { name: 'Leduc', phone: '17803281781', label: 'Leduc (+1 780-328-1781)' },
  { name: 'Gadi Number Test', phone: '212609298209', label: 'Gadi Number Test (+212 609-298209)' }
];

const services = [
  'Haircut',
  'Beard Trim',
  'Hot Towel Shave',
  'Haircut & Beard Combo',
  'Kid Haircut',
  'Senior Haircut',
  'Face Waxing',
  'Hair Coloring'
];

const AppointmentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: locations[0].phone,
    service: services[0],
    date: '',
    time: ''
  });
  
  // Generate available time slots based on the selected day of the week
  const availableTimeSlots = useMemo(() => {
    if (!formData.date) return [];

    // Create a date object for the selected date (using T00:00:00 to ensure local time)
    const dateObj = new Date(formData.date + 'T00:00:00');
    const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    let endHour = 19; // Default closing time 7 PM (19:00)

    if (dayOfWeek === 0) { // Sunday
      endHour = 17; // 5 PM
    } else if (dayOfWeek === 6) { // Saturday
      endHour = 18; // 6 PM
    } else { // Monday - Friday
      endHour = 19; // 7 PM
    }

    const startHour = 9; // Opens at 9 AM
    const slots = [];

    for (let hour = startHour; hour < endHour; hour++) {
      // Format hours for display (e.g., "09:00 AM")
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      
      // Slot :00
      slots.push(`${displayHour}:00 ${ampm}`);
      
      // Slot :30
      slots.push(`${displayHour}:30 ${ampm}`);
    }

    return slots;
  }, [formData.date]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If date changes, we might need to reset time if it becomes invalid, 
    // but for now we just update the state and let the user pick a new time if needed.
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const locationObj = locations.find(l => l.phone === formData.location);
    const locationName = locationObj ? locationObj.name : 'Unknown';
    
    // Format message for WhatsApp
    const message = `*New Appointment Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Location:* ${locationName}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Preferred Time:* ${formData.time}%0A%0A` +
      `Please confirm availability.`;

    const whatsappUrl = `https://wa.me/${formData.location}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* CSS Hack to make the native calendar picker indicator fill the input */}
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-[#111] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
            alt="Barber Tools"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        </div>
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#d4af37] font-heading tracking-[0.3em] uppercase text-sm md:text-base mb-4">
              Booking
            </h3>
            <h1 className="text-white font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mb-6">
              Book Your Visit
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm tracking-widest uppercase font-heading">
              <span>Home</span>
              <span className="text-[#d4af37]">•</span>
              <span className="text-white">Appointment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden">
              
            {/* Left Side - Info & Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-[#1a1a1a] text-white p-12 flex flex-col justify-between"
            >
              <div className="absolute inset-0 z-0 opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                  />
              </div>
              
              <div className="relative z-10">
                  <h3 className="text-[#d4af37] font-heading font-bold uppercase tracking-widest mb-2">Why Book Online?</h3>
                  <h2 className="text-4xl font-display uppercase mb-6">Skip The Line,<br/>Save Time.</h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                      Our online booking system connects you directly with our shop via WhatsApp. It's the fastest way to secure your spot with your favorite barber.
                  </p>
                  
                  <div className="space-y-4">
                      <div className="flex items-start gap-4">
                          <div className="bg-[#d4af37] p-2 rounded-full text-black mt-1">
                              <Clock size={18} />
                          </div>
                          <div>
                              <h4 className="font-bold font-heading uppercase">Real-time Availability</h4>
                              <p className="text-sm text-gray-500">Check when we are free instantly.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="bg-[#d4af37] p-2 rounded-full text-black mt-1">
                              <AlertCircle size={18} />
                          </div>
                          <div>
                              <h4 className="font-bold font-heading uppercase">Direct Confirmation</h4>
                              <p className="text-sm text-gray-500">Get a response directly from our staff.</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-gray-800">
                  <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-bold">Need immediate help?</p>
                  <div className="flex items-center gap-2 text-xl font-display text-[#d4af37]">
                      <Phone size={24} />
                      <span>+1 (780) 416-1885</span>
                  </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 bg-[#f9f7f2] p-8 md:p-12"
            >
              <h2 className="text-3xl font-display uppercase text-black mb-2">Appointment Details</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below to start your booking conversation.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                      <label className="text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                          <User size={14} className="text-[#d4af37]" /> Full Name
                      </label>
                      <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full bg-white border border-gray-300 text-black px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                  </div>

                  {/* Location & Service Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                              <MapPin size={14} className="text-[#d4af37]" /> Location
                          </label>
                          <select 
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              className="w-full bg-white border border-gray-300 text-black px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none"
                          >
                              {locations.map((loc) => (
                                  <option key={loc.phone} value={loc.phone}>{loc.label}</option>
                              ))}
                          </select>
                      </div>

                      <div className="space-y-2">
                          <label className="text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                              <Scissors size={14} className="text-[#d4af37]" /> Service
                          </label>
                          <select 
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full bg-white border border-gray-300 text-black px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none"
                          >
                              {services.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                              ))}
                          </select>
                      </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                              <Calendar size={14} className="text-[#d4af37]" /> Preferred Date
                          </label>
                          <div className="relative group">
                              <input 
                                  type="date" 
                                  name="date"
                                  required
                                  min={new Date().toISOString().split('T')[0]}
                                  value={formData.date}
                                  onChange={handleChange}
                                  className="peer w-full bg-white border border-gray-300 text-black px-4 py-3 pr-12 focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer uppercase relative z-10"
                              />
                              <div 
                                className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400 peer-focus:text-[#d4af37] group-hover:text-[#d4af37] transition-colors pointer-events-none z-20"
                              >
                                  <Calendar size={20} />
                              </div>
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                              <Clock size={14} className="text-[#d4af37]" /> Preferred Time
                          </label>
                          <select 
                              name="time"
                              required
                              value={formData.time}
                              onChange={handleChange}
                              disabled={!formData.date}
                              className="w-full bg-white border border-gray-300 text-black px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none disabled:bg-gray-200 disabled:text-gray-500 cursor-pointer"
                          >
                              <option value="">
                                {formData.date ? "Select a time slot" : "Select a date first"}
                              </option>
                              {availableTimeSlots.map((slot) => (
                                  <option key={slot} value={slot}>{slot}</option>
                              ))}
                          </select>
                      </div>
                  </div>

                  {/* Opening Hours Display */}
                  <div className="bg-white/50 border border-gray-200 p-4 text-xs text-gray-500">
                    <p className="font-bold uppercase text-black mb-2 flex items-center gap-2">
                      <Clock size={12} className="text-[#d4af37]" /> Opening Hours
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                       <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                          <span>Mon - Fri</span>
                          <span className="font-bold text-black">9am - 7pm</span>
                       </div>
                       <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                          <span>Saturday</span>
                          <span className="font-bold text-black">9am - 6pm</span>
                       </div>
                       <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-bold text-black">9am - 5pm</span>
                       </div>
                    </div>
                  </div>

                  <button 
                      type="submit"
                      className="w-full bg-black text-white font-heading font-bold uppercase py-4 px-8 tracking-widest hover:bg-[#d4af37] hover:text-black transition-colors flex items-center justify-center gap-3 mt-6 border border-transparent hover:border-black"
                  >
                      <Send size={18} /> Confirm & Book via WhatsApp
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center mt-4">
                    By clicking "Book via WhatsApp", you will be redirected to a chat with the selected barbershop location.
                  </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;