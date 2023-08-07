

test('sayHello name', () => {

  function sayHello (nama? : string | null) {
    if (nama) {
      return `hallo ${nama}`;
    } else if (nama === null) {
      return null;
    } else {
      return `hallo`;
    }
  }

  expect(sayHello('james')).toBe('hallo james');
  expect(typeof sayHello('james')).toBe('string');
  expect(sayHello('james')).not.toBeNull();

  expect(sayHello(null)).toBeNull();
  expect(sayHello(null)).toBe(null);
});
