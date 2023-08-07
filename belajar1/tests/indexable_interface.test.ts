

test('test indexable interface array', () => {

  interface stringArray {
    [index: number] : string
  };

  const siswa : stringArray = ['ida', 'dodi', 'fifi'];

  console.log(siswa[0]);
  console.log(siswa[1]);
  console.log(siswa[2]);

  expect(typeof siswa[0]).toBe('string');
  expect(typeof siswa[1]).toBe('string');
  expect(typeof siswa[2]).toBe('string');

  expect(siswa).not.toBeNull();
  expect(siswa).not.toHaveLength(0);
});

test('test indexable interface object', () => {

  interface ObjString {
    [key : string] : string
  };

  const edi : ObjString = {
    nama : 'edi',
    email : 'edi@gmail.com'
  };

  const erik : ObjString = {
    nama : 'erik',
    email : 'erik@gmail.com'
  };

  const ida : ObjString = {
    nama : 'ida',
    email : 'ida@gmail.com'
  };

  expect(edi).toHaveProperty('nama');
  expect(edi).toHaveProperty('email');

  expect(erik).toHaveProperty('nama');
  expect(erik).toHaveProperty('email');

  expect(ida).toHaveProperty('nama');
  expect(ida).toHaveProperty('email');

  expect(typeof edi.nama).toBe('string');
  expect(typeof edi.email).toBe('string');
  
  expect(typeof erik.nama).toBe('string');
  expect(typeof erik.email).toBe('string');
  
  expect(typeof ida.nama).toBe('string');
  expect(typeof ida.email).toBe('string');
});