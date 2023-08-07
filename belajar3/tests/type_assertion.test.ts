



test('type assertion di typescript', () => {

  // todo type assertion untuk melakukan konveri tipe data dari any ke tipe data yang lebih spesifik
 
  const library1: any = 'ini adalah string dari library orang lain';

  // todo jika kita tahu tipe data yang ada di library punya orang lain, kita bisa melakukan conversi ke tipe data yang spesifik

  const upercase: string = (library1 as string).toUpperCase();

  expect(typeof upercase).toBe('string');
  expect(upercase).toBe('INI ADALAH STRING DARI LIBRARY ORANG LAIN');
});

test('type assertion di typescript 2', () => {

  interface Person {
    nama: string;
    email: string;
    umur: number;
    alamat: string;
  };

  const library2: any = {
    nama: 'james',
    email: 'james@gmail.com',
    umur: 19,
    alamat: 'sikumana'
  };

  const dataJames: Person = (library2 as Person);

  console.log(typeof dataJames.nama);
  console.log(typeof dataJames.email);
  console.log(typeof dataJames.umur);
  console.log(typeof dataJames.alamat);

  expect(typeof dataJames.nama).toBe('string');
  expect(typeof dataJames.email).toBe('string');
  expect(typeof dataJames.umur).toBe('number');
  expect(typeof dataJames.alamat).toBe('string');
});
