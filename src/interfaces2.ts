export {};

class Magician {}

class Monk {}

// tsは多重継承はできないが、複数のinterfaceを継承することはできる。
class Taro extends Magician {}

interface WiseMan {
  // これらをシグネチャという
  ionazun(): void;
}
interface Fighter {
  attack(): void;
}

// imprementsを使ってinterfaceによる多重継承ができる
class Jiro implements WiseMan, Fighter {
  ionazun(): void {
    console.log('ionazun');
  }

  attack(): void {
    console.log('attack');
  }
}

const jiro = new Jiro();

jiro.attack();
jiro.ionazun();
