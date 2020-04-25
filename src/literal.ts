export {};

let dayOfTheWeek: string = '日';
dayOfTheWeek = '水';

// 予測と異なる値が入ってきたら対応できない状態を避けるためにstring literal型を使う

let dayOfTheWeek2: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek2 = '月';
// dayOfTheWeek2 = 'にち'; これはエラー

// 同様に数値のリテラルもある

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 12;
// month = 13;
