import { callMe } from "../src/function_overloading";

// * function overloading = membuat function yang sama tetapi parameter valuenya berbeda jauh

test('call function overloading type number', () => {
  expect(callMe(10)).toBe(10);
  expect(typeof callMe(10)).toBe('number');
});

test('call function overloading type string', () => {
  expect(callMe('sepuluh')).toBe('sepuluh');
  expect(typeof callMe('sepuluh')).toBe('string');
});

