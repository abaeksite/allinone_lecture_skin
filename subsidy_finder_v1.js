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
title: "서울시 임산부 교통비 지원",
description: "서울 임산부 교통비 바우처",
amount: "첫째 70만원, 둘째 80만원, 셋째 이상 100만원 교통 포인트",
deadline: "연중 (임신 중~출산 후 3개월 이내 신청)",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "출산육아",
link: "https://umppa.seoul.go.kr",
priority: 1
},
{
title: "서울 난자동결 시술비 지원",
description: "난자동결 시술비 지원",
amount: "시술비 50% 지원, 최대 200만원",
deadline: "연중 (시술 후 기한 내 신청)",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "출산육아",
link: "https://umppa.seoul.go.kr",
priority: 2
},
{
title: "서울형 가사서비스",
description: "출산가정 가사서비스 포인트",
amount: "가정당 70만원 가사서비스 포인트",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "출산육아",
link: "https://umppa.seoul.go.kr",
priority: 2
},
{
title: "서울 영아 카시트 택시 이용 지원",
description: "영아 카시트 택시 포인트",
amount: "0~24개월 영아 가정 연 10만원 상당 포인트",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "출산육아",
link: "https://umppa.seoul.go.kr",
priority: 3
},
{
title: "서울 고용보험 미적용자 출산급여 추가지원",
description: "1인 자영업 임산부 출산급여",
amount: "정부 출산급여 외 서울시 90만원 추가 지원",
deadline: "연중 (출산 후 1년 이내 신청)",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "출산육아",
link: "https://umppa.seoul.go.kr",
priority: 2
},
{
title: "서울 둘째 출산 첫째아이 돌봄 지원",
description: "둘째 출산 시 첫째 돌봄비",
amount: "아이돌봄서비스 본인부담금 90~100% 환급",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "돌봄",
link: "https://umppa.seoul.go.kr",
priority: 2
},
{
title: "서울형 아이돌봄비",
description: "조부모 등 영아 돌봄수당",
amount: "조부모·친인척 돌봄 시 영아 1명당 월 30만원",
deadline: "연중 (몽땅정보통 신청)",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "돌봄",
link: "https://umppa.seoul.go.kr",
priority: 2
},
{
title: "서울형 입원생활비(유급병가)",
description: "입원 근로자 생활비 지원",
amount: "입원 등 연 최대 14일, 1일 생활비 지원",
deadline: "연중 (기한 내 보건소 신청)",
ages: ["20대","30대","40대","50대","60대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "의료",
link: "https://www.seoul.go.kr",
priority: 2
},
{
title: "부산시 출산지원금(둘째 이후)",
description: "둘째 이후 출산 현금 지원",
amount: "둘째 이후 출생아 1인당 100만원 현금",
deadline: "연중 (출생일로부터 3개월 이내)",
ages: ["20대","30대","40대"],
regions: ["부산광역시"],
source: "부산광역시",
category: "출산육아",
link: "https://www.busan.go.kr/childcare/childcare010101",
priority: 1
},
{
title: "부산 산후조리비 지원",
description: "부산 출생아 산후조리비",
amount: "출생아 1명당 100만원 (쌍생아 200만원)",
deadline: "연중 (출생 후 기한 내 보건소 신청)",
ages: ["20대","30대","40대"],
regions: ["부산광역시"],
source: "부산광역시",
category: "출산육아",
link: "https://www.busan.go.kr/childcare",
priority: 1
},
{
title: "부산 신혼부부 전세자금 대출이자 지원",
description: "신혼부부 전세대출 이자 지원",
amount: "전세대출 최대 2억원, 이자 연 최대 2% 지원 (최대 10년)",
deadline: "2026.12월까지 (연 1,500세대, 부산은행 앱 신청)",
ages: ["20대","30대","40대"],
regions: ["부산광역시"],
source: "부산광역시",
category: "주거",
link: "https://www.busan.go.kr/childcare/childcare010105",
priority: 1
},
{
title: "부산형 긴급복지지원",
description: "부산 위기가구 긴급 지원",
amount: "국가 긴급복지 사각지대 생계·의료·주거비 지원",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["부산광역시"],
source: "부산광역시",
category: "생활안정",
link: "https://www.busan.go.kr/depart/welpolicy0113",
priority: 2
},
{
title: "대구 청년 부동산 중개수수료 지원",
description: "청년 이사 중개수수료 지원",
amount: "무주택 청년 세대주 최대 30만원",
deadline: "2026년 연중 (예산 소진 시 마감)",
ages: ["20대","30대"],
regions: ["대구광역시"],
source: "대구광역시",
category: "주거",
link: "https://www.daegu.go.kr",
priority: 1
},
{
title: "대구 한부모가족 추가아동양육비",
description: "한부모 추가 아동양육비",
amount: "월 10만원 추가 + 학용품비·생활보조금 각 10만원",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대"],
regions: ["대구광역시"],
source: "대구광역시",
category: "생활안정",
link: "https://www.daegu.go.kr",
priority: 2
},
{
title: "대구 다자녀가정 상수도요금 감면",
description: "다자녀 가정 수도요금 감면",
amount: "3자녀 이상 가구 월 3,000원 감면",
deadline: "연중 (2026년 9월 고지분부터 적용)",
ages: ["20대","30대","40대","50대"],
regions: ["대구광역시"],
source: "대구광역시",
category: "생활안정",
link: "https://www.daegu.go.kr",
priority: 3
},
{
title: "인천 아이 꿈 수당",
description: "8~18세 아동 월 수당",
amount: "8~18세 아동 월 5만~15만원",
deadline: "연중 상시",
ages: ["30대","40대","50대"],
regions: ["인천광역시"],
source: "인천광역시",
category: "출산육아",
link: "https://www.incheon.go.kr",
priority: 1
},
{
title: "인천 아이플러스 차비드림",
description: "출생가구 부모 교통비 환급",
amount: "대중교통 이용금액 50~70% 환급",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["인천광역시"],
source: "인천광역시",
category: "교통",
link: "https://www.incheon.go.kr",
priority: 1
},
{
title: "인천 i-실버패스",
description: "75세 이상 버스·지하철 무료",
amount: "시내버스·지하철 무임 이용",
deadline: "2026년 하반기 시행 (카드 교체 발급)",
ages: ["70대"],
regions: ["인천광역시"],
source: "인천광역시",
category: "교통",
link: "https://www.incheon.go.kr",
priority: 1
},
{
title: "인천 아이플러스 맺어드림",
description: "공공예식장 결혼 지원",
amount: "공공시설 예식장 무료 제공 + 결혼비용 일부 지원",
deadline: "상시 접수 (2026~2027년 예식)",
ages: ["20대","30대","40대"],
regions: ["인천광역시"],
source: "인천광역시",
category: "결혼",
link: "https://www.incheon.go.kr",
priority: 2
},
{
title: "광주 출생축하 상생카드",
description: "출생가정 상생카드 50만원",
amount: "출생 가정 광주상생카드 50만원",
deadline: "연중 (출생신고 후 신청)",
ages: ["20대","30대","40대"],
regions: ["광주광역시"],
source: "광주광역시",
category: "출산육아",
link: "https://www.gwangju.go.kr",
priority: 1
},
{
title: "광주 자치구 출생지원금",
description: "자치구별 출생 축하금",
amount: "둘째부터 자치구별 현금 지원 (동구는 첫째부터)",
deadline: "연중 (출생신고 후 신청)",
ages: ["20대","30대","40대"],
regions: ["광주광역시"],
source: "광주광역시",
category: "출산육아",
link: "https://www.gwangju.go.kr",
priority: 2
},
{
title: "대전형 양육기본수당",
description: "0~2세 아동 월 양육수당",
amount: "월 15만원 (2세는 15만원 추가)",
deadline: "연중 (동 행정복지센터 신청)",
ages: ["20대","30대","40대"],
regions: ["대전광역시"],
source: "대전광역시",
category: "출산육아",
link: "https://www.daejeon.go.kr/drh/DrhContentsHtmlView.do?menuSeq=7205",
priority: 1
},
{
title: "대전 청년 결혼장려금",
description: "청년 초혼부부 결혼장려금",
amount: "1인당 250만원 (부부 최대 500만원)",
deadline: "연중 (혼인신고 후 기한 내 신청)",
ages: ["20대","30대"],
regions: ["대전광역시"],
source: "대전광역시",
category: "결혼",
link: "https://www.daejeonyouthportal.kr",
priority: 1
},
{
title: "대전 청년 주택임차보증금 이자지원",
description: "청년 전세보증금 이자 지원",
amount: "임차보증금 대출이자 일부 지원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대"],
regions: ["대전광역시"],
source: "대전광역시",
category: "주거",
link: "https://www.daejeonyouthportal.kr",
priority: 2
},
{
title: "울산 어르신 시내버스 무료",
description: "70세 이상 시내버스 무료",
amount: "울산 시내버스 요금 무료",
deadline: "연중 (2026년 2월 시행, 카드 발급)",
ages: ["70대"],
regions: ["울산광역시"],
source: "울산광역시",
category: "교통",
link: "https://www.ulsan.go.kr",
priority: 1
},
{
title: "울산 다태아 안심보험",
description: "다태아 출생아 보험 지원",
amount: "출생 후 2년간 13개 항목 최대 500만원 보장",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["울산광역시"],
source: "울산광역시",
category: "출산육아",
link: "https://www.ulsan.go.kr",
priority: 2
},
{
title: "울산형 공공예식장 지원",
description: "공공예식장 결혼비용 지원",
amount: "공공시설 예식 공간 제공 및 비용 지원",
deadline: "연중 (예식 예약 접수)",
ages: ["20대","30대","40대"],
regions: ["울산광역시"],
source: "울산광역시",
category: "결혼",
link: "https://www.ulsan.go.kr",
priority: 3
},
{
title: "울산 가족돌봄·고립은둔청년 자기돌봄비",
description: "돌봄·고립 청년 자기돌봄비",
amount: "연 200만원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대"],
regions: ["울산광역시"],
source: "울산청년미래센터",
category: "생활안정",
link: "https://www.ulsan.go.kr",
priority: 2
},
{
title: "세종 출생축하금",
description: "세종 출생아 축하금",
amount: "출생아 1인당 현금 지급 (신청 익월 25일)",
deadline: "연중 (거주요건 충족 후 신청)",
ages: ["20대","30대","40대"],
regions: ["세종시"],
source: "세종특별자치시",
category: "출산육아",
link: "https://www.sejong.go.kr/welfare/sub01_06_03.do",
priority: 1
},
{
title: "세종 통합돌봄",
description: "65세 이상 맞춤 통합돌봄",
amount: "43개 돌봄·의료·요양 서비스 연계 지원",
deadline: "연중 상시",
ages: ["60대","70대"],
regions: ["세종시"],
source: "세종특별자치시",
category: "돌봄",
link: "https://www.sejong.go.kr",
priority: 1
},
{
title: "세종 청년주택임차보증금 이자지원",
description: "청년 임차보증금 이자 지원",
amount: "임차보증금 대출이자 지원 (2026년 소득기준 완화)",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대"],
regions: ["세종시"],
source: "세종특별자치시",
category: "주거",
link: "https://www.sejong.go.kr",
priority: 2
},
{
title: "경기도 청년기본소득",
description: "만 24세 청년 기본소득",
amount: "분기별 25만원, 연 최대 100만원 지역화폐",
deadline: "3분기 2026.09.01 ~ 10.02 / 4분기 11.02 ~ 12.01",
ages: ["20대"],
regions: ["경기도"],
source: "경기도",
category: "생활안정",
link: "https://youth.gg.go.kr",
priority: 1
},
{
title: "경기도 청년면접수당",
description: "청년 면접 교통비 지원",
amount: "면접 1회 5만원, 최대 6회 30만원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대"],
regions: ["경기도"],
source: "경기도",
category: "취업",
link: "https://www.gg.go.kr",
priority: 2
},
{
title: "경기도 간병 SOS 프로젝트",
description: "어르신 간병비 지원",
amount: "간병비 연 최대 120만원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["60대","70대"],
regions: ["경기도"],
source: "경기도",
category: "의료",
link: "https://www.gg.go.kr",
priority: 2
},
{
title: "강원 산모·신생아 본인부담금 지원",
description: "산모신생아 서비스 본인부담 지원",
amount: "첫째 15만원, 둘째 20만원 지원",
deadline: "연중 (서비스 이용 시 신청)",
ages: ["20대","30대","40대"],
regions: ["강원도"],
source: "강원특별자치도",
category: "출산육아",
link: "https://state.gwd.go.kr",
priority: 2
},
{
title: "영동군 2차 민생안정지원금",
description: "영동군민 1인 30만원",
amount: "1인당 30만원 레인보우영동페이",
deadline: "방문 신청 2026.08.31 ~ 10.02",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["충청북도"],
source: "영동군",
category: "생활안정",
link: "https://www.yd21.go.kr",
priority: 1
},
{
title: "충주시 어르신 무임교통",
description: "65세 이상 시내버스 무료",
amount: "시내버스·콜버스 월 15회 무료",
deadline: "연중 (행정복지센터 카드 발급)",
ages: ["60대","70대"],
regions: ["충청북도"],
source: "충주시",
category: "교통",
link: "https://www.chungju.go.kr",
priority: 2
},
{
title: "충북 다태아 조제분유 지원",
description: "다태아 분유 구입비 지원",
amount: "12개월 이하 다태아 월 최대 10만원",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["충청북도"],
source: "충청북도",
category: "출산육아",
link: "https://gachi.chungbuk.go.kr",
priority: 2
},
{
title: "충남 행복키움수당",
description: "충남 아동 양육 행복수당",
amount: "영유아 아동 월 10만원 내외 (시군 기준 확인)",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["충청남도"],
source: "충청남도",
category: "출산육아",
link: "https://www.chungnam.go.kr",
priority: 2
},
{
title: "천안·아산 철도정기승차권 교통비 지원",
description: "수도권 철도 정기권 25% 환급",
amount: "정기승차권 금액 25% 지역화폐 환급 (연 100만원 한도)",
deadline: "연중 (이용기간 종료 후 6개월 이내)",
ages: ["20대","30대","40대","50대","60대"],
regions: ["충청남도"],
source: "충청남도",
category: "교통",
link: "https://transport.chungnam.go.kr",
priority: 2
},
{
title: "충남 365x24 아동돌봄 거점센터",
description: "야간·휴일 긴급 아동돌봄",
amount: "아침·야간·주말·공휴일 긴급·일시돌봄 제공",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["충청남도"],
source: "충청남도",
category: "돌봄",
link: "https://www.chungnam.go.kr",
priority: 3
},
{
title: "서천군 청년 첫 운전면허 취득비 지원",
description: "청년 첫 운전면허 비용 지원",
amount: "취득비 50%, 최대 40만원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대"],
regions: ["충청남도"],
source: "서천군",
category: "청년",
link: "https://www.seocheon.go.kr",
priority: 3
},
{
title: "고창군 군민활력지원금",
description: "고창군민 1인 30만원",
amount: "1인당 30만원 선불카드",
deadline: "2026.09.01 ~ 10.16",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라북도"],
source: "고창군",
category: "생활안정",
link: "https://www.gochang.go.kr",
priority: 1
},
{
title: "완주군 민생지원금",
description: "완주군민 1인 30만원",
amount: "1인당 30만원 선불카드 (12.31까지 사용)",
deadline: "2026.09.08 ~ 10.30",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라북도"],
source: "완주군",
category: "생활안정",
link: "https://www.wanju.go.kr",
priority: 1
},
{
title: "부안군 민생지원금",
description: "부안군민 1인 30만원",
amount: "1인당 30만원 무기명 선불카드 (11.30까지 사용)",
deadline: "2026.09.16 ~ 10.30 (9.21부터 읍·면사무소)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라북도"],
source: "부안군",
category: "생활안정",
link: "https://www.buan.go.kr",
priority: 1
},
{
title: "함평군 민생지원금",
description: "함평군민 1인 50만원",
amount: "1인당 50만원 선불카드 (12.31까지 사용)",
deadline: "2026.09.07 ~ 10.08",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라남도"],
source: "함평군",
category: "생활안정",
link: "https://www.hampyeong.go.kr",
priority: 1
},
{
title: "장흥군 민생지원금",
description: "장흥군민 1인 30만원",
amount: "1인당 30만원 장흥사랑상품권",
deadline: "2026.08.31 ~ 10.16",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라남도"],
source: "장흥군",
category: "생활안정",
link: "https://www.jangheung.go.kr",
priority: 1
},
{
title: "고흥군 민생지원금",
description: "고흥군민 1인 30만원",
amount: "1인당 30만원 고흥사랑상품권 (12.31까지 사용)",
deadline: "미수령자 신청 2026.09.21 ~ 10.30",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라남도"],
source: "고흥군",
category: "생활안정",
link: "https://www.goheung.go.kr",
priority: 1
},
{
title: "나주시 민생지원금",
description: "나주시민 1인 20만원",
amount: "1인당 20만원 나주사랑상품권 또는 선불카드",
deadline: "2026.09.14 ~ 10.16",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라남도"],
source: "나주시",
category: "생활안정",
link: "https://www.naju.go.kr",
priority: 1
},
{
title: "신안군 민생안정지원금",
description: "신안군민 1인 10만원",
amount: "1인당 10만원 관내 전용 선불카드 (11.30까지 사용)",
deadline: "2026.09.14 ~ 10.16",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라남도"],
source: "신안군",
category: "생활안정",
link: "https://www.shinan.go.kr",
priority: 2
},
{
title: "영암형 농촌기본수당",
description: "영암군민 1인 10만원",
amount: "1인당 10만원 월출페이",
deadline: "2026.09.07부터 신청·지급 (군 공고 확인)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전라남도"],
source: "영암군",
category: "생활안정",
link: "https://www.yeongam.go.kr",
priority: 2
},
{
title: "문경시 고유가 위기대응 지원금",
description: "문경시민 1인 25만원",
amount: "1인당 25만원 선불카드 (12.31까지 사용)",
deadline: "2026.09.14 ~ 10.23",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["경상북도"],
source: "문경시",
category: "생활안정",
link: "https://www.gbmg.go.kr",
priority: 1
},
{
title: "경북 소상공인 출산 아이보듬지원",
description: "출산 소상공인 대체인력 지원",
amount: "출산 후 6개월간 대체인력 인건비 지원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대","40대"],
regions: ["경상북도"],
source: "경상북도",
category: "소상공인",
link: "https://www.gb.go.kr",
priority: 2
},
{
title: "경북 다자녀가구 이사비 지원",
description: "다자녀 가구 이사비 지원",
amount: "다자녀 가구 이사비용 일부 지원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["30대","40대","50대"],
regions: ["경상북도"],
source: "경상북도",
category: "주거",
link: "https://www.gb.go.kr",
priority: 3
},
{
title: "경북 세 자녀 이상 가족 진료비 지원",
description: "세 자녀 가족 진료비 지원",
amount: "세 자녀 이상 가족 진료비 일부 지원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["30대","40대","50대"],
regions: ["경상북도"],
source: "경상북도",
category: "의료",
link: "https://www.gb.go.kr",
priority: 3
},
{
title: "통영시 민생회복지원금",
description: "통영시민 1인 35만원",
amount: "1인당 35만원 통영사랑상품권 또는 선불카드",
deadline: "2026.08.31 ~ 10.30",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["경상남도"],
source: "통영시",
category: "생활안정",
link: "https://www.tongyeong.go.kr",
priority: 1
},
{
title: "하동군 민생지원금",
description: "하동군민 1인 30만원",
amount: "1인당 30만원 종이 하동사랑상품권",
deadline: "2026.08.24 ~ 10.02",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["경상남도"],
source: "하동군",
category: "생활안정",
link: "https://www.hadong.go.kr",
priority: 1
},
{
title: "경남 월남참전유공자 명예수당",
description: "월남참전유공자 명예수당",
amount: "80세 미만 월 12만원",
deadline: "연중 상시",
ages: ["70대"],
regions: ["경상남도"],
source: "경상남도",
category: "보훈",
link: "https://www.gyeongnam.go.kr",
priority: 2
},
{
title: "경남푸드 그냥드림",
description: "위기가구 긴급 식품 지원",
amount: "긴급 식품·생필품 즉시 지원",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["경상남도"],
source: "경상남도",
category: "생활안정",
link: "https://www.gyeongnam.go.kr",
priority: 2
},
{
title: "경남 희망지원금",
description: "경남형 위기가구 생계지원",
amount: "긴급복지 사각지대 생계비 지원 (금융재산 4인 1,800만원 이하)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["경상남도"],
source: "경상남도",
category: "생활안정",
link: "https://www.gyeongnam.go.kr",
priority: 2
},
{
title: "경남 나눔경로식당",
description: "결식 어르신 무료 급식",
amount: "결식 우려 어르신 무료 급식 (1식 4,000원 단가)",
deadline: "연중 상시",
ages: ["60대","70대"],
regions: ["경상남도"],
source: "경상남도",
category: "돌봄",
link: "https://www.gyeongnam.go.kr",
priority: 3
},
{
title: "제주 조부모 손주돌봄수당",
description: "조부모 손주돌봄 월 수당",
amount: "영아 1명 월 30만원 (2명 45만원, 3명 60만원)",
deadline: "연중 상시",
ages: ["50대","60대","70대"],
regions: ["제주도"],
source: "제주특별자치도",
category: "돌봄",
link: "https://www.jeju.go.kr",
priority: 1
},
{
title: "제주 청년 전입 축하장려금",
description: "도외 전입 청년 축하장려금",
amount: "도외에서 전입한 청년 정착 축하장려금 지급",
deadline: "2026년 연중 (전입 후 기한 내 신청)",
ages: ["20대","30대"],
regions: ["제주도"],
source: "제주특별자치도",
category: "생활안정",
link: "https://www.jeju.go.kr",
priority: 2
},
{
title: "제주 시간제보육 서비스",
description: "시간당 5천원 영아 보육",
amount: "생후 6~36개월 영아 시간당 5,000원 이용",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["제주도"],
source: "제주특별자치도",
category: "돌봄",
link: "https://www.jeju.go.kr",
priority: 2
},
{
title: "제주 경사로 설치 지원사업",
description: "장애인 경사로 설치 지원",
amount: "주택·마을회관 등 경사로 설치비 지원",
deadline: "2026.09.25까지",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["제주도"],
source: "제주특별자치도",
category: "장애인",
link: "https://www.jeju.go.kr",
priority: 3
},
    {
title: "청년미래적금",
description: "청년 3년 만기 정책 적금",
amount: "월 최대 50만원 납입, 정부기여금 6~12% (만기 최대 약 2,255만원)",
deadline: "2차 가입신청 2026.10.07 ~ 10.16",
ages: ["20대","30대"],
regions: ["전국"],
source: "서민금융진흥원",
category: "자산형성",
link: "https://www.kinfa.or.kr",
priority: 1
},
{
title: "국민내일배움카드",
description: "직업훈련비 지원 카드",
amount: "1인당 5년간 300~500만원 훈련비 지원",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "고용노동부",
category: "취업",
link: "https://www.work24.go.kr",
priority: 1
},
{
title: "국민취업지원제도",
description: "구직자 취업지원·수당",
amount: "구직촉진수당 최대 6개월 + 취업성공수당",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대"],
regions: ["전국"],
source: "고용노동부",
category: "취업",
link: "https://www.work24.go.kr",
priority: 1
},
{
title: "구직급여(실업급여)",
description: "비자발적 실직자 생계지원",
amount: "퇴직 전 평균임금의 60% (1일 상한액 적용), 120~270일 지급",
deadline: "연중 (퇴직 다음날부터 12개월 이내)",
ages: ["20대","30대","40대","50대","60대"],
regions: ["전국"],
source: "고용노동부",
category: "취업",
link: "https://www.work24.go.kr",
priority: 1
},
{
title: "국민연금 실업크레딧",
description: "구직급여 수급자 연금보험료 지원",
amount: "국민연금 보험료 75% 지원 (최대 12개월)",
deadline: "연중 (구직급여 수급 기간 중 신청)",
ages: ["20대","30대","40대","50대","60대"],
regions: ["전국"],
source: "국민연금공단",
category: "노후",
link: "https://www.nps.or.kr",
priority: 2
},
{
title: "긴급복지지원",
description: "위기가구 긴급 생계지원",
amount: "생계·의료·주거비 긴급지원 (생계비 4인 기준 월 약 200만원)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "생활안정",
link: "https://www.bokjiro.go.kr",
priority: 1
},
{
title: "기초생활보장 생계급여",
description: "저소득층 생계비 지원",
amount: "1인 가구 월 최대 82만 556원, 4인 가구 월 최대 207만 8,316원",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "생활안정",
link: "https://www.bokjiro.go.kr",
priority: 1
},
{
title: "주거급여",
description: "저소득층 임차료 지원",
amount: "지역별 기준임대료 한도 내 실제 임차료 지원 (자가가구 수선비 지원)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "국토교통부",
category: "주거",
link: "https://www.bokjiro.go.kr",
priority: 1
},
{
title: "의료급여",
description: "저소득층 의료비 지원",
amount: "진료비 본인부담 경감 (1종 수급자 입원 본인부담 없음 등)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "의료",
link: "https://www.bokjiro.go.kr",
priority: 2
},
{
title: "에너지바우처",
description: "취약계층 냉난방비 지원",
amount: "세대원 수에 따라 연 최대 약 70만원",
deadline: "2026.06.15 ~ 12.31",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "한국에너지공단",
category: "에너지",
link: "https://www.energyv.or.kr",
priority: 1
},
{
title: "문화누리카드",
description: "문화·여행·체육비 지원",
amount: "1인당 연 15만원 (60~64세 16만원)",
deadline: "발급 2026.11.30까지 (사용 12.31까지)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "문화체육관광부",
category: "문화",
link: "https://www.mnuri.kr",
priority: 2
},
{
title: "근로장려금",
description: "저소득 근로가구 장려금",
amount: "단독가구 최대 165만원, 홑벌이 285만원, 맞벌이 330만원",
deadline: "기한 후 신청 2026.11.30까지 (산정액 95% 지급)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "국세청",
category: "세제혜택",
link: "https://www.hometax.go.kr",
priority: 1
},
{
title: "자녀장려금",
description: "18세 미만 자녀 양육 장려금",
amount: "자녀 1인당 최대 100만원",
deadline: "기한 후 신청 2026.11.30까지 (산정액 95% 지급)",
ages: ["20대","30대","40대","50대"],
regions: ["전국"],
source: "국세청",
category: "세제혜택",
link: "https://www.hometax.go.kr",
priority: 2
},
{
title: "재난적의료비 지원",
description: "고액 의료비 부담 경감",
amount: "본인부담 의료비의 50~80%, 연 최대 5,000만원",
deadline: "연중 (퇴원·진료일 다음날부터 180일 이내)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "국민건강보험공단",
category: "의료",
link: "https://www.nhis.or.kr",
priority: 2
},
{
title: "정신건강 심리상담 바우처",
description: "우울·불안 심리상담 8회",
amount: "전문 심리상담 8회 바우처 (소득별 본인부담 0~50%)",
deadline: "2026.12.31까지 (예산 소진 시 조기 마감)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "건강",
link: "https://www.bokjiro.go.kr",
priority: 2
},
{
title: "모두의카드(K-패스)",
description: "대중교통비 환급",
amount: "월 기준금액 초과분 전액 환급 또는 이용액의 20~53.3% 환급",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "국토교통부",
category: "교통",
link: "https://korea-pass.kr",
priority: 1
},
{
title: "국가건강검진",
description: "만 20세 이상 무료 건강검진",
amount: "일반건강검진 본인부담 없음 (2년 주기)",
deadline: "2026.12.31까지 (올해 대상자)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "국민건강보험공단",
category: "건강",
link: "https://www.nhis.or.kr",
priority: 3
},
{
title: "장애인연금",
description: "중증장애인 소득 보전",
amount: "기초급여+부가급여 월 최대 40만원대",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "생활안정",
link: "https://www.bokjiro.go.kr",
priority: 2
},
{
title: "소상공인 정책자금",
description: "소상공인 저금리 융자",
amount: "자금 유형별 한도 내 저금리 직접·대리대출",
deadline: "연중 (월별 접수, 예산 소진 시 마감)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "소상공인시장진흥공단",
category: "소상공인",
link: "https://ols.semas.or.kr",
priority: 2
},
{
title: "희망리턴패키지 원스톱폐업지원",
description: "폐업 소상공인 재기 지원",
amount: "점포철거비 최대 400만원 + 컨설팅·재취업 지원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "소상공인시장진흥공단",
category: "소상공인",
link: "https://hope.sbiz.or.kr",
priority: 2
},
{
title: "통신요금 감면",
description: "취약계층 통신비 감면",
amount: "수급자 월 최대 2만 6천원 등 요금 감면",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["전국"],
source: "과학기술정보통신부",
category: "생활안정",
link: "https://www.bokjiro.go.kr",
priority: 3
},
{
title: "기초연금",
description: "65세 이상 어르신 연금",
amount: "단독가구 월 최대 약 35만원, 부부가구 월 최대 약 56만원",
deadline: "연중 (만 65세 생일 1개월 전부터 신청)",
ages: ["60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "노후",
link: "https://basicpension.mohw.go.kr",
priority: 1
},
{
title: "노인일자리 및 사회활동 지원",
description: "어르신 일자리·활동비 지원",
amount: "공익활동 월 약 29만원 ~ 사회서비스형 월 70만원대",
deadline: "연중 수시 모집 (2027년 참여자 연말 모집)",
ages: ["60대","70대"],
regions: ["전국"],
source: "한국노인인력개발원",
category: "일자리",
link: "https://www.seniorro.or.kr",
priority: 1
},
{
title: "치매치료관리비 지원",
description: "치매 치료비 월 3만원",
amount: "월 3만원 (연 최대 36만원)",
deadline: "연중 상시",
ages: ["60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "의료",
link: "https://www.nid.or.kr",
priority: 2
},
{
title: "노인 개안수술 지원",
description: "저소득 어르신 안과수술비",
amount: "백내장 등 개안수술 본인부담금 지원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["60대","70대"],
regions: ["전국"],
source: "한국실명예방재단",
category: "의료",
link: "https://www.kfpb.org",
priority: 3
},
{
title: "노인 무릎인공관절 수술 지원",
description: "어르신 무릎수술비 지원",
amount: "한쪽 무릎 최대 120만원 (양쪽 최대 240만원)",
deadline: "연중 (예산 소진 시 마감)",
ages: ["60대","70대"],
regions: ["전국"],
source: "노인의료나눔재단",
category: "의료",
link: "https://www.bokjiro.go.kr",
priority: 2
},
{
title: "노인맞춤돌봄서비스",
description: "돌봄 필요 어르신 서비스",
amount: "안부확인·가사지원·외출동행 등 무료 돌봄",
deadline: "연중 상시",
ages: ["60대","70대"],
regions: ["전국"],
source: "보건복지부",
category: "돌봄",
link: "https://www.bokjiro.go.kr",
priority: 2
},
{
title: "노후긴급자금대부(실버론)",
description: "연금수급자 긴급자금 대여",
amount: "최대 1,000만원 저리 대여",
deadline: "연중 상시",
ages: ["60대","70대"],
regions: ["전국"],
source: "국민연금공단",
category: "금융",
link: "https://www.nps.or.kr",
priority: 3
},
{
title: "노인장기요양보험",
description: "요양 필요 어르신 급여",
amount: "등급별 재가·시설급여 (본인부담 15~20%, 감경 가능)",
deadline: "연중 상시",
ages: ["60대","70대"],
regions: ["전국"],
source: "국민건강보험공단",
category: "돌봄",
link: "https://www.longtermcare.or.kr",
priority: 2
},
{
title: "어르신 인플루엔자 무료접종",
description: "65세 이상 독감 무료접종",
amount: "인플루엔자 예방접종 무료",
deadline: "2026~2027절기 10월 중 시작 (질병관리청 공고)",
ages: ["60대","70대"],
regions: ["전국"],
source: "질병관리청",
category: "건강",
link: "https://nip.kdca.go.kr",
priority: 2
},
{
title: "한부모가족 아동양육비",
description: "한부모가족 양육비 지원",
amount: "자녀 1인당 월 23만원 이상 (연령·가구별 추가)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대"],
regions: ["전국"],
source: "성평등가족부",
category: "생활안정",
link: "https://www.bokjiro.go.kr",
priority: 2
},
{
title: "아동수당",
description: "8세 미만 아동 월 수당",
amount: "아동 1인당 월 10만~12만원 (비수도권·인구감소지역 추가)",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["전국"],
source: "보건복지부",
category: "출산육아",
link: "https://www.bokjiro.go.kr",
priority: 1
},
{
title: "부모급여",
description: "0~1세 영아 부모 급여",
amount: "0세 월 100만원, 1세 월 50만원",
deadline: "연중 (출생일 포함 60일 이내 신청 시 소급)",
ages: ["20대","30대","40대"],
regions: ["전국"],
source: "보건복지부",
category: "출산육아",
link: "https://www.bokjiro.go.kr",
priority: 1
},
{
title: "첫만남이용권",
description: "출생아 바우처 지원",
amount: "첫째 200만원, 둘째 이상 300만원",
deadline: "연중 (출생 후 1년 이내 신청·사용)",
ages: ["20대","30대","40대"],
regions: ["전국"],
source: "보건복지부",
category: "출산육아",
link: "https://www.bokjiro.go.kr",
priority: 1
},
{
title: "육아휴직급여",
description: "육아휴직 기간 급여 지원",
amount: "1~3개월 월 최대 250만원, 4~6개월 200만원, 7개월 이후 160만원",
deadline: "연중 (휴직 종료 후 12개월 이내)",
ages: ["20대","30대","40대"],
regions: ["전국"],
source: "고용노동부",
category: "출산육아",
link: "https://www.work24.go.kr",
priority: 2
},
{
title: "난임부부 시술비 지원",
description: "난임 시술비 지원",
amount: "출산당 25회, 회당 최대 110만원",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["전국"],
source: "보건복지부",
category: "출산육아",
link: "https://www.bokjiro.go.kr",
priority: 2
},
{
title: "산모·신생아 건강관리 지원",
description: "출산가정 건강관리사 파견",
amount: "건강관리사 방문 서비스 이용료 바우처",
deadline: "연중 (출산 예정일 40일 전부터 신청)",
ages: ["20대","30대","40대"],
regions: ["전국"],
source: "보건복지부",
category: "출산육아",
link: "https://www.socialservice.or.kr",
priority: 3
},
{
title: "햇살론유스",
description: "청년 저금리 생활자금",
amount: "최대 1,200만원 저금리 대출",
deadline: "연중 (예산 소진 시 마감)",
ages: ["20대","30대"],
regions: ["전국"],
source: "서민금융진흥원",
category: "금융",
link: "https://www.kinfa.or.kr",
priority: 2
},
{
title: "청년전용 버팀목 전세자금대출",
description: "청년 전세자금 저리 대출",
amount: "최대 2억원, 연 2%대 금리",
deadline: "연중 상시",
ages: ["20대","30대"],
regions: ["전국"],
source: "국토교통부",
category: "주거",
link: "https://nhuf.molit.go.kr",
priority: 2
},
{
title: "신생아 특례 대출",
description: "출산가구 주택자금 대출",
amount: "구입자금 최대 4억원, 전세자금 최대 3억원 저금리",
deadline: "연중 (출산 후 2년 이내)",
ages: ["20대","30대","40대"],
regions: ["전국"],
source: "국토교통부",
category: "주거",
link: "https://nhuf.molit.go.kr",
priority: 2
},
{
title: "기후동행카드",
description: "서울 대중교통 무제한 정기권",
amount: "월 6만원대 정기권 (청년·다자녀·저소득 할인)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "교통",
link: "https://www.seoul.go.kr",
priority: 1
},
{
title: "서울형 산후조리경비",
description: "서울 출산가정 산후조리비",
amount: "첫째 100만원, 둘째 120만원, 셋째 이상 150만원 바우처",
deadline: "연중 (출생일로부터 180일 이내)",
ages: ["20대","30대","40대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "출산육아",
link: "https://www.seoul.go.kr",
priority: 1
},
{
title: "서울형 긴급복지",
description: "서울 위기가구 긴급지원",
amount: "생계비·의료비·주거비 등 긴급 지원",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["서울특별시"],
source: "서울특별시",
category: "생활안정",
link: "https://wis.seoul.go.kr",
priority: 2
},
{
title: "동백패스",
description: "부산 대중교통비 환급",
amount: "월 4만 5천원 초과 이용분 최대 4만 5천원 동백전 환급",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["부산광역시"],
source: "부산광역시",
category: "교통",
link: "https://www.busan.go.kr/depart/dongbaegpass001",
priority: 1
},
{
title: "대구 어르신 통합 무임교통",
description: "72세 이상 버스·지하철 무료",
amount: "시내버스·도시철도 무료 이용 (2026년 72세 이상)",
deadline: "연중 상시",
ages: ["70대"],
regions: ["대구광역시"],
source: "대구광역시",
category: "교통",
link: "https://www.daegu.go.kr",
priority: 1
},
{
title: "대구 고령운전자 면허 자진반납 지원",
description: "면허 반납 어르신 보상",
amount: "대구로페이 20만원",
deadline: "연중 (예산 소진 시 마감)",
ages: ["70대"],
regions: ["대구광역시"],
source: "대구광역시",
category: "교통",
link: "https://www.daegu.go.kr",
priority: 3
},
{
title: "인천 I-패스",
description: "인천 교통비 추가 환급",
amount: "K-패스 환급에 청년(19~39세)·65세 이상 환급률 추가 상향",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["인천광역시"],
source: "인천광역시",
category: "교통",
link: "https://www.incheon.go.kr",
priority: 1
},
{
title: "인천 천사지원금",
description: "1~7세 아동 연 120만원",
amount: "1~7세 아동 1인당 연 120만원 (월 10만원)",
deadline: "연중 상시",
ages: ["20대","30대","40대"],
regions: ["인천광역시"],
source: "인천광역시",
category: "출산육아",
link: "https://www.incheon.go.kr",
priority: 2
},
{
title: "광주 G-패스",
description: "광주 대중교통비 환급",
amount: "K-패스 연계 환급 (청년 30%, 저소득층 60%대)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["광주광역시"],
source: "광주광역시",
category: "교통",
link: "https://www.gwangju.go.kr",
priority: 1
},
{
title: "광주다움 통합돌봄",
description: "돌봄 공백 시민 맞춤 돌봄",
amount: "가사·식사·동행 등 돌봄서비스 비용 지원",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["광주광역시"],
source: "광주광역시",
category: "돌봄",
link: "https://www.gwangju.go.kr",
priority: 2
},
{
title: "대전 어르신 무임교통",
description: "70세 이상 시내버스 무료",
amount: "시내버스·BRT·마을버스 무료 이용",
deadline: "연중 (하나은행 무임교통카드 발급)",
ages: ["70대"],
regions: ["대전광역시"],
source: "대전광역시",
category: "교통",
link: "https://www.daejeon.go.kr",
priority: 1
},
{
title: "울산 U-패스",
description: "울산 대중교통비 환급",
amount: "K-패스 연계 울산형 추가 환급",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["울산광역시"],
source: "울산광역시",
category: "교통",
link: "https://www.ulsan.go.kr",
priority: 1
},
{
title: "세종 이응패스",
description: "세종 대중교통비 환급",
amount: "월 2만원 이상 이용 시 최대 5만원까지 혜택",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["세종시"],
source: "세종특별자치시",
category: "교통",
link: "https://www.sejong.go.kr",
priority: 1
},
{
title: "The 경기패스",
description: "경기 대중교통비 환급",
amount: "K-패스 환급 + 청년 인정 19~39세 확대·이용횟수 제한 완화",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["경기도"],
source: "경기도",
category: "교통",
link: "https://www.gg.go.kr",
priority: 1
},
{
title: "경기도 산후조리비",
description: "경기 출생아 산후조리비",
amount: "출생아 1인당 50만원 지역화폐 (시군별 추가 지원)",
deadline: "연중 (출생 후 12개월 이내)",
ages: ["20대","30대","40대"],
regions: ["경기도"],
source: "경기도",
category: "출산육아",
link: "https://www.gg.go.kr",
priority: 1
},
{
title: "강원 육아기본수당",
description: "강원 영유아 월 양육수당",
amount: "1세부터 월 최대 50만원",
deadline: "연중 (신청 지연 시 최대 3개월 소급)",
ages: ["20대","30대","40대"],
regions: ["강원도"],
source: "강원특별자치도",
category: "출산육아",
link: "https://state.gwd.go.kr",
priority: 1
},
{
title: "충북 출산육아수당",
description: "충북 출생아 1천만원",
amount: "출생아 1인당 총 1,000만원 (6세까지 분할 지급)",
deadline: "연중 (출생신고 후 신청)",
ages: ["20대","30대","40대"],
regions: ["충청북도"],
source: "충청북도",
category: "출산육아",
link: "https://gachi.chungbuk.go.kr",
priority: 1
},
{
title: "충남 광역환승 환급",
description: "충남 광역 환승요금 환급",
amount: "타 시도 버스 환승 시 추가 요금 환급 (K-패스 연계)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["충청남도"],
source: "충청남도",
category: "교통",
link: "https://www.chungnam.go.kr",
priority: 2
},
{
title: "전북청년 결혼비용 대출이자 지원",
description: "청년 결혼비용 대출이자",
amount: "결혼비용 대출 1,000만원 한도, 2년간 이자 최대 100만원",
deadline: "2026년 선착순 100쌍 (한도 소진 시 마감)",
ages: ["20대","30대"],
regions: ["전라북도"],
source: "전북특별자치도",
category: "결혼",
link: "https://www.jeonbuk.go.kr",
priority: 2
},
{
title: "전남 출생기본소득",
description: "전남 출생아 월 20만원",
amount: "1~18세 월 20만원 (18년간 최대 4,320만원)",
deadline: "연중 (첫 생일 30일 전부터 신청, 소급 없음)",
ages: ["20대","30대","40대","50대"],
regions: ["전라남도"],
source: "전라남도",
category: "출산육아",
link: "https://www.jeonnam.go.kr",
priority: 1
},
{
title: "경북 K보듬 6000",
description: "경북 365일 무상 틈새돌봄",
amount: "평일 07:30~24:00, 주말 09:00~18:00 영유아·초등 무상 돌봄",
deadline: "연중 (통합 예약 시스템 신청)",
ages: ["20대","30대","40대"],
regions: ["경상북도"],
source: "경상북도",
category: "돌봄",
link: "https://k6000.or.kr",
priority: 1
},
{
title: "경남패스",
description: "경남 대중교통비 환급",
amount: "K-패스 연계 경남형 추가 환급 (청년·어르신 우대)",
deadline: "연중 상시",
ages: ["20대","30대","40대","50대","60대","70대"],
regions: ["경상남도"],
source: "경상남도",
category: "교통",
link: "https://www.gyeongnam.go.kr",
priority: 1
},
{
title: "제주 교통복지카드(어르신)",
description: "65세 이상 도내 버스 무료",
amount: "간선·지선·관광지순환·마을버스 요금 면제",
deadline: "연중 (도내 농협 영업점 발급)",
ages: ["60대","70대"],
regions: ["제주도"],
source: "제주특별자치도",
category: "교통",
link: "https://www.jeju.go.kr/traffic/bus2/card.htm",
priority: 1
},
{
title: "제주 출산 농가도우미 지원",
description: "출산 여성농업인 도우미",
amount: "1일 82,560원 기준 최대 70일 도우미 지원",
deadline: "연중 (출산 전 90일~출산 후 120일 신청)",
ages: ["20대","30대","40대"],
regions: ["제주도"],
source: "제주특별자치도",
category: "출산육아",
link: "https://www.jeju.go.kr",
priority: 3
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
