// Encapsulation 
// function User(fname, age) {
//     this.firstName = fname;
//     var age = age; // this variable is not assigned to the scope
//     this.GetAge = function(){ return age }; // custom method to get _age
// }
 
// var u = new User('Alex', 25);
// u.firstName; // 'Alex'
// u._age; // undefined
// u.GetAge(); // 25 It was originally published on https://www.apriorit.com/
// console.log(u);

// Encapsulation.


class User{
    firstName: string
    age: number
    constructor(fname: string, age: number) {
        this.firstName = fname;
        this.age = age;
     }
 
     GetAge(): number {
         return this.age;
     }
}
var u = new User('Monica', 25);
console.log(u.firstName); 
console.log(u.age); 
console.log(u.GetAge()); 

// Control Access to password property
class UserLogin{
    //  variables
    username="monica"
    private password="123456789"
    fullName="monica iyabo"
    // operations or methods
    // Method login is used to
    login(uname,passwd){
        if(uname===this.username,passwd===this.password){
            console.log("you are logged in");
        }
        else{
            console.log("invalid credentials");
        } 
    }
}
let user=new UserLogin()
user.login("monica","123456789");
user.login("jane","123456789");


// Accessing Protected variables by a method that in herits parent class
class Person{
    protected age:string="Twenty";
    protected address:string="gayaza";
  }
  class Woman extends Person{
    name: string="monica";
    details():string{
    return `${this.name} is: ${this.age} and lives in ${this.address}`;
    }
}
let person1= new Person();
let woman1=new Woman();
console.log(woman1.details());