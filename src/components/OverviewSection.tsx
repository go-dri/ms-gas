import React from 'react';

interface OverviewSectionProps {
  onOpenMsds: () => void;
  onNavigateTab: (tab: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onOpenMsds,
  onNavigateTab
}) => {
  return (
    <section className="w-full bg-white py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['Space_Grotesk'] text-xs text-[#005fae] uppercase tracking-widest font-bold">
            CORPORATE TRUST & FUTURE
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#000f22] font-bold mt-2">
            MS가스 Overview
          </h2>
          <p className="text-base text-[#43474d] mt-3 leading-relaxed">
            1974년 창립 이래 반세기를 이어온 안전에 대한 헌신과 친환경 미래 에너지로의 지속 가능한 전환
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bento 1: ESG 경영 (Large Card - 2 Cols) */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-8 lg:p-10 flex flex-col justify-between shadow-lg border border-white/10 group">
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Modern eco-friendly green energy cryogenic ammonia storage spheres and sleek gas processing facility" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAvP7Ixosoi2z6BklVAaNkzyTpP80VbFLU4GdyiwpazGddh63Dva84zuqnx2pqtvEEIKV-v0ooHk_ZywaN_Vw1oNMl_u_nx2gzfYBfAG1o7uRUy4rZV_CCWC6hJ_HVihttf6bNW48XzfMNLVfGwp5KJwgIsiM8U0VwKwm-72RM2Xdn8Plg1EOSFD-2gw_x2ri7SPTbiihkO4-i-Uwhv2qcyYrhcgE0U5AGEiKgaEAgVWM29CWCFzbbkA" 
              />
            </div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D5A5]/20 text-[#00D5A5] font-['Space_Grotesk'] text-xs font-bold">
                <span>SUSTAINABILITY</span>
              </div>
              <span className="material-symbols-outlined text-[#c6e7ff] text-[32px]">eco</span>
            </div>

            <div className="relative z-10 mt-24">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl lg:text-3xl text-white font-bold mb-3">
                ESG 경영
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mb-6 leading-relaxed">
                탄소중립 시대를 선도하는 암모니아 TTS 벙커링 및 수소 밸류체인 구축. 
                친환경 에너지 유통 혁신을 통해 다음 세대를 위한 지속 가능한 사회적 가치를 창출합니다.
              </p>
              <button
                type="button"
                onClick={() => onNavigateTab('esg')}
                className="inline-flex items-center gap-2 text-[#c6e7ff] text-xs font-bold hover:text-white transition-colors cursor-pointer group-hover:translate-x-1"
              >
                <span>지속가능경영 보고서 보기</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Bento 2: History (1974년 설립) */}
          <div className="rounded-3xl bg-[#f2f3ff] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all border border-slate-100">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#000f22] flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">hourglass_bottom</span>
              </div>
              <span className="font-['Space_Grotesk'] text-xs text-[#43474d] font-semibold">
                HERITAGE
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#000f22] font-bold mt-1 mb-3">
                1974년 설립
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                50년간 축적된 산업가스 정밀 제조기술과 무사고 유통 노하우로 대한민국 제조업과 호흡을 맞추어 왔습니다.
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => onNavigateTab('about')}
                className="text-xs text-[#005fae] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>연혁 자세히보기</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Bento 3: Services & MSDS (안전보건자료) */}
          <div className="rounded-3xl bg-[#eaedff] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all border border-slate-100">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#005fae] flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">description</span>
              </div>
              <span className="font-['Space_Grotesk'] text-xs text-[#005fae] font-semibold">
                SAFETY & REGULATION
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#000f22] font-bold mt-1 mb-3">
                MSDS 자료실
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                전 품목 물질안전보건자료(MSDS) 실시간 조회 및 화학물질 규제 준수 데이터베이스를 원클릭으로 제공합니다.
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenMsds}
                className="text-xs text-[#005fae] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>MSDS 즉시 다운로드</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
