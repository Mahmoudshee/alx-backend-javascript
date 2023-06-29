const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[cloneSymbol] = false;
  }

  cloneCar() {
    const clone = new Car();
    clone[cloneSymbol] = true;
    return clone;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }
}

