import { 
  alamat, 
  alamatEamil, 
  jenisKelamin, 
  sayHello, 
  umur 
} from "../src/sayHello";


describe('function test output', () => {

  test('display hallo name', () => {
    expect(sayHello('jufron')).toBe('hallo jufron');
  });

  test('display umur', () => {
    expect(umur(23)).toBe('umur saya : 23 tahun');
  });

  test('display email', () => {
    expect(alamatEamil('jufrontamoama@gmail.com')).toBe('alamat email saya : jufrontamoama@gmail.com');
  });

  test('display alamat tinggal', () => {
    expect(alamat('jalur 40')).toBe('alamat tinggal saya : jalur 40');
  });

  test('display jenis kelamin', () => {
    expect(jenisKelamin('laki-laki')).toBe('jenis kelamin : laki-laki');
  });
});