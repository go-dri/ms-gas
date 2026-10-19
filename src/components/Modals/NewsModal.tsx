import React from 'react';
import { NewsItem } from '../../data/gasData';

interface NewsModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Close */}
        <div className="relative h-64 w-full bg-slate-900 overflow-hidden shrink-0">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-[#005fae] text-white text-xs font-bold uppercase tracking-wider">
              {news.category}
            </span>
            <div className="text-xs text-slate-300 mt-2 font-mono">
              {news.date} · {news.region}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
              {news.title}
            </h3>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <div className="p-4 rounded-xl bg-blue-50/70 border-l-4 border-[#005fae] text-sm text-slate-800 font-medium leading-relaxed">
            {news.summary}
          </div>

          <div className="text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line font-normal">
            {news.content}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-700">공고 및 배포:</span> (주)MS가스 홍보전략팀 & 기술기획부
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('공고 첨부파일(PDF/HWP) 패키지 다운로드가 시작되었습니다.')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">attachment</span>
                <span>입찰 제안요청서(RFP) 다운로드</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#005fae] text-white text-xs font-semibold hover:bg-[#004785] transition-colors"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
