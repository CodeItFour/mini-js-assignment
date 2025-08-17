const score = 0;           // 0점도 유효한 점수
const name = "";           // 빈 이름은 "익명"으로
const url = null;          // 아직 설정 안됨
const isVip = false;       // 의도적으로 일반회원

// TODO: 올바른 연산자 선택
const finalScore = score ?? 100;    // 0점 유지하고 싶음
const finalName = name || "익명";    // 빈 이름은 익명으로
const finalUrl = url ?? "/default"; // null만 기본값으로