// Method overriding
class Parent {  
    name: string;  
    constructor(name: string) {  
        this.name = name;  
    }  
    processName() {  
        console.log('processName method in parent class',this.name)  
    }  
}  
class Child extends Parent {  
    constructor(name: string) {  
        super(name);  
    }  
      processName() {  
        console.log('processName method in Child class',name)  
    }  
}  
let myObject = new Child("Kiran");  
myObject.processName()  
let myObject1= new Parent("john");  
myObject1.processName()  

// Subtype Polymorphism
class Human {
    fullName:string
    constructor(fullName) {
      this.fullName = fullName
    }
  
    sayHi() {
      console.log(`Hi! My name is ${this.fullName}`)
    }
  }
  class Developer extends Human {
    sayHi() {
      console.log(`Hi! My name is ${this.fullName}. I am a developer.`)
    }
  }
  
  class Designer extends Human {
    sayHi() {
      console.log(`Hi! My name is ${this.fullName}. I am a designer.`)
    }
  }

  const zell = new Human('Zell')
const vincy = new Developer('Vincy')
const tim = new Designer('Tim')

zell.sayHi() // Hi! My name is Zell.
vincy.sayHi() // Hi! My name is Vincy. I am a developer.
tim.sayHi() // Hi! My name is Tim. I am a designer
