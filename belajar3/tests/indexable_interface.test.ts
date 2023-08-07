



test('indexable interface di typescript 1', () => {

  interface NamaSiswa {
    [key: number] : string;
  }

  const nama1: NamaSiswa = ['james', 'erik', 'sinta'];
  const nama2: NamaSiswa = ['dodi', 'erik', 'edy'];

  expect(typeof nama1).toBe('object');
  expect(typeof nama2).toBe('object');

  expect(nama1).toContain('james');
  expect(nama1).toContain('erik');
  expect(nama1).toContain('sinta');

  expect(nama2).toContain('dodi');
  expect(nama2).toContain('erik');
  expect(nama2).toContain('edy');

  interface Person {
    [key: string] : string;
  }

  const dodi: Person = {
    nama: 'dodi maleng',
    email: 'dodimaleng@gmail.com',
    alamat: 'sikumana'
  };

  expect(typeof dodi).toBe('object');
  expect(dodi).toHaveProperty('nama');
  expect(dodi).toHaveProperty('email');
  expect(dodi).toHaveProperty('alamat');

  expect(dodi.nama).toContain('dodi maleng');
  expect(dodi.email).toContain('dodimaleng@gmail.com');
  expect(dodi.alamat).toContain('sikumana');

  interface Angka {
    [key: number] : number;
  }

  const bilangan: Angka = {
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4
  };

  expect(bilangan).toHaveProperty('1');
  expect(bilangan).toHaveProperty('2');
  expect(bilangan).toHaveProperty('3');
  expect(bilangan).toHaveProperty('4');

  expect(typeof bilangan[1]).toBe('number');
  expect(typeof bilangan[2]).toBe('number');
  expect(typeof bilangan[3]).toBe('number');
  expect(typeof bilangan[4]).toBe('number');
});