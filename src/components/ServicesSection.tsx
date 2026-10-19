import React from 'react';

interface ServicesSectionProps {
  onOpenCert: () => void;
  onNavigateTab: (tab: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenCert,
  onNavigateTab
}) => {
  return (
    <section className="w-full bg-[#f8fafc] py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Technical Precision Intro (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaedff] font-['Space_Grotesk'] text-xs text-[#005fae] font-bold">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              <span>LOGISTICS & ENGINEERING EXCELLENCE</span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#000f22] font-bold tracking-tight leading-tight">
              전국을 아우르는 고도화된<br /> 운송 인프라와 실시간 모니터링 시스템
            </h2>

            <p className="text-base text-[#43474d] leading-relaxed">
              (주)MS가스는 전국망 단위의 초저온 액화가스 탱크로리와 특수 실린더 트레일러 풀을 보유하고 있으며, 
              가스 설계·분석·퍼지·안전관리에 이르는 전주기 전문 엔지니어링 서비스를 제공합니다.
            </p>

            {/* Quality Certification Callout Strip */}
            <div className="p-6 rounded-2xl bg-white shadow-sm space-y-3 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D5A5]/15 text-[#00D5A5] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-base text-[#000f22] font-bold">품질 및 인증현황</h4>
                  <p className="text-xs text-[#43474d]">지속적인 연구개발을 통해 무결점 품질을 실현합니다</p>
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenCert}
                  className="inline-flex items-center gap-1.5 text-xs text-[#005fae] font-semibold hover:underline cursor-pointer"
                >
                  <span>ISO 9001/14001 & 특허 인증서 열람하기</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: 4-Pillar Engineering Services Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Pillar 1: 가스분석 서비스 */}
            <div 
              onClick={() => onNavigateTab('services')}
              className="p-7 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-slate-100 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] text-[#005fae] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">biotech</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#000f22] font-bold mb-2">가스분석 서비스</h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                최첨단 가스크로마토그래피(GC), 수분/산소 미량 분석기를 통한 정밀 성분 규명 및 고순도 검증.
              </p>
            </div>

            {/* Pillar 2: 가스퍼지(Purge) 서비스 */}
            <div 
              onClick={() => onNavigateTab('services')}
              className="p-7 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-slate-100 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] text-[#005fae] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">air</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#000f22] font-bold mb-2">가스퍼지(Purge) 서비스</h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                플랜트 정기보수 및 배관 신설 시 폭발 방지 및 산소 치환을 위한 고압 질소 퍼지 토탈 솔루션.
              </p>
            </div>

            {/* Pillar 3: 수출입 서비스 */}
            <div 
              onClick={() => onNavigateTab('services')}
              className="p-7 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-slate-100 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] text-[#005fae] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#000f22] font-bold mb-2">수출입 서비스</h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                10개국 글로벌 파트너사와 연계된 ISO 탱크 컨테이너 및 특수가스 실린더 통관·해상 물류 인프라.
              </p>
            </div>

            {/* Pillar 4: 안전관리 서비스 */}
            <div 
              onClick={() => onNavigateTab('services')}
              className="p-7 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-slate-100 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] text-[#005fae] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">security</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#000f22] font-bold mb-2">안전관리 서비스</h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                고압가스 안전관리법 규제 준수 컨설팅, 24시간 원격 모니터링 및 플랜트 정기 안전진단.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
