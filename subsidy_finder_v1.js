window.SupportFinder = window.SupportFinder || {};

window.SupportFinder.forceRefresh = function() {
    // 데이터 강제 새로고침
    if (document.getElementById('supportFinderSupportGrid')) {
        this.updateCurrentDate();
        this.setupCheckboxes();
    }
};

window.SupportFinder.manualSupportData = [
   /**
 * 2026년 정부 지원금 통합 데이터 (2026년 3월 12일 기준 최종 정리)
 *
 * ── deadline 표기 기준 ──────────────────────────────────────────
 *  ""                            → 상시 신청 (연중 언제든 가능)
 *  "YYYY-MM-DD"                  → 해당 날짜 마감
 *  "2026-12-31"                  → 2026년 연간 운영 (연말 기준)
 *  "매달 초 신청"                 → 매월 첫 영업일 신청
 *  "접수기관별 상이"               → 기관마다 신청기간 상이
 *  "구직급여종료일 다음달 15일"    → 수급 종료 후 개별 적용
 *
 * ── 정리 원칙 ────────────────────────────────────────────────────
 *  1. 2025년 이미 종료된 한시사업 제거 (민생회복지원금, 상생페이백 등)
 *  2. 동일 사업 중복 항목 통합 (가장 정확한 버전 1개 유지)
 *  3. "최대 수백만원" 등 불확실 amount 명확화 또는 유지
 *  4. 빈 category 보완
 *  5. 모든 regions 배열 정규화 (전국/시도명 일치)
 *
 * ── 지역별 최소 항목 수 보장 ─────────────────────────────────────
 *  전국: 25개 / 서울: 13개 / 경기: 12개 / 인천: 9개
 *  대전: 8개  / 대구: 9개  / 부산: 5개  / 세종: 7개
 *  충북: 10개 / 충남: 8개  / 경남: 9개  / 경북: 9개
 *  전남: 5개  / 강원: 5개  / 제주: 10개
 *
 * ── 연령대 분류 ──────────────────────────────────────────────────
 *  "10대 미만" / "10대" / "20대" / "30대" / "40대"
 *  "50대" / "60대" / "70대" / "80대"
 */

export const subsidies = [

  // ══════════════════════════════════════════════════════════════
  //  전국 공통 (25개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "청년미래적금",
    description: "만 19~34세 청년 대상 자산형성 상품. 3년 만기, 월 최대 50만원 납입 시 정부 기여금 6~12% 매칭 + 이자소득 비과세. 중소기업 취업 6개월 이내 청년은 우대형(12%), 그 외 일반형(6%). 청년도약계좌 후속 상품으로 2026년 6월 출시 예정.",
    amount: "최대 2,200만원 (3년 만기, 월 50만원 납입 기준)",
    deadline: "2026-06-30 출시 예정",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "금융위원회",
    category: "자산형성",
    link: "https://www.fsc.go.kr",
    priority: 1
  },
  {
    title: "청년도약계좌",
    description: "만 19~34세 청년 대상 5년 만기 자유적립식 적금. 월 최대 70만원 납입 시 정부 기여금 최대 6% 매칭. 소득 기준에 따라 기여금 차등 적용. 매월 초 서민금융진흥원 앱·홈페이지 신청.",
    amount: "5년 만기 최대 5,000만원 (정부기여금 최대 6% 포함)",
    deadline: "매달 초 신청",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "서민금융진흥원",
    category: "자산형성",
    link: "https://www.kinfa.or.kr",
    priority: 1
  },
  {
    title: "국민취업지원제도 구직촉진수당",
    description: "취업에 어려움을 겪는 저소득 구직자에게 구직활동 지원금 지급. 2026년 월 60만원으로 인상. 1유형(소득·재산 요건 충족)과 2유형(취업경험 요건)으로 구분. 고용24(work24.go.kr) 신청.",
    amount: "월 60만원 × 최대 6개월 (총 360만원)",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "청년 월세 한시 특별지원",
    description: "독립 거주 무주택 청년의 주거비 부담 완화. 2026년부터 상시 지원으로 전환. 만 19~34세, 보증금 5,000만원 이하·월세 70만원 이하 거주, 소득 중위 60% 이하 조건. 복지로·주민센터 신청.",
    amount: "월 최대 20만원 × 24개월 (총 최대 480만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "국민내일배움카드",
    description: "만 15세 이상 재직자·구직자·자영업자 대부분 신청 가능한 직업훈련비 지원 카드. 2026년부터 고용24(work24.go.kr)로 통합 신청.",
    amount: "기본 300만원 + 추가 200만원 (최대 500만원, 유효기간 5년)",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "교육·훈련",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "부모급여",
    description: "만 0~1세 아동을 가정에서 돌보는 부모에게 지급하는 양육비 지원. 출생일 포함 60일 이내 신청 시 출생 월부터 소급 적용. 복지로·정부24 또는 주민센터 신청.",
    amount: "만 0세 월 100만원 / 만 1세 월 50만원",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "아동수당",
    description: "만 8세 미만 아동에게 지급하는 보편 수당. 2026년 만 7세→8세 미만으로 지원 연령 확대. 소득·재산 기준 없이 모든 가구 지급. 주민센터 또는 복지로에서 신청.",
    amount: "월 10만원 (연 120만원)",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "첫만남이용권",
    description: "출생 아동에게 지급하는 국민행복카드 바우처. 출산 관련 용품·의료비 등에 사용 가능. 2026년 첫째 200만원으로 상향. 출생 신고 후 복지로·정부24 신청.",
    amount: "첫째 200만원 / 둘째 이상 300만원",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "기초연금",
    description: "만 65세 이상 어르신 중 소득 하위 70%에게 지급하는 연금. 2026년 단독가구 선정기준액 월 247만원 이하, 부부가구 395만 2천원 이하. 주민센터 또는 복지로 신청.",
    amount: "월 최대 약 34만 9,700원",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "근로장려금",
    description: "저소득 근로자·사업자 가구의 근로 의욕 고취 및 실질소득 지원. 단독·홑벌이·맞벌이 가구 유형별 소득 기준 적용. 재산 합계 2억 4천만원 미만 요건. 매년 5월 정기 신청 / 3월·9월 반기 신청.",
    amount: "단독 최대 165만원 / 홑벌이 285만원 / 맞벌이 330만원",
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
    description: "저소득 가구의 자녀 양육 지원을 위한 세금 환급형 급여. 18세 미만 부양 자녀가 있는 가구 대상. 부부합산 총소득 7,000만원 미만 조건. 근로장려금과 동시 신청 가능. 매년 5월 정기 신청.",
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
    description: "국내 대학 재학생의 학자금 부담 완화. 소득 9구간 이하 신청 가능. 1구간(기초·차상위) 등록금 전액 지원. 매 학기 한국장학재단 홈페이지에서 신청.",
    amount: "1구간 연 최대 700만원 / 구간별 차등 지원",
    deadline: "상시",
    ages: ["10대", "20대"],
    regions: ["전국"],
    source: "한국장학재단",
    category: "교육·훈련",
    link: "https://www.kosaf.go.kr",
    priority: 1
  },
  {
    title: "청년일자리도약장려금",
    description: "취업애로청년을 정규직으로 채용한 5인 이상 우선지원대상기업에 장려금 지급. 2026년 상시 신청. 비수도권 인구감소지역 기업은 최대 720만원.",
    amount: "최대 480만원 (비수도권 우대 최대 720만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 1
  },
  {
    title: "노인일자리 및 사회활동 지원사업",
    description: "만 65세 이상 어르신에게 지역사회 공익활동·시장형 일자리 제공. 2026년 역대 최대 115만 2천개 일자리 운영. 노인복지관·주민센터 신청.",
    amount: "공익활동형 월 약 29만원 / 사회서비스형 월 약 59~76만원",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "취업지원",
    link: "https://www.seniorro.or.kr",
    priority: 1
  },
  {
    title: "건강생활실천지원금 (걷기 포인트)",
    description: "고혈압·당뇨 등 건강 위험군이 건강관리 목표 달성 시 포인트 지급. 2026년 전국 50개 권역으로 시범 확대. 'The건강보험' 앱으로 신청·관리.",
    amount: "최대 연 12만 포인트 (진료비 사용 가능)",
    deadline: "상시",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "국민건강보험공단",
    category: "건강",
    link: "https://www.nhis.or.kr",
    priority: 2
  },
  {
    title: "기초생활수급 주거급여",
    description: "기준 중위소득 48% 이하 가구에 실제 임차료 지원. 자가 가구는 수선비 지원. 복지로 또는 주민센터 신청. 2026년 1인 가구 기준 금액 상향.",
    amount: "1인 가구 월 최대 약 34만원 (지역·가구원 수별 상이)",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "기초생활보장 생계급여",
    description: "기준 중위소득 32% 이하 가구에 생계유지비 지급. 2026년 중위소득 인상에 따라 지원 금액 상향. 복지로 또는 주민센터 신청.",
    amount: "4인 가구 월 207만원 / 1인 가구 월 82만원",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "교육급여",
    description: "기초생활수급 가구 초중고 학생에게 교육활동지원비 지급. 2026년 평균 6% 인상.",
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
    description: "만 18세 이상 중증장애인 중 소득·재산 기준 하위 70%에게 지급. 기초급여와 부가급여로 구성. 65세 이상은 기초연금으로 전환. 복지로 또는 주민센터 신청.",
    amount: "기초급여 월 최대 34만 2,510원 + 부가급여 별도",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 2
  },
  {
    title: "긴급복지 생계지원",
    description: "갑작스러운 위기 상황(실직·질병·화재 등) 발생 시 긴급 식료품비·의복비·냉방비 등 지원. 주민센터 또는 복지 콜센터(129) 신청.",
    amount: "1인 가구 730,500원 (가구원 수별 상이)",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지상담센터",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "실업크레딧 지원",
    description: "국민연금 가입자였던 만 18~60세 구직급여 수급자의 국민연금 보험료 75% 지원. 본인 25% 부담 시 나머지 정부 지원. 구직급여 수급 중 신청.",
    amount: "인정 소득 월 최대 70만원 기준 보험료의 75%",
    deadline: "구직급여종료일 다음달 15일",
    ages: ["30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/B55201500004",
    priority: 1
  },
  {
    title: "장기전세 주택공급",
    description: "시세 80% 수준의 저렴한 임대보증금으로 최장 20년 거주 가능한 장기전세주택 공급. LH·SH 청약홈을 통해 신청. 공급 시기·물량은 접수기관별 공고 참조.",
    amount: "시세의 80% 수준",
    deadline: "접수기관별 상이",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "한국토지주택공사",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },
  {
    title: "소상공인 정책자금",
    description: "소상공인 경영안정·창업·재도전을 위한 정책자금 융자. 직접대출과 대리대출 방식 운영. 소상공인시장진흥공단(SEMAS) 신청.",
    amount: "최대 7,000만원 (유형별 상이)",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "청년 소상공인 창업지원금",
    description: "만 39세 이하 청년 창업 소상공인 대상 사업화 자금 지원. 창업 교육·멘토링 연계. 소상공인시장진흥공단 신청.",
    amount: "최대 3,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "고용촉진장려금",
    description: "취업 취약계층(장기실업자·고령자·장애인 등)을 채용한 사업주에게 장려금 지급. 고용24(work24.go.kr) 신청.",
    amount: "1인당 최대 수백만원 (고용 유지 기간별 상이)",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "난임부부 시술비 지원",
    description: "법적 혼인 또는 사실혼 난임 부부 대상 체외수정·인공수정 시술비 일부 지원. 건강보험 적용 후 잔여 본인부담금 지원. 보건소 또는 복지로 신청.",
    amount: "시술 횟수·방법별 최대 수백만원",
    deadline: "상시",
    ages: ["30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "출산·육아",
    link: "https://www.bokjiro.go.kr",
    priority: 2
  },
  {
    title: "전기차 구매 보조금",
    description: "내연기관차 폐차 후 전기차 구매 시 또는 신규 전기차 구매 시 보조금 지급. 차종·성능에 따라 차등 지급. 환경부 저공해차 통합누리집 신청.",
    amount: "최대 400만원 (차종별 상이)",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "환경부",
    category: "친환경",
    link: "https://www.ev.or.kr",
    priority: 2
  },
  {
    title: "소상공인 전기요금 지원",
    description: "영세 소상공인 전기요금 부담 완화를 위한 할인 지원. 한국전력공사 고객센터 또는 홈페이지 신청.",
    amount: "월 최대 70만원 (업종·규모별 상이)",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "한국전력공사",
    category: "생활안정",
    link: "https://www.kepco.co.kr",
    priority: 2
  },
  {
    title: "긴급경영안정자금",
    description: "매출 급감 등 경영 위기에 처한 소상공인 대상 긴급 자금 지원.",
    amount: "최대 7,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 2
  },
  {
    title: "전통시장 특례보증",
    description: "전통시장 입점 소상공인에게 신용보증재단이 보증 제공. 시중금리보다 낮은 금리로 자금 조달 가능.",
    amount: "최대 2,000만원",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "신용보증재단",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 2
  },
  {
    title: "사회보장급여 신청",
    description: "기초생활보장·의료급여·긴급복지 등 각종 사회보장급여 통합 신청. 복지로(bokjiro.go.kr) 또는 주민센터 방문 신청.",
    amount: "급여 유형별 상이",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.bokjiro.go.kr",
    priority: 2
  },
  {
    title: "국가보훈대상자 생활지원금",
    description: "독립유공자·국가유공자 등 보훈대상자에게 생활안정 지원금 지급. 국가보훈부 지방보훈청 신청.",
    amount: "대상 유형별 상이",
    deadline: "상시",
    ages: ["60대", "70대"],
    regions: ["전국"],
    source: "국가보훈부",
    category: "복지",
    link: "https://www.gov.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  서울특별시 (13개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "서울 청년수당",
    description: "서울 거주 미취업 청년의 구직활동 지원. 2026년 2만명 선발. 중위소득 150% 이하, 최종학력 졸업자 조건. 매월 50만원 + 멘토링·취업특강 등 프로그램 제공. 생애 1회 지원.",
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
    title: "서울 미래 청년 일자리",
    description: "AI·문화콘텐츠·바이오헬스케어·제로웨이스트 분야 서울 소재 기업에서 청년 일자리 경험 지원. 서울시가 참여 청년에게 직접 임금 지급. 2026년 기업 모집 마감 4월 3일.",
    amount: "월 약 253만원 (세전, 서울시 직접 지급)",
    deadline: "2026-04-03",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 청년 월세지원",
    description: "서울 거주 청년 1인 가구 월세 지원. 만 19~39세, 임차보증금 8천만원 이하·월세 60만원 이하 건물 거주, 중위소득 150% 이하 무주택자. 2026년 4월 이후 공고 예정.",
    amount: "월 20만원 × 최대 12개월 (총 240만원)",
    deadline: "2026-04-30",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://housing.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 희망두배 청년통장",
    description: "서울 거주 저소득 근로 청년 자산형성 지원. 만 18~34세 근로자 중 소득·재산 기준 충족 시. 매월 15만원 또는 20만원 저축 시 서울시 동일 금액 매칭.",
    amount: "2년 만기 최대 1,020만원 (본인 저축 + 서울시 매칭 + 이자)",
    deadline: "2026-05-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "자산형성",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 청년 이사·중개비 지원",
    description: "2023년 1월 1일 이후 서울시로 전입 또는 서울시 내 이사 후 전입신고 완료한 청년 가구 대상 이사비·중개수수료 지원.",
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
    title: "서울 청년 대중교통비 지원",
    description: "서울 거주 만 19~39세 중위소득 150% 이하 청년에게 대중교통비 일부 환급. 티머니·카드 이용 내역 기준 지역화폐로 환급.",
    amount: "월 최대 5만원 (연 최대 60만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "생활안정",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울 청년 마음건강 지원",
    description: "서울 거주 만 19~39세 청년에게 심리 상담 바우처 제공. 1회 50분 기준 상담비 지원. 서울시 청년몽땅정보통 신청.",
    amount: "최대 10회 상담비 지원 (회당 5~7만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "건강",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년취업사관학교",
    description: "AI·데이터·클라우드 등 유망 직무 분야 무료 직업교육 지원. 수료 후 취업 연계 지원.",
    amount: "무료 교육 + 취업 연계",
    deadline: "분기별 모집 (연 4회)",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울형 마이크로크레딧",
    description: "신용·담보 부족 소상공인 대상 초저금리 융자 및 매장 리뉴얼 바우처. 서울신용보증재단 신청.",
    amount: "연 1%대 저금리 융자",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["서울특별시"],
    source: "서울신용보증재단",
    category: "창업지원",
    link: "https://www.seoulshinbo.co.kr",
    priority: 2
  },
  {
    title: "서울시 고립·은둔청년 지원",
    description: "사회적 고립·은둔 상태의 서울 거주 청년에게 맞춤형 상담 및 회복 프로그램 제공. 서울광역청년센터 신청.",
    amount: "무료 상담 및 프로그램",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울광역청년센터",
    category: "복지",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 뉴딜일자리",
    description: "공공기관·복지·환경 분야 단기 일자리 제공. 만 18세 이상 서울 거주 구직자. 서울시 일자리 포털 신청.",
    amount: "직무별 급여 지급",
    deadline: "분기별 모집 (연 4회)",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://job.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울 전기 이륜차 보조금",
    description: "서울시 도심 대기오염·생활 소음 저감을 위한 전기 이륜차 구매 지원. 서울시 보조금 + 국비 보조금 중복 적용 가능.",
    amount: "구매가의 최대 40%",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "친환경",
    link: "https://www.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년 면접정장 대여",
    description: "취업준비 청년 대상 면접용 정장 무료 대여 서비스. 서울 소재 청년센터에서 대여 가능.",
    amount: "무료 대여",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울청년센터",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 3
  },

  // ══════════════════════════════════════════════════════════════
  //  경기도 (12개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "경기도 청년기본소득",
    description: "경기도 거주 만 24세 청년에게 지급하는 보편 기본소득. 최근 3년 이상 계속 거주 또는 합산 10년 이상 거주 요건. 경기지역화폐로 지급. 성남·고양시 2026년 제외. 1분기 신청 2026.3.3~4.1.",
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
    description: "경기도 소재 중소기업 재직 청년에게 문화·여가·건강관리 등 복지포인트 지급. 경기도일자리재단 잡아바 신청.",
    amount: "연 120만원 (반기별 60만원)",
    deadline: "2026-06-12",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 중소기업 청년 노동자 지원",
    description: "경기도 중소기업 재직 청년에게 2년간 지역화폐 지원. 경기도일자리재단 잡아바 신청.",
    amount: "2년간 480만원 (반기 120만원)",
    deadline: "2026-10-16",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 청년 노동자 통장",
    description: "저소득 근로 청년 자산형성 지원. 만 18~34세 경기도 거주 근로자 중위소득 100% 이하. 매월 10만원 저축 시 경기도 매칭.",
    amount: "2년 만기 약 580만원 (본인 240만원 + 지원금 + 이자)",
    deadline: "2026-05-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도미래세대재단",
    category: "자산형성",
    link: "https://account.ggwf.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 매입임대주택",
    description: "경기도 거주 청년 대상 시세 40~50% 수준 임대주택 제공 (최장 6년). 경기주택도시공사(GH) 신청.",
    amount: "시세 40~50% 수준",
    deadline: "수시 공고 (GH 청약홈 확인)",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기주택도시공사",
    category: "주거지원",
    link: "https://www.gico.or.kr",
    priority: 1
  },
  {
    title: "경기도 행복주택",
    description: "대학생·사회초년생·신혼부부 대상 공공임대주택 공급. LH·GH 청약홈 신청.",
    amount: "시세 60~80% 수준",
    deadline: "수시 공고 (LH 청약홈 확인)",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기주택도시공사",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 월세 지원",
    description: "경기도 거주 무주택 청년 월세 지원. 만 19~34세 독립 거주, 소득·재산 기준 충족 시. 국토부 청년월세지원과 중복 불가.",
    amount: "월 최대 20만원 × 24개월 (총 최대 480만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "주거지원",
    link: "https://www.gg.go.kr",
    priority: 1
  },
  {
    title: "경기도 청년 역량강화 기회지원",
    description: "미취업 청년 자격증 취득 비용 지원. 경기도 거주 만 18~39세 미취업 청년.",
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
    title: "경기도 청년 면접비 지원",
    description: "경기도 거주 만 18~39세 미취업 청년 면접 참여 시 교통비 등 실비 지원.",
    amount: "1회 5만원, 연 최대 4회 (총 20만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://apply.jobaba.net",
    priority: 2
  },
  {
    title: "경기도 꿈날개 여성 경력개발",
    description: "경력 단절 여성 및 취업희망 여성 대상 무료 온라인 교육·취업 상담 서비스. 경기도여성가족재단 운영.",
    amount: "무료 서비스",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["경기도"],
    source: "경기도여성가족재단",
    category: "취업지원",
    link: "https://www.dreamwing.or.kr",
    priority: 2
  },
  {
    title: "경기도 디지털 상점 전환 사업",
    description: "경기도 소상공인 온라인 쇼핑몰 구축·스마트 POS 설치 등 디지털 전환 지원.",
    amount: "최대 500만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경기도"],
    source: "경기도",
    category: "창업지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 국방전직지원 직업교육",
    description: "전역 예정 군인 대상 사회복귀 직업교육 지원. 경기도일자리재단 신청.",
    amount: "무료 교육",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://gjf.or.kr",
    priority: 3
  },

  // ══════════════════════════════════════════════════════════════
  //  인천광역시 (9개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "인천 청년 월세 지원",
    description: "인천 거주 무주택 청년 월세 부담 완화. 만 19~39세 중위소득 150% 이하. 인천광역시 청년포털 신청.",
    amount: "월 20만원 × 최대 24개월",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 청년 임차보증금 대출이자 지원",
    description: "인천 거주 청년 전·월세 보증금 대출 이자 일부 지원.",
    amount: "대출이자 일부 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i+ 1억드림 출산지원",
    description: "인천 거주 출산 가정에 임산부 교통비·출산지원금·아이꿈수당 등 종합 지원 패키지 제공.",
    amount: "종합 지원 패키지 (최대 1억원 목표)",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "출산·육아",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 75세 이상 버스 무료화",
    description: "인천 거주 만 75세 이상 어르신 시내버스 무료 이용.",
    amount: "버스 무료 이용",
    deadline: "상시",
    ages: ["70대", "80대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "생활안정",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i-패스 교통비 환급",
    description: "인천 거주 시민 대중교통 이용 시 교통비 일부 환급.",
    amount: "이용 실적에 따라 환급",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "생활안정",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i+ 집Dream 신혼부부 주거지원",
    description: "인천 거주 신혼부부 임대주택 임대료 지원.",
    amount: "임대료 일부 지원",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 자립준비청년 주거지원",
    description: "보호 종료 자립준비청년 대상 주거 지원 시설 확충. 인천 내 19개소 지원.",
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
    description: "인천 소재 소상공인 점포환경·홍보·위생·스마트기술 구축 지원.",
    amount: "업체당 최대 250만원",
    deadline: "2026-08-14",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "창업지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 외로움돌봄 지원",
    description: "사회적 고립·외로움 문제 대응 외로움대응센터 운영 및 24시간 상담전화 제공.",
    amount: "무료 상담 지원",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "복지",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 군장병 재해보험",
    description: "인천 거주 군복무 중 장병을 대상으로 복무 중 발생할 수 있는 사고·재해 피해 보상 보험료 전액 지원.",
    amount: "보험료 전액 지원",
    deadline: "상시 (입영 후 자동 가입)",
    ages: ["20대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "복지",
    link: "https://www.incheon.go.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  대전광역시 (8개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "대전 청년 주택임차보증금 이자지원",
    description: "대전 거주 만 19~39세 무주택 청년 전·월세 보증금 대출 이자 지원. 예산 소진 시까지. 대전청년내일재단 신청.",
    amount: "대출이자 최대 연 3% 지원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 월세 지원",
    description: "대전 거주 만 19~39세 무주택 세대주 월세 지원. 중위소득 150% 이하. 대전청년내일재단 신청.",
    amount: "월 20만원 × 최대 12개월 (총 240만원)",
    deadline: "2026-08-14",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://www.djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 청년부부 결혼장려금",
    description: "대전 거주 청년 초혼 부부에게 결혼장려금 지급. 혼인신고 후 대전청년내일재단 신청.",
    amount: "1인당 250만원 (부부 합산 500만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "출산·육아",
    link: "https://www.djwedding.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 창업지원",
    description: "대전 거주 청년 창업자 사업화 자금 지원. 창업 교육·멘토링 연계.",
    amount: "최대 3,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.daejeon.go.kr",
    priority: 1
  },
  {
    title: "대전 영세소상공인 인건비 지원",
    description: "대전 소재 영세 소상공인 신규 채용 인건비 지원.",
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
    title: "대전 청년 취업역량 강화",
    description: "청년 취업 교육 및 상담 지원. 이력서·면접 준비, 직무 교육 프로그램 운영.",
    amount: "무료 교육",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 자격증 응시료 지원",
    description: "취업준비 청년 국가기술자격 응시료 지원.",
    amount: "응시료 일부 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 심리상담 지원",
    description: "대전 거주 청년 정신건강 상담 바우처 제공.",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "건강",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 면접비 지원",
    description: "대전 거주 구직활동 청년 면접 교통비 지원.",
    amount: "면접비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 소상공인 전기요금 지원",
    description: "대전 소재 영세 소상공인 전기요금 부담 완화 지원.",
    amount: "전기요금 일부 지원",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "생활안정",
    link: "https://www.daejeon.go.kr",
    priority: 3
  },

  // ══════════════════════════════════════════════════════════════
  //  세종특별자치시 (10개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "세종 청년 월세 지원",
    description: "세종시 거주 만 19~34세 무주택 청년 월세 지원. 중위소득 150% 이하.",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 신혼부부 주거지원",
    description: "세종 거주 신혼부부 전세자금 이자 지원. 혼인신고 후 신청.",
    amount: "전세자금 대출이자 지원",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 창업지원금",
    description: "세종시 거주 청년 창업자 사업화 자금·창업 공간 지원.",
    amount: "최대 2,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 취업지원",
    description: "세종 거주 미취업 청년 구직활동 지원. 취업 교육·상담·면접비 제공.",
    amount: "구직활동비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 자산형성 지원",
    description: "세종 거주 저소득 근로 청년 목돈 마련 매칭 저축 지원.",
    amount: "본인저축액 매칭",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "자산형성",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 소상공인 지원금",
    description: "세종 소재 소상공인 경영안정 자금 저금리 융자.",
    amount: "최대 5,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 교통비 지원",
    description: "세종 거주 청년 대중교통비 일부 지원.",
    amount: "교통비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "생활안정",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 심리상담",
    description: "세종 거주 청년 정신건강 상담 바우처 제공. 무료 심리상담 서비스 운영.",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "건강",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 직업훈련",
    description: "세종 거주 청년 직업능력개발 훈련비 지원.",
    amount: "훈련비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 면접정장 대여",
    description: "취업준비 세종 거주 청년 면접용 정장 무료 대여.",
    amount: "무료 대여",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 3
  },

  // ══════════════════════════════════════════════════════════════
  //  충청북도 (10개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "충북 청년 1인가구 이사비 지원",
    description: "충북 거주 청년 1인가구 이사비 지원. 충청북도 청년 정책 포털 신청.",
    amount: "이사비 실비 지원",
    deadline: "2026-08-27",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년 월세 지원",
    description: "충북 거주 만 19~34세 무주택 청년 월세 지원. 중위소득 150% 이하.",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 대학생 주거 지원",
    description: "충북 출신 서울 거주 대학생 대상 서울관·동서울관 기숙사 지원. 충북 소재 대학 재학생은 청주관 지원.",
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
    description: "충북인재평생교육진흥원 운영 성적 우수 대학생 장학금. 충북 거주 또는 충북 소재 대학 재학생.",
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
    description: "충북 거주 저소득 청년 자산형성 지원. 매칭 저축 방식으로 목돈 마련 지원.",
    amount: "본인 저축액 매칭 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "자산형성",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 자립준비청년 자립수당",
    description: "보호 종료 자립준비청년 자립 지원 수당 지급.",
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
    description: "충북 거주 결혼 준비 청년 대상 결혼자금 공제 지원.",
    amount: "공제 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "출산·육아",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 마음이음 청년 심리상담",
    description: "충북 거주 청년 정신건강 무료 심리상담 프로그램 운영.",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "건강",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 소상공인 창업응원금",
    description: "충북 거주 청년 소상공인 창업 지원금. 창업 교육 이수 후 신청 가능.",
    amount: "창업지원금",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "창업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 소상공인 맞춤형 인건비 지원",
    description: "충북 소상공인 근로자 인건비의 40% 보조. 270일 한도 지원.",
    amount: "최저시급의 40% (270일 한도)",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "창업지원",
    link: "https://www.chungbuk.go.kr",
    priority: 2
  },
  {
    title: "충북 청년 사회서비스사업단",
    description: "충북 거주 청년 사회서비스 분야 일자리 지원. 사회서비스 제공 기관에서 청년 일자리 경험 제공.",
    amount: "일자리 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "취업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 무료 법률상담",
    description: "충북 도민 대상 법률 문제 무료 상담 서비스. 충청북도청 법무담당관실 운영.",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "복지",
    link: "https://www.chungbuk.go.kr",
    priority: 3
  },

  // ══════════════════════════════════════════════════════════════
  //  충청남도 (8개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "충청남도 청년 월세 지원",
    description: "충남 거주 만 19~34세 무주택 청년 월세 지원. 중위소득 150% 이하. 충남도비 + 시군비 매칭 운영.",
    amount: "월 최대 20만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "주거지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충청남도 농업인 수당",
    description: "충남 거주 농업경영체 등록 농업인에게 농업의 공익적 기능에 대한 직불금 지급. 시군 농업기술센터 신청.",
    amount: "연 60만원",
    deadline: "상시",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "농어업",
    link: "https://www.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충청남도 출산장려금",
    description: "충남 거주 출산 가구 지급 장려금. 시군별 금액 상이하며 첫째~셋째 이상 차등 지급. 출산 후 주민센터 신청. 국가 지원금과 중복 수령 가능.",
    amount: "첫째 최소 30만원~ / 셋째 이상 최대 수백만원 (시군별 상이)",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["충청남도"],
    source: "충청남도 시군",
    category: "출산·육아",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 어르신 틀니·임플란트 본인부담금 지원",
    description: "충남 거주 만 65세 이상 기초생활수급자·차상위 어르신 틀니·임플란트 건강보험 본인부담금 지원. 시군 보건소 신청.",
    amount: "본인부담금 전액 또는 일부 지원",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["충청남도"],
    source: "충청남도 보건소",
    category: "건강",
    link: "https://www.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년창업 지원",
    description: "충남 거주 만 39세 이하 청년 창업자 창업공간·멘토링·초기자금 지원. 충남창조경제혁신센터 신청.",
    amount: "최대 2,000만원 + 사무공간 무상 제공",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://ccei.creativekorea.or.kr",
    priority: 2
  },
  {
    title: "충청남도 청년 취업지원금",
    description: "충남 거주 미취업 청년 구직활동 지원. 취업 교육·상담 연계.",
    amount: "구직활동비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 소상공인 경영안정 자금",
    description: "충남 소재 소상공인 경영안정을 위한 저금리 융자 지원.",
    amount: "최대 5,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 농어촌 청년 정착 지원",
    description: "충남 농어촌 지역으로 이주한 청년에게 정착 지원금 제공.",
    amount: "정착지원금",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "복지",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년활력공간 운영",
    description: "충남 거주 청년 커뮤니티·활동 공간 및 프로그램 제공.",
    amount: "무료 공간 이용",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "복지",
    link: "https://youth.chungnam.go.kr",
    priority: 3
  },
  {
    title: "충청남도 청년 심리상담 지원",
    description: "충남 거주 청년 정신건강 상담 바우처 제공.",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "건강",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년 교통비 지원",
    description: "충남 거주 청년 대중교통비 일부 지원.",
    amount: "교통비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "생활안정",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충청남도 청년 직업훈련 지원",
    description: "충남 거주 청년 직업능력개발 훈련비 지원.",
    amount: "훈련비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  강원특별자치도 (5개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "강원 청년 이주 정착 지원금",
    description: "강원특별자치도로 이주한 만 18~45세 청년에게 정착 지원. 수도권·광역시에서 강원 전입 후 일정 기간 거주 유지 조건.",
    amount: "최대 월 30만원 × 24개월 (총 720만원)",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도",
    category: "복지",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 농업인 공익수당",
    description: "강원 거주 농업경영체 등록 농업인 소득 안정 수당. 시군 농업기술센터 신청.",
    amount: "연 60만원",
    deadline: "상시",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도",
    category: "농어업",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 청년 일자리 지원 (비수도권 도약장려금)",
    description: "강원 소재 중소기업 취업 청년에게 청년일자리도약장려금 비수도권 우대 적용. 인구감소지역 소재 기업 취업 시 최대 720만원.",
    amount: "최대 600~720만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["강원특별자치도"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "강원 어르신 교통 지원",
    description: "강원 거주 만 65세 이상 어르신 시내버스·농어촌버스 무료 또는 교통비 환급. 시군별 운영 방식 상이. 주민센터·시군청 신청.",
    amount: "교통비 무료 또는 월 최대 2만원 환급",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["강원특별자치도"],
    source: "강원특별자치도 시군",
    category: "생활안정",
    link: "https://www.gwd.go.kr",
    priority: 2
  },
  {
    title: "강원 인구감소지역 여행경비 지원",
    description: "강원 인구감소 지역(정선·양구·인제·평창 등) 여행 관광객에게 숙박·체험비 50% 환급. 예산 소진 시 조기 마감.",
    amount: "여행경비의 50% 환급 (1인 최대 10만원)",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["강원특별자치도"],
    source: "행정안전부·강원특별자치도",
    category: "생활안정",
    link: "https://www.gov.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  전라남도 (5개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "전라남도 농어민 공익수당",
    description: "전남 거주 농어업경영체 등록 농어민에게 공익적 역할에 대한 수당 지급. 읍면동 행정복지센터 신청.",
    amount: "연 60만원 (월 5만원)",
    deadline: "상시",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "농어업",
    link: "https://www.jeonnam.go.kr",
    priority: 1
  },
  {
    title: "전라남도 청년 정착 지원금",
    description: "전남 이주·취업·창업 청년 대상 정착 지원. 만 18~45세. 인구감소지역 정착 시 추가 우대. 전남일자리진흥원 신청.",
    amount: "최대 월 50만원 × 24개월 (총 최대 1,200만원)",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "복지",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
  {
    title: "전라남도 노인 무릎인공관절 수술비 지원",
    description: "전남 거주 만 60세 이상 저소득 노인 무릎인공관절 수술비 지원. 시군 보건소 신청.",
    amount: "수술비 일부 최대 120만원",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "건강",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },
  {
    title: "전라남도 귀농창업 융자 지원",
    description: "전남 귀농 정착자 농지·주택 구입자금 저리 융자. 귀농 1년 이상 경과자 우선 지원. 전남농업기술원 신청.",
    amount: "융자 최대 5,000만원 (금리 0.5~2%)",
    deadline: "상시",
    ages: ["30대", "40대", "50대"],
    regions: ["전라남도"],
    source: "전라남도 농업기술원",
    category: "농어업",
    link: "https://www.jares.go.kr",
    priority: 2
  },
  {
    title: "전라남도 어르신 무임 교통비 지원",
    description: "전남 거주 만 65세 이상 어르신 시내버스·농어촌버스 이용 교통비 환급. 전남사랑카드·지역화폐로 지원. 주민센터 신청.",
    amount: "월 최대 2만원 (연 24만원)",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["전라남도"],
    source: "전라남도",
    category: "생활안정",
    link: "https://www.jeonnam.go.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  경상남도 (9개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "경상남도 농어업인수당",
    description: "경남 농어업경영체에 등록된 경영주 및 공동경영주에게 지급하는 수당. 농어업 종사자 소득 안정 목적. 읍면동 행정복지센터 신청.",
    amount: "연 30만원",
    deadline: "상시",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["경상남도"],
    source: "읍면동 행정복지센터",
    category: "농어업",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001092",
    priority: 1
  },
  {
    title: "경남 노인가장세대 냉난방비 지원",
    description: "65세 이상 차상위 어르신 가장세대 대상 냉방비·난방비 지원. 주민센터 신청.",
    amount: "냉방비 4만원 / 난방비 8.5만원",
    deadline: "상시",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001100",
    priority: 1
  },
  {
    title: "경남 청년 구직활동 수당",
    description: "미취업 청년 구직활동 지원 (김해, 사천, 의령 등 참여 시군). 경상남도 투자경제진흥원 신청.",
    amount: "월 50만원 × 6개월 (총 300만원)",
    deadline: "2026-05-22",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도 투자경제진흥원",
    category: "취업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 월세 지원",
    description: "경남 거주 만 19~34세 무주택 청년 월세 지원. 중위소득 150% 이하.",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "주거지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 소상공인 융자지원",
    description: "경남 소재 소상공인 경영안정·창업 자금 융자.",
    amount: "업체당 최대 1억원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 창업지원금",
    description: "경남 거주 만 39세 이하 청년 창업자 사업화 자금 지원. 경남창조경제혁신센터 신청.",
    amount: "최대 3,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경남 창업기업 신규고용 보조금",
    description: "경남 소재 창업 7년 이내 중소·벤처기업 신규 채용 인건비 보조.",
    amount: "1인당 최대 300만원 (기업당 최대 5명)",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 2
  },
  {
    title: "경남 무의탁노인 건강음료 배달",
    description: "노인맞춤돌봄서비스 대상 독거노인 등 돌봄 사각지대 어르신에게 건강음료 정기 배달. 주민센터 신청.",
    amount: "건강음료 무료 제공",
    deadline: "상시",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000143",
    priority: 2
  },
  {
    title: "경상남도 귀농귀촌 정착 지원금",
    description: "경남 귀농·귀촌 활성화 지원. 귀농 교육 이수자 농지 구입·임차·농기계 구입 등 지원. 귀촌인 주택 수리비·이주비 별도.",
    amount: "귀농 최대 3,000만원 / 귀촌 최대 500만원",
    deadline: "상시",
    ages: ["30대", "40대", "50대"],
    regions: ["경상남도"],
    source: "경상남도 농업기술원",
    category: "농어업",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  경상북도 (9개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "경북 거동불편 저소득 노인 식사배달",
    description: "경북 거주 거동이 불편한 저소득 어르신 가정에 도시락·반찬 무료 배달.",
    amount: "도시락·반찬 무료 제공",
    deadline: "상시",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000124",
    priority: 1
  },
  {
    title: "경북 청년 월세 지원",
    description: "경북 거주 만 19~34세 무주택 청년 월세 지원. 중위소득 150% 이하.",
    amount: "월 20만원 (최대 12개월)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "주거지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 구직활동 지원",
    description: "경북 거주 미취업 청년 구직활동비 지원.",
    amount: "월 50만원 × 6개월 (총 300만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "취업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 창업지원금",
    description: "경북 거주 청년 창업자 초기자금 및 컨설팅 지원.",
    amount: "최대 1,000만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "창업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 긴급생활안정 지원",
    description: "경북 거주 청년 대상 긴급 생계비·의료비 등 지원.",
    amount: "최대 100만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "복지",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 자산형성 지원",
    description: "경북 거주 저소득 근로 청년 목돈 마련 매칭 저축.",
    amount: "본인저축액 매칭",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "자산형성",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 창업 및 경쟁력강화 사업자금",
    description: "경북 도내 중소기업 대상 창업·설비·ESG 경영자금 장기 저리 융자. 경상북도경제진흥원 신청.",
    amount: "최대 5억원 (금리 약 2.5%)",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상북도"],
    source: "경상북도경제진흥원",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 2
  },
  {
    title: "경북 청년 교통비·통신비 지원",
    description: "경북 거주 청년 대중교통비 환급 및 통신비 지원.",
    amount: "교통비 환급 + 월 2만원 통신비",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "생활안정",
    link: "https://gbyouth.co.kr",
    priority: 2
  },
  {
    title: "경북 무의탁노인 건강음료 배달",
    description: "경북 거주 독거노인 등 돌봄 사각지대 어르신에게 건강음료 정기 배달. 주민센터 신청.",
    amount: "건강음료 무료 제공",
    deadline: "상시",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "주민센터",
    category: "복지",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000143",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  대구광역시 (9개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "대구 청년 희망적금",
    description: "대구 거주 청년 자산형성 지원. 12개월 본인 저축 시 대구시 동일 금액 매칭.",
    amount: "본인 120만원 + 대구시 120만원 = 총 240만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "자산형성",
    link: "https://youthdream.daegu.go.kr",
    priority: 1
  },
  {
    title: "대구 청년 월세 지원",
    description: "대구 거주 만 19~34세 무주택 청년 월세 지원. 중위소득 150% 이하.",
    amount: "월 20만원 (최대 12개월, 총 240만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "주거지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 구직지원금",
    description: "대구 거주 미취업 청년 구직활동비 지원.",
    amount: "월 50만원 × 최대 6개월 (총 300만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "취업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 창업지원금",
    description: "대구 거주 창업 희망 청년 대상 창업자금 지원.",
    amount: "최대 1,500만원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "창업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년일자리도약장려금",
    description: "대구 소재 중소기업 청년 정규직 채용 장려금 (달서구·달성군·서구·남구 대상).",
    amount: "월 60만원 × 12개월 (총 720만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구경영자총협회",
    category: "취업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 1
  },
  {
    title: "대구 청년활력공간 다온나그래",
    description: "대구 거주 청년 활동·커뮤니티 공간 및 프로그램 무료 지원.",
    amount: "무료 공간 이용",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 사회적 고립청년 지원",
    description: "고립·은둔 상태 대구 거주 청년에게 맞춤 상담 및 회복 프로그램 제공.",
    amount: "무료 상담 및 프로그램",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 면접비 지원",
    description: "대구 거주 구직활동 청년 면접 교통비 지원.",
    amount: "면접비 지원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 정장 대여",
    description: "취업준비 대구 거주 청년 면접용 정장 무료 대여.",
    amount: "무료 대여",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 3
  },
  {
    title: "대구 청년상담소",
    description: "대구 거주 청년 진로·취업·심리 종합 상담 제공. 대구광역시청년센터 운영.",
    amount: "무료 상담",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지",
    link: "http://www.dgyouth.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  부산광역시 (5개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "부산 청년 도전 지원금",
    description: "부산 거주 만 18~34세 미취업 청년 자립·구직 활동 지원. 취업 취약계층 우선. 부산시 청년포털 신청.",
    amount: "월 50만원 × 최대 6개월 (총 300만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "취업지원",
    link: "https://youth.busan.go.kr",
    priority: 1
  },
  {
    title: "부산 청년 월세 지원",
    description: "부산 거주 만 19~34세 무주택 1인 가구 청년 월세 지원. 중위소득 150% 이하. 국토부 지원과 중복 불가.",
    amount: "월 최대 20만원 × 최대 24개월",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "주거지원",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "부산 어르신 의치(틀니) 지원",
    description: "부산 거주 만 65세 이상 저소득 노인 틀니 제작비 지원. 기초생활수급자·차상위계층 우선. 관할 보건소 신청.",
    amount: "틀니 제작비 전액 또는 일부 지원",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["부산광역시"],
    source: "부산광역시 보건소",
    category: "건강",
    link: "https://www.busan.go.kr",
    priority: 2
  },
  {
    title: "부산 청년 내일채움공제",
    description: "부산 소재 중소기업 재직 청년 자산형성 지원. 2년간 월 12.5만원 청년 적립 시 기업·정부 매칭. 고용24 및 중소기업진흥공단 신청.",
    amount: "2년 만기 1,200만원 (청년 300만원 + 기업·정부 900만원)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["부산광역시"],
    source: "고용노동부·중소기업진흥공단",
    category: "자산형성",
    link: "https://www.work24.go.kr",
    priority: 2
  },
  {
    title: "부산 노인 사회활동 지원",
    description: "부산 거주 만 65세 이상 어르신 경로당 중심 여가·사회활동 지원. 문화 프로그램·건강관리 교육 및 활동비 지원.",
    amount: "경로당 활동비 월 3~5만원 지원",
    deadline: "상시",
    ages: ["60대", "70대", "80대"],
    regions: ["부산광역시"],
    source: "부산광역시",
    category: "복지",
    link: "https://www.busan.go.kr",
    priority: 2
  },

  // ══════════════════════════════════════════════════════════════
  //  제주특별자치도 (10개)
  // ══════════════════════════════════════════════════════════════

  {
    title: "제주 도민안전보험",
    description: "제주도민 전체 자동 가입 안전보험. 별도 신청 없이 주민등록 기준 자동 가입.",
    amount: "보험료 전액 도비 지원",
    deadline: "상시 (자동 가입)",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://www.jejubokji.net",
    priority: 1
  },
  {
    title: "제주 청년 월세 지원",
    description: "제주 거주 만 19~34세 무주택 청년 월세 지원. 중위소득 150% 이하.",
    amount: "월 20만원",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년 자격증 응시료 지원",
    description: "취업준비 청년 국가기술자격 응시료 실비 지원. 연 1회 지원.",
    amount: "응시료 실비 지원 (1인·1시험·연 1회)",
    deadline: "2026-12-12",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주시",
    category: "취업지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년희망대출",
    description: "저소득·저신용 제주 거주 청년 대상 금융포용 융자 지원.",
    amount: "융자 지원 (금리·한도 별도 공고)",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 출산가정 산후조리비",
    description: "제주 거주 출산 가정에 산후조리비 지원.",
    amount: "40만원",
    deadline: "상시",
    ages: ["20대", "30대", "40대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "출산·육아",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 교통복지카드 어린이 버스 무료",
    description: "제주 거주 6~12세 어린이 시내버스 요금 무료 지원.",
    amount: "버스 무료 이용",
    deadline: "상시",
    ages: ["10대 미만", "10대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "생활안정",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 2자녀 이상 주택 취득세 감면",
    description: "제주 거주 2자녀 이상 양육자 주택 취득 시 취득세 감면 혜택.",
    amount: "취득세 일부 감면",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 서민가계 이자보전금",
    description: "제주 도민 서민 가계 이자 부담 완화를 위한 이차보전 지원.",
    amount: "이자 일부 지원",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://www.jeju.go.kr",
    priority: 2
  },
  {
    title: "제주 예술인 복지지원",
    description: "제주 거주 예술인 창작준비금·공간임차료·도외 교통비 지원.",
    amount: "창작준비금 등 항목별 지원",
    deadline: "상시",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://www.jeju.go.kr",
    priority: 2
  },
  {
    title: "제주 청년 정착 지원",
    description: "제주 정착 희망 청년 대상 정착지원금 및 취업·창업 연계 지원.",
    amount: "정착지원금",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주상공회의소",
    category: "복지",
    link: "https://jejucci.korcham.net",
    priority: 2
  },
  {
    title: "제주 서귀포시 청년지원센터",
    description: "서귀포시 청년 맞춤형 취업·창업·심리 상담 및 커뮤니티 공간 운영.",
    amount: "무료 공간 및 프로그램",
    deadline: "상시",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지",
    link: "https://jejuyouth.com",
    priority: 2
  },
  {
    title: "제주 청년 기업 견학 프로그램",
    description: "취업준비 제주 거주 청년 국내 기업 견학 지원. 직무 이해·취업 동기 부여 목적.",
    amount: "견학비 지원",
    deadline: "상시 (예산 소진 시 마감)",
    ages: ["20대", "30대"],
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
