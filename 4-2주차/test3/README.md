# Test3 - 리액티브 프로그래밍

## 개요
이 테스트는 JavaScript에서 리액티브 프로그래밍 개념을 구현하는 과제입니다.

## 파일 구조
```
test3/
├── reactive.js          # observable과 observe 함수 구현
├── __tests__/
│   └── reactive.spec.js  # 테스트 파일
└── README.md            # 이 파일
```

## 테스트 실행 방법

### 1. 프로젝트 루트로 이동
```bash
cd /path/to/mini-js-assignment-two-assemble
```

### 2. 의존성 설치 (최초 1회)
```bash
npm install
```

### 3. 테스트 실행
```bash
npm test
```

### 4. 특정 테스트만 실행
```bash
npm test -- --testPathPattern="4-2주차/test3"
```

## 테스트 내용
- `observable` 함수로 생성된 객체의 속성이 변경될 때
- `observe` 함수 내에서 자동으로 반응하여 연산이 재실행되는지 확인

## 구현해야 할 기능
1. `observable(obj)`: 객체를 리액티브하게 만드는 함수
2. `observe(callback)`: 콜백 함수를 관찰하여 자동 재실행하는 함수