// 온라인 쇼핑몰 할인 계산기
// 🚨 버그: falsy 값과 부동소수점 연산 문제

/*
쿠폰 데이터베이스
*/
const coupons = {
    'SAVE10': { discount: 0.1, name: '10% 할인 쿠폰' },
    'SAVE20': { discount: 0.2, name: '20% 할인 쿠폰' }
};

/*
고객 등급에 따른 기본 할인율 계산
🚨 버그: falsy 값을 잘못 처리함
*/
function getGradeDiscount(customerGrade) {
    // 🚨 문제: 빈 문자열('')도 falsy라서 할인을 못 받음
    if (!customerGrade) {
        return 0;
    }
    
    switch (customerGrade) {
        case 'VIP':
            return 0.2;  // 20% 할인
        case '일반':
            return 0.1;  // 10% 할인
        default:
            return 0;
    }
}

/*
쿠폰 할인을 계산하는 함수
🚨 버그: 쿠폰 유효성 검사에 문제
*/
function getCouponDiscount(couponCode) {
    // 🚨 문제: 빈 문자열('')을 잘못 처리
    if (!couponCode) {
        return 0;
    }
    
    const coupon = coupons[couponCode];
    
    // 🚨 문제: 존재하지 않는 쿠폰과 빈 문자열을 구분하지 못함
    if (!coupon) {
        return 0;
    }
    
    return coupon.discount;
}

/*
할인율을 더하는 함수
🚨 버그: 부동소수점 연산 오차 문제
*/
function addDiscounts(discount1, discount2) {
    // 🚨 문제: 0.1 + 0.2 = 0.30000000000000004 가 됨
    return discount1 + discount2;
}

/*
구매 금액이 0원인지 확인하는 함수
🚨 버그: 0을 falsy로 잘못 처리
*/
function isValidAmount(amount) {
    // 🚨 문제: 0원도 falsy라서 유효하지 않다고 판단
    if (!amount) {
        return false;
    }
    
    return amount >= 0;
}

/*
총 할인율을 계산하는 메인 함수
*/
function calculateDiscount(customerGrade, amount, couponCode) {
    // 금액 유효성 검사
    if (!isValidAmount(amount)) {
        return "❌ 유효하지 않은 구매 금액입니다";
    }
    
    // 각종 할인 계산
    const gradeDiscount = getGradeDiscount(customerGrade);
    const couponDiscount = getCouponDiscount(couponCode);
    
    // 🚨 문제: 부동소수점 연산 오차
    const totalDiscountRate = addDiscounts(gradeDiscount, couponDiscount);
    
    const discountAmount = Math.floor(amount * totalDiscountRate);
    const finalAmount = amount - discountAmount;
    
    return {
        originalAmount: amount,
        gradeDiscount: Math.round(gradeDiscount * 100),
        couponDiscount: Math.round(couponDiscount * 100),
        totalDiscountRate: Math.round(totalDiscountRate * 100),
        discountAmount: discountAmount,
        finalAmount: finalAmount,
        // 🚨 디버깅용: 실제 부동소수점 값 보여주기
        rawTotalRate: totalDiscountRate
    };
}

/*
기본 할인 테스트 함수
*/
function testDiscount(grade, amount) {
    const result = calculateDiscount(grade, amount, '');
    displayResult(result, `${grade || '등급없음'} 고객, ${amount.toLocaleString()}원`);
}

/*
쿠폰 조합 테스트 함수 (부동소수점 문제 확인용)
*/
function testFloatingPoint(grade, coupon) {
    const result = calculateDiscount(grade, 100000, coupon);
    displayResult(result, `부동소수점 테스트: ${grade} + ${coupon}`);
}

/*
HTML 데이터셋에서 쿠폰 정보를 읽어서 테스트하는 함수
*/
function testCouponFromDataset(buttonElement) {
    const couponCode = buttonElement.dataset.coupon;
    const amount = Number(buttonElement.dataset.amount);
    
    const result = calculateDiscount('일반', amount, couponCode);
    displayResult(result, `데이터셋 테스트: 쿠폰 ${couponCode || '없음'}, ${amount.toLocaleString()}원`);
}

/*
결과를 화면에 표시하는 함수
*/
function displayResult(result, testCase) {
    if (typeof result === 'string') {
        document.getElementById('result').innerHTML = 
            `<h3>${testCase}</h3><p style="color: red;">${result}</p>`;
        return;
    }
    
    let floatingPointWarning = '';
    if (result.rawTotalRate !== result.totalDiscountRate / 100) {
        floatingPointWarning = `<p style="color: orange;"><strong>⚠️ 부동소수점 오차:</strong> 실제값 ${result.rawTotalRate}</p>`;
    }
    
    const html = `
        <h3>${testCase}</h3>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>원래 금액:</strong> ${result.originalAmount.toLocaleString()}원</p>
            <p><strong>등급 할인:</strong> ${result.gradeDiscount}%</p>
            <p><strong>쿠폰 할인:</strong> ${result.couponDiscount}%</p>
            <p><strong>총 할인율:</strong> ${result.totalDiscountRate}%</p>
            ${floatingPointWarning}
            <p><strong>할인 금액:</strong> ${result.discountAmount.toLocaleString()}원</p>
            <p style="font-size: 18px; color: #d32f2f;"><strong>최종 금액:</strong> ${result.finalAmount.toLocaleString()}원</p>
        </div>
    `;
    
    document.getElementById('result').innerHTML = html;
}

// 페이지 로드시 설명 표시
window.onload = function() {
    document.getElementById('result').innerHTML = 
        `<p>👆 버튼들을 클릭해서 할인 계산을 테스트해보세요!</p>
         <p><strong>특히 빈 문자열(''), 0원, 부동소수점 연산을 확인해보세요!</strong></p>`;
};