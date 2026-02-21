
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1024px] mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-sm font-bold tracking-widest uppercase">Yanshui Tomato</h1>
        <nav className="hidden md:flex space-x-8 text-xs font-medium uppercase tracking-wider text-gray-500">
          <a href="#" className="hover:text-black transition-colors">產品故事</a>
          <a href="#" className="hover:text-black transition-colors">預購詳情</a>
          <a href="#" className="hover:text-black transition-colors">聯絡我們</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
