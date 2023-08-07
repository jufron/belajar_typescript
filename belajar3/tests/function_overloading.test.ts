

test('function overloadin di typescript', () => {

  function processData(data: string) : string;
  function processData(data: number) : number;
  function processData(data: boolean) : boolean;

  function processData(data: string | number | boolean) 
  {
    if (typeof data === 'string') {
      return data;
    } else if (typeof data === 'number') {
      return data;
    } else if (typeof data === 'boolean') {
      return data;
    }
  }

  expect(typeof processData('ini adlaah string')).toBe('string');
  expect(typeof processData(123)).toBe('number');
  expect(typeof processData(true)).toBe('boolean');

  expect(processData('ini string')).toBe('ini string');
  expect(processData(123)).toBe(123);
  expect(processData(false)).toBe(false);
});