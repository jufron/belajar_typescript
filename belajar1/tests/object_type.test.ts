import { person1, edi, jenis_kelamin } from "../src/object_type";

test('show data type and value from object type person', () => {
  const erik : person1 = {
    id : 123,
    nama : 'erik',
    email : 'erik@gmail.com'
  };
  const sinta : person1 = {
    id : '123',
    nama : 'sinta',
    email : 'sinta@gmail.com'
  };
  
  expect(erik.id).toBe(123);
  expect(typeof erik.id).toBe('number');
  expect(erik).toHaveProperty('id');
  expect(erik).toHaveProperty('nama');
  expect(erik).toHaveProperty('email');
  
  expect(sinta.id).toBe('123');
  expect(typeof sinta.id).toBe('string');
  expect(erik).toHaveProperty('id');
  expect(erik).toHaveProperty('nama');
  expect(erik).toHaveProperty('email');
  
  expect(edi.id).toBe('123');
  expect(typeof edi.id).toBe('string');
  expect(edi).toHaveProperty('id');
  expect(edi).toHaveProperty('nama');
});