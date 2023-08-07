


test('super di method test 1', () => {

  interface Hasname {
    nama: string;
  }

  interface HasSayHello {
    sayHello(nama: string) : void;
  }

  class Programmer implements Hasname, HasSayHello {
    
    nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }

    sayHello(nama: string): void {
      console.log(`hallo ${nama}, nama saya ${this.nama}`);
    }
  }

  class FrondEnd extends Programmer implements HasSayHello {

    devisi: string;

    constructor(nama: string, devisi: string) {
      super(nama);
      this.devisi = devisi;
    }

    sayHello(nama: string): void {
      super.sayHello(nama);
      console.log(`hallo ${nama} saya di tim frond-end`);
    }
  }

  class BackEnd extends Programmer implements HasSayHello {
    devisi: string;

    constructor(nama: string, devisi: string) {
      super(nama);
      this.devisi = devisi;
    }

    sayHello(nama: string): void {
      super.sayHello(nama);
      console.log(`hallo ${nama} saya di tim back-end`);
    }
  }

  const erik = new FrondEnd('erik', 'frond-end');
  const sinta = new BackEnd('sinta', 'back-end');

  expect(erik).toBeInstanceOf(FrondEnd);
  expect(erik).toHaveProperty('nama');
  expect(erik).toHaveProperty('devisi');

  expect(typeof erik.nama).toBe('string');
  expect(typeof  erik.devisi).toBe('string');

  expect(erik.nama).toBe('erik');
  expect(erik.devisi).toBe('frond-end');
});