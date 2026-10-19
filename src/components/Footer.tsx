import React, { useState } from 'react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenMsds: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenMsds,
  onOpenQuote
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleFamilySiteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      alert(`[${val.toUpperCase()}] 패밀리사 공식 웹사이트 안내 페이지로 연결됩니다.`);
    }
  };

  return (
    <>
      <footer className="w-full bg-[#0A192F] text-[#eef0ff] pt-16 pb-12 border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          {/* Top Row: Logo & Top Links */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 border-b border-white/10 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img 
                  alt="MS GAS Logo" 
                  className="h-7 w-auto object-contain brightness-0 invert" 
                  src="https://lh3.googleusercontent.com/aida/AEtjO1V6ivWOAgYXivPkqZW0pkM2EoptLz6ZYdhMjRfezz0wv_8EPtfijlB7K_yM6ZwMknNGvaL3PILsP_nzeJOALZRtE7j7N-wyHAtBG5kGmVaYNYs0JRUIXpx-9XSDo2m85Gk6fgdvf5l12OaaHgB7izUs5fBCZmAkRR39Pyj7CcAjvpcD1uRmA2DgerJmmsBnW0l9yuHIGdOWHNbt3OKGlcFchVcy5SVGRRGRv6i_DRynVH1c-5ngLoif8Xr4"
                />
                <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
                  (주)MS가스
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                대한민국 첨단 산업을 선도하는 초고순도 특수가스 및 에너지 솔루션 파트너
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300">
              <button 
                onClick={() => onNavigateTab('support')} 
                className="hover:text-[#c6e7ff] transition-colors cursor-pointer"
              >
                오시는 길
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => onOpenQuote()} 
                className="hover:text-[#c6e7ff] transition-colors cursor-pointer"
              >
                온라인 문의
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => onNavigateTab('about')} 
                className="hover:text-[#c6e7ff] transition-colors cursor-pointer"
              >
                인재채용
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={onOpenMsds} 
                className="hover:text-[#c6e7ff] transition-colors cursor-pointer"
              >
                MSDS 자료실
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => setLegalModal('privacy')} 
                className="text-white font-semibold hover:text-[#c6e7ff] transition-colors cursor-pointer"
              >
                개인정보처리방침
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => setLegalModal('terms')} 
                className="hover:text-[#c6e7ff] transition-colors cursor-pointer"
              >
                이용약관
              </button>
            </div>
          </div>

          {/* Bottom Row: Corporate Identity & Family Sites */}
          <div className="pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="space-y-3 text-xs text-slate-400">
              <p className="flex flex-wrap gap-x-3 gap-y-1">
                <span className="text-slate-200 font-semibold">(주)MS가스</span>
                <span>대표이사 전청민</span>
                <span>설립 1974년</span>
                <span>사업자등록번호 605-81-04289</span>
              </p>
              <p>
                본사 및 생산기지: 부산광역시 사상구 낙동대로 1300 | 고객지원센터: 1588-0000 | FAX: 051-000-0000
              </p>
              <p className="text-slate-500 pt-2">
                Copyright © 2025 (주)MS가스 All rights reserved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-60">
                <select 
                  aria-label="Family Site" 
                  onChange={handleFamilySiteChange}
                  className="w-full bg-[#0F243A] text-slate-200 border border-white/10 rounded-xl px-4 py-2.5 text-xs appearance-none focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer"
                >
                  <option value="">패밀리 사이트 (Family Sites)</option>
                  <option value="ms-group">MS그룹 지주사</option>
                  <option value="ms-energy">MS에너지 신재생</option>
                  <option value="ms-tech">MS엔지니어링 플랜트</option>
                  <option value="ms-logistics">MS로지스틱스 초저온수송</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <h3 className="text-lg font-bold">
                {legalModal === 'privacy' ? '개인정보처리방침' : '서비스 이용약관'}
              </h3>
              <button onClick={() => setLegalModal(null)} className="text-slate-400 hover:text-slate-700">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-80 overflow-y-auto">
              <p>
                (주)MS가스는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보 보호법에 따라 고객님의 개인정보를 소중하게 보호하고 있습니다.
              </p>
              <p>
                1. 수집 항목: 성명, 회사명, 연락처, 이메일, 사업장 소재지, 가스 품목 상담 내역
              </p>
              <p>
                2. 수집 목적: 견적 제공, 가스 공급 가능 여부 검토 및 비상 안전 관리 지원
              </p>
              <p>
                3. 보유 및 이용 기간: 법령에 따른 보존 기간 또는 이용 목적 달성 시까지 안전하게 파기됩니다.
              </p>
            </div>
            <div className="pt-6 flex justify-end">
              <button 
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#005fae] text-white text-xs font-semibold"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
