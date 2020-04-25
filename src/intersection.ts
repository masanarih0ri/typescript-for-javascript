export {};

type Pitcher1 = {
  speed: number;
};

type Batter1 = {
  average: number;
};

const daimajin_sasaki: Pitcher1 = {
  speed: 154,
};

const ochial_hiromitsu: Batter1 = {
  speed: 132,
  average: 0.367,
};

// このように2つの型を定義してもいいが…
// type TwoWayPlayer = {
//   speed: number;
//   average: number;
// };

// intersectionを使った方がよりスマート
type TwoWayPlayer = Pitcher1 & Batter1;

const otani_shohei: TwoWayPlayer = {
  speed: 165,
  average: 0.286,
};
