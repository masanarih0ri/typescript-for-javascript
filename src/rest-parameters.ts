export {};

const calcSum: (...values: number[]) => number = (
  ...values: number[]
): number => {
  return values.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

console.log(calcSum(1, 2, 3, 4, 5));
