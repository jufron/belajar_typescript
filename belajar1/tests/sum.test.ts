import sum from "../src/sum";


describe('display hello world', () => {
  test("hello world", () => {
    expect('hello world').toBe('hello world');
  });
});

describe("display result from 2 + 1 expect 3", () => {
  test('2 + 1 equals 3', () => {
    expect(sum(2, 1)).toBe(3);
  });
});