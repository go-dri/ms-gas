import React, { useState } from 'react';
import { MSDS_LIST, MsdsDoc } from '../../data/gasData';

interface MsdsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MsdsModal: React.FC<MsdsModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<MsdsDoc | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredDocs = MSDS_LIST.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.chemicalFormula.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.casNo.includes(searchTerm)
  );

  const handleDownload = (doc: MsdsDoc) => {
    setDownloadSuccess(`'${doc.name}' MSDS 최신 개정판(PDF)이 다운로드되었습니다.`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0A192F] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#0F243A] text-[#51a0ff] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">description</span>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#c6e7ff] uppercase">SAFETY & REGULATION DATABASE</span>
              <h3 className="text-2xl font-bold">MSDS 물질안전보건자료실</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Search bar & notification */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 space-y-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            <input
              type="text"
              placeholder="가스명, 화학식(N₂, O₂, Ar, CO₂, NH₃ 등) 또는 CAS 번호 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#005fae] focus:ring-1 focus:ring-[#005fae]"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                지우기
              </button>
            )}
          </div>

          {downloadSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>{downloadSuccess}</span>
              </div>
              <span className="font-semibold text-emerald-600">완료</span>
            </div>
          )}
        </div>

        {/* Content Table / List */}
        <div className="p-6 overflow-y-auto flex-1">
          {filteredDocs.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <span className="material-symbols-outlined text-[48px] text-slate-300 mb-2">find_in_page</span>
              <p className="text-sm font-semibold">검색 조건에 맞는 가스 품목 MSDS가 없습니다.</p>
              <p className="text-xs text-slate-400 mt-1">고객지원센터(1588-0000)로 문의하시면 미등록 특수 혼합가스 MSDS를 즉시 발송해 드립니다.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredDocs.map((doc) => (
                <div key={doc.id} className="py-4 hover:bg-slate-50/70 p-3 rounded-xl transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-[#005fae] font-mono text-xs font-bold">
                        {doc.chemicalFormula}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">{doc.name}</h4>
                    </div>
                    <p className="text-xs text-slate-500">{doc.nameEn}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
                      <span>CAS No: <strong className="text-slate-700">{doc.casNo}</strong></span>
                      <span>·</span>
                      <span>UN No: <strong className="text-slate-700">{doc.unNo}</strong></span>
                      <span>·</span>
                      <span>위험분류: <strong className="text-amber-700">{doc.hazardClass}</strong></span>
                      <span>·</span>
                      <span>개정일: {doc.updatedDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setSelectedDoc(doc)}
                      className="px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      <span>미리보기</span>
                    </button>
                    <button
                      onClick={() => handleDownload(doc)}
                      className="px-4 py-2 rounded-lg bg-[#005fae] hover:bg-[#004785] text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span>PDF 다운로드 ({doc.fileSize})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selected Doc Preview Drawer */}
        {selectedDoc && (
          <div className="p-6 bg-[#f2f3ff] border-t border-[#d2d9f4] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#005fae]">선택된 품목 안전 요약</span>
              <p className="text-sm font-bold text-slate-900">{selectedDoc.name} ({selectedDoc.chemicalFormula})</p>
              <p className="text-xs text-slate-600">
                한국산업안전보건공단(KOSHA) 및 고압가스안전관리법 기준 준수 공인 성적서
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-700 hover:bg-white"
              >
                미리보기 닫기
              </button>
              <button
                onClick={() => handleDownload(selectedDoc)}
                className="px-4 py-1.5 rounded-lg bg-[#005fae] text-white text-xs font-bold"
              >
                다운로드 실행
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>산업안전보건법 제110조에 따른 최신 규정 개정판 수록</span>
          <button onClick={onClose} className="hover:text-slate-800 font-semibold">닫기</button>
        </div>
      </div>
    </div>
  );
};
