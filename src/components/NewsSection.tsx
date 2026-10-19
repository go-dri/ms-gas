import React from 'react';
import { NEWS_ITEMS, NewsItem } from '../data/gasData';

interface NewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
  onNavigateTab: (tab: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  onSelectNews,
  onNavigateTab
}) => {
  return (
    <section className="w-full bg-[#f8fafc] py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#005fae]"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#005fae] tracking-widest uppercase font-bold">
                NOTICES & PRESS
              </span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#000f22] font-bold tracking-tight">
              MS가스의 새로운 소식을<br className="hidden sm:inline" /> 전달드립니다
            </h2>
            <p className="text-base text-[#43474d] mt-2 leading-relaxed">
              국가 규제자유특구 실증 사업과 탄소중립 신기술 혁신 현황을 투명하게 공개합니다.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('about')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#005fae] hover:bg-[#005fae] hover:text-white text-sm font-semibold shadow-sm transition-all duration-200 border border-slate-200 cursor-pointer self-start md:self-auto"
          >
            <span>공지사항 전체보기</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* News Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-slate-100 cursor-pointer group"
            >
              <div>
                <div className="relative h-48 w-full bg-[#eaedff] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={item.title}
                    src={item.image} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full font-['Space_Grotesk'] text-xs font-bold shadow-sm ${item.categoryBadgeBg}`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs text-[#43474d] font-mono">
                    {item.date} · {item.region}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#000f22] mt-2 mb-3 line-clamp-2 leading-snug group-hover:text-[#005fae] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#43474d] line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-50">
                <span className="text-xs text-[#005fae] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>상세 공고 확인하기</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
