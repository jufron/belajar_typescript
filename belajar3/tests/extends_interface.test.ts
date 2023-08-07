


test('extending interface di typescript tahap 1', () => {

  interface Animal {
    nama: string;
    makeSound(): void;
  }

  interface Dog extends Animal {
    bread: string;
  }

  const blaki: Dog = {
    nama: 'blaki',
    makeSound() {
      console.log('goog goog')
    },
    bread: 'labrador'
  };

  expect(blaki).toHaveProperty('nama');
  expect(blaki).toHaveProperty('makeSound');
  expect(blaki).toHaveProperty('bread');
});

test('extending interface di typescript tahap 2', () => {

  interface Mobil {
    roda: number;
    brand: string;
  }

  interface Suv extends Mobil {
    seri: string | number;
    tipe: string;
  }

  enum Tipe {
    bak= 'bak',
    box= 'box'
  };

  interface Truck extends Mobil {
    brand: string;
    seri: string | number;
    tipe: Tipe;
  }

  const fortuner: Suv = {
    brand: 'toyota',
    seri: 'TRD sport',
    roda: 4,
    tipe: '4 x 4'
  };

  expect(fortuner).toHaveProperty('brand');
  expect(fortuner).toHaveProperty('seri');
  expect(fortuner).toHaveProperty('roda');
  expect(fortuner).toHaveProperty('tipe');

  expect(typeof fortuner.brand).toBe('string');
  expect(typeof fortuner.seri).toBe('string');
  expect(typeof fortuner.roda).toBe('number');
  expect(typeof fortuner.tipe).toBe('string');

  expect(fortuner.brand).toBe('toyota');
  expect(fortuner.seri).toBe('TRD sport');
  expect(fortuner.roda).toBe(4);
  expect(fortuner.tipe).toBe('4 x 4');

  const fuso: Truck = {
    brand: 'midshubishi',
    roda: 6,
    seri: 'fuso',
    tipe: Tipe.box
  };

  expect(fuso).toHaveProperty('brand');
  expect(fuso).toHaveProperty('roda');
  expect(fuso).toHaveProperty('seri');
  expect(fuso).toHaveProperty('tipe');

  expect(typeof fuso.brand).toBe('string');
  expect(typeof fuso.roda).toBe('number');
  expect(typeof fuso.seri).toBe('string');
  expect(typeof fuso.tipe).toBe('string');

});

test('multiple interface extends', () => {

  interface BackEnd {

  }

  interface FrondEnd {

  }

  interface DatabaseAdmin {

  }

  interface Tester {

  }

  interface Github {

  }

  interface VsCode {

  }

  interface Programmer extends BackEnd, Github, VsCode {

  }

  interface Programmer extends FrondEnd, Github, VsCode {

  }

  interface Programmer extends DatabaseAdmin, Github, VsCode {

  }
});