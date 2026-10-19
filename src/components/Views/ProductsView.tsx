import React, { useState } from 'react';
import { GAS_PRODUCTS, GasProduct } from '../../data/gasData';

interface ProductsViewProps {
  onSelectProduct: (p: GasProduct) => void;
  onOpenQuote: (productName?: string) => void;
  onOpenCatalog: () => void;
  onOpenMsds: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onSelectProduct,
  onOpenQuote,
  onOpenCatalog,
  onOpenMsds
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  // Gas property converter state
  const [selectedGasType, setSelectedGasType] = useState('N2');
  const [inputValue, setInputValue] = useState<number>(100);
  const [conversionMode, setConversionMode] = useState<'liquidToGas' | 'gasToLiquid'>('liquidToGas');

  // Gas expansion ratios (liquid kg to gas Nm3 approx at 15C 1atm)
  // N2: 1 kg liquid = approx 0.855 Nm3 (or 1 Nm3 = 1.17 kg)
  // O2: 1 kg liquid = approx 0.75 Nm3 (or 1 Nm3 = 1.33 kg)
  // Ar: 1 kg liquid = approx 0.59 Nm3 (or 1 Nm3 = 1.69 kg)
  // CO2: 1 kg liquid = approx 0.545 Nm3
  const gasFactors: Record<string, { ratio: number; unitGas: string; unitLiquid: string; name: string }> = {
    N2: { ratio: 0.855, unitGas: 'Nm³ (기체)', unitLiquid: 'kg (초저온 액체)', name: '질소 (N₂)' },
    O2: { ratio: 0.75, unitGas: 'Nm³ (기체)', unitLiquid: 'kg (초저온 액체)', name: '산소 (O₂)' },
    Ar: { ratio: 0.59, unitGas: 'Nm³ (기체)', unitLiquid: 'kg (초저온 액체)', name: '아르곤 (Ar)' },
    CO2: { ratio: 0.545, unitGas: 'Nm³ (기체)', unitLiquid: 'kg (액화 탄산)', name: '이산화탄소 (CO₂)' }
  };

  const currentFactor = gasFactors[selectedGasType] || gasFactors['N2'];
  const convertedResult = conversionMode === 'liquidToGas'
    ? (inputValue * currentFactor.ratio).toFixed(2)
    : (inputValue / currentFactor.ratio).toFixed(2);

