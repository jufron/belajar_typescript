

it('test menampilkan hello world', () => {

  function hello(nama : string) : string {
    return nama;
  }

  expect(hello('hello world')).toBe('hello world');
  expect(hello(typeof hello('hello world'))).toBe('string');
  
});