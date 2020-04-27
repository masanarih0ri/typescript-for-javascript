export {};

class Person {
  // Personのプロパティnameとageに対しての型をつける
  name: string;
  age: number;
  // returnしないので、constructorに型を書く必要はない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30);

console.log(taro.profile());
