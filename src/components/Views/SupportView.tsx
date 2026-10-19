import React, { useState } from 'react';
import { BRANCH_LOCATIONS } from '../../data/gasData';

interface SupportViewProps {
  onOpenQuote: () => void;
  onOpenMsds: () => void;
}

export const SupportView: React.FC<SupportViewProps> = ({ onOpenQuote, onOpenMsds }) => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredBranches = selectedRegion === 'all'
    ? BRANCH_LOCATIONS
    : BRANCH_LOCATIONS.filter(b => b.region.includes(selectedRegion));

  const faqs = [
    {
      q: '초저온 액화가스(LN2, LOX, LAr)의 최소 공급 단위와 납품 소요시간은 어떻게 되나요?',
      a: '벌크 탱크로리의 경우 1회 최소 2톤부터 공급 가능하며, 전국 17개 거점에 차량이 분산 대기 중이므로 발주 접수 후 평균 24시간 이내 지정된 저장탱크(CE)에 직결 충전됩니다.'
    },
    {
      q: '사업장에 초저온 저장탱크(CE) 신설 시 인허가 및 설치 지원이 가능한가요?',
      a: '네. MS가스 엔지니어링팀에서 가스안전공사(KGS) 기술검토서 작성, 인허가 관청 신고, 기초 토목 설계, 배관 시공 및 완성검사까지 전 과정을 원스톱 턴키(Turnkey)로 지원합니다.'
    },
    {
      q: '반도체용 6N 초고순도 특수가스의 품질 분석 성적서는 어떻게 제공되나요?',
      a: '납품되는 전 실린더 및 로트(Lot)별로 최첨단 가스크로마토그래피(GC) 분석 데이터가 포함된 공인 시험성적서(CoA) 및 국문/영문 MSDS가 납품 시 동봉되며, 본 포털 MSDS 자료실에서도 상시 다운로드 가능합니다.'
    },
    {
      q: '야간이나 주말 비상 가스 누출 또는 잔량 부족 시 비상 공급이 가능한가요?',
      a: '24시간 연중무휴 비상 관제 센터(1588-0000)를 운영 중이며, RTMS 위성 관제를 통해 가장 인접한 순회 비상 배송 차량이 즉시 급파되어 비상 공급을 수행합니다.'
    }
  ];

  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* Banner */}
      <section className="bg-[#0A192F] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F243A] border border-white/10 text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold mb-4">
              <span>CUSTOMER SUPPORT & NETWORK</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
              전국 공급 네트워크 및 고객지원센터
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mt-4 leading-relaxed">
              본사 및 전국 8개 전략 지역, 17개 첨단 공급 영업소를 통해 
              대한민국 어디서나 365일 24시간 빈틈없는 신속 공급과 밀착 기술 지원을 약속합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0F243A] border border-white/10 text-center shrink-0">
            <span className="text-xs font-bold text-[#00D5A5] font-mono">24/7 EMERGENCY HOTLINE</span>
            <div className="text-2xl font-bold font-mono text-white mt-1">1588-0000</div>
            <p className="text-[11px] text-slate-400 mt-1">야간/공휴일 가스 공급 및 비상 안전 관제</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 mt-16 space-y-16">
        {/* Branch Locator Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-['Space_Grotesk'] text-[#005fae] font-bold uppercase tracking-wider">
                NATIONWIDE BRANCHES
              </span>
              <h3 className="text-2xl font-bold text-[#000f22] mt-1">
                전국 8개 전략 거점 및 영업소 현황
              </h3>
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-2 md:pb-0">
              {[
                { id: 'all', label: '전국 전체' },
                { id: '수도권', label: '수도권 (경기/인천)' },
                { id: '영남권', label: '영남권 (부산/울산/포항)' },
                { id: '충청권', label: '충청권 (당진/오창)' },
                { id: '호남권', label: '호남권 (광주/여수)' }
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedRegion === r.id
                      ? 'bg-[#005fae] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBranches.map((branch) => (
              <div 
                key={branch.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005fae]">
                      {branch.type}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{branch.region}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">{branch.name}</h4>
                  
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">location_on</span>
                      <span>{branch.address}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">call</span>
                      <strong className="text-slate-800">{branch.tel}</strong>
                    </p>
                    <p className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                      <span className="material-symbols-outlined text-[16px] shrink-0">print</span>
                      <span>FAX: {branch.fax}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{branch.manager}</span>
                  <a
                    href={`tel:${branch.tel}`}
                    className="text-xs font-bold text-[#005fae] hover:underline flex items-center gap-1"
                  >
                    <span>전화 연결</span>
                    <span className="material-symbols-outlined text-[14px]">call</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-['Space_Grotesk'] text-[#005fae] font-bold uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl font-bold text-[#000f22] mt-1">자주 묻는 질문 (FAQ)</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#005fae] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    Q
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{faq.q}</h4>
                </div>
                <div className="flex items-start gap-3 pl-9">
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#0A192F] to-[#0F243A] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div>
            <h4 className="text-2xl font-bold">지금 바로 맞춤 견적 및 가스 기술 상담을 신청하세요</h4>
            <p className="text-xs text-slate-300 mt-2">
              가스 품목, 설비 스펙, 운송 방식 등 궁금하신 사항을 남겨주시면 담당 지사장이 즉시 연락드립니다.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={onOpenMsds}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              MSDS 실시간 검색
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-[#005fae] hover:bg-[#51a0ff] hover:text-[#002739] text-white text-xs font-bold transition-colors shadow-lg cursor-pointer"
            >
              온라인 견적 문의
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
