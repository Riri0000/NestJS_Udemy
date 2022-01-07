class Vehicle {
  // initialize
  constructor(public color: string) { }
  //↑と↓は同じconstructor
  // color: string = 'red'

  // constructor(color: string) {
  //   this.color = color;
  // }

  public honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // over write
  drive(): void {
    console.log("fuga fuga");
  }
}

const car = new Car(4, 'red');
car.drive();
car.honk();
