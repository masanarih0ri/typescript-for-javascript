export {};

const nextSalary = (currentSalary: number, nextRate: number = 1.1) => {
  return currentSalary * nextRate;
};

console.log(nextSalary(1000, 1.05));
