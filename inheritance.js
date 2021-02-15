var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Multilevel inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Eating");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Barking");
    };
    return Dog;
}(Animal));
var BabyDog = /** @class */ (function (_super) {
    __extends(BabyDog, _super);
    function BabyDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BabyDog.prototype.weep = function () {
        console.log("Weeping");
    };
    return BabyDog;
}(Dog));
var obj = new BabyDog();
obj.eat();
obj.bark();
obj.weep();
// Use of super() in inheritance
var Person = /** @class */ (function () {
    // methods
    function Person(nameArg, genderArg) {
        this.name = nameArg;
        this.gender = genderArg;
    }
    Person.prototype.talk = function () {
        console.log("Iam a person called " + this.name);
    };
    return Person;
}());
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    // methods
    function Mother(nameArg, genderArg, children) {
        var _this = _super.call(this, nameArg, genderArg) || this;
        // variables
        _this.children = 4;
        _this.children = children;
        return _this;
    }
    Mother.prototype.talk = function () {
        console.log("Iam a mother called " + this.name + " and i have " + this.children);
    };
    return Mother;
}(Person));
var John = new Person("monica", "female");
var mother1 = new Mother("Monica", "female", 5);
mother1.talk();
