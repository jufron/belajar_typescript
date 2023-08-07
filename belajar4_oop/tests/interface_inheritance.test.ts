

test('interface inheritance test 1', () => {

  interface hasName {
    nama: string;
  }

  interface sayHello {
    sayHello(name: string) : void;
  }

  class Person implements hasName, sayHello {

    nama: string;
    
    constructor(nama: string = '') {
      this.nama = nama
    }

    sayHello(nama: string): void {
      console.log(`hallo ${nama}`);
    }
    
  }  

  const james = new Person();
  const sinta = new Person();

  james.nama = 'james';
  james.sayHello('james');

  sinta.nama = 'sinta';
  james.sayHello('sinta');

  expect(james).toBeInstanceOf(Person);
  expect(sinta).toBeInstanceOf(Person);

  expect(typeof james.nama).toBe('string');
  expect(typeof sinta.nama).toBe('string');

  expect(james).toHaveProperty('nama');
  expect(sinta).toBeInstanceOf('nama');

  expect(james.nama).toBe('james');
  expect(sinta.nama).toBe('sinta');
});