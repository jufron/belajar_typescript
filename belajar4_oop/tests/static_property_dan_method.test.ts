


test('static property test 1', () => {

  class FrondEnd {
    public static STACK1 : string = 'react.js';
    public static STACK2 : string = 'vue.js';
  }

  expect(FrondEnd.STACK1).toBe('react.js');
  expect(FrondEnd.STACK2).toBe('vue.js');

  class Config {
    public static DATABASE: string = 'mysql';
    public static HOST: string = 'localhost';
    public static PORT: string = '123';
    public static DATABASE_NAME: string = 'sekolah';
  }

  expect(Config.DATABASE).toBe('mysql');
  expect(Config.HOST).toBe('localhost');
  expect(Config.PORT).toBe('123');
  expect(Config.DATABASE_NAME).toBe('sekolah');

});


test('static method test 2', () => {

  class Config {

    public static mysql_driver() {
      return `mysql driver`;
    }

    public static mongo_db_driver() {
      return `mongo db driver`;
    }

    public static postgree_driver() {
      return `postgree sql driver`;
    }
  }

  class MathUtil {

    public static sum(...values: number[]) : number {
      let total: number = 0;

      for(let value of values) {
        total += value;
      }
      return total;
    }
  }

  expect(Config.mysql_driver()).toBe('mysql driver');
  expect(Config.postgree_driver()).toBe('postgree sql driver');
  expect(Config.mongo_db_driver()).toBe('mongo db driver');

  expect(MathUtil.sum(1,2,3,4,5)).toBe(15);
}); 