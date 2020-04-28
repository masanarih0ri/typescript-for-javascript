export {};

class Me {
  // 静的なメンバの設定
  static isProgrammer: boolean = true;
  static firstName: string = 'masanari';
  static lastName: string = 'hori';

  static work() {
    return `My name is ${this.firstName} I am making web service`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
// console.log(me.firstName);
// console.log(me.lastName);

console.log(Me.isProgrammer);
console.log(Me.work());
