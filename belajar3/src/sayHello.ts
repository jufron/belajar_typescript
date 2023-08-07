// todo seluruh tipe data 

// * array dengan tipe data tunggal
//? tupe data array number 
const angka : number[] = [1,2,3,4];

// ? tipe data array string
const nama : string[] = ['james', 'indri', 'dodi'];

// ? tupe data array boolean 
const lulus : boolean[] = [true, false, true, false];


// * array dengan tipe data union
// ? tipe data array yang mempunyai string atau number atau boolean
const data1 : (number | string)[] = ['doni', 'ida', 123];
const data2 : (number | string | boolean)[] = ['dodi', true, 12];


// * array dengan tipe data tuple
// ? tipe data costum
const biodata : [string, string, number, boolean] = ['james', 'james@gmail.com', 20, true];
const data3 : (string | boolean)[] = ['dinda', true];


// * array dengan tipe data union 
const dataDenganTipeUnion : any[] = ['sinta', true, 13, undefined, null];

// * array dengan tipe data read only
const dataRead : readonly number[] = [1, 2, 3, 4, 5, 6];
const dataRead1 : readonly string[] = ['dinda', 'ida', 'sinta', 'dodi'];
const dataRead2 : readonly (string | number)[] = [12, 'james'];
const dataread3 : readonly [number, string, string, boolean] = [1, 'dinda', 'dinda@gmail.com', false];
const dataRead4 : readonly any[] = ['fifi', 1, true];

// * menggunakan operator union
const array1 : string[] | null = ['nanda', 'dodi'];
const array2 : string[] | null = null;

// * array dengan tipe data tunggal sama persis dengan yang di atas cuman perbedaan sintaksisnya saja
const array3 : Array<string> = ['sinta', 'dodi', 'dinda', 'edi'];
const array4 : Array<number> = [1,2,3,4,5,6];

type numberArray = number[];
type stringArray = string[];

const angka1 : numberArray = [1,2,3,4,5,6,7,8,9,0];
const angka2 : stringArray = ['ade', 'dodi', 'dinda'];

// * dari segi sintaks berbeda taip hasilnya sama saja dengan readonly
const array5 : ReadonlyArray<string> = ['dinda', 'ida'];
