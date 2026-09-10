window.SupportFinder = window.SupportFinder || {};

window.SupportFinder.forceRefresh = function() {
    // 데이터 강제 새로고침
    if (document.getElementById('supportFinderSupportGrid')) {
        this.updateCurrentDate();
        this.setupCheckboxes();
    }
};

window.SupportFinder.manualSupportData = [
 { title: "청년도약계좌", description: "청년 5년 자산형성", amount: "5년 만기 최대 5,000만원 (정부기여금 포함)", deadline: "매달 초 신청", ages: ["20대","30대"], regions: ["전국"], source: "서민금융진흥원", category: "자산형성", link: "https://www.kinfa.or.kr", priority: 1 },
{ title: "근로장려금", description: "저소득 근로가구 지원", amount: "가구당 연 최대 330만원", deadline: "2026.11.30", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "국세청", category: "근로·소득", link: "https://www.hometax.go.kr", priority: 1 },
{ title: "자녀장려금", description: "저소득 양육가구 지원", amount: "자녀 1인당 최대 100만원", deadline: "2026년 11월 30일 기한후신청", ages: ["20대","30대","40대","50대","60대"], regions: ["전국"], source: "국세청", category: "근로·소득", link: "https://www.hometax.go.kr", priority: 1 },
{ title: "생계급여", description: "저소득 가구 생계비", amount: "가구 규모별 기준중위소득 32% 차액", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "보건복지부", category: "생계", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "의료급여", description: "의료비 본인부담 경감", amount: "1종·2종 본인부담금 차등 경감", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "보건복지부", category: "의료", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "주거급여", description: "임차료·수선비 지원", amount: "지역·가구원수별 기준임대료 지급", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "국토교통부", category: "주거", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "긴급복지지원", description: "위기가구 긴급 생계비", amount: "가구원수별 생계·의료·주거비 지원", deadline: "위기상황 발생 시 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "보건복지부", category: "긴급지원", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "에너지바우처", description: "냉난방 에너지비 지원", amount: "가구당 연 평균 약 36만원", deadline: "2026년 12월 31일까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "한국에너지공단", category: "생계", link: "https://www.energyv.or.kr", priority: 2 },
{ title: "국민내일배움카드", description: "직업훈련비 지원", amount: "5년간 300~500만원 훈련비", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "고용노동부", category: "교육·훈련", link: "https://www.hrd.go.kr", priority: 1 },
{ title: "재난적의료비 지원", description: "고액 의료비 지원", amount: "연간 최대 5,000만원", deadline: "퇴원 후 180일 이내", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "국민건강보험공단", category: "의료", link: "https://www.nhis.or.kr", priority: 1 },
{ title: "문화누리카드", description: "문화·여행·체육 지원", amount: "1인당 연 14만원", deadline: "2026년 11월 30일까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "한국문화예술위원회", category: "문화", link: "https://www.mnuri.kr", priority: 2 },
{ title: "소액생계비대출", description: "긴급 생계자금 대출", amount: "최대 100만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "서민금융진흥원", category: "금융", link: "https://www.kinfa.or.kr", priority: 1 },
{ title: "근로자햇살론", description: "저신용 근로자 대출", amount: "최대 2,000만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "서민금융진흥원", category: "금융", link: "https://www.kinfa.or.kr", priority: 2 },
{ title: "미소금융", description: "창업·운영자금 대출", amount: "최대 7,000만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "서민금융진흥원", category: "금융", link: "https://www.kinfa.or.kr", priority: 2 },
{ title: "채무조정 제도", description: "연체 채무 조정", amount: "이자 감면·원금 최대 감면", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "신용회복위원회", category: "금융", link: "https://www.ccrs.or.kr", priority: 2 },
{ title: "국민임대주택", description: "장기 저렴 임대주택", amount: "시세 60~80% 임대료", deadline: "공고별 수시 모집", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "한국토지주택공사", category: "주거", link: "https://apply.lh.or.kr", priority: 1 },
{ title: "매입임대주택", description: "도심 저렴 임대주택", amount: "시세 30~50% 임대료", deadline: "공고별 수시 모집", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "한국토지주택공사", category: "주거", link: "https://apply.lh.or.kr", priority: 2 },
{ title: "버팀목 전세자금대출", description: "전세보증금 저리대출", amount: "최대 1억 2천만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "주택도시기금", category: "주거", link: "https://nhuf.molit.go.kr", priority: 1 },
{ title: "디딤돌 주택구입자금대출", description: "주택구입 저리대출", amount: "최대 2억 5천만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "주택도시기금", category: "주거", link: "https://nhuf.molit.go.kr", priority: 1 },
{ title: "전세보증금반환보증", description: "보증금 미반환 보호", amount: "전세보증금 전액 보장", deadline: "잔여 임대기간 1/2 경과 전", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "주택도시보증공사", category: "주거", link: "https://www.khug.or.kr", priority: 1 },
{ title: "자활근로사업", description: "저소득 일자리 제공", amount: "유형별 자활급여 지급", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "보건복지부", category: "일자리", link: "https://www.bokjiro.go.kr", priority: 2 },
{ title: "두루누리 사회보험료 지원", description: "사회보험료 지원", amount: "보험료 최대 80% 지원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "근로복지공단", category: "근로·소득", link: "https://insurancesupport.or.kr", priority: 2 },
{ title: "소상공인 정책자금", description: "소상공인 경영자금", amount: "최대 7,000만원 융자", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "소상공인시장진흥공단", category: "창업·경영", link: "https://ols.sbiz.or.kr", priority: 1 },
{ title: "노란우산공제", description: "소상공인 퇴직공제", amount: "월 5~100만원 납입 적립", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "중소기업중앙회", category: "창업·경영", link: "https://www.8899.or.kr", priority: 2 },
{ title: "풍수해·지진재해보험", description: "재해보험료 지원", amount: "보험료 70~92% 지원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "행정안전부", category: "생계", link: "https://www.safekorea.go.kr", priority: 3 },
{ title: "장애인연금", description: "중증장애인 소득보전", amount: "월 최대 약 43만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "보건복지부", category: "생계", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "구직급여", description: "실직자 생계 지원", amount: "이직 전 평균임금 60%", deadline: "이직일 다음날부터 12개월 내", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "고용노동부", category: "일자리", link: "https://www.ei.go.kr", priority: 1 },
{ title: "취약계층 통신요금 감면", description: "이동전화 요금 감면", amount: "월 최대 2만 6천원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "과학기술정보통신부", category: "생계", link: "https://www.bokjiro.go.kr", priority: 3 },
{ title: "전기요금 복지할인", description: "전기료 할인 지원", amount: "월 최대 1만 6천원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "한국전력공사", category: "생계", link: "https://online.kepco.co.kr", priority: 3 },
{ title: "도시가스요금 경감", description: "가스요금 경감 지원", amount: "동절기 최대 72만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "산업통상자원부", category: "생계", link: "https://www.bokjiro.go.kr", priority: 3 },
{ title: "희망저축계좌Ⅱ", description: "차상위 자산형성", amount: "3년 만기 최대 720만원", deadline: "매월 정해진 기간 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "보건복지부", category: "자산형성", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "근로자 생활안정자금 융자", description: "저소득 근로자 융자", amount: "최대 2,000만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "근로복지공단", category: "금융", link: "https://www.workdream.net", priority: 2 },
{ title: "농어업인 국민연금보험료 지원", description: "연금보험료 지원", amount: "월 최대 약 4만 6천원", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "국민연금공단", category: "노후", link: "https://www.nps.or.kr", priority: 3 },
{ title: "예비창업패키지", description: "창업 사업화 자금", amount: "최대 1억원", deadline: "매년 상반기 공고", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "창업진흥원", category: "창업·경영", link: "https://www.k-startup.go.kr", priority: 2 },
{ title: "희망리턴패키지", description: "폐업·재취업 지원", amount: "점포철거비 최대 400만원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전국"], source: "소상공인시장진흥공단", category: "창업·경영", link: "https://ols.sbiz.or.kr", priority: 2 },
{ title: "국민취업지원제도", description: "구직촉진수당 지급", amount: "월 50만원 6개월", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대"], regions: ["전국"], source: "고용노동부", category: "일자리", link: "https://www.kua.go.kr", priority: 1 },
{ title: "청년 주택드림 청약통장", description: "청년 주택자금 마련", amount: "연 최대 4.5% 우대금리", deadline: "연중 상시", ages: ["20대","30대"], regions: ["전국"], source: "국토교통부", category: "주거", link: "https://nhuf.molit.go.kr", priority: 1 },
{ title: "햇살론유스", description: "청년 생활자금 대출", amount: "최대 1,200만원", deadline: "연중 상시", ages: ["20대","30대"], regions: ["전국"], source: "서민금융진흥원", category: "금융", link: "https://www.kinfa.or.kr", priority: 1 },
{ title: "중소기업 취업청년 소득세 감면", description: "청년 소득세 감면", amount: "5년간 소득세 90% 감면", deadline: "연중 상시", ages: ["20대","30대"], regions: ["전국"], source: "국세청", category: "근로·소득", link: "https://www.hometax.go.kr", priority: 2 },
{ title: "청년일자리도약장려금", description: "청년 채용 장려금", amount: "최대 720만원 지원", deadline: "예산 소진 시까지", ages: ["20대","30대"], regions: ["전국"], source: "고용노동부", category: "일자리", link: "https://www.work.go.kr", priority: 2 },
{ title: "청년마음건강지원", description: "심리상담 바우처", amount: "10회 상담 바우처", deadline: "연중 상시", ages: ["20대","30대"], regions: ["전국"], source: "보건복지부", category: "의료", link: "https://www.bokjiro.go.kr", priority: 2 },
{ title: "국가장학금", description: "대학 등록금 지원", amount: "소득구간별 등록금 지원", deadline: "학기별 신청", ages: ["20대"], regions: ["전국"], source: "한국장학재단", category: "교육·훈련", link: "https://www.kosaf.go.kr", priority: 1 },
{ title: "취업 후 상환 학자금대출", description: "등록금·생활비 대출", amount: "등록금 전액·생활비 400만원", deadline: "학기별 신청", ages: ["20대","30대"], regions: ["전국"], source: "한국장학재단", category: "교육·훈련", link: "https://www.kosaf.go.kr", priority: 2 },
{ title: "부모급여", description: "영아 양육비 지원", amount: "월 50~100만원", deadline: "출생 후 60일 이내", ages: ["20대","30대","40대"], regions: ["전국"], source: "보건복지부", category: "돌봄", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "아동수당", description: "아동 양육비 지원", amount: "월 10만원", deadline: "연중 상시", ages: ["20대","30대","40대"], regions: ["전국"], source: "보건복지부", category: "돌봄", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "첫만남이용권", description: "출산 바우처 지급", amount: "첫째 200만원, 둘째 300만원", deadline: "출생 후 1년 이내", ages: ["20대","30대","40대"], regions: ["전국"], source: "보건복지부", category: "돌봄", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "아이돌봄서비스", description: "돌봄 이용료 지원", amount: "소득별 최대 85% 지원", deadline: "연중 상시", ages: ["20대","30대","40대"], regions: ["전국"], source: "여성가족부", category: "돌봄", link: "https://idolbom.go.kr", priority: 2 },
{ title: "난임부부 시술비 지원", description: "난임 시술비 지원", amount: "회당 최대 110만원", deadline: "연중 상시", ages: ["20대","30대","40대"], regions: ["전국"], source: "보건복지부", category: "의료", link: "https://www.bokjiro.go.kr", priority: 2 },
{ title: "산모·신생아 건강관리 지원", description: "산후 돌봄 바우처", amount: "최대 약 200만원 바우처", deadline: "출산 후 30일 이내", ages: ["20대","30대","40대"], regions: ["전국"], source: "보건복지부", category: "돌봄", link: "https://www.bokjiro.go.kr", priority: 2 },
{ title: "육아휴직급여", description: "육아휴직 소득지원", amount: "월 최대 250만원", deadline: "휴직 종료 후 12개월 내", ages: ["20대","30대","40대"], regions: ["전국"], source: "고용노동부", category: "돌봄", link: "https://www.ei.go.kr", priority: 1 },
{ title: "신생아 특례 주택자금대출", description: "출산가구 주택대출", amount: "구입 최대 5억원", deadline: "출생 후 2년 이내", ages: ["20대","30대","40대"], regions: ["전국"], source: "국토교통부", category: "주거", link: "https://nhuf.molit.go.kr", priority: 1 },
{ title: "신혼·신생아 전세임대", description: "신혼부부 전세지원", amount: "보증금 최대 2억 4천만원", deadline: "공고별 수시 모집", ages: ["20대","30대","40대"], regions: ["전국"], source: "한국토지주택공사", category: "주거", link: "https://apply.lh.or.kr", priority: 1 },
{ title: "한부모가족 아동양육비", description: "한부모 양육비 지원", amount: "자녀 1인 월 23만원", deadline: "연중 상시", ages: ["20대","30대","40대","50대"], regions: ["전국"], source: "여성가족부", category: "돌봄", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "여성새로일하기센터", description: "여성 재취업 지원", amount: "직업훈련·취업장려금 지원", deadline: "연중 상시", ages: ["30대","40대","50대"], regions: ["전국"], source: "여성가족부", category: "일자리", link: "https://saeil.mogef.go.kr", priority: 2 },
{ title: "재도전 성공패키지", description: "재창업 자금 지원", amount: "최대 6,000만원", deadline: "매년 상반기 공고", ages: ["30대","40대","50대","60대"], regions: ["전국"], source: "창업진흥원", category: "창업·경영", link: "https://www.k-startup.go.kr", priority: 3 },
{ title: "중장년내일센터", description: "중장년 재취업 지원", amount: "전직·재취업 컨설팅 무료", deadline: "연중 상시", ages: ["40대","50대","60대"], regions: ["전국"], source: "고용노동부", category: "일자리", link: "https://www.work.go.kr", priority: 2 },
{ title: "신중년 경력형 일자리", description: "전문경력 일자리", amount: "월 약 200만원 수준", deadline: "매년 상반기 모집", ages: ["50대","60대"], regions: ["전국"], source: "고용노동부", category: "일자리", link: "https://www.work.go.kr", priority: 2 },
{ title: "폴리텍 신중년 특화과정", description: "중장년 직업훈련", amount: "훈련비 전액 국비 지원", deadline: "과정별 수시 모집", ages: ["50대","60대"], regions: ["전국"], source: "한국폴리텍대학", category: "교육·훈련", link: "https://www.kopo.ac.kr", priority: 3 },
{ title: "주택연금", description: "주택담보 노후연금", amount: "평생 월 연금 지급", deadline: "연중 상시", ages: ["50대","60대","70대"], regions: ["전국"], source: "한국주택금융공사", category: "노후", link: "https://www.hf.go.kr", priority: 1 },
{ title: "기초연금", description: "노인 소득 보전", amount: "월 최대 약 34만원", deadline: "연중 상시", ages: ["60대","70대"], regions: ["전국"], source: "보건복지부", category: "노후", link: "https://www.bokjiro.go.kr", priority: 1 },
{ title: "노인일자리 및 사회활동 지원", description: "어르신 일자리", amount: "월 29~76만원", deadline: "매년 11~12월 모집", ages: ["60대","70대"], regions: ["전국"], source: "한국노인인력개발원", category: "일자리", link: "https://www.seniorro.or.kr", priority: 1 },
{ title: "노인맞춤돌봄서비스", description: "어르신 돌봄 지원", amount: "안전지원·가사지원 제공", deadline: "연중 상시", ages: ["60대","70대"], regions: ["전국"], source: "보건복지부", category: "돌봄", link: "https://www.bokjiro.go.kr", priority: 2 },
{ title: "노인 무릎인공관절 수술 지원", description: "관절 수술비 지원", amount: "한쪽 무릎 최대 120만원", deadline: "예산 소진 시까지", ages: ["60대","70대"], regions: ["전국"], source: "노인의료나눔재단", category: "의료", link: "https://www.ok6595.or.kr", priority: 2 },
{ title: "치매치료관리비 지원", description: "치매 약제비 지원", amount: "월 3만원, 연 36만원", deadline: "연중 상시", ages: ["60대","70대"], regions: ["전국"], source: "보건복지부", category: "의료", link: "https://www.bokjiro.go.kr", priority: 2 },
{ title: "노인 개안수술 지원", description: "백내장 수술비 지원", amount: "수술비 전액 지원", deadline: "예산 소진 시까지", ages: ["60대","70대"], regions: ["전국"], source: "한국실명예방재단", category: "의료", link: "https://www.kfpb.org", priority: 3 },
{ title: "농지연금", description: "농지담보 노후연금", amount: "월 최대 300만원", deadline: "연중 상시", ages: ["60대","70대"], regions: ["전국"], source: "한국농어촌공사", category: "노후", link: "https://www.fplove.or.kr", priority: 2 },
{ title: "노인장기요양보험", description: "요양 서비스 지원", amount: "등급별 급여 한도 지원", deadline: "연중 상시", ages: ["60대","70대"], regions: ["전국"], source: "국민건강보험공단", category: "돌봄", link: "https://www.longtermcare.or.kr", priority: 1 },
{ title: "노령연금", description: "가입기간별 연금", amount: "가입기간·소득별 산정", deadline: "수급연령 도달 시 청구", ages: ["60대","70대"], regions: ["전국"], source: "국민연금공단", category: "노후", link: "https://www.nps.or.kr", priority: 1 },
{ title: "희망두배 청년통장", description: "청년 저축 2배 적립", amount: "본인 저축액 1:1 매칭", deadline: "매년 6월 모집", ages: ["20대","30대"], regions: ["서울특별시"], source: "서울특별시", category: "자산형성", link: "https://account.welfare.seoul.kr", priority: 1 },
{ title: "서울형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["서울특별시"], source: "서울특별시", category: "긴급지원", link: "https://wis.seoul.go.kr", priority: 1 },
{ title: "서울시 소상공인 육성자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["서울특별시"], source: "서울신용보증재단", category: "창업·경영", link: "https://www.seoulshinbo.co.kr", priority: 1 },
{ title: "손목닥터9988", description: "건강 실천 포인트", amount: "연간 최대 10만 포인트", deadline: "연중 상시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["서울특별시"], source: "서울특별시", category: "의료", link: "https://son.seoul.go.kr", priority: 3 },
{ title: "서울시 어르신 일자리", description: "노인 일자리 제공", amount: "월 최대 76만원", deadline: "매년 11~12월 모집", ages: ["60대","70대"], regions: ["서울특별시"], source: "서울특별시", category: "일자리", link: "https://www.seoul.go.kr", priority: 2 },
{ title: "부산 기쁨두배 청년통장", description: "청년 저축 매칭", amount: "3년 만기 최대 1,080만원", deadline: "매년 상반기 모집", ages: ["20대","30대"], regions: ["부산광역시"], source: "부산광역시", category: "자산형성", link: "https://www.busan.go.kr", priority: 1 },
{ title: "부산형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["부산광역시"], source: "부산광역시", category: "긴급지원", link: "https://www.busan.go.kr", priority: 1 },
{ title: "부산 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["부산광역시"], source: "부산신용보증재단", category: "창업·경영", link: "https://www.busanshinbo.or.kr", priority: 1 },
{ title: "부산 어르신 일자리", description: "노인 일자리 제공", amount: "월 최대 76만원", deadline: "매년 11~12월 모집", ages: ["60대","70대"], regions: ["부산광역시"], source: "부산광역시", category: "일자리", link: "https://www.busan.go.kr", priority: 2 },
{ title: "대구 청년 사회진입활동 지원", description: "미취업 청년 활동비", amount: "월 50만원 최대 6개월", deadline: "매년 상반기 모집", ages: ["20대","30대"], regions: ["대구광역시"], source: "대구광역시", category: "일자리", link: "https://www.daegu.go.kr", priority: 2 },
{ title: "대구형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["대구광역시"], source: "대구광역시", category: "긴급지원", link: "https://www.daegu.go.kr", priority: 1 },
{ title: "대구 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["대구광역시"], source: "대구신용보증재단", category: "창업·경영", link: "https://www.dgshinbo.or.kr", priority: 1 },
{ title: "인천 드림For 청년통장", description: "근로청년 저축 매칭", amount: "3년 만기 최대 1,440만원", deadline: "매년 상반기 모집", ages: ["20대","30대"], regions: ["인천광역시"], source: "인천광역시", category: "자산형성", link: "https://www.incheon.go.kr", priority: 1 },
{ title: "인천형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["인천광역시"], source: "인천광역시", category: "긴급지원", link: "https://www.incheon.go.kr", priority: 1 },
{ title: "인천 소상공인 특례보증", description: "소상공인 보증지원", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["인천광역시"], source: "인천신용보증재단", category: "창업·경영", link: "https://www.icsinbo.or.kr", priority: 1 },
{ title: "광주 청년드림수당", description: "미취업 청년 수당", amount: "월 50만원 최대 6개월", deadline: "매년 상반기 모집", ages: ["20대","30대"], regions: ["광주광역시"], source: "광주광역시", category: "일자리", link: "https://www.gwangju.go.kr", priority: 2 },
{ title: "광주형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["광주광역시"], source: "광주광역시", category: "긴급지원", link: "https://www.gwangju.go.kr", priority: 1 },
{ title: "광주 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["광주광역시"], source: "광주신용보증재단", category: "창업·경영", link: "https://www.gjsinbo.or.kr", priority: 1 },
{ title: "대전 청년희망통장", description: "청년 저축 매칭", amount: "3년 만기 최대 1,620만원", deadline: "매년 상반기 모집", ages: ["20대","30대"], regions: ["대전광역시"], source: "대전광역시", category: "자산형성", link: "https://www.daejeon.go.kr", priority: 1 },
{ title: "대전형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["대전광역시"], source: "대전광역시", category: "긴급지원", link: "https://www.daejeon.go.kr", priority: 1 },
{ title: "대전 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["대전광역시"], source: "대전신용보증재단", category: "창업·경영", link: "https://www.djsinbo.or.kr", priority: 1 },
{ title: "울산형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["울산광역시"], source: "울산광역시", category: "긴급지원", link: "https://www.ulsan.go.kr", priority: 1 },
{ title: "울산 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["울산광역시"], source: "울산신용보증재단", category: "창업·경영", link: "https://www.ulsanshinbo.co.kr", priority: 1 },
{ title: "울산 어르신 일자리", description: "노인 일자리 제공", amount: "월 최대 76만원", deadline: "매년 11~12월 모집", ages: ["60대","70대"], regions: ["울산광역시"], source: "울산광역시", category: "일자리", link: "https://www.ulsan.go.kr", priority: 2 },
{ title: "세종형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["세종시"], source: "세종특별자치시", category: "긴급지원", link: "https://www.sejong.go.kr", priority: 1 },
{ title: "세종 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["세종시"], source: "세종신용보증재단", category: "창업·경영", link: "https://www.sjsinbo.or.kr", priority: 1 },
{ title: "경기도 청년기본소득", description: "24세 청년 지급금", amount: "분기 25만원 연 100만원", deadline: "분기별 신청", ages: ["20대"], regions: ["경기도"], source: "경기도", category: "생계", link: "https://apply.jobaba.net", priority: 1 },
{ title: "경기도 청년 노동자통장", description: "청년 저축 매칭", amount: "2년 만기 최대 580만원", deadline: "매년 상반기 모집", ages: ["20대","30대"], regions: ["경기도"], source: "경기도", category: "자산형성", link: "https://apply.jobaba.net", priority: 1 },
{ title: "경기형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경기도"], source: "경기도", category: "긴급지원", link: "https://www.gg.go.kr", priority: 1 },
{ title: "경기도 소상공인 특례보증", description: "소상공인 보증지원", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경기도"], source: "경기신용보증재단", category: "창업·경영", link: "https://www.gcgf.or.kr", priority: 1 },
{ title: "경기도 어르신 일자리", description: "노인 일자리 제공", amount: "월 최대 76만원", deadline: "매년 11~12월 모집", ages: ["60대","70대"], regions: ["경기도"], source: "경기도", category: "일자리", link: "https://www.gg.go.kr", priority: 2 },
{ title: "강원형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["강원도"], source: "강원특별자치도", category: "긴급지원", link: "https://www.gwd.go.kr", priority: 1 },
{ title: "강원 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["강원도"], source: "강원신용보증재단", category: "창업·경영", link: "https://www.gwsinbo.co.kr", priority: 1 },
{ title: "강원 농업인 공익수당", description: "농가 경영 안정", amount: "농가당 연 70만원", deadline: "매년 상반기 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["강원도"], source: "강원특별자치도", category: "농어업", link: "https://www.gwd.go.kr", priority: 2 },
{ title: "충북형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["충청북도"], source: "충청북도", category: "긴급지원", link: "https://www.chungbuk.go.kr", priority: 1 },
{ title: "충북 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["충청북도"], source: "충북신용보증재단", category: "창업·경영", link: "https://www.cbsinbo.or.kr", priority: 1 },
{ title: "충북 청년근로자 사랑채움", description: "청년 저축 매칭", amount: "3년 만기 최대 1,080만원", deadline: "매년 상반기 모집", ages: ["20대","30대"], regions: ["충청북도"], source: "충청북도", category: "자산형성", link: "https://www.chungbuk.go.kr", priority: 1 },
{ title: "충남형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["충청남도"], source: "충청남도", category: "긴급지원", link: "https://www.chungnam.go.kr", priority: 1 },
{ title: "충남 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["충청남도"], source: "충남신용보증재단", category: "창업·경영", link: "https://www.cnsinbo.or.kr", priority: 1 },
{ title: "충남 농어민수당", description: "농어가 경영 안정", amount: "농어가당 연 90만원", deadline: "매년 상반기 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["충청남도"], source: "충청남도", category: "농어업", link: "https://www.chungnam.go.kr", priority: 2 },
{ title: "전북형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전라북도"], source: "전북특별자치도", category: "긴급지원", link: "https://www.jeonbuk.go.kr", priority: 1 },
{ title: "전북 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전라북도"], source: "전북신용보증재단", category: "창업·경영", link: "https://www.jbsinbo.or.kr", priority: 1 },
{ title: "전북 농어업 공익수당", description: "농어가 경영 안정", amount: "농어가당 연 60만원", deadline: "매년 상반기 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전라북도"], source: "전북특별자치도", category: "농어업", link: "https://www.jeonbuk.go.kr", priority: 2 },
{ title: "전남형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전라남도"], source: "전라남도", category: "긴급지원", link: "https://www.jeonnam.go.kr", priority: 1 },
{ title: "전남 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전라남도"], source: "전남신용보증재단", category: "창업·경영", link: "https://www.jnsinbo.or.kr", priority: 1 },
{ title: "전남 농어민 공익수당", description: "농어가 경영 안정", amount: "농어가당 연 60만원", deadline: "매년 상반기 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["전라남도"], source: "전라남도", category: "농어업", link: "https://www.jeonnam.go.kr", priority: 2 },
{ title: "경북형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경상북도"], source: "경상북도", category: "긴급지원", link: "https://www.gb.go.kr", priority: 1 },
{ title: "경북 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경상북도"], source: "경북신용보증재단", category: "창업·경영", link: "https://www.gbsinbo.or.kr", priority: 1 },
{ title: "경북 농민수당", description: "농가 경영 안정", amount: "농가당 연 60만원", deadline: "매년 상반기 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경상북도"], source: "경상북도", category: "농어업", link: "https://www.gb.go.kr", priority: 2 },
{ title: "경남형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경상남도"], source: "경상남도", category: "긴급지원", link: "https://www.gyeongnam.go.kr", priority: 1 },
{ title: "경남 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경상남도"], source: "경남신용보증재단", category: "창업·경영", link: "https://www.gnsinbo.or.kr", priority: 1 },
{ title: "경남 농어업인 수당", description: "농어가 경영 안정", amount: "농어가당 연 60만원", deadline: "매년 상반기 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["경상남도"], source: "경상남도", category: "농어업", link: "https://www.gyeongnam.go.kr", priority: 2 },
{ title: "제주형 긴급복지", description: "위기가구 생계 지원", amount: "가구당 최대 300만원", deadline: "연중 수시", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["제주도"], source: "제주특별자치도", category: "긴급지원", link: "https://www.jeju.go.kr", priority: 1 },
{ title: "제주 소상공인 경영안정자금", description: "소상공인 저리융자", amount: "업체당 최대 1억원", deadline: "예산 소진 시까지", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["제주도"], source: "제주신용보증재단", category: "창업·경영", link: "https://www.jjsinbo.or.kr", priority: 1 },
{ title: "제주 농민수당", description: "농가 경영 안정", amount: "농가당 연 40만원", deadline: "매년 상반기 신청", ages: ["20대","30대","40대","50대","60대","70대"], regions: ["제주도"], source: "제주특별자치도", category: "농어업", link: "https://www.jeju.go.kr", priority: 2 }
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
