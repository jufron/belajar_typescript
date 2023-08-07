

test('test pemahaman tentang null dan undefined 1', () => {

  let nama: string | null | undefined;

  nama = null;
  expect(nama).toBe(null);
  expect(typeof nama).toBe('object');

  nama = 'james';
  expect(nama).toBe('james');
  expect(typeof nama).toBe('string');

  nama = undefined;
  expect(nama).toBe(undefined);
  expect(typeof nama).toBe('undefined');
});

test('test pemahaman tentang undefined', () => {

  let age : number | undefined | null;

  function getAge () : number | undefined | null {
    return age;
  }

  age = 123;
  getAge();
  expect(age).toBe(123);
  expect(typeof age).toBe('number');

  age = undefined;
  getAge();
  expect(age).toBe(undefined);
  expect(typeof age).toBe('undefined');

  age = null;
  getAge();
  expect(age).toBe(null);
  expect(typeof age).toBe('object');
});