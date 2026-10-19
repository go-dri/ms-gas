import React from 'react';
import { GAS_PRODUCTS, GasProduct } from '../data/gasData';

interface ProductsSectionProps {
  onSelectProduct: (product: GasProduct) => void;
  onOpenCatalog: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onOpenCatalog
}) => {
  return (
    <section className="w-full bg-[#faf8ff] py-20 lg:py-24 px-6 lg:px-12" id="products-section">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#005fae]"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#005fae] tracking-widest uppercase font-bold">
                PRODUCT PORTFOLIO
              </span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#000f22] font-bold tracking-tight">
              다양한 산업분야를 아우르는<br className="hidden sm:inline" /> 고부가가치형 가스산업
            </h2>
            <p className="text-base text-[#43474d] mt-3 max-w-xl leading-relaxed">
              첨단 반도체 소재부터 조선, 철강, 정밀 의료까지 최첨단 고순도 정밀 가스를 안정적으로 공급합니다.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCatalog}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#000f22] text-white hover:bg-[#005fae] text-sm font-semibold transition-all shadow-sm cursor-pointer self-start md:self-auto"
          >
            <span>전체 카탈로그 다운로드</span>
            <span className="material-symbols-outlined text-[18px]">download</span>
          </button>
        </div>

        {/* 5-Card High-Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {GAS_PRODUCTS.map((prod) => {
            const isCenterpiece = prod.highlighted;

            if (isCenterpiece) {
              return (
                <div 
                  key={prod.id}
                  className="group relative rounded-2xl bg-[#0A192F] text-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden lg:-translate-y-2 border border-white/10"
                >
                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#00D5A5]/20 rounded-full blur-xl pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F243A] text-[#00D5A5] flex items-center justify-center mb-6 group-hover:bg-[#00D5A5] group-hover:text-[#0A192F] transition-colors duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-[28px]">{prod.icon}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#00D5A5] animate-pulse"></span>
                      <span className="font-['Space_Grotesk'] text-xs text-[#00D5A5] font-semibold uppercase">
                        {prod.categoryNumber}
                      </span>
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-white font-bold mb-3">{prod.name}</h3>
                    <p className="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                      {prod.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prod.tags.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/10 font-['Space_Grotesk'] text-xs text-[#c6e7ff]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(prod)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#00D5A5] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>자세히 보기</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={prod.id}
                className="group relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-slate-100"
              >
                <div className={`absolute top-0 right-0 w-28 h-28 ${prod.badgeBg} rounded-bl-full -z-0 opacity-50 group-hover:scale-125 transition-transform duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${prod.badgeBg} ${prod.badgeText} flex items-center justify-center mb-6 group-hover:bg-[#005fae] group-hover:text-white transition-colors duration-300 shadow-sm`}>
                    <span className="material-symbols-outlined text-[28px]">{prod.icon}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-['Space_Grotesk'] text-xs ${prod.badgeText} font-semibold uppercase`}>
                      {prod.categoryNumber}
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#000f22] font-bold mb-3">{prod.name}</h3>
                  <p className="text-sm text-[#43474d] line-clamp-3 mb-4 leading-relaxed">
                    {prod.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prod.tags.map((t, idx) => (
                      <span key={idx} className={`px-2 py-0.5 rounded ${prod.badgeBg} font-['Space_Grotesk'] text-xs ${prod.badgeText}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(prod)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#005fae] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>자세히 보기</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
