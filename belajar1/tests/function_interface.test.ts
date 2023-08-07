

interface addFuction {
  (value1: number, value2 : number) : number
};

const add : addFuction = (value1 : number, value2 : number) : number => {
  return value1 + value2;
}


add(1, 2);
add(2, 3);

test('display result and dta type for 1 + 2', () => {
  expect(add(1, 2)).toBe(3);
});
