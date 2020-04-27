export {};

class Person {
  // Personのプロパティnameとageに対しての型をつける
  public name: string;
  protected age: number;
  protected nationality: string;
  // returnしないので、constructorに型を書く必要はない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスから継承する
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');

console.log(taro.profile());
// インスタンスに対してメンバを呼び出す
console.log(taro.name);
// console.log(taro.age);
// protected privateがageに対してセットされていると、外から呼び出せない
// protectedはサブクラスでは使うことができる。
// privateはクラス内のみ参照できる。
