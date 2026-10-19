import React from 'react';
import { GasProduct } from '../../data/gasData';

interface ProductModalProps {
  product: GasProduct | null;
  onClose: () => void;
  onSelectForQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectForQuote
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 ${product.highlighted ? 'bg-[#0A192F] text-white' : 'bg-slate-50 text-slate-900'} border-b border-slate-200 flex items-start justify-between`}>
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${product.highlighted ? 'bg-[#0F243A] text-[#00D5A5]' : 'bg-blue-50 text-[#005fae]'}`}>
              <span className="material-symbols-outlined text-[32px]">{product.icon}</span>
            </div>
            <div>
              <span className={`text-xs font-semibold tracking-wider uppercase ${product.highlighted ? 'text-[#00D5A5]' : 'text-[#005fae]'}`}>
                {product.categoryNumber}
              </span>
              <h3 className="text-2xl font-bold tracking-tight mt-1">{product.name}</h3>
              <p className={`text-sm mt-0.5 ${product.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>{product.nameEn}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${product.highlighted ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'}`}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Purity Highlight */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f2f3ff] border border-[#d2d9f4]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005fae]">verified</span>
              <span className="text-sm font-semibold text-slate-700">보증 순도 등급</span>
            </div>
            <span className="text-base font-bold text-[#005fae] font-mono">{product.purity}</span>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">개요 및 특성</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{product.shortDesc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium">품질 및 규격</span>
              <p className="text-sm font-semibold text-slate-800 mt-1">{product.specs.grade}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium">공급 및 운송 형태</span>
              <p className="text-sm font-semibold text-slate-800 mt-1">{product.specs.supplyType}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium">공급 압력 범위</span>
              <p className="text-sm font-semibold text-slate-800 mt-1">{product.specs.pressure}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium">화학 물질 식별 (CAS No.)</span>
              <p className="text-sm font-semibold text-slate-800 mt-1">{product.specs.casNo || '규격별 상이'}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">주요 적용 산업 공정</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.specs.applications.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-slate-700 text-xs">
                  <span className="material-symbols-outlined text-[16px] text-[#005fae]">check_circle</span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">security</span>
            <span>전국 24시간 실시간 위성 배송 관제 (RTMS) 연동</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors flex-1 sm:flex-none"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onSelectForQuote(product.name);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#005fae] hover:bg-[#004785] text-white text-sm font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <span>견적 신청하기</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