  const filteredProducts = GAS_PRODUCTS.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#0A192F] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F243A] border border-white/10 text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold mb-4">
              <span>HIGH-PURITY GAS PORTFOLIO</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
              고부가가치 초고순도 가스 솔루션
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mt-4 leading-relaxed">
              반도체, 이차전지, 바이오 제약, 정밀 화학부터 대용량 철강 및 조선소에 이르기까지 
              엄격한 품질 보증 기준과 전국 직배송망으로 안정적인 공급을 약속합니다.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpenCatalog}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>종합 카탈로그</span>
            </button>
            <button
              onClick={onOpenMsds}
              className="px-5 py-3 rounded-xl bg-[#005fae] hover:bg-[#004785] text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>MSDS 자료실</span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 mt-12 space-y-12">
        {/* Category Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: '전체 품목' },
              { id: 'essential', label: '산업용 가스' },
              { id: 'energy', label: '연료용 가스' },
              { id: 'hitech', label: '특수 가스 (반도체)' },
              { id: 'medical', label: '의료용 가스' },
              { id: 'calibration', label: '표준 가스' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#005fae] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
            <input
              type="text"
              placeholder="품목명 또는 용도 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-9 pr-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#005fae]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                p.highlighted 
                  ? 'bg-[#0A192F] text-white border-white/10 shadow-xl' 
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    p.highlighted ? 'bg-[#0F243A] text-[#00D5A5]' : 'bg-[#eaedff] text-[#005fae]'
                  }`}>
                    <span className="material-symbols-outlined text-[26px]">{p.icon}</span>
                  </div>
                  <span className={`text-[11px] font-bold font-mono px-2 py-0.5 rounded ${
                    p.highlighted ? 'bg-white/10 text-[#00D5A5]' : 'bg-slate-100 text-[#005fae]'
                  }`}>
                    {p.purity}
                  </span>
                </div>

                <span className={`text-xs font-semibold uppercase ${
                  p.highlighted ? 'text-[#00D5A5]' : 'text-[#005fae]'
                }`}>
                  {p.categoryNumber}
                </span>
                <h3 className="text-xl font-bold mt-0.5 mb-2">{p.name}</h3>
                <p className={`text-xs leading-relaxed mb-4 ${
                  p.highlighted ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {p.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] flex justify-between py-1 border-b border-slate-100/20">
                    <span className={p.highlighted ? 'text-slate-400' : 'text-slate-500'}>표준 규격:</span>
                    <span className="font-semibold text-right">{p.specs.grade}</span>
                  </div>
                  <div className="text-[11px] flex justify-between py-1 border-b border-slate-100/20">
                    <span className={p.highlighted ? 'text-slate-400' : 'text-slate-500'}>공급 방식:</span>
                    <span className="font-semibold text-right">{p.specs.supplyType}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100/20 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectProduct(p)}
                  className={`text-xs font-bold flex items-center gap-1 cursor-pointer ${
                    p.highlighted ? 'text-[#00D5A5] hover:text-white' : 'text-[#005fae] hover:underline'
                  }`}
                >
                  <span>스펙 자세히보기</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuote(p.name)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    p.highlighted 
                      ? 'bg-[#00D5A5] text-[#0A192F] hover:bg-white' 
                      : 'bg-[#005fae] text-white hover:bg-[#004785]'
                  }`}
                >
                  견적 요청
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gas Engineering Calculation Tool */}
        <div className="p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-['Space_Grotesk'] text-[#005fae] font-bold uppercase tracking-wider">
                ENGINEERING UTILITY
              </span>
              <h3 className="text-2xl font-bold text-[#000f22] mt-1">
                초저온 가스 액체-기체 환산 계산기 (Gas Conversion Tool)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                산업 현장에서 필요한 액화 가스 중량(kg)과 기화 체적(Nm³)을 표준 상태(0℃/15℃, 1atm) 기준으로 즉시 환산합니다.
              </p>
            </div>
            <div className="inline-flex rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setConversionMode('liquidToGas')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  conversionMode === 'liquidToGas' ? 'bg-white text-[#005fae] shadow-sm' : 'text-slate-600'
                }`}
              >
                액체(kg) → 기체(Nm³)
              </button>
              <button
                type="button"
                onClick={() => setConversionMode('gasToLiquid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  conversionMode === 'gasToLiquid' ? 'bg-white text-[#005fae] shadow-sm' : 'text-slate-600'
                }`}
              >
                기체(Nm³) → 액체(kg)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">환산 대상 가스</label>
              <select
                value={selectedGasType}
                onChange={(e) => setSelectedGasType(e.target.value)}
                className="w-full h-11 px-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#005fae] cursor-pointer"
              >
                <option value="N2">질소 (Nitrogen - N₂)</option>
                <option value="O2">산소 (Oxygen - O₂)</option>
                <option value="Ar">아르곤 (Argon - Ar)</option>
                <option value="CO2">이산화탄소 (Carbon Dioxide - CO₂)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                입력 수량 ({conversionMode === 'liquidToGas' ? 'kg' : 'Nm³'})
              </label>
              <input
                type="number"
                min="1"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#005fae]"
              />
            </div>

            <div className="p-4 rounded-2xl bg-[#f2f3ff] border border-[#d2d9f4] flex flex-col justify-center">
              <span className="text-xs font-bold text-[#005fae]">환산 계산 결과</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#000f22] font-mono">{convertedResult}</span>
                <span className="text-xs font-bold text-slate-600">
                  {conversionMode === 'liquidToGas' ? 'Nm³ (약 47L 봄베 ' + Math.ceil(Number(convertedResult) / 6.0) + '본 분량)' : 'kg (초저온 액체)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
