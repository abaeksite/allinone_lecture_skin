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
    title: "경상남도 농어업인수당 지원",
    description: "농어업경영체에 등록된 경영주 및 공동경영주",
    amount: " 연 30만원",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "읍면동 행정복지센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001092",
    priority: 1
},
    {
    title: "청년미래적금",
    description: "만 19~34세 청년 대상, 3년 만기 적금 상품. 정부가 6~12% 매칭 지원",
    amount: "최대 2,200만원 (3년 만기 시)",
    deadline: "2026-06-30",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "기획재정부",
    category: "자산형성",
    link: "https://www.moef.go.kr",
    priority: 1
  },
  {
    title: "청년도약계좌",
    description: "월 40~70만원 납입 시 정부 기여금 매칭, 5년 만기",
    amount: "최대 5,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "서민금융진흥원",
    category: "자산형성",
    link: "https://www.kinfa.or.kr",
    priority: 1
  },
  {
    title: "국민취업지원제도 구직촉진수당",
    description: "구직활동 지원을 위한 수당 지급 (2026년 월 60만원으로 인상)",
    amount: "월 60만원 (최대 6개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.kua.go.kr",
    priority: 1
  },
      {
    title: "청년미래적금",
    description: "만 19~34세 청년 대상 자산형성 상품. 3년 만기, 정부 기여금 6~12% 매칭 + 비과세 혜택. 중소기업 취업 6개월 이내 청년은 '우대형'(12%), 그 외는 '일반형'(6%) 적용. 청년도약계좌 후속 상품.",
    amount: "최대 2,200만원 (3년 만기, 월 50만원 납입 기준)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "금융위원회",
    category: "자산형성",
    link: "https://www.fsc.go.kr",
    priority: 1
  },
  {
    title: "국민취업지원제도 구직촉진수당",
    description: "취업에 어려움을 겪는 저소득 구직자에게 구직활동 지원금 지급. 2026년 월 50만원→60만원으로 인상. 취업 활동 계획 이행 조건. 1유형(소득·재산 요건 충족)과 2유형(취업경험 요건)으로 구분.",
    amount: "월 60만원 × 최대 6개월 (총 360만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "청년 월세 지원",
    description: "독립 거주 무주택 청년의 주거비 부담 완화를 위한 월세 지원. 2026년부터 한시사업에서 상시 지원으로 전환. 만 19~34세, 보증금 5,000만원 이하, 월세 70만원 이하 조건. 소득 중위 60% 이하.",
    amount: "월 최대 20만원 × 24개월 (총 최대 480만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "국민내일배움카드",
    description: "취업·이직·자기계발을 원하는 국민 누구나 신청 가능한 직업훈련비 지원 카드. 만 15세 이상 재직자·구직자·자영업자 등 대부분 신청 가능. 2026년부터 고용24(워크넷·HRD-Net 통합)로 신청.",
    amount: "기본 300만원 + 추가 200만원 (최대 500만원, 유효기간 5년)",
    deadline: "",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "교육·훈련",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "부모급여",
    description: "만 0~1세 아동을 가정에서 돌보는 부모에게 지급하는 양육비 지원. 어린이집 이용 시에도 수급 자격은 유지되며 보육료 우선 적용 후 차액 지급. 출생일 포함 60일 이내 신청 시 출생 월부터 소급 적용.",
    amount: "만 0세 월 100만원 / 만 1세 월 50만원",
    deadline: "",
    ages: ["20대", "30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "아동수당",
    description: "만 8세 미만 아동에게 지급하는 보편 수당. 2026년 만 7세→8세 이하로 지원 연령 확대. 소득·재산 기준 없이 모든 가구 지급. 주민센터 또는 복지로·정부24에서 신청.",
    amount: "월 10만원 (연 120만원)",
    deadline: "",
    ages: ["20대", "30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "첫만남이용권",
    description: "출생 아동에게 지급하는 바우처. 국민행복카드로 지급되며 출산 관련 용품·의료비 등에 사용 가능. 2026년 첫째 아이 지원금액 상향. 출생 신고 후 복지로·정부24에서 신청.",
    amount: "첫째 200만원 / 둘째 이상 300만원",
    deadline: "",
    ages: ["20대", "30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "기초연금",
    description: "만 65세 이상 어르신 중 소득 하위 70%에게 지급하는 연금. 2026년 단독가구 선정기준액 월 247만원 이하, 부부가구 395만 2천원 이하. 1961년생부터 신규 신청 대상. 주민센터 또는 복지로에서 신청.",
    amount: "월 최대 약 34만 9,700원 (저소득 최대 40만원 추진)",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "근로장려금",
    description: "저소득 근로자·사업자 가구의 근로 의욕 고취 및 실질소득 지원. 단독·홑벌이·맞벌이 가구 유형별 소득 기준 적용. 재산 합계 2억 4천만원 미만 요건. 매년 5월 정기 신청 / 상·하반기 반기 신청 가능.",
    amount: "단독가구 최대 165만원 / 홑벌이 285만원 / 맞벌이 330만원",
    deadline: "2026-05-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "국세청",
    category: "복지",
    link: "https://www.hometax.go.kr",
    priority: 1
  },
  {
    title: "자녀장려금",
    description: "저소득 가구의 자녀 양육 지원을 위한 세금 환급형 급여. 18세 미만 부양 자녀가 있는 가구 대상. 부부합산 소득이 일정 기준 이하인 경우 신청. 근로장려금과 동시 신청 가능.",
    amount: "자녀 1인당 최대 100만원",
    deadline: "2026-05-31",
    ages: ["30대", "40대"],
    regions: ["전국"],
    source: "국세청",
    category: "출산·육아",
    link: "https://www.hometax.go.kr",
    priority: 1
  },
  {
    title: "국가장학금 (I·II 유형)",
    description: "국내 대학(원) 재학생의 학자금 부담 완화를 위한 장학금. 소득 8구간 이하 신청 가능. 1구간(기초·차상위)은 등록금 전액 지원. 매 학기 한국장학재단 홈페이지에서 신청.",
    amount: "1구간 연 최대 700만원 / 구간별 차등 지원",
    deadline: "",
    ages: ["10대", "20대"],
    regions: ["전국"],
    source: "한국장학재단",
    category: "교육·훈련",
    link: "https://www.kosaf.go.kr",
    priority: 1
  },
  {
    title: "청년일자리도약장려금",
    description: "취업에 어려움을 겪는 청년을 정규직으로 채용한 중소기업에 장려금 지급. 2026년부터 상시 신청으로 전환. 비수도권 중소기업 우대 지역은 600만원, 특별 지역은 720만원까지 지원 확대.",
    amount: "최대 480만원 (비수도권 우대 최대 720만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "노인일자리 및 사회활동 지원사업",
    description: "만 65세 이상 어르신에게 지역사회 공익활동 및 시장형 일자리를 제공하는 사업. 2026년 역대 최대 115만 2천개 일자리 제공. 공익활동(노노케어, 경로당 배식 등)부터 취업 연계까지 다양한 유형. 가까운 노인복지관·주민센터 신청.",
    amount: "공익활동형 월 약 29만원 / 사회서비스형 월 약 59~76만원",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "취업지원",
    link: "https://www.seniorro.or.kr",
    priority: 1
  },
  {
    title: "건강생활실천지원금 (걷기 포인트)",
    description: "고혈압·당뇨 등 건강 위험군이 건강 관리 목표를 달성하면 포인트 지급. 2026년 전국 50개 권역으로 시범 확대(서울 노원구, 경기 안산·부천·수원, 인천, 부산, 경남 창원 등). 'The건강보험' 앱으로 신청·관리.",
    amount: "최대 연 12만 포인트 (진료비로 사용 가능)",
    deadline: "",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "국민건강보험공단",
    category: "건강",
    link: "https://www.nhis.or.kr",
    priority: 2
  },
  {
    title: "기초생활수급 주거급여",
    description: "기준 중위소득 48% 이하 가구에 실제 임차료를 지원하는 급여. 타 급여와 중복 수급 가능. 자가 가구는 수선비 지원. 복지로 또는 주민센터에서 신청. 2026년 1인 가구 기준 지원 금액 상향.",
    amount: "1인 가구 월 최대 약 34만원 (지역·가구원 수별 상이)",
    deadline: "",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "장애인연금",
    description: "만 18세 이상 중증장애인 중 소득·재산 기준 하위 70%에게 지급. 기초급여와 부가급여로 구성. 65세 이상은 기초연금으로 전환. 복지로 또는 읍면동 주민센터 신청.",
    amount: "기초급여 월 최대 34만 2,510원 + 부가급여 별도",
    deadline: "",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 2
  },
 
  // ─────────────────────────────────────────────────────────────
  //  서울특별시
  // ─────────────────────────────────────────────────────────────
 
  {
    title: "서울 청년수당",
    description: "서울 거주 미취업 청년의 구직활동 지원. 2026년 2만명 선발(3.6~3.13 접수). 중위소득 150% 이하, 최종학력 졸업자 조건. 매월 50만원 + 멘토링·취업특강 등 맞춤형 성장 프로그램 제공. 생애 1회 지원.",
    amount: "월 50만원 × 최대 6개월 (총 300만원)",
    deadline: "2026-03-13",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 청년 월세지원",
    description: "서울 거주 청년 1인 가구 월세 지원. 신청연도 기준 만 19~39세, 임차보증금 8천만원 이하, 월세 60만원 이하 건물 거주, 중위소득 150% 이하 무주택자 대상. 2026년 4월 이후 공고 예정.",
    amount: "월 20만원 × 최대 12개월 (총 240만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://housing.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 희망두배 청년통장",
    description: "서울 거주 저소득 근로 청년의 자산형성 지원. 만 18~34세 서울 거주 근로자 중 소득·재산 기준 충족 시 신청. 매월 15만원 또는 20만원 저축 시 동일 금액을 서울시가 매칭 지원.",
    amount: "2년 만기 시 최대 1,020만원 (본인 저축 + 서울시 매칭 + 이자)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "자산형성",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울 청년 대중교통비 지원",
    description: "서울 거주 청년에게 대중교통비 일부 환급. 만 19~39세 중위소득 150% 이하 청년. 카드 또는 티머니를 통해 실제 사용한 대중교통비의 일부를 지역화폐로 환급.",
    amount: "월 최대 5만원 (연 최대 60만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "복지",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울 청년 마음건강 지원",
    description: "정신건강 문제를 겪는 서울 거주 청년에게 심리 상담 바우처 제공. 만 19~39세, 소득 기준 완화 적용. 1회 50분 기준 상담비 지원. 서울시 청년몽땅정보통에서 신청.",
    amount: "최대 10회 상담비 지원 (회당 5~7만원 범위)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "건강",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울 미래 청년 일자리",
    description: "AI·문화콘텐츠·바이오헬스케어·제로웨이스트·소셜벤처 분야 서울 소재 기업에서 청년 일자리 경험 지원. 서울시가 참여 청년에게 직접 임금 지급. 2026년 3월 기업 모집 중.",
    amount: "월 약 253만원 (세전, 서울시 직접 지급)",
    deadline: "2026-04-03",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
 
  // ─────────────────────────────────────────────────────────────
  //  경기도
  // ─────────────────────────────────────────────────────────────
 
  {
    title: "경기도 청년기본소득",
    description: "경기도 거주 만 24세 청년에게 지급하는 보편 기본소득. 최근 3년 이상 계속 거주 또는 합산 10년 이상 거주 요건. 분기별 신청(1분기 2026.3.3~4.1). 경기지역화폐로 지급. 성남·고양시는 2026년 제외.",
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
    title: "경기도 청년 노동자 통장",
    description: "경기도 거주 저소득 근로 청년의 자산형성 지원. 만 18~34세 경기도 거주, 근로 중인 청년 중 중위소득 100% 이하. 매월 10만원 저축 시 경기도가 추가 지원금 적립.",
    amount: "2년 만기 시 약 580만원 (본인 적립 240만원 + 지원금 + 이자)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "자산형성",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 청년 면접수당",
    description: "구직활동 중인 경기도 거주 청년에게 면접 참여 시 교통비 등 실비 지원. 만 18~39세 경기도 거주 미취업 청년 대상. 고용24 또는 경기도일자리재단 잡아바 어플라이에서 신청.",
    amount: "1회 5만원, 연 최대 4회 (총 20만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://apply.jobaba.net",
    priority: 2
  },
  {
    title: "경기도 청년 월세지원",
    description: "경기도 거주 무주택 청년에게 월세 지원. 만 19~34세, 독립 거주 청년, 소득·재산 기준 충족 시. 2026년부터 상시 신청 제도로 운영. 경기도 광역 기준 및 국토부 청년월세지원과 중복 불가.",
    amount: "월 최대 20만원 × 24개월 (총 최대 480만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "주거지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 일하는 청년 복지포인트",
    description: "경기도 내 중소기업에 재직 중인 청년 근로자에게 복지포인트 지급. 만 18~39세, 경기도 소재 중소·중견기업 재직자. 문화·여가·건강관리 등에 사용 가능한 포인트 지급.",
    amount: "연 120만원 상당 복지포인트",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지",
    link: "https://apply.jobaba.net",
    priority: 2
  },
 
  // ─────────────────────────────────────────────────────────────
  //  경상남도
  // ─────────────────────────────────────────────────────────────
 
  {
    title: "경상남도 농어업인수당",
    description: "경상남도 내 농어업경영체에 등록된 경영주 및 공동경영주에게 지급하는 수당. 농어업 종사자의 소득 안정을 목적으로 지급. 읍면동 행정복지센터에서 신청.",
    amount: "연 30만원",
    deadline: "",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["경상남도"],
    source: "읍면동 행정복지센터",
    category: "농어업",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001092",
    priority: 1
  },
  {
    title: "경상남도 청년 일자리 지원",
    description: "비수도권 청년일자리도약장려금 경남 우대 적용. 경남 소재 중소기업에 취업한 만 15~34세 청년에게 장려금 지원. 인구감소 지역 소재 기업 취업 시 추가 우대 금액 지급.",
    amount: "최대 600만원 (인구감소 우대지역 기준)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "고용노동부·경상남도",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "경상남도 청년창업 지원",
    description: "경남 지역 청년 창업자를 위한 창업 지원금 및 보육 서비스 제공. 만 39세 이하 경남 청년 창업자. 창업 아이디어 보유자는 경남창조경제혁신센터를 통해 신청 가능.",
    amount: "최대 2,000만원 (창업지원금, 보육비 별도)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도·중소벤처기업부",
    category: "취업지원",
    link: "https://ccei.creativekorea.or.kr",
    priority: 2
  },
  {
    title: "경상남도 노인 복지 서비스",
    description: "경상남도 만 65세 이상 어르신 대상 복지카드 발급 및 지역화폐 지원. 전통시장·지역 소상공인 업체에서 사용 가능한 지역사랑상품권 형태로 지급. 읍면동 행정복지센터에서 신청.",
    amount: "연 최대 12만원 (지자체별 상이)",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["경상남도"],
    source: "경상남도 시군 행정복지센터",
    category: "복지",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경상남도 귀농귀촌 정착 지원금",
    description: "도시민의 경남 귀농·귀촌 활성화를 위한 정착금 지원. 귀농 교육 이수자 대상 농지 구입·임차·농기계 구입 등 지원. 귀촌인은 주택 수리비·이주 지원금 별도 혜택.",
    amount: "귀농 최대 3,000만원 / 귀촌 최대 500만원 (사업별 상이)",
    deadline: "",
    ages: ["30대", "40대", "50대"],
    regions: ["경상남도"],
    source: "경상남도 농업기술원",
    category: "농어업",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
 
  // ─────────────────────────────────────────────────────────────
  //  전라남도
  // ─────────────────────────────────────────────────────────────
 
  {
    title: "전라남도 농어민 공익수당",
    description: "전남 거주 농어민에게 지역사회 공익적 역할에 대한 수당 지급. 전남 거주 농어업경영체 등록 농어업인 대상. 읍면동 행정복지센터 또는 전남도청 농업정책과에서 신청.",
    amount: "연 60만원 (월 5만원)",
    deadline: "",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "농어업",
    link: "https://www.jeonnam.go.kr",
    priority: 1
  },
  {
    title: "전라남도 청년 정착 지원금",
    description: "전남 이주 청년의 정착 지원. 만 18~45세 전남 이주·창업 또는 취업 청년 대상. 도내 인구감소지역 정착 시 추가 우대. 전남일자리진흥원 통해 신청 가능.",
    amount: "최대 월 50만원 × 24개월 (총 최대 1,200만원, 조건별 상이)",
    deadline: "",
    ages: ["20대", "30대", "40대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "취업지원",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
  {
    title: "전라남도 노인 무릎인공관절 수술비 지원",
    description: "전남 거주 만 60세 이상 저소득 노인 중 무릎인공관절 수술이 필요한 어르신에게 수술비 지원. 의료비 부담 경감 목적. 관할 시군 보건소 또는 주민센터에서 신청.",
    amount: "수술비 일부 최대 120만원 지원 (소득·기준에 따라 상이)",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "건강",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
  {
    title: "전라남도 귀농창업 및 주택구입 지원",
    description: "전남 귀농 정착자에게 농지·주택 구입자금 저리 융자 및 창업 지원. 귀농·귀촌 1년 이상 경과자 중 농업 경영 확대 계획 보유자 우선 지원. 전남농업기술원 귀농귀촌지원센터 상담 후 신청.",
    amount: "융자 최대 5,000만원 (저리 0.5~2%)",
    deadline: "",
    ages: ["30대", "40대", "50대"],
    regions: ["전라남도"],
    source: "전라남도 농업기술원",
    category: "농어업",
    link: "https://www.jares.go.kr",
    priority: 2
  },
  {
    title: "전라남도 어르신 무임 교통비 지원",
    description: "전남 거주 만 65세 이상 어르신에게 대중교통 이용 교통비 환급. 전남 시내버스·농어촌버스 이용 시 적용. 전남사랑카드 또는 지역화폐로 교통비 지원. 주민센터에서 신청.",
    amount: "월 최대 2만원 (연 24만원)",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "복지",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
 
  // ─────────────────────────────────────────────────────────────
  //  충청남도
  // ─────────────────────────────────────────────────────────────
 
  {
    title: "충청남도 청년 월세 지원",
    description: "충남 거주 청년의 주거비 부담 완화를 위한 월세 지원. 만 19~34세 충남 거주 무주택 청년, 소득 기준 중위소득 150% 이하. 충남형 청년 주거 지원사업.",
    amount: "월 최대 20만원 (충남도비 + 시군비 매칭)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "주거지원",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 농업인 수당",
    description: "충남 거주 농업인에게 농업의 공익적 기능에 대한 직불금 지급. 농업경영체 등록 농업인 대상. 관할 시군 농업기술센터 또는 읍면동 행정복지센터에서 신청.",
    amount: "연 60만원",
    deadline: "",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "농어업",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 출산장려금",
    description: "충남 거주 출산 가구에 지급하는 출산장려금. 시군별로 금액 상이하며 첫째~셋째 이상으로 차등 지급. 출산 후 주민센터에서 신청. 국가 지원금(첫만남이용권)과 중복 수령 가능.",
    amount: "첫째 최소 30만원~ / 셋째 이상 최대 수백만원 (시군별 상이)",
    deadline: "",
    ages: ["20대", "30대", "40대"],
    regions: ["충청남도"],
    source: "충청남도 시군",
    category: "출산·육아",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 어르신 틀니·임플란트 본인부담금 지원",
    description: "충남 거주 만 65세 이상 기초생활수급자·차상위 어르신에게 틀니·임플란트 건강보험 본인부담금 지원. 건강보험 적용 후 잔여 자기부담금을 지원. 시군 보건소에서 신청.",
    amount: "본인부담금 전액 또는 일부 지원 (치료 유형별 상이)",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["충청남도"],
    source: "충청남도 보건소",
    category: "건강",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년창업 지원센터",
    description: "충남 청년 창업자를 위한 창업공간·멘토링·초기 자금 지원. 만 39세 이하 충남 청년 창업자. 충남창조경제혁신센터 또는 충남테크노파크에서 신청.",
    amount: "최대 2,000만원 창업지원금 + 사무공간 무상 제공",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도·중소벤처기업부",
    category: "취업지원",
    link: "https://ccei.creativekorea.or.kr",
    priority: 2
  },
 
  // ─────────────────────────────────────────────────────────────
  //  강원특별자치도
  // ─────────────────────────────────────────────────────────────
 
  {
    title: "강원 청년 이주 정착 지원금",
    description: "강원특별자치도로 이주한 청년에게 정착 지원. 수도권·광역시 등에서 강원으로 전입한 만 18~45세 청년 대상. 강원형 인구유입 정책으로 전입 후 일정 기간 거주 유지 조건.",
    amount: "최대 월 30만원 × 24개월 (총 720만원)",
    deadline: "",
    ages: ["20대", "30대", "40대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도",
    category: "복지",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 농업인 공익수당",
    description: "강원 거주 농업인의 소득 안정 및 공익적 활동 장려를 위한 수당. 강원 농어업경영체 등록 농업인 대상. 관할 시군 농업기술센터 또는 읍면동 행정복지센터에서 신청.",
    amount: "연 60만원 (지자체 추가 지원 시 상이)",
    deadline: "",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도",
    category: "농어업",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 청년 일자리 지원(비수도권 도약장려금)",
    description: "강원 소재 중소기업에 취업한 청년에게 지급하는 청년일자리도약장려금 비수도권 우대 적용. 인구감소지역 소재 기업 취업 시 일반 대비 최대 600~720만원 상향 지원.",
    amount: "최대 600~720만원 (인구감소 우대지역 기준)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["강원특별자치도"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "강원 어르신 교통 지원",
    description: "강원 거주 만 65세 이상 어르신의 교통비 부담 완화. 강원 시내버스·농어촌버스 무료 이용 또는 교통비 환급 지원. 시군 별 운영 방식 상이. 주민센터·시군청에서 신청.",
    amount: "시군별 상이 (교통비 무료 또는 월 최대 2만원 환급)",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도 시군",
    category: "복지",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 국내여행 경비 50% 지원 (지역사랑 휴가지원)",
    description: "강원 인구감소 지역을 여행하는 관광객에게 숙박·체험비 50% 환급. 2026년 정선·양구·인제·평창 등 강원 인구감소지역 포함. 사전 앱 결제 후 영수증 제출로 환급. 예산 소진 시 조기 마감.",
    amount: "여행경비(숙박+체험)의 50% 환급 (1인 최대 10만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["강원특별자치도"],
    source: "행정안전부·강원특별자치도",
    category: "복지",
    link: "https://www.gov.kr",
    priority: 2
  },
 
  // ─────────────────────────────────────────────────────────────
  //  부산광역시
  // ─────────────────────────────────────────────────────────────
 
  {
    title: "부산 청년 도전 지원금",
    description: "부산 거주 미취업 청년의 자립·구직 활동 지원. 만 18~34세 부산 거주 미취업 청년 중 취업 취약계층 우선. 취업 준비비 및 생활 안정 목적. 부산시 청년포털에서 신청.",
    amount: "월 50만원 × 최대 6개월 (총 300만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "취업지원",
    link: "https://youth.busan.go.kr",
    priority: 1
  },
  {
    title: "부산 청년 월세 지원",
    description: "부산 거주 청년 독립 가구의 주거비 지원. 만 19~34세 부산 거주 무주택 1인 가구, 중위소득 150% 이하. 부산형 주거지원사업으로 국토부 지원과 중복 불가.",
    amount: "월 최대 20만원 × 최대 24개월",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "주거지원",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "부산 어르신 의치 지원사업",
    description: "부산 거주 만 65세 이상 저소득 노인의 틀니(의치) 제작 지원. 기초생활수급자 및 차상위계층 우선. 관할 보건소 또는 치과 의료기관을 통해 신청.",
    amount: "틀니 제작비 전액 또는 일부 지원",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["부산광역시"],
    source: "부산광역시 보건소",
    category: "건강",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "부산 청년 내일채움공제 (부산형)",
    description: "부산 소재 중소기업 재직 청년 근로자의 자산형성 지원. 2년간 월 12.5만원씩 청년이 적립, 기업·정부 매칭 지원으로 만기 시 목돈 수령. 고용24 및 중소기업진흥공단에서 신청.",
    amount: "2년 만기 시 1,200만원 (청년 300만원 + 기업·정부 900만원)",
    deadline: "",
    ages: ["20대", "30대"],
    regions: ["부산광역시"],
    source: "고용노동부·중소기업진흥공단",
    category: "자산형성",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "부산 노인 사회활동 지원 (경로당 활성화)",
    description: "부산 거주 만 65세 이상 어르신의 경로당 중심 여가·사회활동 지원. 문화 프로그램·건강관리 교육 제공 및 활동비 지원. 관할 구청 노인복지 담당 부서 또는 노인복지관에서 신청.",
    amount: "경로당 활동비 월 3~5만원 상당 지원",
    deadline: "",
    ages: ["60대", "70대", "80대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "복지",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "청년일자리도약장려금",
    description: "5인 이상 우선지원대상기업에서 취업애로청년 정규직 채용 시 지원",
    amount: "월 60만원 × 12개월 (최대 720만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.ei.go.kr",
    priority: 1
  },
  {
    title: "청년월세 한시 특별지원",
    description: "무주택 저소득 청년 대상 월세 지원 (24개월로 확대)",
    amount: "월 20만원 (최대 24개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "아동수당 확대",
    description: "아동수당 지급 연령 확대 (만 7세 → 만 8세)",
    amount: "월 10만원",
    deadline: "2026-12-31",
    ages: ["10대 미만"],
    regions: ["전국"],
    source: "보건복지부",
    category: "가족지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "기초생활보장 생계급여",
    description: "기준 중위소득 6.51% 인상에 따른 생계급여 확대",
    amount: "4인가구 207만원, 1인가구 82만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "생활안정",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "교육급여 지원",
    description: "초중고 교육활동지원비 인상 (평균 6%)",
    amount: "초등 50.2만원, 중학 69.9만원, 고등 86만원",
    deadline: "2026-12-31",
    ages: ["10대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "교육지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "소상공인 정책자금",
    description: "소상공인 경영안정을 위한 정책자금 융자",
    amount: "최대 7,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "긴급복지 생계지원",
    description: "위기상황 발생 시 긴급 생계비 지원",
    amount: "1인가구 73만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지상담센터",
    category: "생활안정",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "전기차 전환지원금",
    description: "내연차 폐차 후 전기차 구매 시 지원금 지급",
    amount: "최대 400만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "환경부",
    category: "친환경",
    link: "https://www.ev.or.kr",
    priority: 2
  },
  {
    title: "청년 소상공인 창업지원금",
    description: "만 39세 이하 청년 창업 소상공인 자금지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "전통시장 특례보증",
    description: "전통시장 입점 소상공인 보증지원",
    amount: "최대 2,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "신용보증재단",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 2
  },
  {
    title: "실업크레딧 지원",
    description: "구직급여 수급자 국민연금 보험료 지원",
    amount: "최대 70만원",
    deadline: "2026-12-31",
    ages: ["30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "장기전세 주택공급",
    description: "시세 80% 수준의 저렴한 장기전세주택 공급",
    amount: "시세의 80%",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "한국토지주택공사",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },

  // ==================== 서울특별시 ====================
  {
    title: "서울시 청년수당",
    description: "미취업 청년 대상 활동지원금 및 성장지원 프로그램 제공",
    amount: "월 50만원 × 최대 6개월",
    deadline: "2026-03-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "청년지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 영커리언스 인턴십",
    description: "재학생 중심 일 경험 지원 통합 플랫폼 (캠프, 챌린지, 인턴십)",
    amount: "인턴십 참여 지원",
    deadline: "2026-02-28",
    ages: ["20대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울시 청년월세지원",
    description: "무주택 청년 월세 부담 완화 지원",
    amount: "월 20만원 (최대 12개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "희망두배 청년통장",
    description: "청년 자산형성 지원을 위한 매칭 저축",
    amount: "본인저축액 1:1 매칭",
    deadline: "2026-05-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "자산형성",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "청년 이사·중개비 지원",
    description: "서울시 전입 또는 시내 이사 청년 대상 이사비 지원",
    amount: "최대 40만원",
    deadline: "2026-08-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "전기 이륜차 보조금",
    description: "도심 대기오염 저감을 위한 전기 이륜차 구매 지원",
    amount: "최대 40%",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울시",
    category: "친환경",
    link: "https://www.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년취업사관학교",
    description: "유망 직무 분야 취업 역량 교육 지원",
    amount: "무료 교육 + 취업 연계",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울형 마이크로크레딧",
    description: "소상공인 대상 초저금리 융자 및 매장 리뉴얼 바우처",
    amount: "연 1%대 융자",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["서울특별시"],
    source: "서울신용보증재단",
    category: "창업지원",
    link: "https://www.seoulshinbo.co.kr",
    priority: 2
  },
  {
    title: "서울시 고립·은둔청년 지원",
    description: "사회적 고립 청년 대상 맞춤형 상담 및 프로그램",
    amount: "상담 및 프로그램 무료",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울광역청년센터",
    category: "복지지원",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년정책네트워크",
    description: "청년정책 참여 활동 지원 (정책제안, 모니터링, 홍보)",
    amount: "활동비 지원",
    deadline: "2026-01-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "참여지원",
    link: "https://youth.seoul.go.kr",
    priority: 3
  },
  {
    title: "서울시 뉴딜일자리",
    description: "공공기관 단기 일자리 제공",
    amount: "급여 지급",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://job.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년 면접정장 대여",
    description: "취업준비 청년 대상 면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울청년센터",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 3
  },

  // ==================== 경기도 ====================
  {
    title: "경기도 청년기본소득",
    description: "만 24세 경기도 청년 대상 분기별 지역화폐 지급",
    amount: "분기별 25만원 (연 최대 100만원)",
    deadline: "2026-03-31",
    ages: ["20대"],
    regions: ["경기도"],
    source: "경기도",
    category: "기본소득",
    link: "https://apply.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 청년 복지포인트",
    description: "중소기업 재직 청년 대상 복지포인트 지급",
    amount: "연 120만원 (반기별 60만원)",
    deadline: "2026-06-12",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지지원",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "중소기업 청년 노동자 지원사업",
    description: "경기도 중소기업 재직 청년에게 2년간 지역화폐 지원",
    amount: "2년간 480만원 (반기 120만원)",
    deadline: "2026-10-16",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지지원",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 청년 매입임대주택",
    description: "시세 40~50% 수준 임대주택 제공 (최장 6년)",
    amount: "시세 40~50%",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기주택도시공사",
    category: "주거지원",
    link: "https://www.gico.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 역량강화 기회지원",
    description: "미취업 청년 자격증 응시료 지원",
    amount: "최대 30만원",
    deadline: "2026-11-30",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "취업지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 꿈날개",
    description: "여성 경력개발 온라인 서비스 (무료 교육, 취업 상담)",
    amount: "무료 서비스",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["경기도"],
    source: "경기도여성가족재단",
    category: "취업지원",
    link: "https://www.dreamwing.or.kr",
    priority: 2
  },
  {
    title: "경기도 행복주택",
    description: "대학생, 사회초년생, 신혼부부 대상 공공임대주택",
    amount: "시세 60~80%",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "LH/GH",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 노동자 통장",
    description: "저소득 청년 자산형성 지원 매칭 저축",
    amount: "본인저축액 매칭",
    deadline: "2026-05-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도미래세대재단",
    category: "자산형성",
    link: "https://account.ggwf.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접당 최대 5만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://youth.jobaba.net",
    priority: 2
  },
  {
    title: "경기도 디지털 상점 전환 사업",
    description: "소상공인 온라인 쇼핑몰, 스마트 POS 설치 지원",
    amount: "최대 500만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경기도"],
    source: "경기도",
    category: "창업지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 국방전직지원 직업교육",
    description: "전역 예정 군인 대상 직업교육 지원",
    amount: "무료 교육",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://gjf.or.kr",
    priority: 3
  },
  {
    title: "경기도 청년 월세 지원",
    description: "무주택 저소득 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "주거지원",
    link: "https://youth.gg.go.kr",
    priority: 1
  },

  // ==================== 인천광역시 ====================
  {
    title: "인천 청년월세 지원",
    description: "무주택 청년 월세 부담 완화",
    amount: "월 20만원 (최대 24개월)",
    deadline: "2026-02-25",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 청년 임차보증금 대출이자 지원",
    description: "청년 주거비용 부담 완화를 위한 이자 지원",
    amount: "대출이자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i+ 1억드림 출산지원",
    description: "임산부 교통비, 출산지원금, 아이꿈수당 등 종합 지원",
    amount: "종합 지원 패키지",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "가족지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 75세 이상 버스 무료화",
    description: "어르신 대중교통 복지 확대",
    amount: "버스 무료",
    deadline: "2026-12-31",
    ages: ["70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "교통지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i-패스 교통비 환급",
    description: "대중교통 이용 시 교통비 환급",
    amount: "환급 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "교통지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 청년 행정체험 인턴십",
    description: "공공기관 다양한 직무체험 기회 제공",
    amount: "인턴십 참여",
    deadline: "2026-01-28",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "취업지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 소상공인 경영환경개선 지원",
    description: "점포환경, 홍보, 위생, 스마트기술 구축 지원",
    amount: "업체당 최대 250만원",
    deadline: "2026-08-14",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시청",
    category: "창업지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 외로움돌봄 지원",
    description: "사회적 고립 문제 대응 외로움 대응센터, 24시간 상담전화",
    amount: "무료 상담 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시 외로움국",
    category: "복지지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 i+ 집Dream 신혼부부 지원",
    description: "신혼부부 임대료 지원",
    amount: "임대료 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 군장병 재해보험",
    description: "군복무 중 발생 피해 보상 보험",
    amount: "보험료 전액 지원",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "복지지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 아동수당 확대",
    description: "아동수당 9세 미만으로 확대",
    amount: "월 10만원",
    deadline: "2026-12-31",
    ages: ["10대 미만"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "가족지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 자립준비청년 주거지원",
    description: "자립준비청년 주거지원 19개소 확충",
    amount: "주거 지원",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },

  // ==================== 충청북도 ====================
  {
    title: "충북 청년 1인가구 이사 지원",
    description: "청년 1인가구 이사비 지원",
    amount: "이사비 지원",
    deadline: "2026-08-27",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 장학금 지원 (성적장학금)",
    description: "충북인재평생교육진흥원 성적장학금",
    amount: "1인 200만원",
    deadline: "2026-09-09",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충북인재평생교육진흥원",
    category: "교육지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년내일저축계좌",
    description: "저소득 청년 자산형성 지원",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "자산형성",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 대학생 주거 지원",
    description: "서울·동서울관, 청주관 대학생 주거 지원",
    amount: "기숙사 지원",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년사회서비스사업단",
    description: "청년 사회서비스 분야 일자리 지원",
    amount: "일자리 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "취업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 마음이음 열린상담",
    description: "청년 심리상담 프로그램",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "복지지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 자립준비청년 자립수당",
    description: "자립준비청년 자립수당 지급",
    amount: "자립수당 지급",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "복지지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 행복결혼공제",
    description: "결혼 준비 청년 대상 공제 지원",
    amount: "공제 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "가족지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 소상공인 창업응원금",
    description: "청년 소상공인 창업 지원금",
    amount: "창업 지원금",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "창업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 무료 법률상담",
    description: "충북도민 무료 법률상담",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "생활안정",
    link: "https://www.chungbuk.go.kr/young",
    priority: 3
  },

  // ==================== 충청남도 ====================
  {
    title: "충남 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "주거지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년 창업지원금",
    description: "청년 창업자 사업화 자금 지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년 취업지원금",
    description: "미취업 청년 구직활동 지원",
    amount: "구직활동비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "자산형성",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년활력공간 운영",
    description: "청년 커뮤니티 및 활동 공간 제공",
    amount: "무료 공간 이용",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "참여지원",
    link: "https://youth.chungnam.go.kr",
    priority: 3
  },
  {
    title: "충남 청년 심리상담 지원",
    description: "청년 정신건강 상담 지원",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "복지지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 청년 교통비 지원",
    description: "청년 대중교통비 지원",
    amount: "교통비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "교통지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 농어촌 청년 정착 지원",
    description: "농어촌 지역 청년 정착 지원금",
    amount: "정착 지원금",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "정착지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 청년 직업훈련 지원",
    description: "청년 직업능력개발 훈련비 지원",
    amount: "훈련비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 소상공인 경영안정 자금",
    description: "소상공인 경영안정을 위한 저금리 융자",
    amount: "최대 5,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },

  // ==================== 대전광역시 ====================
  {
    title: "대전 청년 주택임차보증금 이자지원",
    description: "대전시 청년 보증금 대출 이자 지원",
    amount: "최대 연 3%",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 월세 지원",
    description: "대전 거주 청년 무주택 세대주 월세 지원",
    amount: "월 20만원 × 최대 12개월",
    deadline: "2026-08-14",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://www.djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 영세소상공인 인건비 지원",
    description: "대전 소재 영세 소상공인 신규 채용 인건비 지원",
    amount: "근로자 1인당 150만원 (50만원×3개월)",
    deadline: "2026-11-28",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 2
  },
  {
    title: "대전 청년부부 결혼장려금",
    description: "대전 거주 청년 초혼 부부에게 결혼장려금 지급",
    amount: "1인당 250만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "가족지원",
    link: "https://www.djwedding.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 창업지원",
    description: "대전 청년 창업자 사업화 자금 지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.daejeon.go.kr",
    priority: 1
  },
  {
    title: "대전 청년 취업역량 강화",
    description: "청년 취업 교육 및 상담 지원",
    amount: "무료 교육",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 자격증 응시료 지원",
    description: "취업준비 청년 자격증 응시료 지원",
    amount: "응시료 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 심리상담 지원",
    description: "청년 정신건강 상담 서비스",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "복지지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 소상공인 전기요금 지원",
    description: "영세 소상공인 전기요금 지원",
    amount: "전기요금 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "생활안정",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },

  // ==================== 세종특별자치시 ====================
  {
    title: "세종 청년 월세 지원",
    description: "세종시 무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 창업지원금",
    description: "세종시 청년 창업자 지원",
    amount: "최대 2,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 취업지원",
    description: "미취업 청년 구직활동 지원",
    amount: "구직활동비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "자산형성",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 교통비 지원",
    description: "청년 대중교통비 지원",
    amount: "교통비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "교통지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 심리상담",
    description: "청년 정신건강 상담 지원",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "복지지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 직업훈련",
    description: "청년 직업능력개발 훈련 지원",
    amount: "훈련비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 신혼부부 주거지원",
    description: "신혼부부 전세자금 이자 지원",
    amount: "이자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 소상공인 지원금",
    description: "소상공인 경영안정 자금 지원",
    amount: "최대 5,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 면접정장 대여",
    description: "취업준비 청년 면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 3
  },

  // ==================== 경상남도 ====================
  {
    title: "경남 농어업인수당",
    description: "농어업경영체 등록 경영주 및 공동경영주 지원",
    amount: "연 30만원",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "읍면동 행정복지센터",
    category: "농업지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "경남 노인가장세대 지원",
    description: "65세 이상 차상위 어르신 가장세대 냉난방비 지원",
    amount: "냉방비 4만원, 난방비 8.5만원",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "경남 청년구직활동수당",
    description: "미취업 청년 구직활동 지원 (김해, 사천, 의령)",
    amount: "월 50만원 (6개월)",
    deadline: "2026-05-22",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도 투자경제진흥원",
    category: "취업지원",
    link: "https://www.gyeongnam.go.kr/mydata",
    priority: 1
  },
  {
    title: "경남 소상공인 융자지원",
    description: "소상공인 경영안정, 창업, 버팀목 자금 융자",
    amount: "업체당 최대 1억원",
    deadline: "2026-01-27",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "주거지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 창업지원금",
    description: "청년 창업자 사업화 자금 지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "자산형성",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 취업역량 강화",
    description: "청년 취업 교육 및 상담 지원",
    amount: "무료 교육",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "취업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경남 전통시장 환급행사",
    description: "전통시장 구매금액 온누리상품권 환급",
    amount: "최대 2만원 환급",
    deadline: "2026-01-27",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["경상남도"],
    source: "농림축산식품부",
    category: "생활안정",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경남 무의탁노인 건강음료배달",
    description: "독거노인 등 돌봄 사각지대 어르신 건강음료 제공",
    amount: "건강음료 제공",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 2
  },

  // ==================== 경상북도 ====================
  {
    title: "경북 거동불편 저소득 노인 식사배달",
    description: "거동불편 저소득 어르신 도시락, 반찬 무료 제공",
    amount: "무료 급식",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "경북 청년일자리도약장려금",
    description: "청년 정규직 채용 기업 지원",
    amount: "월 60만원 × 12개월",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 1
  },
  {
    title: "경북 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원 (최대 12개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "주거지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 구직활동 지원",
    description: "미취업 청년 구직활동비 지원",
    amount: "월 50만원 (6개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "취업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 창업지원금",
    description: "청년 창업자 초기자금 및 컨설팅 지원",
    amount: "최대 1,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "창업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 교통비·통신비 지원",
    description: "청년 대중교통비 환급 및 통신비 지원",
    amount: "교통비 환급 + 월 2만원 통신비",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "생활안정",
    link: "https://gbyouth.co.kr",
    priority: 2
  },
  {
    title: "경북 청년 긴급생활안정 지원",
    description: "긴급 생계비, 의료비 등 지원",
    amount: "최대 100만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "생활안정",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "자산형성",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 무의탁노인 건강음료배달",
    description: "독거노인 건강음료 제공",
    amount: "건강음료 제공",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "주민센터",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 2
  },
  {
    title: "경북 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접비 일부 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "취업지원",
    link: "https://gbyouth.co.kr",
    priority: 2
  },

  // ==================== 대구광역시 ====================
  {
    title: "대구 청년희망적금",
    description: "청년 자산형성 지원, 12개월 저축 시 대구시 매칭",
    amount: "본인 120만원 + 대구시 120만원 = 240만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "자산형성",
    link: "https://youthdream.daegu.go.kr",
    priority: 1
  },
  {
    title: "대구 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원 (최대 12개월, 총 240만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "주거지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 구직지원금",
    description: "구직 중인 청년 대상 구직활동비 지원",
    amount: "월 50만원 (최대 6개월, 총 300만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "취업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 창업지원금",
    description: "창업 희망 청년 대상 창업자금 지원",
    amount: "최대 1,500만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "창업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년일자리도약장려금",
    description: "청년 정규직 채용 기업 지원 (달서구, 달성군, 서구, 남구)",
    amount: "월 60만원 × 12개월",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구경영자총협회",
    category: "취업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 1
  },
  {
    title: "대구 청년활력공간 다온나그래",
    description: "청년 활동 공간 및 프로그램 지원",
    amount: "무료 공간 이용",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "참여지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 사회적 고립청년 지원",
    description: "고립·은둔 청년 상담 및 프로그램 지원",
    amount: "무료 상담 및 프로그램",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년상담소",
    description: "청년 대상 진로, 취업, 심리 상담",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 정장대여",
    description: "취업준비 청년 면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 3
  },

  // ==================== 제주특별자치도 ====================
  {
    title: "제주 도민안전보험",
    description: "제주도민 전체 자동가입 보험",
    amount: "보험료 전액 지원",
    deadline: "2026-03-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지지원",
    link: "https://www.jejubokji.net",
    priority: 1
  },
  {
    title: "제주 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년 자격증 응시료 지원",
    description: "취업준비 청년 자격증 응시료 실비 지원",
    amount: "1인·1시험 연 1회",
    deadline: "2026-12-12",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주시",
    category: "취업지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년희망대출 융자지원",
    description: "저소득·저신용 청년 금융포용 지원",
    amount: "융자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "금융지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 정책서민금융 이차보전금",
    description: "서민가계 이자부담 완화 지원 (도민 확대)",
    amount: "이자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "금융지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 예술인 복지지원",
    description: "예술인 창작준비금, 공간임차료, 도외교통비 지원",
    amount: "창작준비금 등 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "문화지원",
    link: "https://www.jeju.go.kr",
    priority: 2
  },
  {
    title: "제주 서귀포시 청년지원센터",
    description: "서귀포시 청년 맞춤형 프로그램 및 공간",
    amount: "무료 공간 및 프로그램",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "참여지원",
    link: "https://jejuyouth.com",
    priority: 2
  },
  {
    title: "제주 교통복지카드 어린이 확대",
    description: "6~12세 어린이 버스요금 무료",
    amount: "버스 무료",
    deadline: "2026-12-31",
    ages: ["10대 미만", "10대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "교통지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 출산가정 산후조리비",
    description: "도내 출산가정 산후조리비 지원",
    amount: "40만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "가족지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 2자녀 이상 주택 취득세 감면",
    description: "2자녀 이상 양육자 주택 취득세 감면",
    amount: "취득세 감면",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 청년 정착 지원",
    description: "제주 정착 희망 청년 지원 사업",
    amount: "정착 지원금",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주상공회의소",
    category: "정착지원",
    link: "https://jejucci.korcham.net",
    priority: 2
  },
  {
    title: "제주 청년 기업 견학 프로그램",
    description: "취업준비 청년 국내기업 견학 지원",
    amount: "견학비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주시",
    category: "취업지원",
    link: "https://jejuyouthdream.com",
    priority: 2
  },
    {
    title: "노인가장세대 지원",
    description: "65세이상 차상위 어르신 가장세대 대상 냉방비 40천원과 난방비 85천원 지원",
    amount: "냉방비 40천원과 난방비 85천원",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001100",
    priority: 1
},
    {
    title: "무의탁노인 건강음료배달",
    description: "노인맞춤돌봄서비스 대상자 중 중점군 및 그외 독거노인 등 돌봄 사각지대 어르신",
    amount: "건강음료제공",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상북도", "경상남도"],
    source: "주민센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000143",
    priority: 1
},
    {
    title: "거동불편저소득재가노인식사배달",
    description: "거동이 불편한 저소득 어르신 가정에 도시락, 반찬 등 무료급식을 제공하여 어르신 건강 지원",
    amount: "건강 지원",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000124",
    priority: 1
},
    {
    title: "전기 이륜차 보조금",
    description: "서울시가 도심 대기오염과 생활 소음 저감을 위해 전기 이륜차 구매 지원",
    amount: "최대 40%",
    deadline: "",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울시",
    category: "",
    link: "https://www.seoul.go.kr/seoul/mediahub.do?schAgeVals=40&schTargetVals=&schBunyaVals=&schType=TAG&schValue=",
    priority: 1
},
    {
    title: "청년 이사·중개비 지원",
    description: "2023년 1월 1일 이후 서울시로 전입 또는 서울시 내에서 이사 후 전입신고 완료한 청년가구",
    amount: "최대 40만원",
    deadline: "2025-08-25",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "청년 몽땅 정보통",
    category: "주거지원",
    link: "https://youth.seoul.go.kr/mainA.do",
    priority: 1
},
    {
    title: "청년도약계좌",
    description: "(적금방식) 월 최대 70만원 이하 자유적립(회차별 최소 1천원 이상 1천원 단위 입금)",
    amount: "최대6%",
    deadline: "매달 초 신청",
    ages: ["20대", "30대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "서민금융진흥원",
    category: "기타",
    link: "https://www.kinfa.or.kr",
    priority: 1
},
        {
    title: "장기전세 주택공급",
    description: "시세의 80% 수준의 저렴한 임대보증금의 장기전세주택 공급",
    amount: "시세의 80%",
    deadline: "접수기관 별 상이",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "한국토지주택공사",
    category: "주거지원",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/999000000024?administOrgCd=ALL",
    priority: 1
},
{
title: "2025 청년 창업 지원금",
description: "만 18세~39세 청년 창업자를 위한 포괄적 지원 프로그램입니다. 사업자금, 교육, 멘토링을 종합적으로 지원합니다.",
amount: "최대 5,000만원",
deadline: "2025-12-31",
ages: ["20대", "30대"],
regions: ["서울특별시", "경기도", "부산광역시", "대구광역시", "인천광역시"],
source: "중소벤처기업부",
category: "창업지원",
link: "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI004M0.do",
priority: 1
},

    {
    title: "실업크레딧 지원",
    description: " 국민연금 가입자 또는 가입자였던 사람 중 18세이상 60세미만의 구직급여 수급자",
    amount: "최대70만원",
    deadline: "구직급여종료일이 속하는 달의 다음달 15일 이내",
    ages: ["50대", "40대", "30대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/B55201500004?administOrgCd=ALL",
    priority: 1
},


{
    title: "긴급복지 생계지원",
    description: "식료품비, 의복비, 냉방비 등 생계유지에 필요한 비용 또는 현물 지원",
    amount: "1인 가구: 730,500원",
    deadline: "",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "보건복지상담센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/135200005003?administOrgCd=ALL",
    priority: 1
},

    
{
title: "2025 신혼부부 주택 구입 지원",
description: "신혼부부 및 예비 신혼부부를 대상으로 한 주택 구입 자금 지원 프로그램입니다. 저금리 대출과 이자 지원을 제공합니다.",
amount: "최대 3억원",
deadline: "2025-07-01",
ages: ["20대", "30대", "40대"],
regions: ["전국"],
source: "국토교통부",
category: "주거지원",
link: "https://plus.gov.kr/",
priority: 1
},
  {
    title: "민생회복지원금",
    description: "전 국민 대상, 카드·상품권·선불카드 방식 지급",
    amount: "최소 15만원 ~ 최대 55만원",
    deadline: "2025-10-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "정부24",
    category: "생활안정",
    link: "https://plus.gov.kr/",
    priority: 1
  },
      {
    title: "상생페이백",
    description: "전 국민 대상, 카드·상품권·선불카드 방식 지급",
    amount: "최대 30만원",
    deadline: "2025-11-30",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "정부24",
    category: "생활안정",
    link: "https://xn--3h3bl7foc243a8lq.kr/",
    priority: 1
  },
  {
    title: "대전 청년 주택임차보증금 이자지원사업",
    description: "대전시 거주 19세~39세 무주택 청년 대상 보증금 대출 이자 지원",
    amount: "최대 연 3%",
    deadline: "예산 소진 시까지",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "청년지원",
    link: "https://djhousing.or.kr/",
    priority: 1
  },
  {
    title: "2025년 대전 청년 월세 지원사업",
    description: "대전 거주 청년 무주택 세대주 월세 지원",
    amount: "월 20만원 × 최대 12개월",
    deadline: "2025-08-14",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "청년지원",
    link: "https://www.djhousing.or.kr/bbs/content.php?co_id=DH2025001",
    priority: 3
  },
  {
    title: "영세 소상공인 인건비 지원사업",
    description: "대전 소재 영세 소상공인 신규 채용 인건비 지원",
    amount: "근로자 1인당 150만원 (50만원×3개월)",
    deadline: "2025-11-28",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000110405",
    priority: 4
  },
  {
    title: "대전 청년부부 결혼장려금 지원사업",
    description: "대전 거주 청년 초혼 부부에게 결혼장려금 지급",
    amount: "1인당 250만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "청년지원",
    link: "https://www.djwedding.or.kr/",
    priority: 5
  },
  {
    title: "소상공인 정책자금",
    description: "소상공인의 경영 안정 위한 정책자금",
    amount: "최대 7,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 6
  },
  {
    title: "전통시장 특례보증",
    description: "전통시장 입점 소상공인 보증지원",
    amount: "최대 2,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "지자체 및 신용보증재단",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 7
  },
  {
    title: "청년 소상공인 창업지원금",
    description: "만 39세 이하 청년 창업 소상공인 자금지원",
    amount: "최대 3,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 8
  },
  {
    title: "소상공인 전기요금 지원",
    description: "전기요금 부담 완화를 위한 할인 지원",
    amount: "월 최대 70만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "한국전력공사",
    category: "생활안정",
    link: "https://www.kepco.co.kr",
    priority: 9
  },
  {
    title: "긴급경영안정자금",
    description: "매출급감 등 경영애로 소상공인 자금지원",
    amount: "최대 7,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "생활안정",
    link: "https://ols.semas.or.kr",
    priority: 10
  },
  {
    title: "어르신 스포츠 상품권 지원사업",
    description: "체육활동 기회 제공 위한 상품권 배포",
    amount: "1인당 스포츠상품권",
    deadline: "2025-08-13",
    ages: ["60대","70대"],
    regions: ["전국"],
    source: "문화체육관광부",
    category: "생활안정",
    link: "https://www.mois.go.kr", 
    priority: 7
  },
    {
    title: "오산시 경기청년 역량강화 기회지원",
    description: "미취업 청년 자격증 응시료 지원",
    amount: "최대 30만원",
    deadline: "2025-11-30",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "오산시청",
    category: "청년지원",
    link: "https://www.gov.kr",
    priority: 8
  },
  {
    title: "인천시 소상공인 경영환경개선 지원사업",
    description: "점포환경·홍보·위생·스마트기술 구축 지원",
    amount: "업체당 최대 250만원",
    deadline: "2025-08-14",
    ages: ["40대","50대","60대","70대"],
    regions: ["인천광역시"],
    source: "인천광역시청",
    category: "생활안정",
    link: "https://www.gov.kr",
    priority: 9
  },
  {
    title: "인천형 예비사회적기업 공모",
    description: "예비 사회적기업 판로·컨설팅·입주 기회 제공",
    amount: "지원금 별도 공모",
    deadline: "2025-08-22",
    ages: ["30대","40대"],
    regions: ["인천광역시"],
    source: "인천광역시청",
    category: "창업지원",
    link: "https://www.gov.kr",
    priority: 6
  },
     {
    title: "경상북도 산불피해 긴급재난지원금",
    description: "경북 5개 시·군 주민 대상 산불피해 긴급 생계비 지원",
    amount: "1인당 30만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "생활안정",
    link: "https://www.gb.go.kr",
    priority: 1
  },
  {
    title: "경상북도 창업 및 경쟁력강화 사업자금",
    description: "도내 중소기업 대상 창업·설비·ESG 경영자금 장기 저리 융자",
    amount: "최대 5억원 (금리 약 2.5%)",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상북도"],
    source: "경상북도경제진흥원",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 3
  },
  {
    title: "경상남도 창업기업 신규고용인력 보조금",
    description: "경남 소재 창업 7년 이내 중소·벤처기업 대상",
    amount: "1인당 최대 300만원 (기업당 최대 5명)",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 4
  },
  {
    title: "2025 충청북도 중소기업육성자금 융자(이차보전)",
    description: "충북 중소기업 대상 기금 융자 및 이차보전 지원",
    amount: "총 3,950억원 규모",
    deadline: "2024-12-26",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청북도"],
    source: "충청북도기업진흥원",
    category: "창업지원",
    link: "https://www.cba.ne.kr",
    priority: 2
  },
  {
    title: "2025 충북 소상공인 맞춤형 도시근로자 지원사업",
    description: "충북 소상공인 근로자 임금의 40% 인건비 보조",
    amount: "270일 한도, 최저시급의 40%",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "생활안정",
    link: "https://www.welfarehello.com",
    priority: 3
  },
  {
    title: "작은결혼식 및 인구감소지역 결혼지원금",
    description: "충북 청년 신혼부부 대상 결혼식 및 정착지원금",
    amount: "최대 200만원 + 100만원",
    deadline: "2025-12-12",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도사회복지협의회",
    category: "생활안정",
    link: "https://gachi.chungbuk.go.kr",
    priority: 5
  },
     {
    title: "경기도 청년기본소득",
    description: "24세 경기도 거주 청년 대상 분기별 지역화폐 지원",
    amount: "분기별 25만원 (최대 연 100만원)",
    deadline: "2025-08-11",
    ages: ["20대"],
    regions: ["경기도"],
    source: "경기도청",
    category: "청년지원",
    link: "https://www.gg.go.kr/contents/contents.do?ciIdx=1037&menuId=2736",
    priority: 1
  },
  {
    title: "민생회복 소비쿠폰 (경기도)",
    description: "경기도 거주민 대상 전국민 소비쿠폰 지급 (현금성)",
    amount: "최소 15만원 ~ 최대 45만원",
    deadline: "2025‑09‑12",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["경기도"],
    source: "행정안전부",
    category: "생활안정",
    link: "https://www.korea.kr",
    priority: 3
  },
      {
    title: "국민취업지원제도 취업지원신청",
    description: "구직자 대상 취업 지원 서비스",
    amount: "최대 월 50만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000086",
    priority: 9
  },
  {
    title: "난임부부 시술비 지원 신청",
    description: "난임부부 대상 시술비 일부 지원",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "건강복지",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000394",
    priority: 8
  },
  {
    title: "생계지원금 지급신청",
    description: "생활 어려운 대상자 생계지원금 신청",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보훈처",
    category: "생활안정",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000165",
    priority: 7
  },
  {
    title: "고용촉진장려금 지급",
    description: "취약계층 고용 유지 사업주 대상 장려금",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "고용지원",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000227",
    priority: 7
  },
  {
    title: "사회보장급여 신청(변경)",
    "description": "저소득층 대상 가족 사회보장 급여 신청",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000275",
    priority: 8
  },
  {
    title: "생활지원금 지급 신청",
    description: "독립유공자 대상 생활안정 지원",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["60대", "70대"],
    regions: ["전국"],
    source: "국가보훈처",
    category: "복지",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000168",
    priority: 6
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
