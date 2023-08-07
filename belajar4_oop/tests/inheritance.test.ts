

test('pewarisan di typescript tahap 1', () => {

  class Programmer {
    nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }
  }

  class BackEnd extends Programmer {}
  class FrondEnd extends Programmer {}
  class Database extends Programmer {}

  const dodi = new BackEnd('dodi');
  const erik = new FrondEnd('erik');
  const sinta = new Database('sinta');

  expect(erik).toBeInstanceOf(FrondEnd);
  expect(dodi).toBeInstanceOf(BackEnd);
  expect(sinta).toBeInstanceOf(Database);

  expect(typeof erik.nama).toBe('string');
  expect(typeof dodi.nama).toBe('string');
  expect(typeof sinta.nama).toBe('string');
});