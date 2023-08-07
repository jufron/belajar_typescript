

enum costumerType {
  REGULAR = 'regular',
  GOLD = 'gold',
  PLATINUM = 'platinum'
}

type costumer = {
  id : number | string,
  name : string,
  type : costumerType
};

export { costumerType, costumer };
