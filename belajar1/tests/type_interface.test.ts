


// * pembuatan interface sama persis dengan alias yang membedakan dengan interface sebelum membuat harus diawali dengan keywoard interface
interface person {
  readonly id : string | number,
  nama : string,
  email : string,
  address? : string,
  lulus : boolean,
  readonly agama : string
};

const dodi : person = {
  id : 123,
  nama : 'dodi',
  email : 'dodi@gmail.com',
  address : 'sikumana',
  lulus : true,
  agama : 'kristen'
};

const ida : person = {
  id : 1234,
  nama : 'ida',
  email : 'ida@gmail.com',
  lulus : true,
  agama : 'kristen'
};

test('test interface', () => {
  expect(dodi).toHaveProperty('id');
  expect(dodi).toHaveProperty('nama');
  expect(dodi).toHaveProperty('email');
  expect(dodi).toHaveProperty('address');
  expect(dodi).toHaveProperty('lulus');
  
  expect(typeof dodi.id).toBe('number');
  expect(typeof dodi.nama).toBe('string');
  expect(typeof dodi.email).toBe('string');
  expect(typeof dodi.address).toBe('string');
  expect(typeof dodi.lulus).toBe('boolean');
  
  expect(ida).toHaveProperty('id');
  expect(ida).toHaveProperty('nama');
  expect(ida).toHaveProperty('email');
  expect(ida).toHaveProperty('lulus');

  expect(typeof ida.id).toBe('number');
  expect(typeof ida.nama).toBe('string');
  expect(typeof ida.email).toBe('string');
  expect(typeof ida.lulus).toBe('boolean');
});