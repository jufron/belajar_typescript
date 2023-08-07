


test('visibility private test 1', () => {

  class Counter {

    private counter: number = 0;

    public increment () : void {
      this.counter++;
    }

    public getCounter () : number {
      return this.counter;
    }
  }

  const count1 = new Counter();
  count1.increment();
  count1.increment();

  expect(count1).toBeInstanceOf(Counter);
  expect(count1).toHaveProperty('counter');
  expect(typeof count1.getCounter()).toBe('number');

  expect(count1.getCounter()).toBe(2);
});

test('visibility protected test 2', () => {

  class Counter {
    protected counter: number = 0;

    public increment() : void {
      this.counter++;
    }

    public getCounter() : number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {

    public increment () : void {
      this.counter += 2;
    }
  }

  const count1 = new Counter();
  count1.increment();
  count1.increment();
  count1.increment();

  expect(count1.getCounter()).toBe(3);
  expect(typeof count1.getCounter()).toBe('number');

  const count2 = new DoubleCounter();
  count2.increment();
  count2.increment();

  expect(count2.getCounter()).toBe(4);
  expect(typeof count2.getCounter()).toBe('number');
});