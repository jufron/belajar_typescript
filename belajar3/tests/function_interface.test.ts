


test('simple function interface test 1', () => {

  interface kalkulasi {
    (angka1: number, angka2: number) : number;
  };

  const tambah: kalkulasi = (angka1: number, angka2: number) => angka1 + angka2;
  const kurang: kalkulasi = (angka1: number, angka2: number) => angka1 - angka2;

  expect(tambah(10, 20)).toBe(30);
  expect(kurang(5, 2)).toBe(3);

  expect(typeof tambah(10, 10)).toBe('number');
  expect(typeof kurang(5, 2)).toBe('number');
});

test('function interface using union operator', () => {

  interface User {
    nama: string;
    age: number;
    email: string;
  }

  interface FetchUser {
    (userId: string) : User | null;
  }

  const fetchUser: FetchUser = userId => {
    if (userId === '123') {
      return {
        nama: 'erik', 
        age: 20,
        email: 'erik@gmail.com'
      };
    } else {
      return null;
    }
  };

  const user = fetchUser('123');

  expect(user).toHaveProperty('nama');
  expect(user).toHaveProperty('age');
  expect(user).toHaveProperty('email');

  expect(typeof user?.nama).toBe('string');
  expect(typeof user?.age).toBe('number');
  expect(typeof user?.email).toBe('string');

  expect(user?.nama).toBe('erik');
  expect(user?.age).toBe(20);
  expect(user?.email).toBe('erik@gmail.com');
});