

test('asserction test', () => {

  // * type asscertion = mengubah tipe data
  
  interface Person {
    nama : string;
    sayHello(nama: string, email: string) : string;
  }

  const person : any = {
    nama : 'james',
    email : 'james@gmail.com'
  }

  const person1 : Person = person as Person;

  console.log(person1);

});