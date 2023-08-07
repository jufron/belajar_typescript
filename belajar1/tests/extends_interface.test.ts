import { employee, manager } from "../src/extend_interface";



test('extends interface emplye to manager', () => {

  const james : employee = {
    id : 123,
    nama : 'james',
    devisi : 'prgramer'
  };

  const erik : manager = {
    id : 1234,
    nama : 'erik',
    devisi : 'programmer',
    numberOfEmploye : 2
  };

  expect(james).toHaveProperty('id');
  expect(james).toHaveProperty('nama');
  expect(james).toHaveProperty('devisi');

  expect(typeof james.id).toBe('number');
  expect(typeof james.nama).toBe('string');
  expect(typeof james.devisi).toBe('string');

  expect(erik).toHaveProperty('id');
  expect(erik).toHaveProperty('nama');
  expect(erik).toHaveProperty('devisi');
  expect(erik).toHaveProperty('numberOfEmploye');

  expect(typeof erik.id).toBe('number');
  expect(typeof erik.nama).toBe('string');
  expect(typeof erik.devisi).toBe('string');
});