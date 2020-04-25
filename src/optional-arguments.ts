export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const calcBmi: number = weight / (height * height);
  if (printable) {
    console.log({ calcBmi });
  }
  return calcBmi;
};

bmi(1.77, 70);

// optional引数＝あってもなくても良い引数
// bmi(1.77); とすると
// Expected 2 arguments, but got 1.ts(2554)
// optional-arguments.ts(3, 27): An argument for 'weight' was not provided.
// というエラーになる（引数が必須なので）

// bmi(身長, 体重, console.logに出力するか？)という関数を作る
// bmi(1.77, 70, true);
// bmi(1.77, 70, false);
// bmi(1.77, 70);
// これらがエラーにならない
