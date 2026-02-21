
import React from 'react';

const ProductSection: React.FC = () => {
  return (
    <section className="max-w-[1024px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        
        {/* Left Column: Intro & Visual */}
        <div className="space-y-12">
          {/* Main Product Image - Optimized for the vibrant red tomatoes provided */}
          <div className="group relative aspect-[4/3] bg-gray-50 w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&q=80&w=1200" 
              alt="鹽水鹹地番茄" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              鹽水鹹地．<br />完熟番茄醬
            </h2>
            <div className="w-12 h-[1px] bg-black mb-8"></div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              來自台南鹽水的獨特風味。利用鹹地種植出的番茄，手工熬煮，保留純粹的酸甜層次。每一口都是土地的餽贈與時間的熟成。
            </p>
          </div>
        </div>

        {/* Right Column: Pre-order Info */}
        <div className="md:mt-24 space-y-12">
          <div className="space-y-8">
            <div className="border-t border-gray-100 pt-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 block mb-2">Pre-order Schedule / 預購排程</span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Start Date</h4>
                  <p className="text-lg font-medium">2026.03.01</p>
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 text-red-500">End Date</h4>
                  <p className="text-lg font-medium text-red-600">2026.03.15</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 block mb-2">Shipping / 發貨詳情</span>
              <p className="text-lg font-medium">截止後 7-14 個工作天內發貨</p>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                手工限量生產，堅持完熟採收。這份等待，是為了換取最真實的自然風味。
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 block mb-2">Action / 下單</span>
              <div className="space-y-6">
                <button className="group relative w-full md:w-auto px-16 py-5 bg-black text-white text-xs font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]">
                  <span className="relative z-10">立即參與預購</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
                </button>
                <div className="flex items-center space-x-3 text-[10px] text-gray-400 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span>目前開放限量預約中</span>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="border border-gray-100 p-8 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">The Saline Soil / 關於鹹地</h3>
            <p className="text-sm text-gray-500 leading-relaxed italic">
              「在困境中，生命會找到最甜美的出口。」
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              鹽水地區特有的鹽分土壤，迫使番茄根部在逆境中成長，進而濃縮了極高濃度的天然糖分與有機酸。這不是普通的番茄醬，而是大地、氣候與農人智慧交織出的精華。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
