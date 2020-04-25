export {};

const somefunc = (): number => 43;

let someResult: any = somefunc();
let someResultUnknown: unknown = somefunc();

let sumResultAny = someResult + 10;
// console.log(typeof someResultUnknown);
// typeofでnumber型であることを伝える
// let sumResultUnknown = someResultUnknown + 10;
// ↓type guard
if (typeof someResultUnknown === 'number') {
  let sumResultUnknown = someResultUnknown + 10;
}
