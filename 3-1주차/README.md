# 3-1주차: 🔥 미니 과제

### 과제 1
다음 코드의 결과를 예측하고 `?` 부분을 수정해주세요
```javascript
console.log(typeof []);          // object
console.log(typeof null);        // object
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### 과제 2
올바른 연산자를 선택하세요!
```javascript
const score = 0;           // 0점도 유효한 점수
const name = "";           // 빈 이름은 "익명"으로
const url = null;          // 아직 설정 안됨
const isVip = false;       // 의도적으로 일반회원

// TODO: 올바른 연산자 선택
const finalScore = score ?? 100;    // 0점 유지하고 싶음
const finalName = name || "익명";    // 빈 이름은 익명으로
const finalUrl = url ?? "/default"; // null만 기본값으로
```

### 과제 3
![img.png](img.png)

**실행 방법**:
1. `3-3주차/index.html`을 브라우저에서 열기

**문제 상황**:
- 갓태어난 아이(0 살일때) 현재 잘못된 오류가 나오고있음, 올바르게 나오도록 수정하기
- 각 step 별 문제를 해결하기 


**미션**:
---
#### step1. 조건문을 수정해서 0살도 올바르게 처리하기
#### step2. 조건이 올바르게 수정되면 `calculatePrice` 를 `switch case` 문으로 변경 하기
#### step3. `calculatePrice` 함수에 bage 파라미터를 추가하여 age,bage 를 받도록하기
#### step4. `calculatePrice` 함수에 bage 값이 `"독립유공자"` 이면 `"무료"`라고 보여주기 (마치 0~3세 처럼)

---

###  멘토링시 각 step 을 구현한 이유와 해결과정을 설명해주 시면 좋습니다 🤡



# 🤡 팁!! 반드시 읽어주세요 !!  

### 1️⃣ 자료형 8가지 + typeof 결과 (자료형 8가지 종류 암기)
* JS 기본 자료형 8가지 말해주세요 하면 대답할수 있도록 
```javascript
typeof 42              // "number"
typeof "Hello"         // "string"
typeof true            // "boolean"
typeof [1, 2, 3]       // "object" ← 배열도 객체!
typeof {name: "김멘티"} // "object"
typeof function(){}    // "function"
typeof undefined       // "undefined"
typeof null            // "object" ← 이게 함정!
```

### 2️⃣ Falsy 값 7가지 (익숙해지기)
```javascript
Boolean(false)     // false
Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
Boolean(0n)        // false (BigInt)
```

### 3️⃣ || vs ?? 
```javascript
// || 연산자: falsy면 뒤로
"" || "기본값"        // "기본값" ← 빈 문자열은 falsy
0 || "기본값"         // "기본값" ← 0은 falsy
false || "기본값"     // "기본값" ← false는 falsy

// ?? 연산자: null/undefined만 뒤로
"" ?? "기본값"        // "" ← 빈 문자열 그대로 유지
0 ?? "기본값"         // 0 ← 숫자 0 그대로 유지  
false ?? "기본값"     // false ← 불린 false 그대로 유지
null ?? "기본값"      // "기본값" ← null만 교체
undefined ?? "기본값" // "기본값" ← undefined만 교체
```

## 💡 실무 예제

### 예제 1: 사용자 입력 처리 
```javascript
function processUser(user) {
    // 이름: 빈 문자열도 "익명"으로 처리하고 싶음
    const name = user?.name || "익명";
    
    // 나이: 0살도 유효한 값이므로 null/undefined만 기본값
    const age = user?.age ?? 18;
    
    // 활성상태: false도 유효한 값
    const isActive = user?.isActive ?? true;
    
    return { name, age, isActive };
}
```

### 예제 2: 설정값 검증
```javascript
const config = {
    debug: false,      // 의도적으로 끈 상태
    timeout: 0,        // 의도적으로 타임아웃 없음
    apiUrl: null,      // 아직 설정 안됨
    retries: undefined // 아직 설정 안됨
};

// 각각 적절한 연산자 선택
config.debug && console.log("디버그 모드");           // false면 실행 안됨
config.timeout || console.log("타임아웃 미설정");      // 0이므로 실행됨
config.apiUrl ?? console.log("API URL 미설정");       // null이므로 실행됨
```

### 예제 3 
```javascript
// ❌ 잘못된 예

if (user.age) {
    // 0살 아기는 조건에 안 걸림!
}

// ✅ 올바른 예  
if (user.age != null) {
    // 0살도 유효한 나이로 처리
}

// ❌ 잘못된 예
const config = settings.timeout || 5000;
// timeout이 0이면 의도와 다르게 5000이 됨

// ✅ 올바른 예
const config = settings.timeout ?? 5000;
// timeout이 0이면 0 유지, null/undefined만 5000
```



