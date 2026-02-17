import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-white rounded-[3rem] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row gap-12 overflow-hidden">
          
          <div className="flex-1 space-y-8">
            <h2 className="font-syne font-black text-5xl text-green-dark leading-none">Come Visit Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-mid/10 p-3 rounded-full text-green-mid shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-xl text-text-dark">Address</h4>
                  <p className="font-dm text-text-mid text-lg">Kanipakam, Patnam,<br/>Andhra Pradesh 517131</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-mid/10 p-3 rounded-full text-green-mid shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-xl text-text-dark">Phone</h4>
                  <p className="font-dm text-text-mid text-lg">+91 79893 08995</p>
                  <p className="font-dm text-text-mid text-lg">+91 94904 17740</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-mid/10 p-3 rounded-full text-green-mid shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-xl text-text-dark">Opening Hours</h4>
                  <p className="font-dm text-text-mid text-lg">Daily: 10:00 AM onwards</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <span className="bg-red-accent text-white px-4 py-2 rounded-full font-dm font-bold text-sm">🎂 Kids Birthday Friendly</span>
               <span className="bg-green-mid text-white px-4 py-2 rounded-full font-dm font-bold text-sm">🍽️ All You Can Eat</span>
            </div>
          </div>

          <div className="flex-1 h-[400px] bg-stone-200 rounded-3xl overflow-hidden relative border-4 border-white shadow-inner">
             {/* Emulated Map */}
             <iframe 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               src="https://maps.google.com/maps?q=Kanipakam%2C%20Patnam%2C%20AP%20517131&t=&z=13&ie=UTF8&iwloc=&output=embed"
               className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border-2 border-stone-300 rounded-3xl mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};