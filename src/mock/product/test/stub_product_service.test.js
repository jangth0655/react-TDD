const StubProductService = require('../stub_product_service');
const StubProductClient = require('./stub_product_client');

describe('ProductService-Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new StubProductService(new StubProductClient());
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});
