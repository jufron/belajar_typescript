

test('object type test', () => {

  // * cara ini lebih disarankan jika struktur type objec tersebut panjang
  type aaa = {
    nama : string;
    age : number;
    email : string;
    alamat : string;
    negara : string;
  };

  const person1: aaa = {
    nama : 'james arthur',
    age : 39,
    email : 'james@gmail.com',
    alamat : 'oesapa',
    negara : 'indonesia'
  };

  // * cara ini lebih disarankan jika type objectnyca pendek
  const person: {nama: string, age: number} = {
    nama: 'james arthur',
    age: 30
  };

  expect(person).toHaveProperty('nama');
  expect(person).toHaveProperty('age');

  expect(person1).toHaveProperty('nama');
  expect(person1).toHaveProperty('age');
  expect(person1).toHaveProperty('email');
  expect(person1).toHaveProperty('alamat');
  expect(person1).toHaveProperty('negara');
});

test('contoh penggunaan interface object test', () => {

  interface Person {
    nama : string;
    age : number;
  };

  const person : Person = {
    nama : 'james arthur',
    age : 24
  };

  expect(person).toHaveProperty('nama');
  expect(person).toHaveProperty('age');

  expect(typeof person.nama).toBe('string');
  expect(typeof person.age).toBe('number');
});

test('type object dengan tupe data lain', () => {

  type Person = {
    nama : string;
    age : string | number;
    email : string;
    hobies : string[];
    message : (nama: string, email: string) => string;
  }

  const person : Person = {
    nama : 'james arthur',
    age : 24,
    email : 'james@gmail.com',
    hobies : ['membaca buku', 'bermain game', 'tidur', 'makan'],
    message : (nama: string, email: string) => `hallo naam saya ${nama} alamat email saya ${email}`
  }

  expect(person).toHaveProperty('nama');
  expect(person).toHaveProperty('age');
  expect(person).toHaveProperty('email');
  expect(person).toHaveProperty('hobies');
  expect(person).toHaveProperty('message');
});

test('tipe interface dengan tipe data lain', () => {

  interface Person {
    nama : string;
    age : string | number;
    email : string;
    hobies : string[];
    message : (nama: string, email: string) => string;
  };

  const person : Person = {
    nama : 'james arthur',
    age : 23,
    email : 'jamesarthur@gmail.com',
    hobies : ['membaca', 'bermain game', 'bermain bola', 'tidur'],
    message : (nama : string, email : string) => `hallo nama saya ${nama} dan alamat email saya ${email}`
  };

  expect(person).toHaveProperty('nama');
  expect(person).toHaveProperty('age');
  expect(person).toHaveProperty('email');
  expect(person).toHaveProperty('hobies');
  expect(person).toHaveProperty('message');

  expect(person.nama).toBe('james arthur');
  expect(person.age).toBe(23);
  expect(person.email).toBe('jamesarthur@gmail.com');

  expect(typeof person.nama).toBe('string');
  expect(typeof person.age).toBe('number');
  expect(typeof person.email).toBe('string');
  expect(typeof person.hobies).toBe('object');
  expect(typeof person.message).toBe('function');
});