const Calculator = require('../../calculator');

/**
 * 각각의 테스트는 서로 독립적으로 만드는것이 중요하다.
 * 이전에 했던 테스트가 다음 테스트에 영향을 미치지 않도록 해야한다.
 */
describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('init with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('set', () => {
    calculator.set(2);
    expect(calculator.value).toBe(2);
  });

  it('clear', () => {
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  it('subTrack', () => {
    calculator.add(10);
    calculator.subtract(2);
    expect(calculator.value).toBe(8);
  });

  it('multiply', () => {
    calculator.add(2);
    calculator.multiply(3);
    expect(calculator.value).toBe(6);
  });

  describe('divides', () => {
    it('divide', () => {
      calculator.add(8);
      calculator.divide(2);
      expect(calculator.value).toBe(4);
    });

    it('0/0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    it('1/0', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });
  });

  it('add', () => {
    calculator.add(2);
    calculator.add(2);
    expect(calculator.value).toBe(4);
  });

  // add에다가 describe 해줘도 된다.
  it('throw error', () => {
    expect(() => calculator.add(101)).toThrow(
      'Value can not be greater than 100'
    );
  });
});
