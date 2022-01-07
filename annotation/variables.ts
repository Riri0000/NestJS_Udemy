// annotation (注釈)
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truth: boolean[] = [true, true, false];

// // Classes
// class Car {}
// let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20};

// 2) When we declare a variable on one line
// and initializate it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be interred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

const add = (a: number, b: number): number => {
  return a + b;
};

// 返り値のannotationがなくても返り値がnumberだと推測してくれるけど、returnの書き漏れを防ぐにはannotationがあったほうが◎
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// 何も返さない void
const logger = (message: string): void => {
  console.log(message);
};

// throwing an error and exit the function early without returning any value
const thtrowError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}
// ES2015
// const logWeather = ({date, weather}:{ date: Date, weather:string }) => {
//   console.log(date);
//   console.log(weather);
// }

logWeather(todaysWeather)

