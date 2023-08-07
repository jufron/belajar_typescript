

test('type alias test1', () => {

  // * type alias tipe data tunggal
  type myNumber = number;

  const value : myNumber = 22;
  const value2 : myNumber = 123;

  expect(value).toBe(22);
  expect(typeof value).toBe('number');
});

test('type alias test2', () => {

  // * type alias tiped data union
  type myUnion = string | number;

  const data1 : myUnion = 'james';
  const data2 : myUnion = 123;

  expect(data1).toBe('james');
  expect(typeof data1).toBe('string');

  expect(data2).toBe(123);
  expect(typeof data2).toBe('number');
});

test('type alias yang lebih kompleks test', () => {
  
  type Person = {
    nama : string;
    id : number;
    age : string | number;
    email : string;
  };

  type Employee = Person & {
    emplyeId : string;
    position : string;
  };

  const employeeInfo : Employee = {
    nama : "james arthur",
    id : 12345678,
    age : 24,
    email : 'james@gmail.com',
    emplyeId : '123456789',
    position : 'software engginer'
  };

  expect(employeeInfo).toHaveProperty('nama');
  expect(employeeInfo).toHaveProperty('id');
  expect(employeeInfo).toHaveProperty('age');
  expect(employeeInfo).toHaveProperty('email');
  expect(employeeInfo).toHaveProperty('emplyeId');
  expect(employeeInfo).toHaveProperty('position');

  expect(employeeInfo.nama).toBe('james arthur');
  expect(employeeInfo.id).toBe(12345678);
  expect(employeeInfo.age).toBe(24);
  expect(employeeInfo.email).toBe('james@gmail.com');
  expect(employeeInfo.emplyeId).toBe('123456789');
  expect(employeeInfo.position).toBe('software engginer');

  expect(typeof employeeInfo.nama).toBe('string');
  expect(typeof employeeInfo.id).toBe('number');
  expect(typeof employeeInfo.age).toBe('number');
  expect(typeof employeeInfo.email).toBe('string');
  expect(typeof employeeInfo.emplyeId).toBe('string');
  expect(typeof employeeInfo.position).toBe('string');
});