export const GLOBAL_CTA_URL = "https://www.purplemoon.co.kr/";
export const CONTACT_EMAIL = "nakedoll@gmail.com";

export const getInquiryMailtoUrl = (params?: {
  name?: string;
  organization?: string;
  contact?: string;
  serviceType?: string;
  message?: string;
}) => {
  const subject = params?.organization
    ? `[퍼플문 프로젝트 문의] ${params.organization} ${params.name || ''}`.trim()
    : `[퍼플문] 프로젝트 기획 및 솔루션 문의`;

  let body = `안녕하세요, 퍼플문 기획팀 귀하.\n\n프로젝트 기획 및 맞춤 솔루션 관련하여 문의드립니다.\n\n`;
  if (params?.name) body += `• 담당자명: ${params.name}\n`;
  if (params?.organization) body += `• 소속 기관/기업명: ${params.organization}\n`;
  if (params?.contact) body += `• 회신 연락처/이메일: ${params.contact}\n`;
  if (params?.serviceType) body += `• 관심 솔루션: ${params.serviceType}\n`;
  if (params?.message) body += `\n[문의 내용 / 해결하고자 하는 고민]\n${params.message}\n`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const IMAGES = {
  hero: "/src/assets/images/hero_section_1791423830480.jpg",
  quiz: "/src/assets/images/quiz_dashboard_1791423843428.jpg",
  solutions: "/src/assets/images/expert_solutions_1791423854999.jpg",
  cases: "/src/assets/images/case_study_timeline_1791423865169.jpg",
  metrics: "/src/assets/images/metrics_dashboard_1791423875552.jpg",
  contact: "/src/assets/images/contact_form_1791423886368.jpg",
} as const;

export const SOLUTIONS_LIST = [
  {
    id: "reporting",
    number: "01",
    title: "탐사 취재 & 데이터 분석",
    desc: "기자 출신 전문 리서처가 복잡한 원천 데이터와 전문 지식을 정밀하게 수집·검증합니다.",
    tag: "심층 리서치",
    items: ["전문 기술 백서 분석", "이해관계자 1:1 심층 인터뷰", "신뢰도 높은 팩트체크"]
  },
  {
    id: "storytelling",
    number: "02",
    title: "과학적 스토리텔링",
    desc: "인지심리학과 데이터 저널리즘을 결합하여 난해한 정보를 청중이 단숨에 이해하도록 구조화합니다.",
    tag: "내러티브 설계",
    items: ["타깃 인지 구조 분석", "스토리 아크(Story Arc) 기획", "전문 용어의 대중적 전환"]
  },
  {
    id: "web",
    number: "03",
    title: "인터랙티브 웹 솔루션",
    desc: "스크롤리텔링과 실시간 시각화로 사용자가 직접 탐색하며 몰입하는 반응형 디지털 경험을 제공합니다.",
    tag: "인터랙티브 UI/UX",
    items: ["모바일 최적화 스크롤 인터랙션", "실시간 데이터 비주얼라이저", "초고속 웹 퍼포먼스"]
  },
  {
    id: "toon",
    number: "04",
    title: "웹툰 & 비주얼 인포그래픽",
    desc: "일류 작가진과 기획자가 협업하여 정책, 기술, 학술 정보를 한눈에 들어오는 그래픽으로 구현합니다.",
    tag: "비주얼라이제이션",
    items: ["공공/기업 맞춤형 브랜드 웹툰", "인포그래픽 카드뉴스", "일러스트레이션 시스템"]
  },
  {
    id: "media",
    number: "05",
    title: "고화질 영상 & 모션 그래픽",
    desc: "AI 제작 파이프라인과 전문 감독진의 연출력으로 정보의 설득력을 극대화한 영상을 제작합니다.",
    tag: "시네마틱 미디어",
    items: ["3D/2D 모션 인포그래픽", "다큐멘터리형 브랜드 필름", "숏폼 하이라이트 영상"]
  }
];

export const CASE_STUDIES = [
  {
    id: "case-1",
    phase: "Phase 01",
    client: "국가 첨단과학 연구기관",
    title: "난해한 양자 컴퓨팅 기술의 대중 인터랙티브 웹 다큐 전환",
    result: "평균 체류 시간 5분 42초 기록 (동종 업계 대비 340% 증가)",
    details: "수백 페이지의 양자역학 연구 논문을 AI 데이터 마이닝으로 핵심 5대 명제로 압축하고, 인터랙티브 3D 시뮬레이션 웹으로 재해석하여 전국적인 대중 호응을 이끌어냈습니다.",
    category: "인터랙티브 웹"
  },
  {
    id: "case-2",
    phase: "Phase 02",
    client: "친환경 글로벌 에너지 기업",
    title: "ESG 지속가능성 보고서의 10부작 몰입형 웹툰 시리즈화",
    result: "누적 조회수 120만 회 돌파, 대국민 브랜드 인지도 42% 향상",
    details: "딱딱한 탄소배출 데이터와 순환경제 로드맵을 위트 있는 SF 내러티브 캐릭터 웹툰으로 기획하여 2030 세대의 자발적 공유를 확산시켰습니다.",
    category: "비주얼 스토리텔링"
  },
  {
    id: "case-3",
    phase: "Phase 03",
    client: "공공 정책 혁신 부처",
    title: "복잡한 복지 제도 수혜자 맞춤 1분 시뮬레이터 개발",
    result: "민원 문의량 58% 감소, 정책 이용 신청률 2.8배 증가",
    details: "복잡한 법률과 지원 조건을 3번의 클릭만으로 계산해주는 마이크로 웹 앱으로 제작하여 정보 취약계층의 정책 접근성을 획기적으로 개선했습니다.",
    category: "데이터 솔루션"
  }
];

export const METRICS = [
  {
    value: "98.4%",
    label: "클라이언트 기획 만족도",
    desc: "기획안 초안 채택률 및 완성도 평가"
  },
  {
    value: "3.8배",
    label: "평균 콘텐츠 체류 시간",
    desc: "기존 텍스트형 콘텐츠 대비 몰입 시간 증가"
  },
  {
    value: "150+",
    label: "전문 프로젝트 완수",
    desc: "공공기관, 연구소, 대기업 파트너십 실적"
  },
  {
    value: "0건",
    label: "팩트 체크 오류율",
    desc: "기자 출신 연구진의 엄격한 3중 교차 검증"
  }
];
