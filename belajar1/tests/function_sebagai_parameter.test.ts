


test('function sebagai parameter membuat uppercase', () => {

  function sayHello(nama: string, filter : (nama : string) => string ) : string {
    return `hello ${filter(nama)}`;
  }

  function toUpper(nama : string) : string {
    return nama.toUpperCase();
  }

  expect(sayHello('james', toUpper)).toBe('hello JAMES');
  expect(sayHello('sinta', (nama : string) : string => nama.toUpperCase())).toBe('hello SINTA');
});

test('function sebagai parameter membuat lowercase', () => {
  function sayHello(nama: string, funct: (nama : string) => string) : string {
    return `hallo ${funct(nama)}`;
  }

  expect(sayHello('SINTA', (nama : string) : string => nama.toLowerCase())).toBe('hallo sinta');
});