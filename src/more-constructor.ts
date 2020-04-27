export {};

class Person {
  // 引数に対してアクセス修飾子をつけることで、constructor内に記述を書かなくてもよくなる
  // ここで自動で初期化の処理をしている
  constructor(public name: string, protected age: number) {}
}

const me = new Person('masanari', 32);
console.log(me);
