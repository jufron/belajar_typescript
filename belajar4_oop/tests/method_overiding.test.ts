

test('method overiding test 1', () => {

  interface hasName {
    nama: string;
  }

  interface hasSayHello {
    sayHello(nama: string) : void;
  }

  class Programmer implements hasName, hasSayHello {
    nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }

    sayHello(nama: string) : void {
      console.log(`hallo ${nama} nama saya ${this.nama}`);
    }
  }

  class FrondEnd extends Programmer implements hasSayHello {
    devisi: string;

    constructor(nama: string, devisi: string) {
      super(nama);
      this.devisi = devisi
    }

    sayHello(nama: string): void {
      console.log(`hallo ${nama}, saya tim frond-end`);
    }
  }

  class BackEnd extends Programmer implements hasSayHello {
    devisi : string;

    constructor(nama: string, devisi: string) {
      super(nama);
      this.devisi = devisi;
    }

    sayHello(nama: string): void {
      console.log(`hallo ${nama}, saya tim back-end`);
    }
  }

  const erik = new FrondEnd('erik', 'frond-end');
  const sinta = new FrondEnd('sinta', 'frond-end');

  const dodi = new BackEnd('dodi', 'back-end');
  const andi = new BackEnd('andi', 'back-end');

  expect(erik).toBeInstanceOf(FrondEnd);
  expect(typeof erik.nama).toBe('string');
  expect(typeof erik.devisi).toBe('string');

  expect(erik).toHaveProperty('nama');
  expect(erik).toHaveProperty('devisi');

  expect(erik.nama).toBe('erik');
  expect(erik.devisi).toBe('frond-end');
 
  erik.sayHello('erik');
});