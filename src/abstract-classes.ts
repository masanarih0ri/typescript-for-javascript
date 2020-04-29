export {};

abstract class Animal {
  // 抽象メソッドの定義
  abstract cry(): string;
}

class Lion extends Animal {
  // メソッドを上書き
  cry() {
    return `roar`;
  }
}

class Tiger extends Animal {
  cry() {
    return `grrr`;
  }
}
