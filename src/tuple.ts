export {};

// tuple型にすると順番を変えるとエラーになる
// tuple型については型推論されない
let profile: [string, number] = ['masanari', 32];
// profile = [32, 'masanari'];
