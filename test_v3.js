// body에 텍스트 직접 추가
document.body.innerHTML += "테스트입니다5";


(async function() {
    // GitHub API로 최신 커밋 SHA 가져오기
    const response = await fetch("https://api.github.com/repos/abaeksite/allinone_lecture_skin/commits/main");
    const data = await response.json();
    const latestSHA = data.sha; // 최신 SHA 자동 가져오기

    // 최신 SHA를 사용하여 jsDelivr URL 생성
    const script = document.createElement('script');
    script.src = `https://cdn.jsdelivr.net/gh/abaeksite/allinone_lecture_skin@${latestSHA}/test_v3.js`;
    document.body.appendChild(script);
})();
