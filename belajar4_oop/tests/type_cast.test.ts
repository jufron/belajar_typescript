


test('type cast di polimorfismes test 1', () => {

  class Programmer {
    constructor(public name: string) {

    }
  }

  class FrondEnd extends Programmer {}

  class BackEnd extends Programmer {}

  class Security extends Programmer {}

  class DatabaseAdministrator extends Programmer {}

  function sayHello(programmer: Programmer): string {
    if (programmer instanceof DatabaseAdministrator) {
      const dbadmin = programmer as DatabaseAdministrator;
      return `hallo db-admin ${dbadmin.name}`;
    } else if(programmer instanceof Security) {
      const sec = programmer as Security;
      return `hallo security ${sec.name}`;
    } else if (programmer instanceof BackEnd) {
      const be = programmer as BackEnd;
      return `hallo back-end ${be.name}`;
    } else if (programmer instanceof FrondEnd) {
      const fe = programmer as FrondEnd;
      return `hallo frond-end ${fe.name}`;
    } else {
      return `hallo programmer ${programmer.name}`;
    }
  }

  const programmer = sayHello(new Programmer('james'));
  const database_administrator = sayHello(new DatabaseAdministrator('sinta'));
  const security = sayHello(new Security('edy'));
  const back_end = sayHello(new BackEnd('dodi'));
  const frond_end = sayHello(new FrondEnd('erik'));

  expect(programmer).toBe('hallo programmer james');
  expect(database_administrator).toBe('hallo db-admin sinta');
  expect(security).toBe('hallo security edy');
  expect(back_end).toBe('hallo back-end dodi');
  expect(frond_end).toBe('hallo frond-end erik');

});