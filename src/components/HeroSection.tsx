import React from 'react';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onOpenQuote: () => void;
  isEnglish?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onOpenQuote,
  isEnglish = false
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A192F] text-white py-20 lg:py-28 px-6 lg:px-12">
      {/* Atmospheric Ambient Glows & Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="48" id="hero-grid-pattern" patternUnits="userSpaceOnUse" width="48">
              <path className="text-[#c6e7ff]/30" d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              <circle className="text-[#00D5A5]/60" cx="0" cy="0" fill="currentColor" r="1.5"></circle>
            </pattern>
          </defs>
          <rect fill="url(#hero-grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#005fae]/30 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-[#00D5A5]/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Text Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Dynamic Category Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0F243A]/90 border border-white/10 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00D5A5] animate-ping"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#c6e7ff] tracking-widest uppercase font-semibold">
                SINCE 1974 · TOTAL GAS SOLUTION
              </span>
            </div>

            {/* Bold Hero Headline */}
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-[56px] lg:leading-[68px] text-white tracking-tight font-extrabold text-balance">
              {isEnglish ? (
                <>
                  From Engineering to Delivery & Maintenance<br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6e7ff] via-white to-[#51a0ff]">
                    One-Stop Total Solution
                  </span>
                </>
              ) : (
                <>
                  가스 설계부터 공급, 유지까지<br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6e7ff] via-white to-[#51a0ff]">
                    전 공정을 아우르는 원스톱
                  </span> 토탈 솔루션
                </>
              )}
            </h1>

            {/* Precision Subtitle / Value Proposition */}
            <p className="font-['Inter'] text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {isEnglish ? (
                'Connecting human lives and cutting-edge semiconductor/industrial facilities safely through unseen energy. MS GAS stands reliably beside your high-precision operations.'
              ) : (
                <>
                  보이지 않는 에너지를 통해 사람들의 삶과 첨단 산업을 따뜻하고 안전하게 연결합니다. 
                  언제나 그 자리에, 조용히 그리고 변함없이 <span className="text-white font-medium">(주)MS가스</span>는 오늘도 대한민국의 일상을 지킵니다.
                </>
              )}
            </p>

            {/* Interactive CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#005fae] hover:bg-[#51a0ff] hover:text-[#002739] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#005fae]/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{isEnglish ? 'Explore Product Solutions' : '제품 솔루션 둘러보기'}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                <span>{isEnglish ? 'Consultation & Quotation' : '상담 및 견적 문의'}</span>
              </button>
            </div>

            {/* Live Trust Badges Inline */}
            <div className="pt-6 grid grid-cols-3 gap-6 text-slate-400 w-full sm:w-auto">
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  안전 무사고 운송
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white mt-0.5">
                  99.98%
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  공급 품질 순도
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-[#00D5A5] mt-0.5">
                  99.9999%
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  전국 비상 대응
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white mt-0.5 font-mono">
                  24/7 RTMS
                </span>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Glassmorphic Industrial Hero Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0F243A] border border-white/10 group">
              <div className="relative h-[440px] w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="High-tech fleet of cryogenic yellow MS Gas tanker trucks and pressure delivery vessels" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6yFRAtcDhNv6ZjRUee9nkRYDBcseLMBwNTqrJC8ICChMfEa38h8MtB12Lgg0UNegGh4X3O6YJqIXJZxVRqMqQJWuSNDnwiybfKr7CtciKWe4kjmE9o7_XVYb5vdAmL6lZCXRXFFAIpriqYECGF6orReAGKIEQCFVhk54AkYlOcDaZ51bjUB_dnrxMoWURIhlF4DEaLlkHTuUFM6YmqERBidHmVq2D1qV7eXk_yc3BLLAJ526sbTYaw" 
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent"></div>
                
                {/* Floating Dynamic Telemetry Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0F243A]/90 backdrop-blur-md text-white shadow-xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00D5A5] animate-pulse"></span>
                      <span className="font-['Space_Grotesk'] text-xs tracking-wider text-slate-200 font-semibold">
                        전국 실시간 운송 인프라
                      </span>
                    </div>
                    <span className="font-['Space_Grotesk'] text-xs text-[#00D5A5] font-bold">
                      LIVE RTMS ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    초저온 액화가스 탱크로리 및 다성분 초고순도 특수가스 전국 직배송망 가동 중
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Floating Indicator Card */}
            <div className="absolute -top-4 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-white text-[#131b2e] shadow-2xl border border-slate-100 animate-in fade-in slide-in-from-bottom-2">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#005fae]">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div>
                <div className="text-sm text-[#000f22] font-bold">1974년 설립</div>
                <div className="text-xs text-[#43474d]">50년 가스 엔지니어링 신뢰</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
