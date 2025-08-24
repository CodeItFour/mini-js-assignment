// 핸드폰 번호 검증기
// 🚨 버그: 특정 번호들이 제대로 검증되지 않음

/*
핸드폰 번호가 올바른 형식인지 검증하는 함수
*/
function validatePhone(phoneNumber) {
    const 조건문 = false
    // 🚨 버그를 해결하고 알맞은 조건문을 기입하세요
    
    // 1. 하이픈이 포함된 형식인지 확인
    if (조건문) {
        return "❌ 올바른 길이가 아닙니다.";
    }
    
    // 2. 하이픈 위치 확인 (4번째, 9번째 자리)
    if (조건문) {
        return "❌ 하이픈 위치가 잘못되었습니다.";
    }
    
    // 앞자리 번호 추출

    // 🚨 버그: 모든 유효한 앞자리를 체크하지 못함
    if (조건문) {
        return "❌ 지원하지 않는 통신사 번호입니다.";
    }
    
    // 중간 번호 (4자리)
    // 🚨 버그: 숫자인지 제대로 확인하지 못함
    if (조건문) {
        return "❌ 중간 번호가 올바르지 않습니다.";
    }
    
    // 뒷자리 번호 (4자리)
    // 🚨 버그: 숫자인지 제대로 확인하지 못함
    if (조건문) {
        return "❌ 뒷자리 번호가 올바르지 않습니다.";
    }
    
    return "✅ 올바른 핸드폰 번호입니다!";
}

/*
전달받은 핸드폰 번호를 검증하고 결과를 화면에 표시
*/
function testPhone(phoneNumber) {
    const result = validatePhone(phoneNumber);
    const display = phoneNumber === '' ? '(빈 문자열)' : phoneNumber;
    
    document.getElementById('result').innerHTML = 
        `<h3>${display} 검증 결과:</h3><p>${result}</p>`;
}

// 페이지 로드시 설명 표시
window.onload = function() {
    document.getElementById('result').innerHTML = 
        `<p>👆 위의 버튼들을 클릭해서 각 번호의 검증 결과를 확인해보세요!</p>
         <p><strong>특히 011번과 빈 문자열을 테스트해보세요. 문제가 있을 겁니다...</strong></p>`;
};