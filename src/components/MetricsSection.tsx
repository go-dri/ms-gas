import React from 'react';

interface MetricsSectionProps {
  onNavigateTab: (tab: string) => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ onNavigateTab }) => {
  return (
    <section className="w-full bg-[#f8fafc] py-16 px-6 lg:px-12 -mt-4 relative z-20">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1: 8개 지역 */}
          <div 
            onClick={() => onNavigateTab('equipment')}
            className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-slate-100 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs text-[#005fae] font-bold uppercase tracking-wider">
                Regional Hubs
              </span>
              <div className="w-10 h-10 rounded-full bg-[#eaedff] flex items-center justify-center text-[#005fae] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Space_Grotesk'] text-5xl font-bold text-[#000f22] tracking-tight">8</span>
                <span className="font-['Plus_Jakarta_Sans'] text-2xl text-[#000f22] font-bold">개</span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-lg text-[#131b2e] font-semibold mt-1">
                전국 주요 전략 지역
              </p>
              <p className="text-xs text-[#43474d] mt-2 leading-relaxed">
                수도권 및 영남, 호남권 전역을 망라하는 생산 및 물류 권역
              </p>
            </div>
          </div>

          {/* Metric 2: 17개 영업소 */}
          <div 
            onClick={() => onNavigateTab('support')}
            className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-slate-100 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs text-[#2563EB] font-bold uppercase tracking-wider">
                Supply Branches
              </span>
              <div className="w-10 h-10 rounded-full bg-[#d2e4ff]/60 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">storefront</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Space_Grotesk'] text-5xl font-bold text-[#000f22] tracking-tight">17</span>
                <span className="font-['Plus_Jakarta_Sans'] text-2xl text-[#000f22] font-bold">개</span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-lg text-[#131b2e] font-semibold mt-1">
                최첨단 공급 영업소
              </p>
              <p className="text-xs text-[#43474d] mt-2 leading-relaxed">
                실시간 수급 예측 기반의 촘촘한 직배송 스테이션 네트워크
              </p>
            </div>
          </div>

          {/* Metric 3: 10개국 해외 네트워크 */}
          <div 
            onClick={() => onNavigateTab('services')}
            className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-slate-100 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs text-[#005fae] font-bold uppercase tracking-wider">
                Global Reach
              </span>
              <div className="w-10 h-10 rounded-full bg-[#eaedff] flex items-center justify-center text-[#005fae] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Space_Grotesk'] text-5xl font-bold text-[#000f22] tracking-tight">10</span>
                <span className="font-['Plus_Jakarta_Sans'] text-2xl text-[#000f22] font-bold">개국</span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-lg text-[#131b2e] font-semibold mt-1">
                글로벌 파트너십
              </p>
              <p className="text-xs text-[#43474d] mt-2 leading-relaxed">
                아시아 및 글로벌 메이저 가스 공급체인과 강력한 수출입 연계
              </p>
            </div>
          </div>

          {/* Metric 4: 935억 매출액 */}
          <div 
            onClick={() => onNavigateTab('about')}
            className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-slate-100 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs text-[#F5A623] font-bold uppercase tracking-wider">
                Annual Revenue
              </span>
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-[#F5A623] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Space_Grotesk'] text-5xl font-bold text-[#000f22] tracking-tight">935</span>
                <span className="font-['Plus_Jakarta_Sans'] text-2xl text-[#000f22] font-bold">억 원</span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-lg text-[#131b2e] font-semibold mt-1">
                2024 GAAP 기준 연매출
              </p>
              <p className="text-xs text-[#43474d] mt-2 leading-relaxed">
                반도체 및 탄소중립 신에너지 분야 고성장 기반 탄탄한 재무구조
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
