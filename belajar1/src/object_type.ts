

// * menggunakan type alias
type ID = string | number;
type person1 = {
  id : ID,
  nama : string,
  email : string,
};

type jenis_kelamin = {
  id : ID,
  nama : string
}

// * cara yang simple menggunakan object type 

const edi: {id : string | number, nama : string} = {
  id : '123',
  nama : 'edi'
};

export { person1, jenis_kelamin, edi };