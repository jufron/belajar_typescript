import displayResult from "../src/type_union";


test('data type union', () => {

  let data : string | number;

  data = 'james';
  expect(data).toBe('james');
  expect(typeof data).toBe('string');

  data = 123;
  expect(data).toBe(123);
  expect(typeof data).toBe('number');

  expect(displayResult('james')).toBe('james');
  expect(typeof displayResult('james')).toBe('string');

  expect(displayResult(3)).toBe(3);
  expect(typeof displayResult(3)).toBe('number');
});