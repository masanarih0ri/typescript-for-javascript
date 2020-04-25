export {};

// このアノテーションだと書き換えることができてしまう
let profile1: object = { name: 'masanari' };
profile1 = { birthYear: 1988 };

// objectのpropertyに対して型を指定することで書き換えがname以外できなくなる。
let profile2: { name: string } = { name: 'masanari' };
profile2 = { name: '1988' };
