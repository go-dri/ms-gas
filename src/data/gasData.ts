export interface GasProduct {
  id: string;
  category: 'essential' | 'energy' | 'hitech' | 'medical' | 'calibration';
  categoryNumber: string;
  categoryLabel: string;
  name: string;
  nameEn: string;
  shortDesc: string;
  tags: string[];
  color: string;
  badgeBg: string;
  badgeText: string;
  icon: string;
  highlighted?: boolean;
  chemicalFormula?: string;
  purity: string;
  specs: {
    grade: string;
    supplyType: string;
    pressure: string;
    applications: string[];
    casNo?: string;
  };
}

export interface NewsItem {
  id: string;
  category: string;
  categoryBadgeBg: string;
  date: string;
  region: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  badgeColor?: string;
}

export interface BranchLocation {
  id: string;
  name: string;
  region: string;
  type: '본사 및 공장' | '영업소' | '충전소' | '물류기지';
  address: string;
  tel: string;
  fax: string;
  manager: string;
}

export interface MsdsDoc {
  id: string;
  name: string;
  nameEn: string;
  chemicalFormula: string;
  casNo: string;
  unNo: string;
  hazardClass: string;
  purity: string;
  updatedDate: string;
  fileSize: string;
}

export const GAS_PRODUCTS: GasProduct[] = [
  {
    id: 'industrial-gas',
    category: 'essential',
    categoryNumber: '01 · Essential',
    categoryLabel: '산업용 가스',
    name: '산업용 가스',
    nameEn: 'Industrial Gases',
    shortDesc: '산소(O₂), 질소(N₂), 아르곤(Ar), 탄산가스(CO₂) 등 첨단 제조 및 철강·중공업 핵심 기저 에너지.',
    tags: ['초저온 액화', '대용량 벌크'],
    color: 'secondary',
    badgeBg: 'bg-surface-container',
    badgeText: 'text-secondary',
    icon: 'factory',
    purity: '99.99% ~ 99.999% (4N~5N)',
    specs: {
      grade: '고순도 산업 표준 등급 (KS / ISO 규격)',
      supplyType: '초저온 액화 탱크로리, 저장탱크(CE), 실린더 번들',
      pressure: '150 bar ~ 200 bar (실린더) / 액화 초저온 공급',
      applications: ['철강 및 제철 제련 공정', '조선·플랜트 정밀 용접', '금속 열처리 및 절단', '석유화학 불활성화'],
      casNo: '7727-37-9 (N₂) / 7782-44-7 (O₂)'
    }
  },
  {
    id: 'fuel-gas',
    category: 'energy',
    categoryNumber: '02 · Clean Energy',
    categoryLabel: '연료용 가스',
    name: '연료용 가스',
    nameEn: 'Fuel & Combustion Gases',
    shortDesc: '프로판, 프라멕스, 에탄, 부탄, 이소부탄 등 고효율 연소 특성을 갖춘 친환경 산업·가정용 연료.',
    tags: ['프라멕스', '고효율 열량'],
    color: 'accent-energy-amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-[#d97706]',
    icon: 'local_fire_department',
    purity: '고열량 특화 배합 (99.5%+)',
    specs: {
      grade: '고효율 산업용 연소 연료 규격',
      supplyType: '벌크로리 공급, 50kg/20kg 고압 실린더',
      pressure: '중·고압 감압 배관 시스템 완비',
      applications: ['산업용 가열로 및 보일러', '정밀 금속 절단 (프라멕스)', '유리 및 요업 가공', '대규모 열처리 공정'],
      casNo: '74-98-6 (Propane) / 106-97-8 (Butane)'
    }
  },
  {
    id: 'special-gas',
    category: 'hitech',
    categoryNumber: '03 · Hi-Tech Pure',
    categoryLabel: '특수 가스',
    name: '특수 가스',
    nameEn: 'Electronic & Specialty Gases',
    shortDesc: '반도체, 디스플레이, 초정밀 전자 공정에 투입되는 초고순도 특수가스 및 고난도 혼합가스.',
    tags: ['6N 초고순도', '반도체 공정'],
    color: 'accent-cryo-mint',
    badgeBg: 'bg-white/10',
    badgeText: 'text-accent-cryo-mint',
    icon: 'memory',
    highlighted: true,
    purity: '99.9999% (6N 초고순도)',
    specs: {
      grade: '반도체 / 디스플레이 Fab 표준 전주기 규격',
      supplyType: 'Y-Cylinder, ISO Module, 클린룸 전용 패키징',
      pressure: '정밀 레귤레이터 및 초고압 감압 시스템 연계',
      applications: ['반도체 웨이퍼 증착 및 식각(Etch)', 'OLED 박막 패터닝', '태양전지 셀 제조', '초미세 레이저 여기 매질'],
      casNo: '7440-59-7 (He) / 7782-44-7'
    }
  },
  {
    id: 'medical-gas',
    category: 'medical',
    categoryNumber: '04 · Life Science',
    categoryLabel: '의료용 가스',
    name: '의료용 가스',
    nameEn: 'Medical Grade Gases',
    shortDesc: '식약처 GMP 인증 기준을 완벽 충족하는 종합병원 및 의료기관 생명 유지 필수 의약품 가스.',
    tags: ['GMP 적격', '의료용 산소'],
    color: 'emerald-600',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    icon: 'medical_services',
    purity: 'KP (대한약전) 규격 99.5% 이상',
    specs: {
      grade: '식품의약품안전처 의약품 GMP 공인 인증',
      supplyType: '병원용 액체산소 CE 초저온 탱크, 의료용 봄베',
      pressure: '120 bar ~ 150 bar 안전 밸브 일체형',
      applications: ['종합병원 응급실 및 중환자실 산소치료', '수술실 흡입마취 보조(N₂O)', '인큐베이터 및 호흡기 병동', '냉동 수술용 초저온 질소'],
      casNo: '7782-44-7 (Medical O₂)'
    }
  },
  {
    id: 'calibration-gas',
    category: 'calibration',
    categoryNumber: '05 · Calibration',
    categoryLabel: '표준 가스',
    name: '표준 가스',
    nameEn: 'Standard & Calibration Gases',
    shortDesc: '정밀 계측기기 교정, 환경오염물질 측정 및 화학 분석 시험을 위한 초정밀 기준 혼합가스.',
    tags: ['ppm·ppb 분석', '교정성적서'],
    color: 'indigo-600',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    icon: 'science',
    purity: '미량 ppb/ppm급 정밀도 보증 (국가표준 소급성)',
    specs: {
      grade: 'KOLAS 인정 국가교정기관 성적서 발행',
      supplyType: '특수 알루미늄 실린더, 내부 부동태화 처리 용기',
      pressure: '100 bar ~ 150 bar',
      applications: ['굴뚝 연속자동측정기(TMS) 교정', '대기 환경 측정망 센서 교정', '가스크로마토그래피(GC) 분석 기준선 교정', '자동차 배출가스 검사 표준'],
      casNo: 'Various Primary Certified Mixtures'
    }
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    category: '실증 R&D',
    categoryBadgeBg: 'bg-secondary text-white',
    date: '2025.01',
    region: '울산 규제자유특구',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』 관련 “구축시스템 3자 안전진단 평가” 용역 입찰',
    summary: '친환경 무탄소 암모니아 선박 연료 벙커링 체계 실증을 위한 세계 최초 3자 종합 안전진단 평가 용역을 추진합니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfDJLEdgeso1DqfGs37u8fBBCBsuIKU4h1srEbPlfdYAl_ChsV0rh0GJWbo18ds4ods1oghzM0EyJy7kXZY6qvFzEQwbv8swMbaH0M3zNbstGx0Ne-3heZ1c6cj0XbNd3Nu04s3HxXlEE06UWokqJ6W9rBw_bCG27WWAxmicUKwZvwq2dPN25GIgpJC3PBx0yf3LjFkmcDA6Zl1rpWhz36L5kwFJ2zlyXShbzhN9EzbIzmlXHGCgu4Qw',
    content: `(주)MS가스가 주도하는 중소벤처기업부 지정 울산 규제자유특구 실증과제 "암모니아 TTS(Truck-to-Ship) 벙커링 인프라 구축 및 안전기준 개발" 사업의 일환으로, 초저온 고압 암모니아 이송 시스템 전주기에 대한 공인 3자 안전진단 평가 용역을 공고합니다.

본 사업은 미래 친환경 해양 선박 연료로 각광받는 무탄소 청정 암모니아의 해상 주입 인프라를 국내 최초로 실증하고, 전세계 국제해사기구(IMO) 안전 표준을 선도하는 중대한 프로젝트입니다.

1. 사업명: 암모니아 TTS 벙커링 구축시스템 3자 안전진단 및 신뢰성 평가 용역
2. 발주기관: (주)MS가스 기술연구원 특수엔지니어링본부
3. 주요 과업 범위:
   - TTS 전용 특수 탱크로리 및 커플러 안전성 정밀 검증
   - 비상 분리 장치(ERC) 작동 신뢰성 및 가스 누출 차단 알고리즘 감사
   - 폭발 위험 구역(Zone 1, Zone 2) 방폭 적격성 정밀 현장 감사`
  },
  {
    id: 'news-2',
    category: 'HAZOP 안전평가',
    categoryBadgeBg: 'bg-accent-electric-blue text-white',
    date: '2024.12',
    region: '정성적 위험평가',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 설비 정성적 위험평가(HAZOP) 분석』 용역 입찰',
    summary: '탱크로리를 이용한 암모니아 벙커링 설비 전반의 무결점 가동을 위한 위험 식별 및 HAZOP 평가 체계 가동.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV3-_XBX427DS2NkAuSFIRC-0PnrqLjTtiNRtgo9eSYSB5qN60DjnjU4LnmHe_ZFSV_oHjfefC6XYPPrgcj8BfkSF043L4UvnKgZSvVvH0By84wzB-WfDU3NW3LExFopxGUf8aAP5nloSwMAggI8gIO3hbcxVa47KG605bmpyaUA_wR5Puo9vkcH3-jWzJDHlHp0be43fR6TiDF8UfGwbf5cOSvIZfoMnc1KwKOlUcRk_vHOIL20aW6w',
    content: `(주)MS가스는 고압가스 안전관리와 환경 위험요소의 선제적 제거를 위해 세계적 권위의 안전 분석 기법인 HAZOP(Hazard and Operability Study)을 암모니아 벙커링 전 프로세스에 도입합니다.

공정 내 잠재적 이탈 현상(온도, 압력, 유량의 비정상 변화)을 시나리오별로 세분화하여 작업자와 항만 환경의 안전을 100% 담보하는 안전 설계 검증을 완료할 예정입니다.

1. 대상 공정: 암모니아 저장, 탱크로리 이송, 부두 매니폴드 주입 전 공정
2. 평가 목표: SIL(Safety Integrity Level) 등급 산정 및 위험도 저감 방안 확립
3. 담당: (주)MS가스 안전품질보증실`
  },
  {
    id: 'news-3',
    category: '정부 포상',
    categoryBadgeBg: 'bg-accent-energy-amber text-white',
    date: '2024.11',
    region: '정부 훈장 및 표창',
    title: '(주)MS가스 전청민 대표이사 은탑산업훈장 수훈 및 충남도지사 탄소중립 유공 표창',
    summary: '국가 산업가스 수급 안정과 친환경 탄소중립 기술 확산에 기여한 공로를 인정받아 최고의 영예를 수훈하였습니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWrw8vrLjK997_mpvmqOTFsuCQjoPNv8tEVNHgaf4Ruyv9Q__t0SpDSdyqnDAB818UFGKBdJMS8yHhf8zSYJvk-yp1cSnJ_AYMgODb8KnYGCFPSP9_Me17XgBP7G3WXKAgj3sGTko1lSV8Oaszua2ye37xuONWtQFO58EhdS2z00XEJRex8Xkc_tU8moo9jzSCp3rrc8J04EMKlvl7dZEiCkrwCJ8306Rm5Q9El0aoB25qjTO0pGdmrw',
    content: `대한민국 정부 주관 2024 산업진흥 유공 포상식에서 (주)MS가스 전청민 대표이사가 국가 산업 기반 공고화 및 반도체 특수가스 국산화 공급 안정에 기여한 공로로 대한민국 최고 등급의 산업 훈장인 '은탑산업훈장'을 수훈하였습니다.

아울러 당진·서산 친환경 신재생에너지 인프라 구축 및 온실가스 저감 실천 공로로 충청남도지사 표창을 동시 수상하며, 50년간 다져온 MS가스의 기술 신뢰와 친환경 기업 비전을 대외적으로 공인받았습니다.

전청민 대표이사는 "이번 수훈은 지난 반세기 동안 현장에서 묵묵히 땀 흘려온 전 임직원과 변함없는 신뢰를 보내주신 고객사 여러분의 결실"이라며, "앞으로도 대한민국의 첨단 산업과 지속 가능한 탄소중립 미래를 굳건히 지탱하겠다"고 포부를 밝혔습니다.`
  }
];

