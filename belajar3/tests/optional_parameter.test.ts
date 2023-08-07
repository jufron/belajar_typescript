

// * optional parameter
// * untuk optional propertis menggunakan tanda atau simbol ? (tanda tanya di akhir nama variabel atau parameter argument)

test('test optional parameter', () => {

  function sayHello(firstName: string, lastName?: string) : string {
  if (lastName === undefined) return `hallo nama saya ${firstName}`;
    return `hallo nama saya ${firstName} ${lastName}`;
  }

  expect(sayHello('james')).toBe('hallo nama saya james');
  expect(typeof sayHello('james')).toBe('string');
  expect(sayHello('james')).not.toBeNull();

  expect(sayHello('james', 'arthur')).toBe('hallo nama saya james arthur');
  expect(typeof sayHello('james', 'arthur')).toBe('string');
  expect(sayHello('james', 'arthur')).not.toBeNull();
});


test('optional parameter using interface test', () => {

  interface Person {
    nama: string;
    age: string | number;
    email?: string;
  };

  const person1 : Person = {
    nama : 'james arthur',
    age : 20,
    email : 'jamesarthur@gmail.com'
  };

  const person2 : Person = {
    nama : 'siska putri',
    age : 19
  };

  expect(person1).toHaveProperty('nama');
  expect(person1).toHaveProperty('age');
  expect(person1).toHaveProperty('email');

  expect(typeof person1.nama).toBe('string');
  expect(typeof person1.age).toBe('number');
  expect(typeof person1.email).toBe('string');

  expect(person1.nama).toBe('james arthur');
  expect(person1.age).toBe(20);
  expect(person1.email).toBe('jamesarthur@gmail.com');

  expect(person2).toHaveProperty('nama');
  expect(person2).toHaveProperty('age');

  expect(typeof person2.nama).toBe('string');
  expect(typeof person2.age).toBe('number');

  expect(person2.nama).toBe('siska putri');
  expect(person2.age).toBe(19);
});

test('optional parameter using type test', () => {

  type Person = {
    nama : string;
    email? : string;
  };

  const person1 : Person = {
    nama : 'james arthur'
  };

  const person2 : Person = {
    nama : 'siska putri',
    email : 'siska@gmail.com'
  };

  expect(person1).toHaveProperty('nama');
  expect(typeof person1.nama).toBe('string');
  expect(person1.nama).toBe('james arthur');

  expect(person2).toHaveProperty('nama');
  expect(person2).toHaveProperty('email');
  expect(typeof person2.nama).toBe('string');
  expect(typeof person2.email).toBe('string');
  expect(person2.nama).toBe('siska putri');
  expect(person2.email).toBe('siska@gmail.com');
});