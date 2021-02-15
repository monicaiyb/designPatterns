// Encapsulation 
// function User(fname, age) {
//     this.firstName = fname;
//     var age = age; // this variable is not assigned to the scope
//     this.GetAge = function(){ return age }; // custom method to get _age
// }
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
// var u = new User('Alex', 25);
// u.firstName; // 'Alex'
// u._age; // undefined
// u.GetAge(); // 25 It was originally published on https://www.apriorit.com/
// console.log(u);
// Encapsulation.
var User = /** @class */ (function () {
    function User(fname, age) {
        this.firstName = fname;
        this.age = age;
    }
    User.prototype.GetAge = function () {
        return this.age;
    };
    return User;
}());
var u = new User('Monica', 25);
console.log(u.firstName);
console.log(u.age);
console.log(u.GetAge());
// Control Access to password property
var UserLogin = /** @class */ (function () {
    function UserLogin() {
        //  variables
        this.username = "monica";
        this.password = "123456789";
        this.fullName = "monica iyabo";
    }
    // operations or methods
    // Method login is used to
    UserLogin.prototype.login = function (uname, passwd) {
        if (uname === this.username, passwd === this.password) {
            console.log("you are logged in");
        }
        else {
            console.log("invalid credentials");
        }
    };
    return UserLogin;
}());
var user = new UserLogin();
user.login("monica", "123456789");
user.login("jane", "123456789");
var Person = /** @class */ (function () {
    function Person() {
        this.age = "Twnty";
        this.address = "gayaza";
    }
    return Person;
}());
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "monica";
        return _this;
    }
    Woman.prototype.details = function () {
        return this.name + " is: " + this.age + " and lives in " + this.address;
    };
    return Woman;
}(Person));
var person1 = new Person();
var woman1 = new Woman();
console.log(woman1.details());
