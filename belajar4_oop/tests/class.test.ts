

test('calling instance class blueprint', () => {

  class Costumer {}
  class Order {}
  class Product {}

  const costumer = new Costumer();
  const order = new Order();
  const product = new Product();

  expect(costumer).toBeInstanceOf(Costumer);
  expect(order).toBeInstanceOf(Order);
  expect(product).toBeInstanceOf(Product);
});