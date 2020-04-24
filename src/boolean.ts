// このファイルをモジュール化する
// これがないとlet nameとかでエラーが起こる
export {};

let name = 'typescript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
