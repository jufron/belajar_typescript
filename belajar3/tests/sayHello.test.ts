

// ? test menampilkan hello world
test('test displaying hello world using function', () => {

  function sayHello(value : string) : string {
    return value;
  }

  expect(sayHello('hello world')).toBe('hello world');
  expect(typeof sayHello('hallo')).toBe('string');
  expect(sayHello('james')).not.toBeNull();
});