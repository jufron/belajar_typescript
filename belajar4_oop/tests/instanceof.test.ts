


test('instanceof test di typescript 1', () => {

  class FrondEnd {}

  class BackEnd {}

  const sinta = new FrondEnd();
  const erik = new BackEnd();

  expect(sinta instanceof FrondEnd).toBe(true);
  expect(sinta instanceof BackEnd).toBe(false);

  expect(erik instanceof FrondEnd).toBe(false);
  expect(erik instanceof BackEnd).toBe(true);
});