import {nama, angka, hoby, person, person2} from './../src/data_type_array';


describe('data type array', () => {
  test('check data type string from variabel array nama', () => {

    expect(nama).toBeDefined();
    expect(nama).not.toBeNull();
    expect(Array.isArray(nama)).toBeTruthy();
    expect(nama.length).toBeGreaterThan(0);
    expect(nama).not.toBe('');
  });

  test('check data type string from variabel array number', () => {

    expect(angka).toBeDefined();
    expect(angka).not.toBeNull();
    expect(Array.isArray(angka)).toBeTruthy();
    expect(angka.length).toBeGreaterThan(0);
    expect(angka).not.toBe('');
  });

  test('check data type readonly from variabel array string', () => {

    expect(hoby).toBeDefined();
    expect(hoby).not.toBeNull();
    expect(Array.isArray(hoby)).toBeTruthy();
    expect(angka.length).toBeGreaterThan(0);
    expect(hoby).not.toBe('');
  });

  test('check data type tuple from variabel person string, string, number', () => {
    expect(person).toBeDefined();
    expect(person).not.toBeNull();
    expect(Array.isArray(person)).toBeTruthy();
    expect(person.length).toBeGreaterThan(0);
    expect(person).not.toBe('');

    expect(typeof person[0]).toBe('string');
    expect(typeof person[1]).toBe('string');
    expect(typeof person[2]).toBe('number');
  });

  test('check data type any from variabel person1', () => {

    expect(person2).toBeDefined();
    expect(person2).not.toBeNull();
    expect(person2).toEqual(expect.any(Object));
    expect( typeof person2).toBe('object');

    expect(person2.id).toBe(1);
    expect(person2.nama).toBe('jufron');
    expect(person2.email).toBe('jufrontamoama@gmail.com');
    expect(person2.agama).toBe('kristen');
  });

  test('check data type union from variabel example', () => {
    
    let example: string | number | boolean;
    example = 'lulus';

    expect(typeof example).toBe('string');
    expect(example).toBe('lulus');
    expect(example).toBeDefined();
    expect(example).not.toBeNull();

    example = 1;

    expect(typeof example).toBe('number');
    expect(example).toBe(1);
    expect(example).toBeDefined();
    expect(example).not.toBeNull();
    
    example = true;
    
    expect(typeof example).toBe('boolean');
    expect(example).toBe(true);
    expect(example).toBeDefined();
    expect(example).not.toBeNull();

    function proses(value: string | number | boolean) {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value + 2;
      } else {
        return value;
      }
    }

    expect(proses('angka')).toBe('ANGKA');
    expect(proses(100)).toBe(102);
    expect(proses(true)).toBe(true);
  });
});
