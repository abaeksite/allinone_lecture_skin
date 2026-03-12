window.SupportFinder = window.SupportFinder || {};

window.SupportFinder.forceRefresh = function() {
    // 데이터 강제 새로고침
    if (document.getElementById('supportFinderSupportGrid')) {
        this.updateCurrentDate();
        this.setupCheckboxes();
    }
};

window.SupportFinder.manualSupportData = [
  {
    title: "청년미래적금",
    description: "청년 자산형성 적금",
    amount: "최대 2,200만원",
    deadline: "2026-06-30 출시 예정",
    ages: ["20대","30대"],
    regions: ["전국"],
    source: "금융위원회",
    category: "자산형성",
    link: "https://www.fsc.go.kr",
    priority: 1
  },
  {
    title: "청년도약계좌",
    description: "청년 자산형성 적금",
    amount: "5년 만기 최대 5,000만원 (정부기여금 최대 6% 포함)",
    deadline: "매달 초 신청",
    ages: ["20대","30대"],
    regions: ["전국"],
    source: "서민금융진흥원",
    category: "자산형성",
    link: "https://www.kinfa.or.kr",
    priority: 1
  },
  {
    title: "국민취업지원제도 구직촉진수당",
    description: "저소득 구직자 지원금",
    amount: "월 60만원 × 최대 6개월 (총 360만원)",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "청년 월세 한시 특별지원",
    description: "청년 무주택 월세 지원",
    amount: "월 최대 20만원 × 24개월 (총 최대 480만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "국민내일배움카드",
    description: "직업훈련비 지원 카드",
    amount: "기본 300만원 + 추가 200만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "교육·훈련",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "부모급여",
    description: "영아 가정 양육 지원금",
    amount: "만 0세 월 100만원 / 만 1세 월 50만원",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "아동수당",
    description: "만 8세 미만 아동 수당",
    amount: "월 10만원 (연 120만원)",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "첫만남이용권",
    description: "출생 아동 바우처 지급",
    amount: "첫째 200만원 / 둘째 이상 300만원",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "기초연금",
    description: "저소득 노인 연금 지급",
    amount: "월 최대 약 34만 9,700원",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "근로장려금",
    description: "저소득 가구 세금 환급",
    amount: "단독 최대 165만원 / 홑벌이 285만원 / 맞벌이 330만원",
    deadline: "2026-05-31",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["전국"],
    source: "국세청",
    category: "복지",
    link: "https://www.hometax.go.kr",
    priority: 1
  },
  {
    title: "자녀장려금",
    description: "자녀 양육 가구 세금 환급",
    amount: "자녀 1인당 최대 100만원",
    deadline: "2026-05-31",
    ages: ["30대","40대"],
    regions: ["전국"],
    source: "국세청",
    category: "출산·육아",
    link: "https://www.hometax.go.kr",
    priority: 1
  },
  {
    title: "국가장학금 (I·II 유형)",
    description: "대학생 학자금 지원",
    amount: "1구간 연 최대 700만원",
    deadline: "상시",
    ages: ["10대","20대"],
    regions: ["전국"],
    source: "한국장학재단",
    category: "교육·훈련",
    link: "https://www.kosaf.go.kr",
    priority: 1
  },
  {
    title: "청년일자리도약장려금",
    description: "청년 채용 기업 장려금",
    amount: "최대 480만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "노인일자리 및 사회활동 지원사업",
    description: "노인 일자리 제공",
    amount: "공익활동형 월 약 29만원 / 사회서비스형 월 약 59~76만원",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "취업지원",
    link: "https://www.seniorro.or.kr",
    priority: 1
  },
  {
    title: "건강생활실천지원금 (걷기 포인트)",
    description: "건강관리 실천 포인트",
    amount: "최대 연 12만 포인트",
    deadline: "상시",
    ages: ["40대","50대","60대","70대"],
    regions: ["전국"],
    source: "국민건강보험공단",
    category: "건강",
    link: "https://www.nhis.or.kr",
    priority: 2
  },
  {
    title: "기초생활수급 주거급여",
    description: "저소득 가구 임차료 지원",
    amount: "1인 가구 월 최대 약 34만원 (지역·가구원 수별 상이)",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "기초생활보장 생계급여",
    description: "저소득 가구 생계비 지급",
    amount: "4인 가구 월 207만원 / 1인 가구 월 82만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "교육급여",
    description: "수급 가구 학생 교육비",
    amount: "초등 50.2만원 / 중학 69.9만원 / 고등 86만원 (연)",
    deadline: "상시",
    ages: ["10대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "교육·훈련",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "장애인연금",
    description: "중증장애인 소득 지원",
    amount: "기초급여 월 최대 34만 2,510원 + 부가급여 별도",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 2
  },
  {
    title: "긴급복지 생계지원",
    description: "위기 가구 즉시 생계 지원",
    amount: "1인 가구 730,500원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["전국"],
    source: "보건복지상담센터",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "실업크레딧 지원",
    description: "구직급여 수급자 연금 지원",
    amount: "인정 소득 월 최대 70만원 기준 보험료의 75%",
    deadline: "구직급여종료일 다음달 15일",
    ages: ["30대","40대","50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/B55201500004",
    priority: 1
  },
  {
    title: "장기전세 주택공급",
    description: "시세 80% 장기전세 공급",
    amount: "시세의 80% 수준",
    deadline: "접수기관별 상이",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["전국"],
    source: "한국토지주택공사",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },
  {
    title: "소상공인 정책자금",
    description: "소상공인 저금리 융자",
    amount: "최대 7,000만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "청년 소상공인 창업지원금",
    description: "청년 창업 사업화 자금",
    amount: "최대 3,000만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "고용촉진장려금",
    description: "취약계층 채용 장려금",
    amount: "1인당 최대 수백만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "난임부부 시술비 지원",
    description: "난임 시술비 지원",
    amount: "시술 횟수·방법별 최대 수백만원",
    deadline: "상시",
    ages: ["30대","40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 2
  },
  {
    title: "전기차 구매 보조금",
    description: "전기차 구매 보조금",
    amount: "최대 400만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["전국"],
    source: "환경부",
    category: "친환경",
    link: "https://www.ev.or.kr",
    priority: 2
  },
  {
    title: "소상공인 전기요금 지원",
    description: "소상공인 전기료 할인",
    amount: "월 최대 70만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["전국"],
    source: "한국전력공사",
    category: "생활안정",
    link: "https://www.kepco.co.kr",
    priority: 2
  },
  {
    title: "긴급경영안정자금",
    description: "소상공인 긴급 융자",
    amount: "최대 7,000만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 2
  },
  {
    title: "전통시장 특례보증",
    description: "전통시장 소상공인 보증",
    amount: "최대 2,000만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["전국"],
    source: "신용보증재단",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 2
  },
  {
    title: "사회보장급여 신청",
    description: "복지급여 통합 신청",
    amount: "급여 유형별 상이",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 2
  },
  {
    title: "국가보훈대상자 생활지원금",
    description: "보훈대상자 생활비 지원",
    amount: "대상 유형별 상이",
    deadline: "상시",
    ages: ["60대","70대"],
    regions: ["전국"],
    source: "국가보훈부",
    category: "복지",
    link: "https://www.gov.kr",
    priority: 2
  },
  {
    title: "서울 청년수당",
    description: "미취업 청년 구직 지원금",
    amount: "월 50만원 × 최대 6개월 (총 300만원)",
    deadline: "2026-03-13",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 미래 청년 일자리",
    description: "서울시 청년 직접 고용",
    amount: "월 약 253만원 (세전, 서울시 직접 지급)",
    deadline: "2026-04-03",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 청년 월세지원",
    description: "청년 1인 가구 월세 지원",
    amount: "월 20만원 × 최대 12개월 (총 240만원)",
    deadline: "2026-04-30",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://housing.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 희망두배 청년통장",
    description: "저소득 청년 매칭 저축",
    amount: "2년 만기 최대 1,020만원",
    deadline: "2026-05-31",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "자산형성",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 청년 이사·중개비 지원",
    description: "청년 이사·중개비 지원",
    amount: "최대 40만원",
    deadline: "2026-08-31",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 청년 대중교통비 지원",
    description: "청년 교통비 월 환급",
    amount: "월 최대 5만원 (연 최대 60만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "생활안정",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울 청년 마음건강 지원",
    description: "청년 심리상담 바우처",
    amount: "최대 10회 상담비 지원 (회당 5~7만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "건강",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년취업사관학교",
    description: "IT 분야 무료 직업교육",
    amount: "무료 교육 + 취업 연계",
    deadline: "분기별 모집 (연 4회)",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울형 마이크로크레딧",
    description: "소상공인 초저금리 융자",
    amount: "연 1%대 저금리 융자",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["서울특별시"],
    source: "서울신용보증재단",
    category: "창업지원",
    link: "https://www.seoulshinbo.co.kr",
    priority: 2
  },
  {
    title: "서울시 고립·은둔청년 지원",
    description: "고립 청년 상담·회복 지원",
    amount: "무료 상담 및 프로그램",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울광역청년센터",
    category: "복지",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 뉴딜일자리",
    description: "공공기관 단기 일자리",
    amount: "직무별 급여 지급",
    deadline: "분기별 모집 (연 4회)",
    ages: ["20대","30대","40대","50대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://job.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울 전기 이륜차 보조금",
    description: "전기 이륜차 구매 보조",
    amount: "구매가의 최대 40%",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "친환경",
    link: "https://www.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년 면접정장 대여",
    description: "면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["서울특별시"],
    source: "서울청년센터",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 3
  },
  {
    title: "경기도 청년기본소득",
    description: "만 24세 청년 지역화폐 지급",
    amount: "분기별 25만원 × 4분기 (연 최대 100만원)",
    deadline: "2026-04-01",
    ages: ["20대"],
    regions: ["경기도"],
    source: "경기도",
    category: "복지",
    link: "https://apply.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 청년 복지포인트",
    description: "중소기업 재직 청년 포인트",
    amount: "연 120만원 (반기별 60만원)",
    deadline: "2026-06-12",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 중소기업 청년 노동자 지원",
    description: "중소기업 청년 지역화폐 지원",
    amount: "2년간 480만원 (반기 120만원)",
    deadline: "2026-10-16",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 청년 노동자 통장",
    description: "청년 매칭 저축 통장",
    amount: "2년 만기 약 580만원",
    deadline: "2026-05-31",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기도미래세대재단",
    category: "자산형성",
    link: "https://account.ggwf.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 매입임대주택",
    description: "청년 저렴 임대주택 공급",
    amount: "시세 40~50% 수준",
    deadline: "수시 공고 (GH 청약홈 확인)",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기주택도시공사",
    category: "주거지원",
    link: "https://www.gico.or.kr",
    priority: 1
  },
  {
    title: "경기도 행복주택",
    description: "청년·신혼부부 공공임대",
    amount: "시세 60~80% 수준",
    deadline: "수시 공고 (LH 청약홈 확인)",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기주택도시공사",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 최대 20만원 × 24개월 (총 최대 480만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "주거지원",
    link: "https://www.gg.go.kr",
    priority: 1
  },
  {
    title: "경기도 청년 역량강화 기회지원",
    description: "청년 자격증 응시료 지원",
    amount: "최대 30만원",
    deadline: "2026-11-30",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "취업지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 청년 면접비 지원",
    description: "청년 면접 교통비 지원",
    amount: "1회 5만원, 연 최대 4회 (총 20만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://apply.jobaba.net",
    priority: 2
  },
  {
    title: "경기도 꿈날개 여성 경력개발",
    description: "경력단절 여성 취업 지원",
    amount: "무료 서비스",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["경기도"],
    source: "경기도여성가족재단",
    category: "취업지원",
    link: "https://www.dreamwing.or.kr",
    priority: 2
  },
  {
    title: "경기도 디지털 상점 전환 사업",
    description: "소상공인 디지털 전환 지원",
    amount: "최대 500만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["경기도"],
    source: "경기도",
    category: "창업지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 국방전직지원 직업교육",
    description: "전역 군인 직업교육 지원",
    amount: "무료 교육",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://gjf.or.kr",
    priority: 3
  },
  {
    title: "인천 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원 × 최대 24개월",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 청년 임차보증금 대출이자 지원",
    description: "청년 보증금 대출이자 지원",
    amount: "대출이자 일부 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i+ 1억드림 출산지원",
    description: "출산 가정 종합 지원",
    amount: "종합 지원 패키지 (최대 1억원 목표)",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "출산·육아",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 75세 이상 버스 무료화",
    description: "75세 이상 버스 무료",
    amount: "버스 무료 이용",
    deadline: "상시",
    ages: ["70대","80대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "생활안정",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i-패스 교통비 환급",
    description: "시민 교통비 환급",
    amount: "이용 실적에 따라 환급",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "생활안정",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i+ 집Dream 신혼부부 주거지원",
    description: "신혼부부 임대료 지원",
    amount: "임대료 일부 지원",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 자립준비청년 주거지원",
    description: "자립준비청년 주거 지원",
    amount: "주거 제공",
    deadline: "상시",
    ages: ["20대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 소상공인 경영환경개선 지원",
    description: "소상공인 점포 개선 지원",
    amount: "업체당 최대 250만원",
    deadline: "2026-08-14",
    ages: ["40대","50대","60대","70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "창업지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 외로움돌봄 지원",
    description: "고립 시민 무료 상담",
    amount: "무료 상담 지원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "복지",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 군장병 재해보험",
    description: "군 복무 장병 재해보험",
    amount: "보험료 전액 지원",
    deadline: "상시",
    ages: ["20대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "복지",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 주택임차보증금 이자지원",
    description: "청년 보증금 대출이자 지원",
    amount: "대출이자 최대 연 3% 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원 × 최대 12개월 (총 240만원)",
    deadline: "2026-08-14",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://www.djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 청년부부 결혼장려금",
    description: "초혼 청년 부부 결혼 지원금",
    amount: "1인당 250만원 (부부 합산 500만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "출산·육아",
    link: "https://www.djwedding.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 창업지원",
    description: "청년 창업 사업화 자금",
    amount: "최대 3,000만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.daejeon.go.kr",
    priority: 1
  },
  {
    title: "대전 영세소상공인 인건비 지원",
    description: "소상공인 신규 인건비 보조",
    amount: "근로자 1인당 150만원 (50만원×3개월)",
    deadline: "2026-11-28",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 취업역량 강화",
    description: "청년 취업 교육·상담",
    amount: "무료 교육",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 자격증 응시료 지원",
    description: "청년 자격증 응시료 지원",
    amount: "응시료 일부 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 심리상담 지원",
    description: "청년 무료 심리상담",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "건강",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 면접비 지원",
    description: "청년 면접 교통비 지원",
    amount: "면접비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 소상공인 전기요금 지원",
    description: "소상공인 전기료 지원",
    amount: "전기요금 일부 지원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "생활안정",
    link: "https://www.daejeon.go.kr",
    priority: 3
  },
  {
    title: "세종 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 신혼부부 주거지원",
    description: "신혼부부 전세 이자 지원",
    amount: "전세자금 대출이자 지원",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 창업지원금",
    description: "청년 창업 자금·공간 지원",
    amount: "최대 2,000만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 취업지원",
    description: "청년 취업 교육·상담 지원",
    amount: "구직활동비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 자산형성 지원",
    description: "저소득 청년 매칭 저축",
    amount: "본인저축액 매칭",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "자산형성",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 소상공인 지원금",
    description: "소상공인 저금리 융자",
    amount: "최대 5,000만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 교통비 지원",
    description: "청년 교통비 지원",
    amount: "교통비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "생활안정",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 심리상담",
    description: "청년 무료 심리상담",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "건강",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 직업훈련",
    description: "청년 직업훈련비 지원",
    amount: "훈련비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 면접정장 대여",
    description: "면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 3
  },
  {
    title: "충북 청년 1인가구 이사비 지원",
    description: "청년 1인 가구 이사비 지원",
    amount: "이사비 실비 지원",
    deadline: "2026-08-27",
    ages: ["20대","30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 대학생 주거 지원",
    description: "충북 출신 대학생 기숙사",
    amount: "기숙사비 지원",
    deadline: "매년 2~3월 모집",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 성적장학금",
    description: "성적 우수 대학생 장학금",
    amount: "1인당 200만원",
    deadline: "2026-09-09",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충북인재평생교육진흥원",
    category: "교육·훈련",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년내일저축계좌",
    description: "저소득 청년 매칭 저축",
    amount: "본인 저축액 매칭 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "자산형성",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 자립준비청년 자립수당",
    description: "자립준비청년 자립 수당",
    amount: "자립수당 지급",
    deadline: "상시",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "복지",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 행복결혼공제",
    description: "청년 결혼자금 공제 지원",
    amount: "공제 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "출산·육아",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 마음이음 청년 심리상담",
    description: "청년 무료 심리상담",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "건강",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 소상공인 창업응원금",
    description: "청년 소상공인 창업 지원",
    amount: "창업지원금",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "창업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 소상공인 맞춤형 인건비 지원",
    description: "소상공인 인건비 40% 보조",
    amount: "최저시급의 40% (270일 한도)",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "창업지원",
    link: "https://www.chungbuk.go.kr",
    priority: 2
  },
  {
    title: "충북 청년 사회서비스사업단",
    description: "청년 사회서비스 일자리",
    amount: "일자리 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "취업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 무료 법률상담",
    description: "도민 무료 법률상담",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "복지",
    link: "https://www.chungbuk.go.kr",
    priority: 3
  },
  {
    title: "충청남도 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 최대 20만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "주거지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충청남도 농업인 수당",
    description: "농업인 공익 직불금",
    amount: "연 60만원",
    deadline: "상시",
    ages: ["40대","50대","60대","70대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "농어업",
    link: "https://www.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충청남도 출산장려금",
    description: "출산 가구 장려금 지급",
    amount: "첫째 최소 30만원~ / 셋째 이상 최대 수백만원 (시군별 상이)",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["충청남도"],
    source: "충청남도 시군",
    category: "출산·육아",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 어르신 틀니·임플란트 본인부담금 지원",
    description: "노인 치과 본인부담금 지원",
    amount: "본인부담금 전액 또는 일부 지원",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["충청남도"],
    source: "충청남도 보건소",
    category: "건강",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년창업 지원",
    description: "청년 창업 자금·공간 지원",
    amount: "최대 2,000만원 + 사무공간 무상 제공",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://ccei.creativekorea.or.kr",
    priority: 2
  },
  {
    title: "충청남도 청년 취업지원금",
    description: "미취업 청년 구직 지원",
    amount: "구직활동비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 소상공인 경영안정 자금",
    description: "소상공인 경영안정 융자",
    amount: "최대 5,000만원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 농어촌 청년 정착 지원",
    description: "농어촌 이주 청년 정착금",
    amount: "정착지원금",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "복지",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년활력공간 운영",
    description: "청년 활동 공간 무료 제공",
    amount: "무료 공간 이용",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "복지",
    link: "https://youth.chungnam.go.kr",
    priority: 3
  },
  {
    title: "충청남도 청년 심리상담 지원",
    description: "청년 무료 심리상담",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "건강",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년 교통비 지원",
    description: "청년 교통비 지원",
    amount: "교통비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "생활안정",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년 직업훈련 지원",
    description: "청년 직업훈련비 지원",
    amount: "훈련비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "강원 청년 이주 정착 지원금",
    description: "강원 이주 청년 정착 지원금",
    amount: "최대 월 30만원 × 24개월 (총 720만원)",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도",
    category: "복지",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 농업인 공익수당",
    description: "농업인 소득 안정 수당",
    amount: "연 60만원",
    deadline: "상시",
    ages: ["40대","50대","60대","70대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도",
    category: "농어업",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 청년 일자리 지원 (비수도권 도약장려금)",
    description: "강원 취업 청년 장려금",
    amount: "최대 600~720만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["강원특별자치도"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "강원 어르신 교통 지원",
    description: "65세 이상 교통비 지원",
    amount: "교통비 무료 또는 월 최대 2만원 환급",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도 시군",
    category: "생활안정",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 인구감소지역 여행경비 지원",
    description: "강원 인구감소지역 여행 환급",
    amount: "여행경비의 50% 환급 (1인 최대 10만원)",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["강원특별자치도"],
    source: "행정안전부·강원특별자치도",
    category: "생활안정",
    link: "https://www.gov.kr",
    priority: 2
  },
  {
    title: "전라남도 농어민 공익수당",
    description: "농어민 공익 수당 지급",
    amount: "연 60만원 (월 5만원)",
    deadline: "상시",
    ages: ["40대","50대","60대","70대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "농어업",
    link: "https://www.jeonnam.go.kr",
    priority: 1
  },
  {
    title: "전라남도 청년 정착 지원금",
    description: "전남 이주 청년 정착 지원금",
    amount: "최대 월 50만원 × 24개월 (총 최대 1,200만원)",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "복지",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
  {
    title: "전라남도 노인 무릎인공관절 수술비 지원",
    description: "저소득 노인 무릎 수술비",
    amount: "수술비 일부 최대 120만원",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "건강",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
  {
    title: "전라남도 귀농창업 융자 지원",
    description: "귀농 정착자 저리 융자",
    amount: "융자 최대 5,000만원 (금리 0.5~2%)",
    deadline: "상시",
    ages: ["30대","40대","50대"],
    regions: ["전라남도"],
    source: "전라남도 농업기술원",
    category: "농어업",
    link: "https://www.jares.go.kr",
    priority: 2
  },
  {
    title: "전라남도 어르신 무임 교통비 지원",
    description: "65세 이상 교통비 환급",
    amount: "월 최대 2만원 (연 24만원)",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "생활안정",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
  {
    title: "경상남도 농어업인수당",
    description: "농어업인 소득 안정 수당",
    amount: "연 30만원",
    deadline: "상시",
    ages: ["40대","50대","60대","70대"],
    regions: ["경상남도"],
    source: "읍면동 행정복지센터",
    category: "농어업",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001092",
    priority: 1
  },
  {
    title: "경남 노인가장세대 냉난방비 지원",
    description: "노인 가장 냉난방비 지원",
    amount: "냉방비 4만원 / 난방비 8.5만원",
    deadline: "상시",
    ages: ["60대","70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001100",
    priority: 1
  },
  {
    title: "경남 청년 구직활동 수당",
    description: "미취업 청년 구직 지원금",
    amount: "월 50만원 × 6개월 (총 300만원)",
    deadline: "2026-05-22",
    ages: ["20대","30대"],
    regions: ["경상남도"],
    source: "경상남도 투자경제진흥원",
    category: "취업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "주거지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 소상공인 융자지원",
    description: "소상공인 경영자금 융자",
    amount: "업체당 최대 1억원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 창업지원금",
    description: "청년 창업 사업화 자금",
    amount: "최대 3,000만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경남 창업기업 신규고용 보조금",
    description: "창업 기업 채용 인건비 보조",
    amount: "1인당 최대 300만원 (기업당 최대 5명)",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 2
  },
  {
    title: "경남 무의탁노인 건강음료 배달",
    description: "독거노인 건강음료 배달",
    amount: "건강음료 무료 제공",
    deadline: "상시",
    ages: ["60대","70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000143",
    priority: 2
  },
  {
    title: "경상남도 귀농귀촌 정착 지원금",
    description: "귀농·귀촌 정착 지원금",
    amount: "귀농 최대 3,000만원 / 귀촌 최대 500만원",
    deadline: "상시",
    ages: ["30대","40대","50대"],
    regions: ["경상남도"],
    source: "경상남도 농업기술원",
    category: "농어업",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경북 거동불편 저소득 노인 식사배달",
    description: "거동불편 노인 도시락 배달",
    amount: "도시락·반찬 무료 제공",
    deadline: "상시",
    ages: ["60대","70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000124",
    priority: 1
  },
  {
    title: "경북 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원 (최대 12개월)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "주거지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 구직활동 지원",
    description: "미취업 청년 구직활동비",
    amount: "월 50만원 × 6개월 (총 300만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "취업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 창업지원금",
    description: "청년 창업 초기자금 지원",
    amount: "최대 1,000만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "창업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 긴급생활안정 지원",
    description: "청년 긴급 생계·의료비",
    amount: "최대 100만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "복지",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 자산형성 지원",
    description: "저소득 청년 매칭 저축",
    amount: "본인저축액 매칭",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "자산형성",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 창업 및 경쟁력강화 사업자금",
    description: "중소기업 저리 사업자금",
    amount: "최대 5억원 (금리 약 2.5%)",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대"],
    regions: ["경상북도"],
    source: "경상북도경제진흥원",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 2
  },
  {
    title: "경북 청년 교통비·통신비 지원",
    description: "청년 교통·통신비 지원",
    amount: "교통비 환급 + 월 2만원 통신비",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "생활안정",
    link: "https://gbyouth.co.kr",
    priority: 2
  },
  {
    title: "경북 무의탁노인 건강음료 배달",
    description: "독거노인 건강음료 배달",
    amount: "건강음료 무료 제공",
    deadline: "상시",
    ages: ["60대","70대"],
    regions: ["경상북도"],
    source: "주민센터",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000143",
    priority: 2
  },
  {
    title: "대구 청년 희망적금",
    description: "청년 매칭 저축 적금",
    amount: "본인 120만원 + 대구시 120만원 = 총 240만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "자산형성",
    link: "https://youthdream.daegu.go.kr",
    priority: 1
  },
  {
    title: "대구 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "주거지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 구직지원금",
    description: "미취업 청년 구직활동비",
    amount: "월 50만원 × 최대 6개월 (총 300만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "취업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 창업지원금",
    description: "청년 창업 초기자금 지원",
    amount: "최대 1,500만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "창업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년일자리도약장려금",
    description: "청년 채용 기업 장려금",
    amount: "월 60만원 × 12개월 (총 720만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구경영자총협회",
    category: "취업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 1
  },
  {
    title: "대구 청년활력공간 다온나그래",
    description: "청년 활동 공간 무료 이용",
    amount: "무료 공간 이용",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 사회적 고립청년 지원",
    description: "고립 청년 상담·회복 프로그램",
    amount: "무료 상담 및 프로그램",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 면접비 지원",
    description: "청년 면접 교통비 지원",
    amount: "면접비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 정장 대여",
    description: "면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 3
  },
  {
    title: "대구 청년상담소",
    description: "청년 진로·취업·심리 상담",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "부산 청년 도전 지원금",
    description: "미취업 청년 구직 지원금",
    amount: "월 50만원 × 최대 6개월 (총 300만원)",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "취업지원",
    link: "https://youth.busan.go.kr",
    priority: 1
  },
  {
    title: "부산 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 최대 20만원 × 최대 24개월",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "주거지원",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "부산 어르신 의치(틀니) 지원",
    description: "저소득 노인 틀니 지원",
    amount: "틀니 제작비 전액 또는 일부 지원",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["부산광역시"],
    source: "부산광역시 보건소",
    category: "건강",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "부산 청년 내일채움공제",
    description: "중소기업 재직 청년 공제",
    amount: "2년 만기 1,200만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["부산광역시"],
    source: "고용노동부·중소기업진흥공단",
    category: "자산형성",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "부산 노인 사회활동 지원",
    description: "노인 경로당 활동비 지원",
    amount: "경로당 활동비 월 3~5만원 지원",
    deadline: "상시",
    ages: ["60대","70대","80대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "복지",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "제주 도민안전보험",
    description: "도민 자동 가입 안전보험",
    amount: "보험료 전액 도비 지원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://www.jejubokji.net",
    priority: 1
  },
  {
    title: "제주 청년 월세 지원",
    description: "청년 무주택 월세 지원",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년 자격증 응시료 지원",
    description: "청년 자격증 응시료 지원",
    amount: "응시료 실비 지원 (1인·1시험·연 1회)",
    deadline: "2026-12-12",
    ages: ["20대","30대"],
    regions: ["제주특별자치도"],
    source: "제주시",
    category: "취업지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년희망대출",
    description: "청년 저신용 금융 지원",
    amount: "융자 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 출산가정 산후조리비",
    description: "출산 가정 산후조리비",
    amount: "40만원",
    deadline: "상시",
    ages: ["20대","30대","40대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "출산·육아",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 교통복지카드 어린이 버스 무료",
    description: "어린이 시내버스 무료",
    amount: "버스 무료 이용",
    deadline: "상시",
    ages: ["10대 미만","10대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "생활안정",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 2자녀 이상 주택 취득세 감면",
    description: "다자녀 주택 취득세 감면",
    amount: "취득세 일부 감면",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 서민가계 이자보전금",
    description: "서민 대출 이자 지원",
    amount: "이자 일부 지원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://www.jeju.go.kr",
    priority: 2
  },
  {
    title: "제주 예술인 복지지원",
    description: "예술인 창작·활동비 지원",
    amount: "창작준비금 등 항목별 지원",
    deadline: "상시",
    ages: ["20대","30대","40대","50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://www.jeju.go.kr",
    priority: 2
  },
  {
    title: "제주 청년 정착 지원",
    description: "제주 정착 청년 지원금",
    amount: "정착지원금",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["제주특별자치도"],
    source: "제주상공회의소",
    category: "복지",
    link: "https://jejucci.korcham.net",
    priority: 2
  },
  {
    title: "제주 서귀포시 청년지원센터",
    description: "청년 상담·커뮤니티 공간",
    amount: "무료 공간 및 프로그램",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://jejuyouth.com",
    priority: 2
  },
  {
    title: "제주 청년 기업 견학 프로그램",
    description: "청년 기업 견학 비용 지원",
    amount: "견학비 지원",
    deadline: "상시",
    ages: ["20대","30대"],
    regions: ["제주특별자치도"],
    source: "제주시",
    category: "취업지원",
    link: "https://jejuyouthdream.com",
    priority: 2
  }
    ]
window.SupportFinder.updateCurrentDate = function() {
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var dateElement = document.getElementById('supportFinderCurrentDate');
if (dateElement) {
dateElement.textContent = year + '년 ' + month + '월 ' + day + '일';
}
};

window.SupportFinder.setupCheckboxes = function() {
var checkboxItems = document.querySelectorAll('.support-finder-checkbox-item');
for (var i = 0; i < checkboxItems.length; i++) {
var item = checkboxItems[i];
var checkbox = item.querySelector('input[type="checkbox"]');
if (item && checkbox) {
(function(item, checkbox) {
item.addEventListener('click', function(e) {
if (e.target.type !== 'checkbox') {
checkbox.checked = !checkbox.checked;
}
if (checkbox.checked) {
item.classList.add('checked');
} else {
item.classList.remove('checked');
}
});
checkbox.addEventListener('change', function() {
if (this.checked) {
item.classList.add('checked');
} else {
item.classList.remove('checked');
}
});
})(item, checkbox);
}
}
};

window.SupportFinder.calculateDday = function(deadline) {
var today = new Date();
today.setHours(0, 0, 0, 0);
var deadlineDate = new Date(deadline);
deadlineDate.setHours(23, 59, 59, 999);
var diffTime = deadlineDate - today;
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

if (diffDays < 0) {
    return { text: '마감됨', urgent: true, color: '#ff6b6b' };
} else if (diffDays <= 7) {
    return { text: 'D-' + diffDays, urgent: true, color: '#ff6b6b' };
} else if (diffDays <= 30) {
    return { text: 'D-' + diffDays, urgent: false, color: '#FF9800' };
} else if (diffDays <= 180) {
    return { text: 'D-' + diffDays, urgent: false, color: '#4285F4' };
} else {
    return { text: '상시접수', urgent: false, color: '#4CAF50' };
}
};

window.SupportFinder.safeString = function(str) {
return String(str || '')
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '&quot;')
.replace(/'/g, '&#39;');
};

window.supportFinderStartSearch = function() {
var selectedAges = [];
var selectedRegions = [];
var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

for (var i = 0; i < checkedBoxes.length; i++) {
    var checkbox = checkedBoxes[i];
    if (checkbox.id.indexOf('supportFinderAge') === 0) {
        selectedAges.push(checkbox.value);
    } else {
        selectedRegions.push(checkbox.value);
    }
}

if (selectedAges.length === 0 || selectedRegions.length === 0) {
    alert('연령대와 지역을 최소 하나씩 선택해주세요!');
    return;
}

window.SupportFinder.showLoading();
setTimeout(function() {
    window.SupportFinder.performSearch(selectedAges, selectedRegions);
}, 1000);
};

window.SupportFinder.showLoading = function() {
var supportGrid = document.getElementById('supportFinderSupportGrid');
var resultsCount = document.getElementById('supportFinderResultsCount');

if (resultsCount) {
    resultsCount.innerHTML = '<span class="support-finder-loading-spinner"></span>검색 중...';
}
if (supportGrid) {
    supportGrid.innerHTML = '<div style="text-align: center; padding: 50px; color: #4285F4;"><div class="support-finder-loading-spinner" style="width: 40px; height: 40px; margin: 0 auto 20px;"></div><div style="font-size: 18px; font-weight: 600;">정부지원금 검색 중...</div><div style="font-size: 14px; margin-top: 10px; color: #888;">최신 정부지원금 데이터를 조회하고 있습니다</div></div>';
}
};

window.SupportFinder.performSearch = function(selectedAges, selectedRegions) {
var allSupports = window.SupportFinder.manualSupportData;
var filteredSupports = [];

for (var i = 0; i < allSupports.length; i++) {
    var support = allSupports[i];
    var ageMatch = false;
    var regionMatch = false;

    for (var j = 0; j < support.ages.length; j++) {
        if (selectedAges.indexOf(support.ages[j]) !== -1) {
            ageMatch = true;
            break;
        }
    }

    if (support.regions.indexOf('전국') !== -1) {
        regionMatch = true;
    } else {
        for (var k = 0; k < support.regions.length; k++) {
            if (selectedRegions.indexOf(support.regions[k]) !== -1) {
                regionMatch = true;
                break;
            }
        }
    }

    if (ageMatch && regionMatch) {
        filteredSupports.push(support);
    }
}

filteredSupports.sort(function(a, b) {
    return a.priority - b.priority;
});

window.SupportFinder.displayResults(filteredSupports);
};

window.SupportFinder.displayResults = function(supports) {
var supportGrid = document.getElementById('supportFinderSupportGrid');
var resultsCount = document.getElementById('supportFinderResultsCount');

if (resultsCount) {
    resultsCount.textContent = supports.length + '개 지원금';
}

if (supports.length === 0) {
    if (supportGrid) {
        supportGrid.innerHTML = '<div class="support-finder-no-results"><div style="font-size: 48px; margin-bottom: 20px;">😔</div><div>선택한 조건에 맞는 정부지원금이 없습니다.</div><div style="font-size: 14px; margin-top: 10px; color: #888;">다른 연령대나 지역을 선택해보세요.</div></div>';
    }
    return;
}

var supportCards = '';
for (var i = 0; i < supports.length; i++) {
    var support = supports[i];
    var dday = window.SupportFinder.calculateDday(support.deadline);
    var urgentClass = dday.urgent ? 'urgent' : '';

    var safeTitle = window.SupportFinder.safeString(support.title);
    var safeDescription = window.SupportFinder.safeString(support.description);
    var safeAmount = window.SupportFinder.safeString(support.amount);
    var safeSource = window.SupportFinder.safeString(support.source);
    var safeCategory = window.SupportFinder.safeString(support.category);
    var clickEvent = support.link ? 'onclick="window.location.href=\'' + support.link + '\'"' : '';
    var cursorStyle = support.link ? 'cursor: pointer;' : '';

    supportCards += '<div class="support-finder-support-card ' + urgentClass + '" style="' + cursorStyle + '" ' + clickEvent + '>';
    supportCards += '<h4>' + safeTitle + '</h4>';
    supportCards += '<p>' + safeDescription + '</p>';
    supportCards += '<div class="support-finder-support-info">';
    supportCards += '<span class="support-finder-support-amount">' + safeAmount + '</span>';
    supportCards += '<span class="support-finder-support-deadline" style="color: ' + dday.color + '; font-weight: ' + (dday.urgent ? '700' : '500') + ';">' + dday.text + '</span>';
    supportCards += '</div>';
    supportCards += '<div class="support-finder-support-source">🏛️ 담당기관: ' + safeSource + '<br/>📋 분야: ' + safeCategory + '<br/>📡 출처: 최신 정부지원금 데이터</div>';
    supportCards += '</div>';
}

if (supportGrid) {
    supportGrid.innerHTML = supportCards;
}
};

function supportFinderInit() {
if (typeof window.SupportFinder !== 'undefined') {
window.SupportFinder.updateCurrentDate();
window.SupportFinder.setupCheckboxes();
console.log('정부지원금 찾기 시스템 초기화 완료');
}
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', supportFinderInit);
} else {
supportFinderInit();
}
