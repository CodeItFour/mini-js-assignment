// Step 1: Object.assign 구현하기 - myObjectAssign 를 완성 해주세요
function myObjectAssign(target, ...sources) {
    // 👈여기에 구현하세요

console.log( )

    // - target → 속성을 붙여 넣을 대상 객체
    // - sources → target에 덮어씌울 객체(들)
    // 🚨 힌트: for문과 객체 키접근 사용

    // 🚨 ...sources 는 Rest Parameter 기법 아래와같이 넘어온 모든 인자를 배열로 묶어준다
    // [EXAMPLE]:
    // function sum(...numbers) {
    //     console.log(numbers);
    // }
    //
    // sum(1, 2, 3, 4);
    // => 출력: [1, 2, 3, 4]   ← numbers 가 배열이 됨

    return target
}

function testStep1() {
    try {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };
        
        const result = myObjectAssign({}, obj1, obj2, obj3);
        
        if (JSON.stringify(result) === JSON.stringify({ a: 1, b: 2, c: 3 })) {
            document.getElementById('result1').textContent = '✅ 성공! myObjectAssign이 올바르게 작동합니다.';
        } else {
            document.getElementById('result1').textContent = '❌ 실패! 다시 시도해보세요.';
        }
    } catch (error) {
        document.getElementById('result1').textContent = '❌ 에러: ' + error.message;
    }
}

// Step 2: 깊은복사 구현하기 - 예제 객체(original)를 복사해주세요
function myDeepCopy(obj) {
    // 👈여기에 구현하세요
    // 🚨 힌트: obj 가 falsy 일 체크, typeof 체크, 배열 객체 일때 체크, 재귀

}

function testStep2() {
    try {
        const original = {
            name: 'test',
            numbers: [1, 2, 3],
            nested: { value: 'deep' }
        };
        
        const copied = myDeepCopy(original);
        copied.numbers.push(4);
        copied.nested.value = 'changed';
        
        if (original.numbers.length === 3 && original.nested.value === 'deep') {
            document.getElementById('result2').textContent = '✅ 성공! 깊은복사가 올바르게 작동합니다.';
        } else {
            document.getElementById('result2').textContent = '❌ 실패! 원본이 변경되었습니다. 다시 시도해보세요.';
        }
    } catch (error) {
        document.getElementById('result2').textContent = '❌ 에러: ' + error.message;
    }
}

// Step 3: 비교하기
function compareCopyMethods() {
    // 👈여기에 구현하세요
    // const shallow = ?
    // const deep = ?
}

function testStep3() {
    try {
        const original = { name: 'John', info: { age: 25 } };
        
        //  구현해야 할 부분
        const shallow = { ...original };  // 힌트로 제공
        const deep = myDeepCopy(original);
        
        shallow.info.age = 30;
        deep.info.age = 35;
        
        const result = `원본 age: ${original.info.age}
        얕은복사 후 원본이 ${original.info.age === 30 ? '변경됨' : '보존됨'}
        깊은복사는 원본을 ${original.info.age === 25 ? '보존함' : '변경함'}`;
        
        document.getElementById('result3').textContent = result;
    } catch (error) {
        document.getElementById('result3').textContent = '❌ 에러: ' + error.message;
    }
}