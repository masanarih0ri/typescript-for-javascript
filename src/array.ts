export {};

let numbers: number[] = [1, 2, 3, 4, 5, 6];
let numbers2: Array<number> = [1, 2, 3, 4, 5, 6];
// ArrayはInterfaceであり、<>はジェネリクス

let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto'];

let strings: string[] = ['javascript', 'typescript', 'vue.js'];

let doubleArray: number[][] = [
  [10, 20],
  [30, 40],
];

let someArray: (string | number | boolean)[] = [1, false, 'japan'];
