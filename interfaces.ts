interface Reportable {
  summary(): string; // stringを返すfunction
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// これだと、何回も同じtypeを書くことになる✗
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// oldCivicとdrinkは異なるpropertiesだけど、Reportableのinterfaceが同じだからprintSummary使える
// printSummaryという汎用的な命名◎
printSummary(oldCivic);
printSummary(drink)
