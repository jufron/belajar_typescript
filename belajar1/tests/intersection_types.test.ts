

test('intersection types', () => {

  interface hastNama {
    nama : string;
  }

  interface hasId {
    id : string | number;
  }

  type domain = hasId & hastNama;

  const doni : domain = {
    id : 123,
    nama : 'james'
  };

  expect(doni).toHaveProperty('id');
  expect(doni).toHaveProperty('nama');

  expect(typeof doni.id).toBe('number');
  expect(typeof doni.nama).toBe('string');

});

test('intersection types memahami', () => {
  interface frondEnd {
    namaTimFE : string;
  }

  interface backEnd {
    namaTimBE : string;
  }

  interface databaseAdministrator {
    namaTimDA : string;
  }

  // interface programmer extends frondEnd, backEnd, databaseAdministrator {

  // };

  type programmer = frondEnd & backEnd & databaseAdministrator;

  const tim1 : programmer = {
    namaTimFE : 'tim react js',
    namaTimBE : 'tim laravel',
    namaTimDA : 'tim posgreeSQL'
  };

  expect(typeof tim1.namaTimFE).toBe('string');
  expect(typeof tim1.namaTimBE).toBe('string');
  expect(typeof tim1.namaTimDA).toBe('string');

  expect(tim1.namaTimFE).toBe('tim react js');
  expect(tim1.namaTimBE).toBe('tim laravel');
  expect(tim1.namaTimDA).toBe('tim posgreeSQL');

  expect(tim1).toHaveProperty('namaTimFE');
  expect(tim1).toHaveProperty('namaTimBE');
  expect(tim1).toHaveProperty('namaTimDA');
});