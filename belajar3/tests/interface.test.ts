


test('interface sederhana 1', () => {

  interface Person {
    nama : string;
    age : number;
    hoby? : string[];
  };

  const james : Person = {
    nama: 'james',
    age: 20,
    hoby: ['membaca', 'mendengarkan musik']
  };

  expect(james).toHaveProperty('nama');
  expect(james).toHaveProperty('age');
  expect(james).toHaveProperty('hoby');

  expect(typeof james.nama).toBe('string');
  expect(typeof james.age).toBe('number');
  expect(typeof james.hoby).toBe('object');

  expect(james.nama).toBe('james');
  expect(james.age).toBe(20);
});

test('interface bersarang 2', () => {

  interface Address {
    street: string;
    city: string;
  }

  interface Person {
    nama: string;
    age: number;
    address: Address;
  };

  const james : Person = {
    nama: 'james',
    age: 18,
    address: {
      street: 'sikumana',
      city: 'kupang'
    }
  };

  expect(james).toHaveProperty('nama');
  expect(james).toHaveProperty('age');
  expect(james).toHaveProperty('address');
  expect(james.address).toHaveProperty('street');
  expect(james.address).toHaveProperty('city');

  expect(typeof james.nama).toBe('string');
  expect(typeof james.age).toBe('number');
});

test('interface untuk fungsi 3', () => {

  interface Myfunct {
    (number1: number, number2: number) : number;
  }

  interface Myfunct1 {
    () : string;
  }

  const tambah: Myfunct = (number1: number, number2: number) => number1 + number2;
  const kurang: Myfunct = (number1: number, number2: number) => number1 - number2;
  const kali: Myfunct = (number1: number, number2: number) => number1 * number2;

  const message: Myfunct1 = () => `hallo selamat malam`;

  expect(tambah(10, 10)).toBe(20);
  expect(typeof tambah(10, 10)).toBe('number');
  
  expect(kurang(5, 2)).toBe(3);
  expect(typeof kurang(5,2)).toBe('number');

  expect(kali(5, 10)).toBe(50);
  expect(typeof kali(5, 10)).toBe('number');

  expect(message()).toBe('hallo selamat malam');
  expect(typeof message()).toBe('string');
});

test('interface untuk di class 4', () => {
  
  interface Shape {
    getArea() : number;
  }

  class Circle implements Shape {
    constructor(private radius: number) {}

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectanggle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
      return this.width * this.height;
    }
  }

  const circle = new Circle(5);
  const rectanggle = new Rectanggle(8, 10);

  expect(typeof circle.getArea()).toBe('number');
  expect(typeof circle.getArea()).toBe('number');
  expect(circle.getArea()).toBe(78.53981633974483);
  expect(circle.getArea()).toBe(78.53981633974483);
});