import React, { useState } from 'react';
import { GAS_PRODUCTS, NEWS_ITEMS, BRANCH_LOCATIONS, GasProduct, NewsItem, BranchLocation } from '../../data/gasData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: GasProduct) => void;
  onSelectNews: (n: NewsItem) => void;
  onNavigateTab: (tab: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectNews,
  onNavigateTab
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingProducts = q ? GAS_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.nameEn.toLowerCase().includes(q) || 
    p.shortDesc.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  ) : [];

  const matchingNews = q ? NEWS_ITEMS.filter(n =>
    n.title.toLowerCase().includes(q) ||
    n.summary.toLowerCase().includes(q) ||
    n.category.toLowerCase().includes(q)
  ) : [];

  const matchingBranches = q ? BRANCH_LOCATIONS.filter(b =>
    b.name.toLowerCase().includes(q) ||
    b.region.toLowerCase().includes(q) ||
    b.address.toLowerCase().includes(q)
  ) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3">
          <span className="material-symbols-outlined text-slate-400 text-[24px]">search</span>
          <input
            type="text"
            autoFocus
            placeholder="가스 품목명, 반도체 특수가스, 지역 영업소, 공지사항 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-medium text-slate-900 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
            >
              지우기
            </button>
          )}
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-6">
          {!query ? (
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">추천 검색어</span>
              <div className="flex flex-wrap gap-2">
                {['특수가스', '초저온 질소', '반도체 6N', '암모니아 TTS', '의료용 산소 GMP', '당진 플랜트', 'MSDS 자료'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs text-slate-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Products Section */}
              {matchingProducts.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">가스 솔루션 품목</span>
                  <div className="space-y-1">
                    {matchingProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#005fae] text-[20px]">{p.icon}</span>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{p.name}</p>
                            <p className="text-xs text-slate-500">{p.purity}</p>
                          </div>
                        </div>
                        <span className="text-xs text-[#005fae] font-semibold">스펙 보기 →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News Section */}
              {matchingNews.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">새로운 소식 및 공지</span>
                  <div className="space-y-1">
                    {matchingNews.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => {
                          onSelectNews(n);
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
                      >
                        <span className="text-[11px] text-[#005fae] font-semibold">{n.category} · {n.date}</span>
                        <p className="text-xs font-bold text-slate-900 line-clamp-1">{n.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Branches Section */}
              {matchingBranches.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">전국 영업 거점 및 플랜트</span>
                  <div className="space-y-1">
                    {matchingBranches.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => {
                          onNavigateTab('support');
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors flex justify-between items-center"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900">{b.name}</p>
                          <p className="text-[11px] text-slate-500">{b.address}</p>
                        </div>
                        <span className="text-xs font-mono text-slate-600">{b.tel}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchingProducts.length === 0 && matchingNews.length === 0 && matchingBranches.length === 0 && (
                <div className="py-8 text-center text-slate-500">
                  <p className="text-sm">검색 결과가 없습니다.</p>
                  <p className="text-xs text-slate-400 mt-1">다른 검색어를 입력하시거나 카테고리 메뉴를 이용해주세요.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
