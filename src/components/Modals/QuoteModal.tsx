import React, { useState, useEffect } from 'react';
import { GAS_PRODUCTS } from '../../data/gasData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = ''
}) => {
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState(initialProduct || '산업용 가스');
  const [supplyFormat, setSupplyFormat] = useState('초저온 액화 탱크로리 벌크');
  const [region, setRegion] = useState('수도권 (서울/경기/인천)');
  const [volume, setVolume] = useState('월간 정기 대용량 공급 (10톤 이상)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = `MSG-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackingNumber(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#0A192F] text-white flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#00D5A5] uppercase">
              FAST ESTIMATE & TECHNICAL CONSULTING
            </span>
            <h3 className="text-2xl font-bold mt-1">온라인 가스 솔루션 견적 신청</h3>
            <p className="text-xs text-slate-300 mt-1">
              MS가스 전담 엔지니어가 사업장 조건과 가스 스펙을 검토하여 2시간 이내에 맞춤 견적서를 회신합니다.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">접수 완료</span>
              <h4 className="text-2xl font-bold text-slate-900 mt-1">견적 요청이 정상 접수되었습니다</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                기재해주신 연락처(<span className="font-semibold text-slate-900">{phone}</span>) 및 이메일로 
                담당 기술영업팀 팀장이 2시간 내로 연락 및 상세 견적서를 송부해 드립니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">접수 관리 번호:</span>
                <span className="font-mono font-bold text-[#005fae]">{trackingNumber}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">요청 품목:</span>
                <span className="font-medium text-slate-800">{product}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">공급 형태:</span>
                <span className="font-medium text-slate-800">{supplyFormat}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">희망 지역:</span>
                <span className="font-medium text-slate-800">{region}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-[#005fae] hover:bg-[#004785] text-white text-sm font-semibold transition-colors shadow-sm"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5">
            {/* Row 1: Company & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  회사명 (법인/개인) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="(주)한국엔지니어링"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#005fae] focus:ring-1 focus:ring-[#005fae]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  담당자 성명 / 직급 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="김철수 과장"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#005fae] focus:ring-1 focus:ring-[#005fae]"
                />
              </div>
            </div>

            {/* Row 2: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  연락처 (휴대전화/유선) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#005fae] focus:ring-1 focus:ring-[#005fae]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  이메일 주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="manager@company.co.kr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#005fae] focus:ring-1 focus:ring-[#005fae]"
                />
              </div>
            </div>

            {/* Row 3: Product & Supply Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  가스 품목군 선택 <span className="text-red-500">*</span>
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#005fae] cursor-pointer"
                >
                  {GAS_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.nameEn})
                    </option>
                  ))}
                  <option value="초고순도 수소 / 헬륨">초고순도 수소 / 헬륨</option>
                  <option value="암모니아 및 온실가스 저감제">암모니아 및 온실가스 저감제</option>
                  <option value="플랜트 배관 퍼지 서비스">플랜트 질소 퍼지(Purge) 엔지니어링</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  희망 공급 형태 <span className="text-red-500">*</span>
                </label>
                <select
                  value={supplyFormat}
                  onChange={(e) => setSupplyFormat(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#005fae] cursor-pointer"
                >
                  <option value="초저온 액화 탱크로리 벌크">초저온 액화 탱크로리 벌크 운송</option>
                  <option value="CE 초저온 저장탱크 설치+공급">초저온 저장탱크(CE) 신설 패키지</option>
                  <option value="고압 실린더 (봄베) 정기 배송">고압 실린더(봄베) 번들 정기 배송</option>
                  <option value="ISO 탱크 컨테이너 해외/국내">ISO 탱크 컨테이너 수송</option>
                  <option value="현장 온사이트(On-site) 엔지니어링">현장 온사이트(On-site) 설비 구축</option>
                </select>
              </div>
            </div>

            {/* Row 4: Region & Volume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  배송/설치 희망 지역 <span className="text-red-500">*</span>
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#005fae] cursor-pointer"
                >
                  <option value="수도권 (서울/경기/인천)">수도권 (서울/경기/인천)</option>
                  <option value="영남권 (부산/울산/경남)">영남권 (부산/울산/경남)</option>
                  <option value="경북권 (대구/포항/구미)">경북권 (대구/포항/구미)</option>
                  <option value="충청권 (대전/충남 당진/충북 오창)">충청권 (대전/충남 당진/충북 오창)</option>
                  <option value="호남권 (광주/전남 여수/전북 군산)">호남권 (광주/전남 여수/전북 군산)</option>
                  <option value="강원/제주권">강원/제주권</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  예상 소요량 및 주기
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#005fae] cursor-pointer"
                >
                  <option value="월간 정기 대용량 공급 (10톤 이상)">월간 정기 대용량 공급 (10톤 이상)</option>
                  <option value="월간 중용량 공급 (1톤 ~ 10톤)">월간 중용량 공급 (1톤 ~ 10톤)</option>
                  <option value="실린더 주간 정기 교환 (10본 이상)">실린더 주간 정기 교환 (10본 이상)</option>
                  <option value="1회성 프로젝트 / 정기보수 퍼지">1회성 프로젝트 / 플랜트 퍼지 작업</option>
                  <option value="연구실 미량 시험용 소량">연구실 미량 시험용 소량</option>
                </select>
              </div>
            </div>

            {/* Row 5: Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                기타 요청사항 / 공정 환경 설명
              </label>
              <textarea
                rows={3}
                placeholder="희망 순도(N수), 배관 규격, 현장 진입 가능 톤수 등 상세 요청사항을 입력해주세요."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#005fae] focus:ring-1 focus:ring-[#005fae] resize-none"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#005fae] shrink-0">info</span>
              <span>
                수집된 회사명 및 연락처는 가스 수급 확인 및 맞춤 견적 회신 목적으로만 사용되며, 
                관계 법령에 따라 철저히 보호됩니다.
              </span>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-7 py-2.5 rounded-xl bg-[#005fae] hover:bg-[#004785] text-white text-sm font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <span>견적 신청 제출</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
