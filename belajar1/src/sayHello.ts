

//* ini untuk menampilkan function sayHello
function sayHello(name : string) : string {
  return `hallo ${name}`;
}

// * ini untuk menampilkan function umur
function umur(nilai : number) : string {
  return `umur saya : ${nilai} tahun`;
}

// * ini untuk menampilkan function alamatEamil
function alamatEamil(email : string) : string {
  return `alamat email saya : ${email}`;
}

// * ini untuk menampilkan function alamat
function alamat (alamatTinggal : string) : string {
  return `alamat tinggal saya : ${alamatTinggal}`;
}

// * ini untuk menampilkan function jenisKelamin
function jenisKelamin (jk : string) : string {
  return `jenis kelamin : ${jk}`;
}

export { sayHello, umur, alamatEamil, alamat, jenisKelamin };