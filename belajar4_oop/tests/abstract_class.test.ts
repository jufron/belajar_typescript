


test('abstract class di typescript test 1', () => {

  abstract class Costumer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    abstract sayHello(name: string) : string;

    public email(email: string) : string {
      return `email ${email}`;
    }
  }

  class RegularCostumer extends Costumer {

    constructor(id: number, public name: string = '') {
      super(id);
    }

    sayHello(name: string): string {
      return `hallo nama saya ${name}`;
    }
  }

});