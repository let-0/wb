
import React from 'react';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Header />
      <main className="flex-grow pt-24 pb-32">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
