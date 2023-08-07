

test('function incluce the interface', () => {

  interface person {
    nama : string,
    sayHello(nama : string, email : string) : string
  };
 
  const aldi : person = {
    nama : 'aldi',
    sayHello : (nama: string, email: string) => {
      return `hallo nama saya ${nama}, alamat email saya ${email}`;
    }
  }

  expect(aldi.nama).toBe('aldi');
  expect(typeof aldi.nama).toBe('string');

  expect(aldi.sayHello('aldi', 'aldi@gmail.com')).toBe('hallo nama saya aldi, alamat email saya aldi@gmail.com');

});