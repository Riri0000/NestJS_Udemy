const dring = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// const pepsi: [string, boolean, number] = ["brown", true, 40];
// Type aliasを使うと↑繰り返さなくてよくなる
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["yellow", false, 30];

// numberが何を意味のするのか分からない
const carSpecs: [number, number] = [400, 3354];

// 何を意味するかひと目でわかる
const carStats = {
  horsepower: 400,
  weight: 3354,
};