export const MSDS_LIST: MsdsDoc[] = [
  {
    id: 'msds-n2',
    name: '액체 질소 / 기체 질소',
    nameEn: 'Nitrogen, Liquid / Gas (N₂)',
    chemicalFormula: 'N₂',
    casNo: '7727-37-9',
    unNo: 'UN 1066 / UN 1977',
    hazardClass: '고압가스 / 냉각 액화가스',
    purity: '99.999% (5N)',
    updatedDate: '2025.01.10',
    fileSize: '428 KB'
  },
  {
    id: 'msds-o2',
    name: '의료용 / 산업용 액체 산소',
    nameEn: 'Oxygen, Liquid / Gas (O₂)',
    chemicalFormula: 'O₂',
    casNo: '7782-44-7',
    unNo: 'UN 1072 / UN 1073',
    hazardClass: '고압가스 / 산화성 가스',
    purity: '99.5% ~ 99.999%',
    updatedDate: '2025.01.05',
    fileSize: '512 KB'
  },
  {
    id: 'msds-ar',
    name: '고순도 아르곤',
    nameEn: 'Argon, Liquid / Gas (Ar)',
    chemicalFormula: 'Ar',
    casNo: '7440-37-1',
    unNo: 'UN 1006 / UN 1951',
    hazardClass: '불활성 고압가스',
    purity: '99.999% (5N)',
    updatedDate: '2024.12.18',
    fileSize: '390 KB'
  },
  {
    id: 'msds-co2',
    name: '액화 탄산가스 (이산화탄소)',
    nameEn: 'Carbon Dioxide, Liquid (CO₂)',
    chemicalFormula: 'CO₂',
    casNo: '124-38-9',
    unNo: 'UN 1013 / UN 2187',
    hazardClass: '고압가스 / 질식성 가스',
    purity: '99.9% ~ 99.99%',
    updatedDate: '2024.11.20',
    fileSize: '460 KB'
  },
  {
    id: 'msds-nh3',
    name: '초고순도 암모니아',
    nameEn: 'Ammonia, Anhydrous (NH₃)',
    chemicalFormula: 'NH₃',
    casNo: '7664-41-7',
    unNo: 'UN 1005',
    hazardClass: '독성 / 부식성 / 가연성 가스',
    purity: '99.9999% (6N)',
    updatedDate: '2025.01.15',
    fileSize: '684 KB'
  },
  {
    id: 'msds-he',
    name: '특수 헬륨 가스',
    nameEn: 'Helium, Compressed / Liquid (He)',
    chemicalFormula: 'He',
    casNo: '7440-59-7',
    unNo: 'UN 1046 / UN 1963',
    hazardClass: '불활성 고압가스',
    purity: '99.9999% (6N)',
    updatedDate: '2024.10.30',
    fileSize: '340 KB'
  },
  {
    id: 'msds-c3h8',
    name: '산업용 프로판',
    nameEn: 'Propane, Liquefied (C₃H₈)',
    chemicalFormula: 'C₃H₈',
    casNo: '74-98-6',
    unNo: 'UN 1978',
    hazardClass: '인화성 고압가스',
    purity: '99.0%+',
    updatedDate: '2024.09.12',
    fileSize: '410 KB'
  }
];

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    id: 'headquarters',
    name: '부산 본사 및 메인 생산기지',
    region: '영남권 (부산/경남)',
    type: '본사 및 공장',
    address: '부산광역시 사상구 낙동대로 1300 (삼락동)',
    tel: '051-310-8000',
    fax: '051-310-8080',
    manager: '본사 운영총괄본부'
  },
  {
    id: 'ulsan-plant',
    name: '울산 특수가스 및 암모니아 실증기지',
    region: '영남권 (울산)',
    type: '본사 및 공장',
    address: '울산광역시 남구 여천로 217',
    tel: '052-271-9100',
    fax: '052-271-9109',
    manager: '특수가스 생산사업부'
  },
  {
    id: 'dangjin-hub',
    name: '충남 당진 대용량 액화가스 플랜트',
    region: '중부/서해안권 (충남)',
    type: '본사 및 공장',
    address: '충청남도 당진시 송악읍 부곡공단로 188',
    tel: '041-356-4000',
    fax: '041-356-4009',
    manager: '중부권역 물류센터'
  },
  {
    id: 'seoul-gyeonggi',
    name: '수도권 첨단물류 영업소',
    region: '수도권 (경기/인천)',
    type: '영업소',
    address: '경기도 화성시 동탄첨단산업1로 54',
    tel: '031-8015-7700',
    fax: '031-8015-7711',
    manager: '수도권 반도체 솔루션팀'
  },
  {
    id: 'cheongju-branch',
    name: '청주·오창 바이오/반도체 지사',
    region: '충청권 (충북)',
    type: '영업소',
    address: '충청북도 청주시 청원구 오창읍 양청송대길 88',
    tel: '043-214-5500',
    fax: '043-214-5510',
    manager: '오창 바이오 특수가스 담당'
  },
  {
    id: 'yeosu-branch',
    name: '여수 석유화학 거점 물류기지',
    region: '호남권 (전남)',
    type: '물류기지',
    address: '전라남도 여수시 산단중앙로 345',
    tel: '061-685-3300',
    fax: '061-685-3309',
    manager: '여수산단 플랜트 서비스팀'
  },
  {
    id: 'gwangju-branch',
    name: '광주·호남 총괄영업소',
    region: '호남권 (광주)',
    type: '영업소',
    address: '광주광역시 광산구 하남산단5번로 92',
    tel: '062-951-2200',
    fax: '062-951-2210',
    manager: '호남 광역영업팀'
  },
  {
    id: 'pohang-branch',
    name: '포항 철강·금속 에너지 스테이션',
    region: '영남권 (경북)',
    type: '충전소',
    address: '경상북도 포항시 남구 철강산단로 112',
    tel: '054-284-6600',
    fax: '054-284-6609',
    manager: '포항 제철가스 사업소'
  }
];

