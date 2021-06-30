"use strict";
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return "Dog";
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function () {
        return "Woof 🐶";
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return "Cat";
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function () {
        return "Meow 🐱";
    };
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return "Parrot";
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function () {
        return "I'm a pirate 🦜";
    };
    return Parrot;
}());
var GuineaPig = /** @class */ (function () {
    function GuineaPig() {
    }
    Object.defineProperty(GuineaPig.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuineaPig.prototype, "type", {
        get: function () {
            return "Guinea Pig";
        },
        enumerable: false,
        configurable: true
    });
    GuineaPig.prototype.makeSound = function () {
        return "Squeak! Squeak! 🐹";
    };
    return GuineaPig;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo();
zoo.addAnimal(new Cat());
zoo.addAnimal(new Dog());
zoo.addAnimal(new Parrot());
zoo.addAnimal(new GuineaPig());
zoo.animals.forEach(function (animal) {
    document.querySelector("#target").innerHTML +=
        animal.type + ": " + animal.makeSound() + "<br>";
});
