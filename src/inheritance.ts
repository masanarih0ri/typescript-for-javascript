export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return `I can run`;
  }
}

class Lion extends Animal {
  // speedはメンバ変数に外出しする
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    // こっちでspeedの初期化処理を行う
    this.speed = speed;
  }
  run(): string {
    // super.somemethod()と書くと親クラスのメソッドを実行できるようになる
    return `${super.run()} ${this.speed}km/h`;
  }
}

// const animal = new Animal();
// console.log(animal.run());
// const lion = new Lion();
// console.log(lion.run());

let mickey = new Animal('ミッキー');
let lion = new Lion('シンバ', 80);

console.log(mickey.run());
console.log(lion.run());
