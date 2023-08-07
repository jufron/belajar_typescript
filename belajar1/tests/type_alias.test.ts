import { 
  kategory, 
  product, 
  person, 
  jenis_kelamin, 
  alamat, 
  agama
} from "../src/type_alias";


test('test product', () => {

  const kategory : kategory = {
    id : '1',
    nama : 'elektronik'
  };

  const product : product = {
    id : '1',
    name : 'tv samsung',
    price : 1200,
    kategory : kategory
  };

  expect(product.id).toBe('1');
  expect(typeof product.id).toBe('string');
});


test('test person', () => {

  const jenis_kelamin : jenis_kelamin = {
    id : '123',
    nama : 'laki-laki'
  };

  const alamat : alamat = {
    alamatTinggal : 'haukoto',
    rt : '011',
    rw : '003'
  }

  const agama : agama = {
    id : '1234',
    nama : 'kristen protestan'
  }

  const person1 : person = {
    id : 123,
    nama : 'sinta',
    jenis_kelamin : jenis_kelamin,
    agama : agama,
    alamat : alamat
  };

  const person2 : person = {
    id : '12345',
    nama : "edi",
    jenis_kelamin : jenis_kelamin,
    agama : agama,
    alamat : alamat
  }

  expect(typeof person1.id).toBe('number');
  expect(person1.id).toBe(123);

  expect(typeof person2.id).toBe('string');
  expect(person2.id).toBe('12345');

  expect(typeof agama.id).toBe('string');
  expect(agama.id).toBe('1234');
});