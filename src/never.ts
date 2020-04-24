export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('no!!');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// never型にはデータを代入できない。
// let bar: never = undefined;
