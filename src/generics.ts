export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// <T>はジェネリクスの宣言
// Tにあらゆる型が入ってくる
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(false));
console.log(
  echo<object>({ id: 100 })
);

console.log(
  echo<Array<number>>([1, 2, 3, 4, 5])
);

// クラスに対してジェネリクスを書く
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('hello, generics').echo());
console.log(new Mirror<boolean>(true).echo());
