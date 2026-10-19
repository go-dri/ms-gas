import React, { useState } from 'react';

interface QuickHubSectionProps {
  onNavigateTab: (tab: string) => void;
  onOpenQuote: (initialItem?: string) => void;
}

export const QuickHubSection: React.FC<QuickHubSectionProps> = ({
  onNavigateTab,
  onOpenQuote
}) => {
  const [fastName, setFastName] = useState('');
  const [fastPhone, setFastPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fastName || !fastPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFastName('');
      setFastPhone('');
    }, 4000);
  };

  return (
    <section className="w-full bg-[#0A192F] text-white py-16 px-6 lg:px-12 border-b border-white/10" id="quick-hub">
      <div className="max-w-[1320px] mx-auto">
        {/* 4 Quick Hub Portals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Quick 1: 회사소개 */}
          <div 
            onClick={() => onNavigateTab('about')}
            className="p-6 rounded-2xl bg-[#0F243A]/80 hover:bg-[#0F243A] transition-all duration-200 group flex items-start justify-between shadow-sm border border-white/5 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#005fae]/20 text-[#51a0ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">apartment</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-1">회사소개</h4>
              <p className="text-xs text-slate-300">MS가스의 비전과 조직 안내</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
              arrow_forward
            </span>
          </div>

          {/* Quick 2: 온라인 문의 */}
          <div 
            onClick={() => onOpenQuote()}
            className="p-6 rounded-2xl bg-[#0F243A]/80 hover:bg-[#0F243A] transition-all duration-200 group flex items-start justify-between shadow-sm border border-white/5 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 text-[#c6e7ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">chat</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-1">온라인 문의</h4>
              <p className="text-xs text-slate-300">가스 견적 및 기술 신속 상담</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
              arrow_forward
            </span>
          </div>

          {/* Quick 3: 새로운 소식 */}
          <div 
            onClick={() => onNavigateTab('about')}
            className="p-6 rounded-2xl bg-[#0F243A]/80 hover:bg-[#0F243A] transition-all duration-200 group flex items-start justify-between shadow-sm border border-white/5 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D5A5]/20 text-[#00D5A5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">campaign</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-1">새로운 소식</h4>
              <p className="text-xs text-slate-300">공지사항 및 입찰공고 열람</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
              arrow_forward
            </span>
          </div>

          {/* Quick 4: 오시는 길 */}
          <div 
            onClick={() => onNavigateTab('support')}
            className="p-6 rounded-2xl bg-[#0F243A]/80 hover:bg-[#0F243A] transition-all duration-200 group flex items-start justify-between shadow-sm border border-white/5 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-[#F5A623] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">location_on</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-1">오시는 길</h4>
              <p className="text-xs text-slate-300">본사 및 전국 17개 영업 거점</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
              arrow_forward
            </span>
          </div>
        </div>

        {/* Quick Interactive Consultation Form Banner */}
        <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#0F243A] via-[#000f22] to-[#0F243A] shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="font-['Space_Grotesk'] text-xs text-[#00D5A5] font-bold uppercase tracking-wider">
                Fast Inquiry
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl lg:text-3xl text-white font-bold mt-1">
                산업용·특수가스 견적 문의
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                필요하신 가스 품목과 사업장 위치를 남겨주시면 담당 엔지니어가 2시간 이내에 맞춤 견적을 회신해 드립니다.
              </p>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-5 rounded-2xl bg-[#00D5A5]/15 border border-[#00D5A5]/30 text-white flex items-center gap-3 animate-in fade-in">
                  <span className="material-symbols-outlined text-[#00D5A5] text-[28px]">check_circle</span>
                  <div>
                    <h5 className="font-bold text-sm text-[#00D5A5]">신속 상담 신청이 접수되었습니다!</h5>
                    <p className="text-xs text-slate-300">
                      남겨주신 번호로 담당 엔지니어가 2시간 내로 연락드리겠습니다. (상세 상담 필요 시 추가 옵션 선택 가능)
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFastSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      placeholder="회사명 / 담당자명"
                      value={fastName}
                      onChange={(e) => setFastName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:bg-white/20 transition-all border border-white/10"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      required
                      placeholder="연락처 (010-0000-0000)"
                      value={fastPhone}
                      onChange={(e) => setFastPhone(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:bg-white/20 transition-all border border-white/10"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="h-12 rounded-xl bg-[#005fae] hover:bg-[#51a0ff] hover:text-[#002739] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>견적 신청하기</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
