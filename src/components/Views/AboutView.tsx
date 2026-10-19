import React from 'react';
import { HISTORY_TIMELINE } from '../../data/gasData';

interface AboutViewProps {
  onOpenQuote: () => void;
  onOpenCert: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenQuote, onOpenCert }) => {
  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* Page Title Hero Banner */}
      <section className="bg-[#0A192F] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F243A] border border-white/10 text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold mb-4">
            <span>ABOUT MS GAS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
            50년 역사의 신뢰, 대한민국 가스 산업의 주역
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mt-4 leading-relaxed">
            1974년 창립 이래 반세기 동안 무결점 안전과 최상의 순도를 향한 타협 없는 고집으로, 
            대한민국 중화학 공업과 첨단 반도체 산업의 도약을 묵묵히 지탱해 왔습니다.
          </p>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 mt-16 space-y-20">
        {/* CEO Message & Portrait Card */}
        <div className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-slate-100 aspect-square border border-slate-200 shadow-inner flex flex-col justify-end p-6 relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWrw8vrLjK997_mpvmqOTFsuCQjoPNv8tEVNHgaf4Ruyv9Q__t0SpDSdyqnDAB818UFGKBdJMS8yHhf8zSYJvk-yp1cSnJ_AYMgODb8KnYGCFPSP9_Me17XgBP7G3WXKAgj3sGTko1lSV8Oaszua2ye37xuONWtQFO58EhdS2z00XEJRex8Xkc_tU8moo9jzSCp3rrc8J04EMKlvl7dZEiCkrwCJ8306Rm5Q9El0aoB25qjTO0pGdmrw" 
              alt="CEO Speech & Awards" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="relative z-10 text-white">
              <span className="text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold">REPRESENTATIVE DIRECTOR & CEO</span>
              <h3 className="text-xl font-bold mt-1">전청민 대표이사</h3>
              <p className="text-xs text-slate-300">대한민국 은탑산업훈장 수훈</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-['Space_Grotesk'] text-[#005fae] font-bold uppercase tracking-wider">
              CEO GREETINGS
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#000f22] tracking-tight">
              "보이지 않는 기체에 담긴 무한한 가능성, <br />
              고객사의 생산성 향상과 현장 안전이 MS가스의 존재 이유입니다."
            </h2>
            <div className="text-sm text-[#43474d] space-y-3 leading-relaxed">
              <p>
                안녕하십니까. (주)MS가스 대표이사 전청민입니다. 
                가스는 눈에 보이지 않지만, 우리 산업 전반의 심장을 뛰게 하는 가장 근본적인 에너지이자 첨단 소재입니다.
              </p>
              <p>
                단 1ppm의 미량 불순물도 허용되지 않는 반도체 클린룸부터, 한 생명을 살리는 응급 의료 현장, 
                거대한 선박이 바다를 가르는 조선소에 이르기까지 MS가스의 정밀 가스는 언제나 최일선에 함께해 왔습니다.
              </p>
              <p>
                이제 우리는 50년의 단단한 반석 위에서, 암모니아 선박 벙커링과 청정 수소 인프라를 아우르는 
                탄소중립 미래 에너지의 주역으로 또 한 번의 담대한 도약을 시작합니다.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenCert}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px] text-[#005fae]">verified</span>
                <span>ISO & 특허 인증서 열람</span>
              </button>
              <button
                onClick={onOpenQuote}
                className="px-6 py-2.5 rounded-xl bg-[#005fae] hover:bg-[#004785] text-white text-xs font-bold transition-colors shadow-sm"
              >
                상담 및 거래 제휴 신청
              </button>
            </div>
          </div>
        </div>

        {/* Core Values 3 Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-['Space_Grotesk'] text-[#005fae] font-bold uppercase tracking-wider">CORE VALUES</span>
            <h3 className="text-3xl font-bold text-[#000f22] mt-1">MS가스 3대 핵심 경영 가치</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005fae] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[28px]">shield</span>
              </div>
              <h4 className="text-xl font-bold text-[#000f22]">안전 최우선 (Safety First)</h4>
              <p className="text-xs text-[#43474d] leading-relaxed">
                모든 공정과 물류의 출발점은 현장 안전입니다. 법정 기준을 뛰어넘는 이중 삼중의 차단 장치와 24시간 실시간 위성 관제로 50년 무사고 신화를 이어갑니다.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
              </div>
              <h4 className="text-xl font-bold text-[#000f22]">초고순도 품질 (Ultra Purity)</h4>
              <p className="text-xs text-[#43474d] leading-relaxed">
                반도체·디스플레이 초미세 공정에 대응하는 6N(99.9999%) 초고순도 가스 정제와 가스크로마토그래피(GC) 전수 검사로 단 하나의 오차도 허용하지 않습니다.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[28px]">eco</span>
              </div>
              <h4 className="text-xl font-bold text-[#000f22]">지속가능한 혁신 (Green Future)</h4>
              <p className="text-xs text-[#43474d] leading-relaxed">
                친환경 암모니아 TTS 벙커링 국가 실증 주관 및 수소 운송 네트워크 확장을 통해 대한민국 탄소중립 2050 실현에 앞장섭니다.
              </p>
            </div>
          </div>
        </div>

        {/* 50-Year History Timeline */}
        <div className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-['Space_Grotesk'] text-[#005fae] font-bold uppercase tracking-wider">HERITAGE TIMELINE</span>
              <h3 className="text-3xl font-bold text-[#000f22] mt-1">50년 발자취</h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">1974 — 2025</span>
          </div>

          <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200">
            {HISTORY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-6 pl-2">
                <div className="w-7 h-7 rounded-full bg-[#005fae] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-md z-10 ring-4 ring-white">
                  {idx + 1}
                </div>
                <div className="flex-1 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-[#005fae]/30 transition-colors">
                  <span className="text-xs font-bold font-mono text-[#005fae]">{item.year}</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
