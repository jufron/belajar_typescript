
// * type alias 
export type ID = string | number;

export type kategory = {
  id : ID,
  nama : string
};

export type product = {
  id : ID,
  name : string,
  price : number,
  kategory : kategory
};

export type person = {
  id : ID,
  nama : string,
  jenis_kelamin : jenis_kelamin,
  agama : agama,
  alamat : alamat
};

export type jenis_kelamin = {
  id : ID,
  nama : string
};
export type alamat = {
  alamatTinggal : string,
  rt : string,
  rw : string
};
export type agama = {
  id : ID,
  nama : string,
};