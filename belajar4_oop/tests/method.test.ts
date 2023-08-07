


test('method test di class test 1', () => {

  class Costumer {
    readonly id: number;
    nama: string;
    email: string;

    constructor(id: number, nama: string, email: string = 'example@gmail.com') {
      this.id = id;
      this.nama = nama;
      this.email = email;
    }

    sayHello(nama: string) : string {
      return `hallo nama saya ${nama}, dan alamat email saya ${this.email}`;
    }
  }

  const costumer = new Costumer(123, 'james');
  const costumer2 = new Costumer(123, 'dodi', 'dodi@gmail.com');

  costumer.sayHello('james');
  costumer.sayHello('sinta');

  expect(typeof costumer.id).toBe('number');
  expect(typeof costumer.nama).toBe('string');
  expect(typeof costumer.email).toBe('string');

  expect(costumer).toBeInstanceOf(Costumer);

  expect(costumer).toHaveProperty('id');
  expect(costumer).toHaveProperty('nama');
  expect(costumer).toHaveProperty('email');

  expect(costumer.id).toBe(123);
  expect(costumer.nama).toBe('james');
  expect(costumer.email).toBe('example@gmail.com');

});