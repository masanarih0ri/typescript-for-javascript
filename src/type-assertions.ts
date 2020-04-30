export {};

let name: any = 'masanari';
// as stringでnameがstring型である name.lengthに対して as numberでも良い
let strlength = (name as string).length;
// strlength = 'foo';

// 別の方法（ただこれはJSXと似ているので、asの方を推奨
let anotherStrLength = (<string>name).length;

// anotherStrLength = 'foo';
