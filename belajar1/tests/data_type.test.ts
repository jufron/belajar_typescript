import {nama, umur, lulus} from './../src/data_type'

describe('data type for variabel', () => {
  test('display data & type string variabel', () => {

    expect(nama).toBeDefined();
    expect(nama).not.toBeNull();
    expect(nama).not.toBe('');
    expect(nama).toBe('jufron tamo ama');
    expect(typeof nama).toBe('string');
  });

  test('display data & type number variabel', () => {

    expect(umur).toBeDefined();
    expect(umur).not.toBeNull();
    expect(umur).not.toBe('');
    expect(umur).toBe(23);
    expect(typeof umur).toBe('number');
  });

  test('display data & type boolean variabel', () => {

    expect(lulus).toBeDefined();
    expect(lulus).not.toBeNull();
    expect(lulus).not.toBe('');
    expect(lulus).toBe(true);
    expect(typeof lulus).toBe('boolean');
  });
});