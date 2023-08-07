



test('error handling test 1', () => {

  class ErrorValidation extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function doubleIt(value: number): number {
    if (value <= 0) {
      throw new ErrorValidation('value cannot be less than 0');
    }
    return value * 2;
  }

  expect(doubleIt(0)).toThrowError('value cannot be less than 0');
  expect(doubleIt(5)).toBe(10);
});