export {};

// double関数をオーバーロードする
// ジグネチャを利用
// 下記の構造を使ってdoubleを定義する
function double(value: number): number;
function double(value: string): string;

// 関数の実体では型定義しない
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return `${value}${value}`;
  }
}
console.log(double(100));
console.log(double('100'));
// 型制約が効いているので、下記はコンパイルエラー。例外処理はいらなくなる
// console.log(double(false));
