import React from 'react';

interface EquipmentViewProps {
  onOpenQuote: () => void;
}

export const EquipmentView: React.FC<EquipmentViewProps> = ({ onOpenQuote }) => {
  const facilities = [
    {
      title: '초저온 대용량 저장탱크(CE) 플랜트',
      category: 'Cryogenic Bulk Storage',
      capacity: '총 3,200톤 저장 능력',
      location: '충남 당진 메인플랜트 & 부산 본사',
      desc: '액체질소(LN₂), 액체산소(LOX), 액체아르곤(LAr) 및 액화탄산(LCO₂)을 극저온 진공 단열 탱크에 대량 비축하여 국가 수급 위기 시에도 60일 이상 연속 공급할 수 있는 안정적인 저장 설비입니다.',
      specs: ['진공 다층 단열(MLI) 펄라이트 이중벽 구조', '최대 운전 압력: 10~20 bar', '한국가스안전공사(KGS) 정밀 기밀 인증']
    },
    {
      title: '반도체·특수가스 자동 정밀 충전 라인',
      category: 'Cleanroom Filling Carousel',
      capacity: '일일 1,200본 연속 충전',
      location: '울산 특수가스 실증기지',
      desc: 'Class 1,000 이하의 청정 클린룸 내에서 자동 진공 퍼지, 초고순도 원료 가스 자동 질량 유량 제어(MFC), 헬륨 누설 탐지(He Leak Test)를 거쳐 반도체 Fab으로 공급되는 무결점 충전 시스템입니다.',
      specs: ['완전 자동화 매니폴드 및 실린더 베이킹 시스템', '수분/산소 ppb 단위 인라인 상시 분석', '바코드 RFID 기반 실린더 이력 추적 관리']
    },
    {
      title: '전국 직배송 전용 초저온 탱크로리 선단',
      category: 'Cryogenic Tanker Fleet',
      capacity: '50여 대 특수 수송 차량',
      location: '전국 8개 전략 허브 분산 배치',
      desc: '10톤~20톤급 초저온 액화가스 전용 탱크로리와 고압 튜브 트레일러를 직영 운용하며, 실시간 위성 관제(RTMS)를 통해 적재 중 온도·압력·경로를 1초 단위로 안전 관리합니다.',
      specs: ['스테인리스 스틸(SUS304) 극저온 내조', '비상 차단 밸브(ESD) 및 과압 방출 안전 밸브 일체화', '디지털 질량 유량계 정밀 납품 영수증 자동 발급']
    },
    {
      title: '공인 고압가스 용기 재검사 및 세척 시설',
      category: 'Cylinder Testing & Decontamination',
      capacity: '연간 60,000본 공인 검사',
      location: '부산 메인 엔지니어링 센터',
      desc: '산업통상자원부 지정 전문검사기관으로서 내압 시험, 초음파 두께 측정, 내부 쇼트블라스트 세척 및 건조 처리를 통해 용기 내 잔류 이물질을 완벽히 제거합니다.',
      specs: ['수압 시험(Hydrostatic Test) 최대 300 bar', '내부 부동태화(Passivation) 특수 처리', 'KGS 합격 각인 및 잔여 수명 평가']
    }
  ];

  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#0A192F] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F243A] border border-white/10 text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold mb-4">
            <span>INFRASTRUCTURE & FACILITIES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
            국내 최고 수준의 생산·저장 및 충전 설비
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mt-4 leading-relaxed">
            철저한 안전 설계와 최첨단 자동화 기술로 완성된 MS가스의 생산 인프라는 
            어떠한 가혹한 환경에서도 끊김 없는 가스 공급을 실현합니다.
          </p>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 mt-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#005fae] uppercase tracking-wider">
                    {fac.category}
                  </span>
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-[#eaedff] text-[#005fae]">
                    {fac.capacity}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#000f22] mb-1">{fac.title}</h3>
                <p className="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-slate-400">location_on</span>
                  <span>{fac.location}</span>
                </p>

                <p className="text-xs text-[#43474d] leading-relaxed mb-6">
                  {fac.desc}
                </p>

                <div className="space-y-2 mb-6">
                  <h5 className="text-[11px] font-bold text-slate-700 uppercase">기술 특장점 및 안전 사양</h5>
                  {fac.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs text-slate-400 font-mono">FACILITY SPEC ID: MSG-EQ-0{idx + 1}</span>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#005fae] hover:text-white text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                >
                  설비 도입 및 공급 문의
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
