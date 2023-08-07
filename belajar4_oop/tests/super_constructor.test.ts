


test('super constructor test', () => {

  class Person {
    nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }
  }

  class Employee extends Person {
    depertement: string;

    constructor(nama: string, depertement: string) {
      super(nama);
      this.depertement = depertement;
    }
  }

  const erik = new Employee('erik', 'developer');
  const sinta = new Employee('sinta', 'content creator');

  expect(erik.nama).toBe('erik');
  expect(erik.depertement).toBe('developer');

  expect(sinta.nama).toBe('sinta');
  expect(sinta.depertement).toBe('content creator');

});

