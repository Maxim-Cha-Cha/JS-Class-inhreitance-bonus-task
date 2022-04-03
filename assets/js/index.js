"use strick";
class Cat {
  constructor(breed, name) {
    this.breed = breed;
    this.name = name;
    this.numberOfCaughtMice = 0;
  }
  get breed() {
    return this._breed;
  }

  set breed(newBreed) {
    if (typeof newBreed !== "string") {
      throw TypeError("Error, breed must be string");
    }
    this._breed = newBreed;
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw TypeError("Error, name must be string");
    }
    this._name = newName;
  }
  get numberOfCaughtMice() {
    return this._numberOfCaughtMice;
  }

  set numberOfCaughtMice(newNumberOfCaughtMice) {
    if (typeof newNumberOfCaughtMice !== "number") {
      throw TypeError("Error, numberOfCaughtMice must be number");
    }
    this._numberOfCaughtMice = newNumberOfCaughtMice;
  }
  getMove() {
    return "Мяу";
  }
  getEat() {
    return "Ест";
  }
  getSleep() {
    return "Спит";
  }
  caughingMice() {
    this.numberOfCaughtMice++;
    return "Ест";
  }
}
const cat = new Cat("Сфинкс", "Бобик");
class StrayCat extends Cat {
  constructor(name, numberOfCaughtMice, numberOfEatenMice = 0) {
    super("Stray", name, numberOfCaughtMice, (numberOfEatenMice = 0));
    this.numberOfEatenMice = numberOfEatenMice;
  }
}

const cat1 = new StrayCat("Валера");
