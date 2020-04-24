export {};

// nullを代入してもany型で型推論されるのでアノテーションを与えることが必要
let absense: null = null;
// absense = 'hello'

// undefinedを代入してもanyで型推論される
let data: undefined = undefined;
// data = null