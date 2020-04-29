export {};

let fooCompatible: any;
let barCompatible: string = 'Typescript';
console.log(typeof fooCompatible);
// これは代入できる
fooCompatible = barCompatible;
// 型はstring型に変わる
console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// これはstring型にnumber型を入れているのでエラー
// fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
// これは代入できる（文字列型のなかに文字列リテラル型があるので）
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1988 = 1988;
// これも代入可能
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(32, 'masanari');
