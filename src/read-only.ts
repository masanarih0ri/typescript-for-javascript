export {};

class MasterCard {
  // readonlyをownerの前につけることで読み取り専用にできる
  constructor(public readonly owner: string) {}
}

let card = new MasterCard('masanari');
console.log(card.owner);
// card.owner = 'hoge';

// より一般的な書き方
class MasterCard2 {
  owner2: string;
  constructor(owner2: string) {
    this.owner2 = owner2;
  }
}
