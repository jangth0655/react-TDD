const ProductService = require('../product_service_no_di');

const ProductClient = require('../product_client');

jest.mock('../product_Client.js');

// 단위 테스트는 서로 모듈간의 상호작을 테스트 ❌
// 네트워크에 의존하는 테스트는 좋지 않다.
describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true },
    { item: 'banana', available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});
