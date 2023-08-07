


test('penggunaan enum type 1 test', () => {

  enum Days {
    senin = 1,
    selasa = 2,
    rabu = 3,
    kamis = 4,
    jumat = 5,
    sabtu = 6,
    minggu = 7
  };

  const hari_ini : Days = Days.sabtu;
  const hari1 : Days = Days.senin;

  expect(hari_ini).toBe(6);
  expect(typeof hari_ini).toBe('number');
});

test('penggunaan enum type 2 test', () => {

  enum Agama {
    kristen_protestan = 'kristen protestan',
    katholik = 'katholik',
    islam = 'islam',
    hinduh = 'hinduh',
    budah = 'budah'
  };

  const ade = {
    nama: 'ade',
    email: 'ade@gmail.com',
    agama: Agama.islam
  };

  expect(ade).toHaveProperty('nama');
  expect(ade).toHaveProperty('email');
  expect(ade).toHaveProperty('agama');
});

test('penggunaan enum type 2 test', () => {

  enum jenisKelamin {
    laki_laki = 'laki laki',
    perempuan = 'perempuan'
  };

  enum agama {
    kristen_protestan = 'kristen protestan',
    katholik = 'katholik',
    islam = 'isalm',
    hinduh = 'hinduh',
    budha = 'budha'
  };

  interface Person {
    nama : string;
    email : string;
    umur? : string | number,
    hoby? : string[],
    jenis_kelamin: jenisKelamin,
    agama?: agama,
    message: (nama: string, email: string) => string;
  };

  const putri: Person = {
    nama : 'putri',
    email : 'putri@gmail.com',
    umur : 17,
    hoby : ['membaca', 'mendengarkan musik'],
    jenis_kelamin : jenisKelamin.laki_laki,
    agama : agama.kristen_protestan,
    message : (nama: string, email: string) => `hallo nama saya ${nama} alamat email saya ${email}`
  };

  expect(putri).toHaveProperty('nama');
  expect(putri).toHaveProperty('email');
  expect(putri).toHaveProperty('umur');
  expect(putri).toHaveProperty('hoby');
  expect(putri).toHaveProperty('jenis_kelamin');
  expect(putri).toHaveProperty('agama');
  expect(putri).toHaveProperty('message');
  
  expect(typeof putri.nama).toBe('string');
  expect(typeof putri.email).toBe('string');
  expect(typeof putri.umur).toBe('number');
  expect(typeof putri.hoby).toBe('object');
  expect(typeof putri.jenis_kelamin).toBe('string');
  expect(typeof putri.agama).toBe('string');
  expect(typeof putri.message).toBe('function');
});