

test('get and set value from property class 1', () => {

  class Product {
    _nama: string | undefined;
    _price: number | string | undefined;

    get nama() : string {
      return this._nama ? this._nama : 'empty';
    }

    set nama (value: string) {
      if (value !== '') {
        this._nama = value;
      }
    }

    get price() {
      return this._price ? this._price : 'empty';
    }

    set price(value: number | string) {
      if (value !== '') {
          this._price = value;
      }
    }
  }

  const product = new Product();
  product.nama = 'dodi';
  product.price = 100;
  expect(typeof product.nama).toBe('string');
  expect(typeof product.price).toBe('number');
  
  expect(product).toBeInstanceOf(Product);

  expect(product.nama).toBe('dodi');
  expect(product.price).toBe(100);
});

test('get end set value from property class 2', () => {

  class Costumer {
    _naam: string | undefined;
    _email: string | undefined;

    get nama () {
      return this._naam ? this._naam : 'empty';
    }

    set nama (value: string) {
      if (value !== '') {
        this._naam = value;
      }
    }

    get email () {
      return this._email ? this._email : 'property not excist';
    }

    set email (value: string) {
      if (value !== '') {
        this._naam = value;
      }
    }
  }

  const erik = new Costumer();
  erik._naam = 'erik';
  erik._email = 'erik@gmail.com';

  expect(typeof erik.nama).toBe('string');
  expect(typeof erik.email).toBe('string');

  expect(erik).toBeInstanceOf(Costumer);
  
  expect(erik.nama).toBe('erik');
  expect(erik.email).toBe('erik@gmail.com');
});