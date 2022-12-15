const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client.js');

/**
 * 로그인 했는지 안했는지는 스텁만 가지고 할 수 없다.
 */
describe('UserService', () => {
  const login = jest.fn(async () => {
    'success';
  });
  let userService;

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
    UserClient.mockClear();
    login.mockClear();
  });

  it('로그인 호출 한번', async () => {
    await userService.login('abc', 'abc');
    expect(login).toBeCalledTimes(1);
  });

  it('다시 로그인 호출하여도 한번만 호출', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');
    expect(login).toBeCalledTimes(1);
  });
});
