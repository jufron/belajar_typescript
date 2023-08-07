


test('should return for value string for function', () => {

  function sayHello (nama : string) : string {
    return `hallo ${nama}`;
  }

  expect(sayHello('james')).toBe('hallo james');
  expect(typeof sayHello('james')).toBe('string');
});

test('should void for function', () => {

  function say (nama : string, email : string) : void {
    console.log(`hallo ${nama}, alamat email saya ${email}`);
  }

  say('sinta', 'sinta@gmail.com');

});

test('function default value', () => {
  
  function sayHello(nama : string = 'user') : string {
    return `hallo ${nama}`;
  }

  expect(sayHello('james')).toBe('hallo james');
  expect(sayHello()).toBe('hallo user');
});

test('function sum using rest parameter', () => {

  function sum(...values : number[]) : number {
    let total = 0;
    for(const value of values) {
      total += value;
    }
    return total;
  }

  expect(sum(1,2,3,4,5)).toBe(15);
  expect(sum(1,1,1,1,1)).toBe(5);
});

test('function optional parameter', () => {

  function sayHello(firstName : string, lastName?: string, email? : string) : string {
    if (lastName === undefined && email === undefined) return `hallo nama saya ${firstName}`;
    if (lastName === undefined || lastName === '') return `hallo nama saya ${firstName} dan email saya ${email}`;
    if (email === undefined) return `hallo nama saya ${firstName} ${lastName}`;
    return `hallo nama saya ${firstName} ${lastName} dan email saya ${email}`;
  }

  expect(sayHello('indra')).toBe('hallo nama saya indra');
  expect(sayHello('sinta', '','sinta@gmail.com')).toBe('hallo nama saya sinta dan email saya sinta@gmail.com');
  expect(sayHello('erik', 'tenis')).toBe('hallo nama saya erik tenis');
  expect(sayHello('james', 'maubila', 'james@gmail.com')).toBe('hallo nama saya james maubila dan email saya james@gmail.com');

});