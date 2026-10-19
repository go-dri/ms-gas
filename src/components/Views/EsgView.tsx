import React from 'react';

interface EsgViewProps {
  onOpenQuote: () => void;
}

export const EsgView: React.FC<EsgViewProps> = ({ onOpenQuote }) => {
  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* Banner */}
      <section className="bg-[#0A192F] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F243A] border border-white/10 text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold mb-4">
            <span>SUSTAINABILITY & ESG COMMITMENT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
            친환경 에너지 대전환, 탄소중립 2050 실천
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mt-4 leading-relaxed">
            (주)MS가스는 화석연료 중심의 에너지 패러다임을 청정 암모니아와 수소 밸류체인으로 전환하여, 
            대한민국과 전 지구의 지속 가능한 미래를 위한 탄소중립 실천을 주도하고 있습니다.
          </p>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 mt-16 space-y-16">
        {/* Flagship ESG Project: Ammonia TTS Bunkering */}
        <div className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
              국가 규제자유특구 실증 R&D 주관
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#000f22] tracking-tight">
              울산 친환경 암모니아 TTS 벙커링 인프라 구축
            </h2>
            <p className="text-sm text-[#43474d] leading-relaxed">
              암모니아(NH₃)는 연소 시 이산화탄소를 전혀 배출하지 않는 대표적인 무탄소 차세대 선박 연료입니다. 
              (주)MS가스는 탱크로리를 이용해 선박에 직접 무탄소 암모니아 연료를 안전하게 주입하는 TTS(Truck-to-Ship) 벙커링 시스템과 
              국제해사기구(IMO) 표준 제정을 이끌고 있습니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-800">초저온 암모니아 급속 주입</span>
                <p className="text-[11px] text-slate-500 mt-1">대용량 탱크로리-선박 직결 매니폴드 안전 제어 기술</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-800">무결점 안전 방호(HAZOP)</span>
                <p className="text-[11px] text-slate-500 mt-1">세계 최초 공인 3자 종합 안전진단 및 비상 누출 차단</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg aspect-video lg:aspect-auto lg:h-80 relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAvP7Ixosoi2z6BklVAaNkzyTpP80VbFLU4GdyiwpazGddh63Dva84zuqnx2pqtvEEIKV-v0ooHk_ZywaN_Vw1oNMl_u_nx2gzfYBfAG1o7uRUy4rZV_CCWC6hJ_HVihttf6bNW48XzfMNLVfGwp5KJwgIsiM8U0VwKwm-72RM2Xdn8Plg1EOSFD-2gw_x2ri7SPTbiihkO4-i-Uwhv2qcyYrhcgE0U5AGEiKgaEAgVWM29CWCFzbbkA"
              alt="Green Ammonia Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3 Pillars: E, S, G */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[28px]">nature</span>
            </div>
            <span className="text-xs font-bold text-emerald-600 font-['Space_Grotesk']">ENVIRONMENT (환경)</span>
            <h4 className="text-lg font-bold text-slate-900">온실가스 저감 & 수소 모빌리티</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              전국 물류 수송 차량의 친환경 전환, 초고순도 수소 충전소 원료 직공급, 생산 공정 폐열 회수 시스템 적용으로 사업장 온실가스 배출을 2030년까지 40% 감축합니다.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005fae] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[28px]">groups</span>
            </div>
            <span className="text-xs font-bold text-[#005fae] font-['Space_Grotesk']">SOCIAL (사회)</span>
            <h4 className="text-lg font-bold text-slate-900">지역사회 상생 & 무재해 일터</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              부산 및 충남 당진 지역 인재 채용 확대, 협력사 안전보건 상생 프로그램 운영, ISO 45001 기반 중대재해 Zero 원칙을 확고히 고수합니다.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[28px]">policy</span>
            </div>
            <span className="text-xs font-bold text-indigo-600 font-['Space_Grotesk']">GOVERNANCE (지배구조)</span>
            <h4 className="text-lg font-bold text-slate-900">투명 경영 & 준법 윤리</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              국제 회계기준(GAAP) 감사 투명 공개, 이사회 중심의 책임 경영, 고압가스 법규 준수 컴플라이언스 체계 상시 운영을 통해 확고한 신뢰를 지켜나갑니다.
            </p>
          </div>
        </div>

        {/* ESG Report Download Strip */}
        <div className="p-8 rounded-3xl bg-[#0F243A] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div>
            <h4 className="text-xl font-bold">2024-2025 (주)MS가스 지속가능경영보고서</h4>
            <p className="text-xs text-slate-300 mt-1">GRI Standards 및 SASB 가이드라인을 준수한 ESG 성과 공개</p>
          </div>
          <button
            onClick={() => alert('2024-2025 지속가능경영보고서(PDF) 다운로드가 완료되었습니다.')}
            className="px-6 py-3 rounded-xl bg-[#00D5A5] hover:bg-white text-[#0A192F] text-xs font-bold transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>지속가능경영 보고서 PDF (18.4 MB)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