export const HISTORY_TIMELINE = [
  {
    year: '2024~2025',
    title: '글로벌 무탄소 미래 에너지 & 은탑산업훈장',
    desc: '울산 규제자유특구 암모니아 TTS 벙커링 인프라 실증 주관, 전청민 대표이사 은탑산업훈장 수훈, 2024 연매출 935억원 달성'
  },
  {
    year: '2018~2023',
    title: '반도체 초고순도 특수가스 및 당진 플랜트 준공',
    desc: '6N 초고순도 특수가스 정제 라인 완공, 충남 당진 초대형 액화가스 저장기지 준공, ISO 14001/45001 통합 안전보건 인증 획득'
  },
  {
    year: '2010~2017',
    title: '전국 17개 공급 네트워크 및 스마트 RTMS 운송망',
    desc: '전국 8개 전략 권역 및 17개 직영 영업소 구축, 국내 가스업계 최초 24/7 실시간 위성 관제 모니터링 시스템(RTMS) 전면 가동'
  },
  {
    year: '1995~2009',
    title: '의료용 가스 GMP 인증 및 영남 거점 현대화',
    desc: '식약처 의료용 가스 GMP 적격 승인, 초저온 액화가스 전용 탱크로리 대형 선단 구축, 부산 사상 낙동 신사옥 및 대형 충전 설비 완공'
  },
  {
    year: '1974',
    title: '(주)MS가스 설립 및 산업가스 태동',
    desc: '대한민국 중화학 공업 발전과 발맞추어 고압가스 제조 및 유통 사업 창립. 반세기 무사고 엔지니어링의 신화 시작'
  }
];
