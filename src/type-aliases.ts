export {};

type Mojiretsu = string;

const fooString: string = 'string';
const fooMojiretsu: Mojiretsu = 'Mojiretsu';

const example = {
  name: 'masanari',
  age: 32,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'hori',
  age: 32,
};

// これによりexampleの型推論をそのまま引き継ぐことができる
type Profile2 = typeof example;
