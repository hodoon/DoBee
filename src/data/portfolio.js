export const skills = {
  backend: [
    { name: 'Java',        icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
    { name: 'Spring',      icon: 'https://cdn.simpleicons.org/spring/6DB33F' },
    { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
    { name: 'Python',      icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'FastAPI',     icon: 'https://cdn.simpleicons.org/fastapi/009688' },
  ],
  database: [
    { name: 'MySQL',      icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Redis',      icon: 'https://cdn.simpleicons.org/redis/FF4438' },
  ],
  tools: [
    { name: 'Git',      icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub',   icon: 'https://cdn.simpleicons.org/github/181717',       invertOnDark: true },
    { name: 'IntelliJ', icon: 'https://cdn.simpleicons.org/intellijidea/000000', invertOnDark: true },
    { name: 'Docker',   icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Notion',   icon: 'https://cdn.simpleicons.org/notion/000000',       invertOnDark: true },
  ],
  infra: [
    { name: 'AWS',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'GCP',            icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'Naver Cloud',    icon: 'https://cdn.simpleicons.org/naver/03C75A' },
    { name: 'Nginx',          icon: 'https://cdn.simpleicons.org/nginx/009639' },
    { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
  ],
};

export const projects = [
  {
    id: 1,
    title: '전공동아리 다솜 홈페이지',
    description: '어드민 기능, 모집 기능 DB 설계 및 로직 구현 (Backend)',
    image: '/dasom.jpeg',
    fallbackColor: '6366f1',
    fallbackText: 'DASOM+Web',
    tags: [
      { label: 'React',       color: 'indigo' },
      { label: 'Spring Boot', color: 'green' },
      { label: 'OracleDB',    color: 'orange' },
      { label: 'Docker',      color: 'blue' },
      { label: 'Nginx',       color: 'slate' },
    ],
    github: 'https://github.com/DASOM-GitHub/dasom-web-backend',
    notion: 'https://whip-parakeet-c78.notion.site/DASOM-3146db85d7f381b2b190d54d33d6c078?source=copy_link',
  },
  {
    id: 2,
    title: '맞춤형 금융비서 NunSub',
    description: 'PM, OpenBanking API, 거래내역 분류, 정기 결제 추출, Blue-green 배포',
    image: '/Nunsub.png',
    fallbackColor: '0891b2',
    fallbackText: 'NunSub',
    tags: [
      { label: 'React Native', color: 'cyan' },
      { label: 'Spring Boot',  color: 'green' },
      { label: 'PostgreSQL',   color: 'blue' },
      { label: 'Docker',       color: 'blue' },
      { label: 'Nginx',        color: 'slate' },
    ],
    github: 'https://github.com/NunSub/Nunsub_BackEnd',
    notion: 'https://whip-parakeet-c78.notion.site/Nunsub-3146db85d7f3818e91abd9198afb7cdc?source=copy_link',
  },
  {
    id: 3,
    title: '목표 달성 자산 관리 서비스 VALUEDI',
    description: '마이데이터 기반 자산 현황 시각화, 소비 성향 분석, 금융 MBTI 진단, 금융 상품 추천',
    image: '/valuedi.png',
    fallbackColor: '6366f1',
    fallbackText: 'VALUEDI',
    tags: [
      { label: 'Spring Boot', color: 'green' },
      { label: 'MySQL',       color: 'blue' },
      { label: 'Redis',       color: 'red' },
      { label: 'AWS',         color: 'orange' },
      { label: 'Docker',      color: 'blue' },
      { label: 'Nginx',       color: 'slate' },
    ],
    github: 'https://github.com/Valuedi',
    notion: 'https://whip-parakeet-c78.notion.site/VALUEDI-3146db85d7f381bbbcccfbb0926d1838?source=copy_link',
  },
  {
    id: 4,
    title: 'AI 사시 교정 훈련 서비스 Eye-T',
    description: 'YOLOv5 사시 판별 모델, MediaPipe 시선추적, Phaser 3 게임 개발',
    image: '/EyeT.jpg',
    fallbackColor: '7c3aed',
    fallbackText: 'Eye-T',
    tags: [
      { label: 'Python',    color: 'yellow' },
      { label: 'YOLOv5',   color: 'red' },
      { label: 'MediaPipe', color: 'teal' },
      { label: 'Phaser 3',  color: 'purple' },
      { label: 'RoboFlow',  color: 'slate' },
    ],
    github: 'https://github.com/hodoon/EyeT',
    notion: 'https://whip-parakeet-c78.notion.site/EyeT-AI-3146db85d7f381e98bd6ff5d27f751ea?source=copy_link',
  },
];

export const activities = [
  {
    period: '2024.03 — 2025.12',
    title: '동양미래대학교 컴퓨터공학부 전공동아리',
    role: '다솜 회장',
    color: 'indigo',
  },
  {
    period: '2025.09 — 2026.02',
    title: 'IT 연합 동아리',
    role: 'University MakeUs Challenge 9th Backend',
    color: 'violet',
  },
];

export const awards = [
  {
    date: '2025.02',
    title: '동양미래대학교 생성형 AI를 활용한 문제해결 해커톤 경진대회',
    prize: '장려상',
    badge: '장',
    type: 'bronze',
  },
  {
    date: '2025.12',
    title: '스마트 SW 개발 경진대회',
    prize: '장려상',
    badge: '장',
    type: 'bronze',
  },
  {
    date: '2025.12',
    title: '동양미래대학교 생성형 AI 경진대회',
    prize: '대상 🥇',
    badge: '대',
    type: 'best',
  },
  {
    date: '2026.02',
    title: 'UMC 데모데이 경진대회',
    prize: '우수상',
    badge: '우',
    type: 'silver',
  },
];

export const patent = {
  status: '등록완료',
  date: '2026.02.13',
  title: '인공지능 기반 시선 추적 게임형 학습 시스템을 활용한 사시 교정 훈련 시스템 및 방법',
  number: '출원번호 10-2026-0029502',
};

export const education = [
  {
    school: '동양미래대학교',
    degree: '컴퓨터공학부 컴퓨터소프트웨어공학과 · 전문학사',
    period: '2020.03 — 2026.02',
    status: '졸업',
    statusColor: 'slate',
  },
  {
    school: '동양미래대학교',
    degree: '컴퓨터공학부 컴퓨터소프트웨어공학과 · 학사',
    period: '2026.03 — 현재',
    status: '재학중',
    statusColor: 'indigo',
  },
];
