
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 py-12 bg-white">
      <div className="max-w-[1024px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-[10px] uppercase tracking-widest text-gray-400">
          © 2024 Yanshui Saline Soil Ripe Tomato. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Facebook</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Instagram</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Shop Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
