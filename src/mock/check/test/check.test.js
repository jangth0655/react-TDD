const Check = require('../check.js');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    Check(() => true, onSuccess, onFail);

    // 목함수는 목이라는 데이터에 호출된 횟수가 한번은 호출되어야한다.
    /* expect(onSuccess.mock.calls.length).toBe(1); */

    expect(onSuccess).toHaveBeenCalledTimes(1);

    /*     expect(onFail.mock.calls.length).toBe(0); */

    expect(onFail).toHaveBeenCalledTimes(0);

    // calls에 첫번째로 호출된 함수에 첫번째 인자는 'yes'
    /* expect(onSuccess.mock.calls[0][0]).toBe('yes'); */
    expect(onSuccess).toHaveBeenLastCalledWith('yes');
  });

  it('should call onSuccess when predicate is true', () => {
    Check(() => false, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(0);

    expect(onFail).toHaveBeenCalledTimes(1);

    expect(onFail).toHaveBeenLastCalledWith('no');
  });
});
