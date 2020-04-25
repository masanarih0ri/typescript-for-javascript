export {};

// typeを使ったエイリアスの例
type ObjectType = { name: string; age: number };
let object: ObjectType = {
  name: 'masanari',
  age: 32,
};

// interfaceには=は不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object2: ObjectInterface = {
  name: 'hori',
  age: 32,
};
