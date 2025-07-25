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
title: "2028 청년 창업 지원금",
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
deadline: "2025-11-30",
ages: ["20대", "30대", "40대"],
regions: ["전국"],
source: "국토교통부",
category: "주거지원",
priority: 2
},
{
title: "2025 농업인 경영 안정 지원금",
description: "농업에 종사하는 농업인의 경영 안정을 위한 직접 지원금입니다. 농업소득 안정과 경쟁력 강화를 목표로 합니다.",
amount: "최대 2,000만원",
deadline: "2025-10-31",
ages: ["30대", "40대", "50대", "60대"],
regions: ["강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도"],
source: "농림축산식품부",
category: "농업지원",
priority: 3
},
{
title: "2025 어르신 건강 돌봄 지원",
description: "65세 이상 어르신을 위한 건강 관리 및 돌봄 서비스 지원 프로그램입니다. 의료비, 돌봄 서비스, 생활비를 지원합니다.",
amount: "월 최대 150만원",
deadline: "2025-12-31",
ages: ["60대", "70대"],
regions: ["전국"],
source: "보건복지부",
category: "복지지원",
priority: 4
},
{
title: "2025 중소기업 R&D 지원사업",
description: "중소기업의 연구개발 역량 강화를 위한 지원 프로그램입니다. 기술개발비, 인건비, 장비구입비를 지원합니다.",
amount: "최대 1억원",
deadline: "2025-09-30",
ages: ["30대", "40대", "50대"],
regions: ["서울특별시", "경기도", "대전광역시", "대구광역시", "부산광역시"],
source: "중소벤처기업부",
category: "기술개발",
priority: 5
},
{
title: "2025 여성 경력단절 복귀 지원",
description: "경력단절 여성의 사회복귀를 위한 직업훈련 및 취업지원 프로그램입니다. 교육비, 훈련비, 취업준비금을 지원합니다.",
amount: "최대 300만원",
deadline: "2025-12-31",
ages: ["30대", "40대", "50대"],
regions: ["전국"],
source: "고용노동부",
category: "취업지원",
priority: 6
},
{
title: "2025 청년 전세자금 대출 지원",
description: "만 19세~34세 청년을 대상으로 한 전세자금 대출 지원 프로그램입니다. 저금리 대출과 보증료 지원을 제공합니다.",
amount: "최대 2억원",
deadline: "2025-12-31",
ages: ["20대", "30대"],
regions: ["서울특별시", "경기도", "인천광역시", "부산광역시", "대구광역시", "광주광역시", "대전광역시", "울산광역시"],
source: "국토교통부",
category: "주거지원",
priority: 7
},
{
title: "2025 소상공인 경영 안정 지원금",
description: "소상공인의 경영 안정을 위한 직접 지원금입니다. 임대료, 인건비, 운영비를 지원합니다.",
amount: "최대 1,000만원",
deadline: "2025-11-30",
ages: ["30대", "40대", "50대", "60대"],
regions: ["전국"],
source: "중소벤처기업부",
category: "사업지원",
priority: 8
},
{
title: "2025 문화예술인 활동 지원",
description: "문화예술인의 창작활동 지원을 위한 프로그램입니다. 창작준비금, 프로젝트 지원금, 전시 지원금을 제공합니다.",
amount: "최대 500만원",
deadline: "2025-10-31",
ages: ["20대", "30대", "40대", "50대"],
regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "경기도"],
source: "문화체육관광부",
category: "문화예술",
priority: 9
},
{
title: "2025 귀농귀촌 정착 지원금",
description: "도시에서 농촌으로 이주하는 귀농귀촌인을 위한 정착 지원 프로그램입니다. 주택 구입, 농지 구입, 영농 준비금을 지원합니다.",
amount: "최대 3,000만원",
deadline: "2025-12-31",
ages: ["30대", "40대", "50대"],
regions: ["강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도"],
source: "농림축산식품부",
category: "정착지원",
priority: 10
}
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

    supportCards += '<div class="support-finder-support-card ' + urgentClass + '">';
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
