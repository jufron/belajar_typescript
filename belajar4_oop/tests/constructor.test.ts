


test('constructor class test', () => {

  class Costumer {   
    constructor() {
      console.log('create new constructor');
    }
  }

  class Order {
    constructor() {
      console.log('create new constructor');
    }
  }

  class Product {
    constructor() {
      console.log('create new constructor');
    }
  }

  const costumer = new Costumer();
  const order = new Order();
  const product = new Product();

  expect(costumer).toBeInstanceOf(Costumer);
  expect(order).toBeInstanceOf(Order);
  expect(product).toBeInstanceOf(Product);
});


test('constructor class & property test', () => {

  class Costumer {
    readonly id: number;
    nama: string;
    email: string;
    alamat: string[];
    wallet: boolean;
    constructor(
      id: number, 
      nama: string, 
      email: string, 
      alamat: string[], 
      wallet: boolean = false) {
      this.id = id;
      this.nama = nama;
      this.email = email;
      this.alamat = alamat;
      this.wallet = wallet;
    }
  }

  const costumer = new Costumer(123, 'james', 'james@gmail.com', ['sikumana', 'jalur 40'], true);
  const costumer2 = new Costumer(345, 'sinta', 'sinta@gmail.com', ['oesapa', 'pulau indah']);

  expect(costumer.id).toBe(123);
  expect(costumer.nama).toBe('james');
  expect(costumer.email).toBe('james@gmail.com');
  expect(costumer.alamat).toContain('sikumana');
  expect(costumer.alamat).toContain('jalur 40');
  expect(costumer.wallet).toBe(true);

  expect(typeof costumer.id).toBe('number');
  expect(typeof costumer.nama).toBe('string');
  expect(typeof costumer.email).toBe('string');
  expect(typeof costumer.alamat).toBe('object');
  expect(typeof costumer.wallet).toBe('boolean');

  expect(costumer).toBeInstanceOf(Costumer);

  expect(costumer).toHaveProperty('id');
  expect(costumer).toHaveProperty('nama');
  expect(costumer).toHaveProperty('email');
  expect(costumer).toHaveProperty('alamat');
  expect(costumer).toHaveProperty('wallet');

  expect(costumer2.id).toBe(345);
  expect(costumer2.nama).toBe('sinta');
  expect(costumer2.email).toBe('sinta@gmail.com');
  expect(costumer2.alamat).toContain('oesapa');
  expect(costumer2.alamat).toContain('pulau indah');
  expect(costumer2.wallet).toBe(false);

  expect(typeof costumer2.id).toBe('number');
  expect(typeof costumer2.nama).toBe('string');
  expect(typeof costumer2.email).toBe('string');
  expect(typeof costumer2.alamat).toBe('object');
  expect(typeof costumer2.wallet).toBe('boolean');

  expect(costumer2).toBeInstanceOf(Costumer);

  expect(costumer2).toHaveProperty('id');
  expect(costumer2).toHaveProperty('nama');
  expect(costumer2).toHaveProperty('email');
  expect(costumer2).toHaveProperty('alamat');
  expect(costumer2).toHaveProperty('wallet');
});