

test('polymorfisme test 1', () => {

  class Programmer {
    constructor(public name: string) {

    }
  }

  class FrondEnd extends Programmer {

  }

  class BackEnd extends Programmer {

  }

  class DatabaseAdministrator extends Programmer {

  }

  let programmer: Programmer = new Programmer('andika');
  expect(programmer instanceof Programmer).toBe(true);
  expect(programmer instanceof FrondEnd).toBe(false);
  expect(programmer instanceof BackEnd).toBe(false);
  expect(programmer instanceof DatabaseAdministrator).toBe(false);
  console.log(programmer instanceof Programmer);

  programmer = new FrondEnd('dodi');
  expect(programmer instanceof FrondEnd).toBe(true);
  expect(programmer instanceof Programmer).toBe(true);
  expect(programmer instanceof BackEnd).toBe(false);
  expect(programmer instanceof DatabaseAdministrator).toBe(false);
  console.log(programmer instanceof Programmer);
  console.log(programmer instanceof FrondEnd);

  programmer = new BackEnd('erik');
  expect(programmer instanceof BackEnd).toBe(true);
  expect(programmer instanceof FrondEnd).toBe(false);
  expect(programmer instanceof Programmer).toBe(true);
  expect(programmer instanceof DatabaseAdministrator).toBe(false);

  programmer = new DatabaseAdministrator('sinta');
  expect(programmer instanceof DatabaseAdministrator).toBe(true);
  expect(programmer instanceof BackEnd).toBe(false);
  expect(programmer instanceof FrondEnd).toBe(false);
  expect(programmer instanceof Programmer).toBe(true);
});

test('polymorfisme test 2', () => {

  class Programmer {
    constructor(public name: string) {

    }
  }

  class FrondEnd extends Programmer {

  }

  class BackEnd extends Programmer {

  }

  class DatabaseAdministrator extends Programmer {

  }

  function sayHello (programmer: Programmer): string {
    return `hallo ${programmer.name}`;
  }

  const programmer = sayHello(new Programmer('dinda'));
  const frondend = sayHello(new FrondEnd('erik'));
  const backend = sayHello(new BackEnd('dodi'));
  const databaseadministrator = sayHello(new DatabaseAdministrator('andi'));

  expect(programmer).toBe('hallo dinda');
  expect(frondend).toBe('hallo erik');
  expect(backend).toBe('hallo dodi');
  expect(databaseadministrator).toBe('hallo andi');

});