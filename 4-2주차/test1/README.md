# 4-2주차 Test1: 온라인 쇼핑몰 할인 시스템 🛒

## 📋 과제 설명
온라인 쇼핑몰의 할인 계산 시스템에서 falsy 값들 때문에 할인이 제대로 적용되지 않는 버그를 찾아서 수정하는 과제입니다.
3-1주차의 놀이공원 요금 계산기와 비슷한 형태의 실용적인 예제입니다.

## 🚨 발견해야 할 버그들

### 1️⃣ 빈 문자열 처리 버그
- **파일:** `discount-bug.js`의 `getGradeDiscount()` 함수
- **문제:** `if (!customerGrade)` 조건에서 빈 문자열(`''`)도 falsy로 처리
- **증상:** 등급이 빈 문자열인 고객이 할인을 전혀 못 받음
- **원인:** 빈 문자열과 null/undefined를 구분하지 못함

### 2️⃣ 숫자 0 처리 버그
- **파일:** `discount-bug.js`의 `getAmountDiscount()` 함수
- **문제:** `if (!amount)` 조건에서 0원도 falsy로 처리
- **증상:** 구매 금액이 0원일 때 할인 계산이 실행되지 않음
- **원인:** 0도 falsy 값이므로 유효한 금액으로 인식하지 못함

### 3️⃣ Boolean 값 처리 버그
- **파일:** `discount-bug.js`의 `getFirstPurchaseDiscount()` 함수
- **문제:** `if (isFirstPurchase)` 조건에서 false나 0을 잘못 처리
- **증상:** 첫 구매가 아닌 고객(`false`)도 할인 대상에서 제외됨
- **원인:** boolean false와 null/undefined를 구분하지 못함

### 4️⃣ 쿠폰 코드 처리 버그
- **파일:** `discount-bug.js`의 `getCouponDiscount()` 함수  
- **문제:** 빈 쿠폰 코드와 잘못된 쿠폰 코드를 구분하지 못함
- **증상:** 쿠폰이 없는 경우와 유효하지 않은 쿠폰을 같게 처리
- **원인:** falsy 값에 대한 세밀한 구분 부족

## 🎯 학습 목표
- **Falsy 값 이해:** `false`, `0`, `''`, `null`, `undefined`, `NaN`의 차이점
- **조건문 정확성:** falsy 값들을 정확히 구분하는 조건문 작성
- **Dataset 활용:** HTML `data-*` 속성을 JavaScript에서 활용하는 방법
- **실용적 로직:** 실제 서비스에서 자주 발생하는 데이터 검증 패턴

## 🔧 수정 방법

### 버그 1 수정 (빈 문자열 처리)
```javascript
// 잘못된 코드
if (!customerGrade) {
    return 0;
}

// 올바른 코드
if (customerGrade == null || customerGrade === undefined) {
    return 0;
}
```

### 버그 2 수정 (0원 처리)
```javascript
// 잘못된 코드
if (!amount) {
    return 0;
}

// 올바른 코드
if (amount == null || amount < 0) {
    return 0;
}
```

### 버그 3 수정 (Boolean 처리)
```javascript
// 잘못된 코드는 이미 올바름 (이 경우는 의도된 동작)
// false일 때 할인 없음이 정상

// 하지만 null 체크가 필요하다면:
if (isFirstPurchase === true) {
    return 0.03;
}
```

### 버그 4 수정 (쿠폰 코드 처리)
```javascript
// 잘못된 코드
if (!couponCode) {
    return { discount: 0, message: "쿠폰이 없습니다" };
}

// 올바른 코드
if (couponCode == null || couponCode === undefined) {
    return { discount: 0, message: "쿠폰이 없습니다" };
}
if (couponCode === '') {
    return { discount: 0, message: "쿠폰 코드를 입력해주세요" };
}
```

## 🧪 테스트 케이스

### 기본 할인 테스트
- **VIP 고객 (5만원)** → 20% 할인 적용 확인
- **등급없음 (6만원)** → 빈 문자열 처리 확인 🚨
- **null 고객 (9만원)** → null 값 처리 확인 🚨

### Dataset 활용 쿠폰 테스트
- **쿠폰없음 (10만원)** → 빈 문자열 쿠폰 처리 🚨
- **잘못된 쿠폰 (5만원)** → 문자열 "0" 처리 🚨

### 복합 할인 테스트
- **신규+0원+쿠폰+첫구매** → 0원 금액 처리 🚨
- **falsy 값들 조합** → 다양한 falsy 값 동시 처리 🚨

## 💡 Falsy 값 정리
```javascript
// JavaScript의 falsy 값들
false     // boolean false
0         // 숫자 0
-0        // 음의 0
0n        // BigInt 0
''        // 빈 문자열
null      // null 값
undefined // undefined 값  
NaN       // Not a Number
```

## 📁 파일 구조
```
4-2주차/test1/
├── README.md           # 이 파일
├── index.html         # 테스트용 웹페이지 (3-1주차 스타일)
└── discount-bug.js    # 수정해야 할 JavaScript 파일
```

## 🎊 완성 후 확인사항
- [ ] 등급이 빈 문자열인 고객도 적절한 처리가 됨
- [ ] 구매 금액이 0원일 때도 할인 계산이 정상 작동
- [ ] 쿠폰이 없는 경우와 잘못된 쿠폰을 구분하여 처리
- [ ] 첫 구매 여부에 따른 할인이 정확히 적용
- [ ] HTML dataset 속성에서 값을 올바르게 읽어옴
- [ ] 모든 테스트 버튼이 예상대로 작동함

## 🔍 디버깅 팁
1. **개발자 도구 활용:** `console.log()`로 각 함수의 입력값과 조건문 결과 확인
2. **타입 체크:** `typeof` 연산자로 값의 타입 확인
3. **엄격한 비교:** `===`와 `==`의 차이점 이해하고 적절히 사용
4. **Dataset 디버깅:** `buttonElement.dataset`을 콘솔에 출력해서 값 확인