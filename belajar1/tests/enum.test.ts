import { costumer, costumerType } from "../src/enum";




test('enum check', () => {
  
  const erik : costumer = {
    id : 123,
    name : 'erik',
    type : costumerType.GOLD
  };

  expect(erik).toHaveProperty('id');
  expect(erik).toHaveProperty('name');
  expect(erik).toHaveProperty('type');

  expect(typeof erik.id).toBe('number');
  expect(typeof erik.name).toBe('string');
  expect(typeof erik.type).toBe('string');
});