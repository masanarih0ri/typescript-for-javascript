export {};

/*
* owner:所有者の名前
　* 初期化時に設定できる
　* 途中で設定変更できないもの
　* 参照できるもの

* secretNumber
　* 初期化時に設定できる
　* 途中で設定変更できるもの
　* 参照できないもの 
*/

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    // メンバ変数とメソッド名が被っているので_をつける
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

// カードのインスタンスを作成
let card = new MyNumberCard('masanari', 12345678);
// card.owner = 'hoge';
// get: 参照するためのメソッド
// set: 書き換えのためのメソッド
console.log(card.owner);
console.log(card.debugPrint());
// setterとかgetterを呼び出す時には()はつけない
card.secretNumber = 101010;
// console.log(card._secretNumber);
console.log(card.debugPrint());

// secretNumberを呼び出してもundefinedになるのでsecureにデータが格納されている
console.log(card.secretNumber);
