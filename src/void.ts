export {};

// voidかany以外はreturnする値がないとだめ
function returnNothing(): void {
  console.log('return nothing');
}

console.log(returnNothing());
