class Dog {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "Dog";
  }

  makeSound() {
    return "Woof 🐶";
  }
}

class Cat {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "Cat";
  }

  makeSound() {
    return "Meow 🐱";
  }
}

class Parrot {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "Parrot";
  }

  makeSound() {
    return "I'm a pirate 🦜";
  }
}

class GuineaPig {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "Guinea Pig";
  }

  makeSound() {
    return "Squeak! Squeak! 🐹";
  }
}

class Zoo {
  private _animals: Array<Object> = new Array<Object>();

  public addAnimal(animal: object) {
    this._animals.push(animal);
  }

  get animals(): Array<Object> {
    return this._animals;
  }
}

let zoo = new Zoo();
zoo.addAnimal(new Cat());
zoo.addAnimal(new Dog());
zoo.addAnimal(new Parrot());
zoo.addAnimal(new GuineaPig());

zoo.animals.forEach((animal) => {
  document.querySelector("#target").innerHTML +=
    animal.type + ": " + animal.makeSound() + "<br>";
});
