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
title: "2025 청년 창업 지원금",
description: "만 18세~39세 청년 창업자를 위한 포괄적 지원 프로그램입니다. 사업자금, 교육, 멘토링을 종합적으로 지원합니다.",
amount: "최대 5,000만원",
deadline: "2025-12-31",
ages: ["20대", "30대"],
regions: ["서울특별시", "경기도", "부산광역시", "대구광역시", "인천광역시"],
source: "중소벤처기업부",
category: "창업지원",
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
link: "https://aros100.com",
priority: 1
},
  {
    title: "민생회복 소비쿠폰",
    description: "전 국민 대상, 카드·상품권·선불카드 방식 지급",
    amount: "최소 15만원 ~ 최대 55만원",
    deadline: "2025-09-12",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["대전광역시"],
    source: "대전광역시청",
    category: "생활안정",
    link: "https://www.daejeon.go.kr/livelihood/index.do",
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
  }
]

];

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
