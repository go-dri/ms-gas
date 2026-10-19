import React, { useState } from 'react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 bg-[#0A192F] text-white flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#00D5A5] uppercase">
              2025 COMPREHENSIVE BROCHURE
            </span>
            <h3 className="text-xl font-bold mt-1">MS가스 종합 솔루션 카탈로그</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm text-slate-600">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-16 h-20 bg-[#005fae] rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[32px]">menu_book</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">(주)MS가스 전제품 종합 카탈로그 (2025 개정판)</h4>
              <p className="text-xs text-slate-500 mt-1">파일형식: PDF (고해상도 인쇄용) · 용량: 24.8 MB</p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[#005fae] text-[11px] font-semibold">반도체 특수가스</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-semibold">의약품 GMP</span>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-[11px] font-semibold">초저온 엔지니어링</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">수록 주요 내용:</p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>초고순도 특수가스 6N 정제 공정 및 Fab 공급 매뉴얼</li>
              <li>산업용 산소/질소/아르곤/탄산 액화 공급 시스템 제원</li>
              <li>초저온 저장탱크(CE) 표준 기초 도면 및 배관 설계 가이드</li>
              <li>전국 17개 공급 영업소 비상 대응 네트워크 및 RTMS 매뉴얼</li>
            </ul>
          </div>

          {downloaded ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-bold text-sm">
              카탈로그 다운로드가 시작되었습니다. 감사합니다!
            </div>
          ) : (
            <button
              onClick={handleDownload}
              className="w-full h-12 rounded-xl bg-[#005fae] hover:bg-[#004785] text-white font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>전체 카탈로그 PDF 다운로드 (24.8 MB)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface CertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const certs = [
    { title: 'ISO 9001:2015', desc: '품질경영시스템 국제인증 (고압가스 제조 및 유통 전 공정)', code: 'KR-Q-2024-0891' },
    { title: 'ISO 14001:2015', desc: '환경경영시스템 국제인증 (친환경 제조 공정 및 탄소 배출 저감)', code: 'KR-E-2024-0412' },
    { title: 'ISO 45001:2018', desc: '안전보건경영시스템 국제인증 (전 사업장 무사고 안전 체계)', code: 'KR-S-2024-0199' },
    { title: '식약처 의약품 GMP', desc: '식품의약품안전처 의료용 산소 및 질소 우수의약품 제조기준 적격 승인', code: 'GMP-MFDS-2024-52' },
    { title: '특허: 초저온 가스 분배 제어기', desc: '다성분 고순도 특수가스 자동 정밀 혼합 및 압력 감압 특허 등록', code: '특허청 제10-2024-01582호' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 bg-[#0A192F] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00D5A5] text-[28px]">verified_user</span>
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#00D5A5] uppercase">
                QUALITY & COMPLIANCE CERTIFICATIONS
              </span>
              <h3 className="text-xl font-bold">품질 및 특허 인증 현황</h3>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          {certs.map((c, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#005fae] text-[20px]">workspace_premium</span>
                  <h4 className="font-bold text-slate-900 text-sm">{c.title}</h4>
                </div>
                <p className="text-xs text-slate-600 mt-1">{c.desc}</p>
                <span className="inline-block mt-2 text-[11px] font-mono text-slate-400">인증 번호: {c.code}</span>
              </div>
              <button 
                onClick={() => alert(`${c.title} 인증서 사본이 준비되었습니다.`)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-700 hover:bg-white shrink-0 font-medium"
              >
                사본 열람
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-xl bg-[#005fae] text-white text-xs font-semibold">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
