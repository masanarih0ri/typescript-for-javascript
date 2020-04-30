export {};

// 動的にプロパティを入れていきたい時
// インデックスシグネチャを使う
// インデックスシグネチャはオブジェクトのkey（index）に該当する箇所をアノテーションするための署名のこと
// 書き方
// { [index: typeForIndex]: typeForValue }
// let profile: { [index: string]: string | number } = {};
// interfaceを使って型を設定する方がすっきりする
interface Profile {
  underTwenty: boolean;
  name: string;
  [index: string]: string | number | boolean;
}
// ここでProfileを使う
let profile: Profile = { name: 'hori', underTwenty: false };
profile.name = 'masanari';
profile.age = 32;
profile.underTwenty = false;
