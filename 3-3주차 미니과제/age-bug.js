// 놀이공원 요금 계산기
// 🚨 버그: 0살일 때 요금을 계산할 수 없음

function calculatePrice(age, badge) {
     if (age === null || age === undefined || typeof age !== 'number') {
        return "❌ 나이를 알 수 없어서 요금을 계산할 수 없습니다.";
    }
    
    switch (true) {
        case badge === '독립유공자':
            return "무료(독립유공자)";
        case age <= 3:
            return "무료(만3세 이하)";
        case age <= 12:
            return "5,000원 (어린이)";
        case age <= 64:
            return "10,000원 (성인)";
        default:
            return "3,000원 (경로우대)";
    }

function testAge(age, badge) {
    const result = calculatePrice(age, badge);
    const displayAge = age === null ? 'null' : `${age}살`;
    const displayBadge = `${badge ? ` (${badge})` : ''}`;

    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultEelement.innerHTML =
        `<h3>${displayAge}${displayBadge} 결과:</h3><p>${result}</p>`;
} else {
    console.log("ID 'result'인 HTML 요소를 찾을 수 없습니다.");
  }
}

window.onload = function() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
      `<p>👆 위의 버튼들을 클릭해서 각 나이별 요금을 확인해보세요!</p>
         <p><strong>특히 0살 버튼을 클릭해보세요. 무료여야 하는데...</strong></p>`;
    }
};