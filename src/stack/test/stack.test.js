const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    // given
    stack = new Stack();
  });

  //assertion, then
  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allow to push item', () => {
    stack.push('banana');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throw an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item and remove it from the stack', () => {
      stack.push('banana');
      stack.push('apple');
      expect(stack.pop()).toBe('apple');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throw an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('banana');
      stack.push('apple');
      expect(stack.pop()).toBe('apple');
      expect(stack.size()).toBe(1);
    });
  });
});
