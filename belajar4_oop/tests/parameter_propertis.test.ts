


test('parameter propertis test', () => {

  class Person {

    constructor(public nama: string = '') {

    }
  }

  const james = new Person('james');
  console.log(james.nama);

  expect(james.nama).toBe('james');
});

test('multiple parameter propertis test', () => {
  class Person {
    constructor(
      public nama: string = '', 
      public email: string = 'example@gmail.com', 
      public umur: number = 0
      ) {

    }
  }

  const erik = new Person('erik', 'erik@gmail.com', 20);

  console.log(erik.nama);
  console.log(erik.email);
  console.log(erik.umur);

  expect(erik.nama).toBe('erik');
  expect(erik.email).toBe('erik@gmail.com');
  expect(erik.umur).toBe(20);
});