import React, { useState } from 'react';

interface ServicesViewProps {
  onOpenQuote: () => void;
  onOpenCert: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenQuote, onOpenCert }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      title: '가스분석 서비스',
      icon: 'biotech',
      desc: '최첨단 가스크로마토그래피(GC), 미량 수분계(PPM/PPB), 산소 분석기를 통한 정밀 성분 규명 및 고순도 검증',
      details: [
        'GC-TCD, GC-FID, GC-PDHID 초미세 성분 정밀 분석',
        '반도체 웨이퍼 라인 투입 전 6N(99.9999%) 순도 전수 인증',
        '미량 수분(H₂O < 0.1 ppm), 총 탄화수소(THC), 일산화탄소 미량 분석 성적서 발행'
      ]
    },
    {
      title: '가스퍼지(Purge) 엔지니어링',
      icon: 'air',
      desc: '플랜트 정기보수 및 배관 신설 시 폭발 방지 및 산소 치환을 위한 대용량 고압 질소 퍼지 토탈 솔루션',
      details: [
        'LNG/LPG 추진선박 연료탱크 시운전 불활성화(Inerting) 및 가스 프리(Gas Free) 작업',
        '석유화학 플랜트 대정기보수(T/A) 질소 가압 기밀시험 및 산소농도 < 1% 치환',
        '고압 이동식 기화기(High Flow Vaporizer) 및 대용량 탱크로리 연속 공급 체계'
      ]
    },
    {
      title: '수출입 및 글로벌 해상 물류',
      icon: 'flight_takeoff',
      desc: '10개국 글로벌 메이저 가스 공급체인과 연계된 ISO 탱크 컨테이너 및 특수가스 실린더 통관·해상 물류 인프라',
      details: [
        '국제해사기구(IMO) 인증 T75/T50 극저온 ISO 탱크 컨테이너 선단 운용',
        '글로벌 수입 냉매, 헬륨(He), 암모니아(NH₃) 직수입 통관 및 위험물 해상 적재',
        '국내외 반도체 제조 기지 및 해외 플랜트 수출입 복합운송 원스톱 대행'
      ]
    },
    {
      title: '고압가스 안전관리 컨설팅',
      icon: 'security',
      desc: '고압가스 안전관리법 규제 준수 컨설팅, 24시간 원격 모니터링 및 플랜트 정기 안전진단',
      details: [
        '한국가스안전공사(KGS) 인허가 완성검사 및 정기 기술검사 컨설팅',
        '초저온 저장탱크(CE) 안전밸브 정기 교정 및 잔류 가스 누출 탐지 점검',
        '사업장별 맞춤형 고압가스 취급자 비상 대응 매뉴얼 수립 및 안전 교육'
      ]
    }
  ];

  // Simulated live active RTMS vehicles
  const liveVehicles = [
    { id: 'MS-TRK-701', type: 'LN2 액체질소 16톤 벌크로리', route: '당진 메인기지 → 화성 반도체 FAB', temp: '-196.2 ℃', pressure: '4.8 bar', status: '운행 중 (정상)', eta: '35분 후 도착' },
    { id: 'MS-TRK-504', type: 'LOX 의료용 액체산소 14톤', route: '부산 사상공장 → 양산 부산대병원', temp: '-183.0 ℃', pressure: '5.2 bar', status: '납품 하역 중', eta: '하역 완료 85%' },
    { id: 'MS-TRK-809', type: 'LAr 초고순도 아르곤 18톤', route: '울산 실증기지 → 거제 조선소 야드', temp: '-185.8 ℃', pressure: '5.0 bar', status: '운행 중 (정상)', eta: '50분 후 도착' },
    { id: 'MS-TRK-302', type: 'NH3 암모니아 TTS 전용차량', route: '울산 신항만 벙커링 터미널', temp: '-33.4 ℃', pressure: '7.8 bar', status: '실증 모니터링 가동', eta: '현장 체류' }
  ];

  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* Banner */}
      <section className="bg-[#0A192F] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F243A] border border-white/10 text-xs font-['Space_Grotesk'] text-[#00D5A5] font-bold mb-4">
            <span>TOTAL GAS ENGINEERING</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
            전주기 가스 엔지니어링 & 실시간 운송 관제
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mt-4 leading-relaxed">
            단순 공급을 넘어, 설계-정밀분석-안전관리-24시간 실시간 위성 모니터링(RTMS)까지 
            고객 현장의 공정 안전과 효율성을 극대화하는 종합 엔지니어링을 제공합니다.
          </p>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 mt-16 space-y-16">
        {/* 4 Pillars Interactive Tab Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-['Space_Grotesk'] text-[#005fae] font-bold uppercase tracking-wider">
              CORE SERVICES
            </span>
            <h3 className="text-2xl font-bold text-[#000f22]">전문 엔지니어링 영역</h3>
            <p className="text-xs text-[#43474d] leading-relaxed mb-4">
              영역을 선택하시면 세부 프로세스와 장비 스펙을 확인하실 수 있습니다.
            </p>

            <div className="space-y-2">
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPillar(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                    selectedPillar === idx
                      ? 'bg-white border-[#005fae] shadow-md -translate-x-1'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      selectedPillar === idx ? 'bg-[#005fae] text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">{pil.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{pil.title}</h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{pil.desc}</p>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined text-[18px] ${
                    selectedPillar === idx ? 'text-[#005fae]' : 'text-slate-300'
                  }`}>
                    chevron_right
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-[#eaedff] text-[#005fae] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px]">{pillars[selectedPillar].icon}</span>
              </div>
              <div>
                <span className="text-xs font-bold text-[#005fae]">SERVICE PILLAR {selectedPillar + 1}</span>
                <h3 className="text-2xl font-bold text-[#000f22]">{pillars[selectedPillar].title}</h3>
              </div>
            </div>

            <p className="text-sm text-[#43474d] leading-relaxed">
              {pillars[selectedPillar].desc}
            </p>

            <div className="space-y-3">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">주요 수행 내용 및 기술 역량</h5>
              {pillars[selectedPillar].details.map((det, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <span className="material-symbols-outlined text-[#005fae] text-[18px] shrink-0">check_circle</span>
                  <span>{det}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={onOpenCert}
                className="text-xs font-semibold text-slate-600 hover:text-[#005fae] flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>기술 및 안전 인증서 보기</span>
              </button>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-xl bg-[#005fae] hover:bg-[#004785] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                해당 서비스 상담 신청
              </button>
            </div>
          </div>
        </div>

        {/* Live RTMS Satellite Dispatch Console */}
        <div className="p-8 lg:p-10 rounded-3xl bg-[#0A192F] text-white border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D5A5] animate-ping"></span>
                <span className="text-xs font-mono text-[#00D5A5] font-bold">LIVE TELEMETRY BROADCAST</span>
              </div>
              <h3 className="text-2xl font-bold">
                전국 24/7 RTMS 실시간 초저온 운송 관제 현황
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                차량별 GPS 위치, 내부 압력, 극저온 유지 온도 및 가스 잔량을 위성 센서로 1초 단위 모니터링합니다.
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#0F243A] border border-white/10 text-xs text-[#c6e7ff] font-mono">
              관제 서버: 정상 가동 중 (무사고 99.98%)
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 font-mono border-b border-white/10 pb-2">
                <tr>
                  <th className="py-3 px-3">차량 번호</th>
                  <th className="py-3 px-3">운송 품목 및 제원</th>
                  <th className="py-3 px-3">운행 구간</th>
                  <th className="py-3 px-3 font-mono">탱크 온도</th>
                  <th className="py-3 px-3 font-mono">압력</th>
                  <th className="py-3 px-3">관제 상태</th>
                  <th className="py-3 px-3">도착 예정</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {liveVehicles.map((v) => (
                  <tr key={v.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-3 font-mono font-bold text-[#c6e7ff]">{v.id}</td>
                    <td className="py-3.5 px-3 font-medium text-white">{v.type}</td>
                    <td className="py-3.5 px-3 text-slate-300">{v.route}</td>
                    <td className="py-3.5 px-3 font-mono text-[#00D5A5]">{v.temp}</td>
                    <td className="py-3.5 px-3 font-mono text-[#51a0ff]">{v.pressure}</td>
                    <td className="py-3.5 px-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 text-[#00D5A5] text-[11px] font-semibold border border-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D5A5]"></span>
                        {v.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-slate-300 font-mono">{v.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
