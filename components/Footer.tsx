import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-green-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          
          <div>
            <h3 className="font-syne font-black text-3xl">NEW BITES</h3>
            <p className="font-dm text-green-200 mt-2">Every Bite Tells a Story.</p>
          </div>

          <div className="flex gap-8 font-dm font-medium text-sm">
            <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#menu" className="hover:text-yellow-400 transition-colors">Menu</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-dm text-white/40 gap-4">
          <p>© 2025 New Bites. Kanipakam, AP. All rights reserved.</p>
          <p className="text-white/60">📦 Parcel ₹10 extra on all orders</p>
        </div>
      </div>
    </footer>
  );
};