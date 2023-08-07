

const nama: string[] = ['james', 'erik', 'sinta', 'dodi'];
const angka: number[] = [1,2,3,4,5,6,7,8,9];
const hoby: ReadonlyArray<string> = ['main bola', 'gaming', 'tidur', 'makan'];

// tipe data tuple
const person: readonly [string, string, number] = ['jufron', 'tamo ama', 23];

// tipe data any
const person2: any = {
  id : 1,
  nama : 'jufron',
  email : 'jufrontamoama@gmail.com',
  agama : 'kristen'
};

// tipe data union
let example: number | string | boolean;

example = 'lulus';
console.log(example);

example = 1;
console.log(example);

example = true;
console.log(example);

// console.log(nama);
// console.log(angka);

export {
  nama,
  angka,
  hoby,
  person,
  person2,
  example
};