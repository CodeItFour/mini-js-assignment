import { observable, observe } from "../reactive";

async function wait (time = 1000 / 60) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

describe("reactive test", () => {
  it("observable로 만든 객체가 observe 내에서 사용될 경우", async () => {
    const state = observable({ a: 1, b: 2 });

    let computed = '';

    function compute() {
       computed = `a + b = ${state.a + state.b}`;
    }

    observe(compute);

    expect(computed).toBe(`a + b = 3`);

    await wait();

    state.b = 11;


    expect(computed).toBe(`a + b = 12`);

    state.a = 18;

    await wait();
    expect(computed).toBe(`a + b = 30`);
  });

})