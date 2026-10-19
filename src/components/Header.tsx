import React, { useState } from 'react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  isEnglish: boolean;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenSearch,
  onOpenQuote,
  isEnglish,
  onToggleLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navItems = isEnglish ? [
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'equipment', label: 'Facilities' },
    { id: 'esg', label: 'ESG Management' },
    { id: 'support', label: 'Support' }
  ] : [
    { id: 'about', label: '회사소개' },
    { id: 'products', label: '제품소개' },
    { id: 'services', label: '서비스' },
    { id: 'equipment', label: '생산설비' },
    { id: 'esg', label: 'ESG경영' },
    { id: 'support', label: '고객지원' }
  ];

  const handleNavClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-slate-200 transition-all">
        <div className="h-20 max-w-[1320px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Zone */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1V6ivWOAgYXivPkqZW0pkM2EoptLz6ZYdhMjRfezz0wv_8EPtfijlB7K_yM6ZwMknNGvaL3PILsP_nzeJOALZRtE7j7N-wyHAtBG5kGmVaYNYs0JRUIXpx-9XSDo2m85Gk6fgdvf5l12OaaHgB7izUs5fBCZmAkRR39Pyj7CcAjvpcD1uRmA2DgerJmmsBnW0l9yuHIGdOWHNbt3OKGlcFchVcy5SVGRRGRv6i_DRynVH1c-5ngLoif8Xr4"
                alt="MS GAS Logo" 
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold tracking-tight text-[#000f22] hidden sm:inline-block">
                (주)MS가스
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm py-2 transition-colors whitespace-nowrap cursor-pointer relative ${
                  currentTab === item.id 
                    ? 'text-[#005fae] font-bold' 
                    : 'text-[#43474d] hover:text-[#131b2e] font-medium'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#005fae] rounded-full animate-in fade-in"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Search Button */}
            <button 
              type="button"
              aria-label="Search"
              onClick={onOpenSearch}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#43474d] hover:text-[#131b2e] hover:bg-[#eaedff] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Language Switch */}
            <button 
              type="button"
              onClick={onToggleLang}
              className="font-['Space_Grotesk'] text-xs text-[#43474d] hover:text-[#005fae] tracking-widest px-2.5 py-1.5 rounded-lg hover:bg-[#eaedff] transition-colors font-bold"
            >
              {isEnglish ? 'KOR' : 'ENG'}
            </button>

            {/* Inquiry Pill Button */}
            <button 
              type="button"
              onClick={onOpenQuote}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#005fae] hover:bg-[#004785] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all hover:shadow"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>{isEnglish ? 'Online Inquiry' : '온라인 문의'}</span>
            </button>

            {/* Profile / Client Portal Toggle */}
            <div className="relative">
              <button 
                type="button"
                aria-label="Client Portal"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="w-8 h-8 rounded-full bg-[#000f22] text-white flex items-center justify-center hover:bg-[#005fae] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">MS GAS 고객 전용 포털</p>
                    <p className="text-[11px] text-slate-500">배송 및 공급 현황 조회</p>
                  </div>
                  <button 
                    onClick={() => {
                      setUserMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#005fae]">request_quote</span>
                    <span>신규 발주 및 견적 신청</span>
                  </button>
                  <button 
                    onClick={() => {
                      setUserMenuOpen(false);
                      onNavigate('services');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-emerald-600">local_shipping</span>
                    <span>실시간 RTMS 배송 관제</span>
                  </button>
                  <div className="border-t border-slate-100 my-1"></div>
                  <div className="px-4 py-1.5 text-[11px] text-slate-400">
                    고객센터 직통: <span className="font-semibold text-slate-700">1588-0000</span>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              aria-label="Mobile Navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-100"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-white/98 backdrop-blur-md lg:hidden flex flex-col p-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-semibold py-3 border-b border-slate-100 ${
                  currentTab === item.id ? 'text-[#005fae]' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-xl bg-[#005fae] text-white font-bold text-center flex items-center justify-center gap-2 shadow"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>온라인 견적 문의 신청</span>
            </button>
            <div className="p-4 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-900">24시간 비상 대응 관제센터</p>
              <p>전국 통합 고객센터: 1588-0000</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
