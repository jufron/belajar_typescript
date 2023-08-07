

type siswa = {
  id : string | number,
  nama : string,
  email : string,
  deskripsi? : string
};

test('test optional property1 siswa', () => {

  const erik : siswa = {
    id : 123,
    nama : 'erik',
    email : 'erik@gmail.com',
    deskripsi : 'ini adalah isi deskripsi'
  };

  const siska : siswa = {
    id : 321,
    nama : 'siska',
    email : 'siska@gmail.com'
  };

  expect(erik).toHaveProperty('id');
  expect(erik).toHaveProperty('nama');
  expect(erik).toHaveProperty('email');
  expect(erik).toHaveProperty('deskripsi');

  expect(typeof erik.id).toBe('number');
  expect(typeof erik.nama).toBe('string');
  expect(typeof erik.email).toBe('string');
  expect(typeof erik.deskripsi).toBe('string');

  expect(erik.deskripsi).not.toBeNull();
  expect(erik.deskripsi).toBe('ini adalah isi deskripsi');

  expect(siska).toHaveProperty('id');
  expect(siska).toHaveProperty('nama');
  expect(siska).toHaveProperty('email');

  expect(typeof siska.id).toBe('number');
  expect(typeof siska.nama).toBe('string');
  expect(typeof siska.email).toBe('string');

  expect(siska).not.toHaveProperty('deskripsi');
});